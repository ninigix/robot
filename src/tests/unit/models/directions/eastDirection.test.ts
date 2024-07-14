import { IDirection, TurnDirection } from "../../../../interfaces/IDirection";
import { EastDirection } from "../../../../models/directions/eastDirection";
import { NorthDirection } from "../../../../models/directions/northDirection";
import { SouthDirection } from "../../../../models/directions/southDirection";
import { Position } from "../../../../models/position";

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
