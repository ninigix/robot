import { TableTop } from "../../../models/tabletop";
import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { Position } from "../../../models/position";
import { getDirection } from "../../../utils/directionFactory";

describe("Robot", () => {
  let robot: IActor;
  let tabletop: TableTop;
  const tableWidth = 5;
  const tableHeight = 5;

  beforeEach(() => {
    tabletop = new TableTop(tableWidth, tableHeight);
    robot = new Robot(tabletop);
  });

  describe("turn", () => {
    beforeEach(() => {
      const direction = getDirection("north");
      robot.place(new Position(0, 0), direction!);
    });

    it("should correctly turn left", () => {
      robot.turnLeft();
      expect(robot.report()).toBe("Output: 0, 0, West");
    });

    it("should correctly turn right", () => {
      robot.turnRight();
      expect(robot.report()).toBe("Output: 0, 0, East");
    });
  });

  describe("place", () => {
    it("should correctly place robot", () => {
      const direction = getDirection("north");
      robot.place(new Position(0, 0), direction!);

      expect(robot.report()).toBe("Output: 0, 0, North");
    });
  });

  describe("move", () => {
    it("should correctly move robot", () => {
      const direction = getDirection("east");
      robot.place(new Position(2, 1), direction!);

      robot.move();
      robot.move();
      robot.turnLeft();
      robot.move();

      expect(robot.report()).toBe("Output: 3, 3, North");
    });
  });
});
