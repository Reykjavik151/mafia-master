import { DefaultScreenContainer, GameTitleInfo, GameTable, GameToolbar, Header, GamePhases } from '#components';
import { ScrollView } from 'react-native';
import { useGameScreenController } from './hooks/useGameScreenController';

export const GameScreen = () => {
  const { players, roles, currentPhaseInfo, phases } = useGameScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game: Preparation" />
      <GamePhases phases={phases} currentPhaseStep={currentPhaseInfo.phase} nextDayPhase="day" />
      <GameTitleInfo currentPhaseStep={currentPhaseInfo.phase} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <GameTable players={players} roles={roles} isRolesVisible />
      </ScrollView>

      <GameToolbar currentPhaseStep={currentPhaseInfo.phase} />
    </DefaultScreenContainer>
  );
};
