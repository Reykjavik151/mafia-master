import { GamePhaseStep } from '#models/GamePhase';
import clsx from 'clsx';
import { useCallback } from 'react';
import { Text } from 'react-native';

type GameTitleInfoProps = {
  currentPhaseStep: GamePhaseStep;
};

export const GameTitleInfo = ({ currentPhaseStep }: GameTitleInfoProps) => {
  const renderText = useCallback((title: string, padding: string = 'pb-4') => {
    return <Text className={clsx('text-center text-grey100 text-3xl font-inter-bold', padding)}>{title}</Text>;
  }, []);

  if (currentPhaseStep === 'role-selection') {
    return renderText('Players choose their roles', 'pt-2 pb-6');
  }

  if (currentPhaseStep === 'mafia-discuss') {
    return renderText('Mafia discusses their strategy');
  }

  if (currentPhaseStep === 'sheriff-time') {
    return renderText('Sheriff takes time to look at the city');
  }

  if (currentPhaseStep === 'free-sit-time') {
    return renderText('Time to relax and preparet for the Game');
  }

  return null;
};
