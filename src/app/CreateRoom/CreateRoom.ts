import {v4} from 'uuid'
import Player from '../../entities/Player';
import GameRoom from '../../entities/GameRoom';

export default async ({username}: {username: string}): Promise<string> => {
  const player = new Player({username})

  const code = v4();

  const room = new GameRoom({code, player1: player});

  return code;
};