import {v4} from 'uuid'
import Player from '../../entities/Player';
import GameRoom, { IGameRoom } from '../../entities/GameRoom';

export default async ({username, roomRepository}: {username: string, roomRepository: IGameRoom}): Promise<string> => {
  const player = new Player({username})

  const code = v4();

  const gameRoom = new GameRoom({code, player1: player});

  await roomRepository.create(gameRoom)

  return code;
};