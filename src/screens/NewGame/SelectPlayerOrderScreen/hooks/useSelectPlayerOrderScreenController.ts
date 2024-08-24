import { PLAYERS_DUMMY } from '#models/dummy/players.dummy';
import { Player } from '#models/Player';
import { TenPlayersRecord } from '#models/TenPlayersRecord';
import { selectNewGameOptions } from '#redux/currentGame/currentGameSelectors';
import { addNewGameOptions, startGame } from '#redux/currentGame/currentGameSlice';
import { useAppDispatch, useAppSelector } from '#redux/hooks';
import { convertPlayersArrToTenRecord } from '#utils/players';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

export const useSelectPlayerOrderScreenController = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const newGameOptions = useAppSelector(selectNewGameOptions);
  const [players, setPlayers] = useState(
    newGameOptions?.players ? Object.values(newGameOptions.players) : PLAYERS_DUMMY.slice(0, 10),
  );

  const onStartGamePress = useCallback(() => {
    const playersTenRecord: TenPlayersRecord<Player> = convertPlayersArrToTenRecord(players);
    dispatch(addNewGameOptions({ players: playersTenRecord }));
    dispatch(startGame());
    router.replace('/current-game/game');
  }, [dispatch, players, router]);

  return { players, setPlayers, onStartGamePress };
};
