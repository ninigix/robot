import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { TableTop } from "../../../models/tabletop";
import { PlaceCommand } from "../../../models/commands/placeComand";

describe("PlaceCommand", () => {
  let robot: IActor;
  let tabletop: TableTop;

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);
  });

  it("should place robot", () => {
    const placeCommand = new PlaceCommand(robot);
    placeCommand.execute(["1", "1", "West"]);

    expect(robot.report()).toBe("Output: 1,1,WEST");
  });

  it("should not place robot", () => {
    const logSpy = jest.spyOn(global.console, "error");
    const placeCommand = new PlaceCommand(robot);
    placeCommand.execute(["-2", "1", "West"]);

    expect(logSpy).toHaveBeenCalledWith(
      "Place command failed:",
      "Invalid position",
    );
  });
});
