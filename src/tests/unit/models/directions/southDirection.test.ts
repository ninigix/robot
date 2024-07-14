import { IDirection, TurnDirection } from "../../../../interfaces/IDirection";
import { SouthDirection } from "../../../../models/directions/southDirection";
import { EastDirection } from "../../../../models/directions/eastDirection";
import { WestDirection } from "../../../../models/directions/westDirection";
import { Position } from "../../../../models/position";

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
