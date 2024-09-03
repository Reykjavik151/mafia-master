import { DefaultScreenContainer, GameTable, Header } from '#components';
import { GamePhases } from '#components/GamePhases';
import { INITIAL_NIGHT_PHASE } from '#constants/game';
import { useGameScreenController } from './hooks/useGameScreenController';

export const GameScreen = () => {
  const { players } = useGameScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game: Preparation" />

      <GamePhases phases={INITIAL_NIGHT_PHASE} currentPhaseStep={INITIAL_NIGHT_PHASE[1]} nextDayPhase="day" />

      <GameTable players={players} isRolesVisible />
    </DefaultScreenContainer>
  );
};
