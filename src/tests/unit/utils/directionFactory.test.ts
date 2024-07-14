import { getDirection } from "../../../utils/directionFactory";

import { InvalidDirectionError } from "../../../utils/error";
import { NorthDirection } from "../../../models/directions/northDirection";
import { SouthDirection } from "../../../models/directions/southDirection";
import { EastDirection } from "../../../models/directions/eastDirection";
import { WestDirection } from "../../../models/directions/westDirection";

describe("DirectionFactory", () => {
  it("should create a NorthDirection instance", () => {
    const direction = getDirection("north");
    expect(direction).toBeInstanceOf(NorthDirection);
  });

  it("should create a SouthDirection instance", () => {
    const direction = getDirection("south");
    expect(direction).toBeInstanceOf(SouthDirection);
  });

  it("should create an EastDirection instance", () => {
    const direction = getDirection("east");
    expect(direction).toBeInstanceOf(EastDirection);
  });

  it("should create a WestDirection instance", () => {
    const direction = getDirection("west");
    expect(direction).toBeInstanceOf(WestDirection);
  });

  it("should throw InvalidDirectionError for invalid direction", () => {
    expect(() => {
      getDirection("invalid");
    }).toThrowError(InvalidDirectionError);
  });
});
