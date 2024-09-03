import { COLORS } from '#constants/colors';
import { GameDayPhase, GamePhaseStep } from '#models/GamePhase';
import clsx from 'clsx';
import {
  CaretRight,
  ClockCountdown,
  Coffee,
  CowboyHat,
  Icon,
  Knife,
  MoonStars,
  Ranking,
  ShieldStar,
  Stack,
  SunDim,
  UserCircleMinus,
  UserSound,
  UsersThree,
} from 'phosphor-react-native';
import React, { useCallback, useEffect } from 'react';
import { LayoutAnimation, View } from 'react-native';
import { usePrevious } from 'react-native-hookbox';

type GamePhasesProps = {
  phases: readonly GamePhaseStep[];
  currentPhaseStep: GamePhaseStep;
  nextDayPhase: GameDayPhase;
};

export const GamePhases = ({ phases, currentPhaseStep, nextDayPhase }: GamePhasesProps) => {
  const prevCurrentPhaseStep = usePrevious(currentPhaseStep);

  useEffect(() => {
    if (!!prevCurrentPhaseStep && prevCurrentPhaseStep !== currentPhaseStep) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    }
  }, [currentPhaseStep, prevCurrentPhaseStep]);

  const getPhaseStepIcon = useCallback((phaseStep: GamePhaseStep) => {
    switch (phaseStep) {
      case 'role-selection':
        return Stack;
      case 'mafia-discuss':
        return UsersThree;
      case 'sheriff-time':
      case 'night:sheriff':
        return ShieldStar;
      case 'free-sit-time':
        return Coffee;
      case 'day:speech':
        return UserSound;
      case 'day:voting':
        return UserCircleMinus;
      case 'day:last-minute':
        return ClockCountdown;
      case 'night:mafia-shoot':
        return Knife;
      case 'night:don':
        return CowboyHat;
      case 'best-move':
        return Ranking;
      default:
        return null;
    }
  }, []);

  const getDayPhaseIcon = useCallback((dayPhase: GameDayPhase) => {
    switch (dayPhase) {
      case 'day':
        return SunDim;
      case 'night':
        return MoonStars;
      default:
        return null;
    }
  }, []);

  const renderBetweenPhaseView = useCallback(
    (isSelected: boolean, key: string) => (
      <View
        key={`line-${key}`}
        className={clsx('h-[2px] flex-1', isSelected && 'bg-purple100', !isSelected && 'bg-grey600')}
      />
    ),
    [],
  );

  const renderPhaseStepView = useCallback(
    (phase: GamePhaseStep | GameDayPhase, index: number) => {
      const IconComponent: Icon = (getPhaseStepIcon(phase as GamePhaseStep) ??
        getDayPhaseIcon(phase as GameDayPhase)) as Icon;

      const foundIndex = phases.findIndex((p) => p === currentPhaseStep);

      const iconColor = foundIndex === index ? COLORS.grey100 : COLORS.grey500;

      return (
        <>
          <View
            key={phase}
            className={clsx(
              'w-[52px] h-[36px] justify-center items-center rounded-full',
              phase === currentPhaseStep && 'bg-accent border-purple100 border-[1px]',
              foundIndex > index && 'bg-purple700 border-purple700 border-[1px]',
              foundIndex < index && 'bg-grey1000 border-grey600 border-[1px]',
            )}
          >
            <IconComponent size={20} color={iconColor} weight="fill" />
          </View>

          {index < phases.length - 1 && renderBetweenPhaseView(phase === currentPhaseStep, phase)}
        </>
      );
    },
    [currentPhaseStep, getDayPhaseIcon, getPhaseStepIcon, phases, renderBetweenPhaseView],
  );

  return (
    <View className="flex-row p-2 items-center">
      {phases.map((phase, index) => renderPhaseStepView(phase, index))}
      <View className="flex-row items-center">
        <View className="px-1">
          <CaretRight size={20} color={COLORS.grey500} />
        </View>
        {renderPhaseStepView(nextDayPhase, phases.length)}
      </View>
    </View>
  );
};
