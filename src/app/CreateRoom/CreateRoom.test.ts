import CreateRoom from "./CreateRoom"

describe("CreateRoom", () => {
  it("build a new rom", async() => {
    const playload = {
      username: "master123",
    };

    const roomCode = await CreateRoom(playload);

    expect(typeof roomCode).toBe("string");
    expect(roomCode).toHaveLength(36)
  });
});
