import { DefaultScreenContainer, GameTable, Header } from '#components';
import { useGameScreenController } from './hooks/useGameScreenController';

export const GameScreen = () => {
  const { players } = useGameScreenController();

  return (
    <DefaultScreenContainer>
      <Header title="Game: Preparation" />

      <GameTable players={players} isRolesVisible />
    </DefaultScreenContainer>
  );
};
