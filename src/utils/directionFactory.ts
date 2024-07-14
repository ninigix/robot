import { IDirection } from "../interfaces/IDirection";

import { InvalidDirectionError } from "./error";
import { NorthDirection } from "../models/directions/northDirection";
import { SouthDirection } from "../models/directions/southDirection";
import { EastDirection } from "../models/directions/eastDirection";
import { WestDirection } from "../models/directions/westDirection";

export function getDirection(facing: string): IDirection {
  const direction = facing?.trim().toUpperCase();

  switch (direction) {
    case "NORTH":
      return new NorthDirection();
    case "SOUTH":
      return new SouthDirection();
    case "EAST":
      return new EastDirection();
    case "WEST":
      return new WestDirection();
    default:
      throw new InvalidDirectionError(`Invalid direction: ${direction}`);
  }
}
