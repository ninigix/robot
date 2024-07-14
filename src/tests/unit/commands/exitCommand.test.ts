import { ExitCommand } from "../../../models/commands/exitCommand";

describe("ExitCommand", () => {
  it("should exit the application", () => {
    const exitCommand = new ExitCommand();

    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {
      throw new Error("process.exit called");
    });

    expect(() => exitCommand.execute()).toThrow("process.exit called");
    mockExit.mockRestore();
  });
});
