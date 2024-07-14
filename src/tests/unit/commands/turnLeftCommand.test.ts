import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { TableTop } from "../../../models/tabletop";
import { Position } from "../../../models/position";
import { getDirection } from "../../../utils/directionFactory";
import { TurnLeftCommand } from "../../../models/commands/turnLeftCommand";

describe("TurnLeftCommand", () => {
  let robot: IActor;
  let tabletop: TableTop;

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);
  });

  it("should turn the robot left when placed", () => {
    const position = new Position(0, 0);
    const direction = getDirection("north");
    robot.place(position, direction);

    const turnLeftCommand = new TurnLeftCommand(robot);
    turnLeftCommand.execute();

    expect(robot.report()).toBe("Output: 0,0,WEST");
  });
});
