import CreateRoom from "./CreateRoom"
import GameRoomInMemory from '../repositories/GameRoomInMemory';
describe("CreateRoom", () => {
  it("build a new rom", async() => {
    const playload = {
      username: "master123",
      roomRepository: GameRoomInMemory.getOrBuild()
    };

    const roomCode = await CreateRoom(playload);

    expect(typeof roomCode).toBe("string");
    expect(roomCode).toHaveLength(36)
  });
});
