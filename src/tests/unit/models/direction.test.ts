import { Position } from "../../../models/position";
import {
  EastDirection,
  NorthDirection,
  SouthDirection,
  TurnDirection,
  WestDirection,
} from "../../../models/direction";
import { IDirection } from "../../../interfaces/IDirection";

describe("Direction", () => {
  describe("NorthDirection", () => {
    let direction: IDirection;

    beforeEach(() => {
      direction = new NorthDirection();
    });

    it("should return west after turning left", () => {
      expect(direction.getNextDirection(TurnDirection.LEFT)).toStrictEqual(
        new WestDirection(),
      );
    });

    it("should return east after turning right", () => {
      expect(direction.getNextDirection(TurnDirection.RIGHT)).toStrictEqual(
        new EastDirection(),
      );
    });

    it("should return correct new position", () => {
      expect(direction.getNextPosition(new Position(2, 2))).toStrictEqual(
        new Position(3, 2),
      );
    });
  });

  describe("SouthDirection", () => {
    let direction: IDirection;

    beforeEach(() => {
      direction = new SouthDirection();
    });

    it("should return west after turning left", () => {
      expect(direction.getNextDirection(TurnDirection.LEFT)).toStrictEqual(
        new EastDirection(),
      );
    });

    it("should return east after turning right", () => {
      expect(direction.getNextDirection(TurnDirection.RIGHT)).toStrictEqual(
        new WestDirection(),
      );
    });

    it("should return correct new position", () => {
      expect(direction.getNextPosition(new Position(2, 2))).toStrictEqual(
        new Position(1, 2),
      );
    });
  });

  describe("EastDirection", () => {
    let direction: IDirection;

    beforeEach(() => {
      direction = new EastDirection();
    });

    it("should return west after turning left", () => {
      expect(direction.getNextDirection(TurnDirection.LEFT)).toStrictEqual(
        new NorthDirection(),
      );
    });

    it("should return east after turning right", () => {
      expect(direction.getNextDirection(TurnDirection.RIGHT)).toStrictEqual(
        new SouthDirection(),
      );
    });

    it("should return correct new position", () => {
      expect(direction.getNextPosition(new Position(2, 2))).toStrictEqual(
        new Position(2, 3),
      );
    });
  });

  describe("WestDirection", () => {
    let direction: IDirection;

    beforeEach(() => {
      direction = new WestDirection();
    });

    it("should return west after turning left", () => {
      expect(direction.getNextDirection(TurnDirection.LEFT)).toStrictEqual(
        new SouthDirection(),
      );
    });

    it("should return east after turning right", () => {
      expect(direction.getNextDirection(TurnDirection.RIGHT)).toStrictEqual(
        new NorthDirection(),
      );
    });

    it("should return correct new position", () => {
      expect(direction.getNextPosition(new Position(2, 2))).toStrictEqual(
        new Position(2, 1),
      );
    });
  });
});
