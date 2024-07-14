import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { TableTop } from "../../../models/tabletop";
import { Position } from "../../../models/position";
import { getDirection } from "../../../utils/directionFactory";
import { TurnRightCommand } from "../../../commands/turnRightCommand";

describe("TurnRightCommand", () => {
  let robot: IActor;
  let tabletop: TableTop;

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);
  });

  it("should turn the robot right when placed", () => {
    const position = new Position(3, 3);
    const direction = getDirection("south");
    robot.place(position, direction);

    const turnRightCommand = new TurnRightCommand(robot);
    turnRightCommand.execute();

    expect(robot.report()).toBe("Output: 3,3,WEST");
  });
});
