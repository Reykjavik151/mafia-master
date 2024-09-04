import { DefaultScreenContainer, GameTable, Header } from '#components';
import { GamePhases } from '#components/GamePhases';
import { GameTitleInfo } from '#components/GameTitleInfo';
import { useGameScreenController } from './hooks/useGameScreenController';

export const GameScreen = () => {
  const { players, roles, currentPhaseInfo, phases } = useGameScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game: Preparation" />

      <GamePhases phases={phases} currentPhaseStep={currentPhaseInfo.phase} nextDayPhase="day" />

      <GameTitleInfo currentPhaseStep={currentPhaseInfo.phase} />

      <GameTable players={players} roles={roles} isRolesVisible />
    </DefaultScreenContainer>
  );
};
