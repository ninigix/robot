import { IDirection, TurnDirection } from "../../../../interfaces/IDirection";
import { WestDirection } from "../../../../models/directions/westDirection";
import { SouthDirection } from "../../../../models/directions/southDirection";
import { NorthDirection } from "../../../../models/directions/northDirection";
import { Position } from "../../../../models/position";

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
