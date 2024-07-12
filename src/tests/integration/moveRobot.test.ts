import { IActor } from "../../interfaces/IActor";
import { TableTop } from "../../models/tabletop";
import { Robot } from "../../models/robot";
import { getDirection } from "../../utils/directionFactory";
import { Position } from "../../models/position";

describe("MoveRobot", () => {
  let robot: IActor;
  let tabletop: TableTop;
  const width = 5;
  const height = 5;

  beforeEach(() => {
    tabletop = new TableTop(width, height);
    robot = new Robot(tabletop);
  });

  it("should move the robot within the boundaries", () => {
    const direction = getDirection("north");
    robot.place(new Position(1, 1), direction);

    robot.move();
    expect(robot.report()).toBe("Output: 1, 2, North");

    robot.turnLeft();
    robot.move();
    expect(robot.report()).toBe("Output: 0, 2, West");
  });

  it("should place robot multiple times", () => {
    robot.place(new Position(1, 1), getDirection("north"));

    robot.move();
    expect(robot.report()).toBe("Output: 1, 2, North");

    robot.place(new Position(1, 5), getDirection("west"));
    expect(robot.report()).toBe("Output: 5, 1, West");

    robot.turnLeft();
    robot.move();
    expect(robot.report()).toBe("Output: 5, 0, South");
  });

  it("should ignore commands until placed on a tabletop", () => {
    robot.move();
    expect(robot.report()).toBe("Robot not placed");

    robot.turnRight();
    robot.move();
    expect(robot.report()).toBe("Robot not placed");

    robot.place(new Position(1, 1), getDirection("north"));
    robot.move();
    expect(robot.report()).toBe("Output: 1, 2, North");
  });

  it("should not move the robot outside the boundaries", () => {
    robot.place(new Position(0, 0), getDirection("west"));

    robot.move();
    expect(robot.report()).toBe("Output: 0, 0, West");

    robot.turnLeft();
    robot.move();
    expect(robot.report()).toBe("Output: 0, 0, South");

    robot.place(new Position(width, height), getDirection("east"));
    robot.move();
    expect(robot.report()).toBe("Output: 5, 5, East");

    robot.turnLeft();
    robot.move();
    expect(robot.report()).toBe("Output: 5, 5, North");
  });
});
