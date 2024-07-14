import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { TableTop } from "../../../models/tabletop";
import { Position } from "../../../models/position";
import { getDirection } from "../../../utils/directionFactory";
import { MoveCommand } from "../../../commands/moveCommand";

describe("MoveCommand", () => {
  let robot: IActor;
  let tabletop: TableTop;

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);
  });

  it("should move robot when move within boundaries", () => {
    const position = new Position(3, 3);
    const direction = getDirection("south");
    robot.place(position, direction);

    const moveCommand = new MoveCommand(robot);
    moveCommand.execute();

    expect(robot.report()).toBe("Output: 3,2,SOUTH");
  });

  it("should not move robot when move outside boundaries", () => {
    const position = new Position(0, 0);
    const direction = getDirection("south");
    robot.place(position, direction);

    const moveCommand = new MoveCommand(robot);
    moveCommand.execute();

    expect(robot.report()).toBe("Output: 0,0,SOUTH");
  });
});
