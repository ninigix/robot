import { IDirection, TurnDirection } from "../../../../interfaces/IDirection";
import { NorthDirection } from "../../../../models/directions/northDirection";
import { WestDirection } from "../../../../models/directions/westDirection";
import { EastDirection } from "../../../../models/directions/eastDirection";
import { Position } from "../../../../models/position";

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
