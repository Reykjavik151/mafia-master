import { selectCurrentGame } from '#redux/currentGame/currentGameSelectors';
import { useAppSelector } from '#redux/hooks';

export const useGameScreenController = () => {
  const { players } = useAppSelector(selectCurrentGame);

  return { players: players! };
};
