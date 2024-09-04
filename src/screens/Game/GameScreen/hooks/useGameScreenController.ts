import { selectCurrentGame } from '#redux/currentGame/currentGameSelectors';
import { useAppSelector } from '#redux/hooks';

export const useGameScreenController = () => {
  const { players, currentPhaseInfo, phases, roles, fouls } = useAppSelector(selectCurrentGame);

  return {
    players: players!,
    currentPhaseInfo: currentPhaseInfo!,
    phases: phases!,
    roles: roles!,
    fouls: fouls!,
  };
};
