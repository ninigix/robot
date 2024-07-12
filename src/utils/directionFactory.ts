import { IDirection } from "../interfaces/IDirection";

import { InvalidDirectionError } from "./error";
import { NorthDirection } from "../models/northDirection";
import { SouthDirection } from "../models/southDirection";
import { EastDirection } from "../models/eastDirection";
import { WestDirection } from "../models/westDirection";

export function getDirection(facing: string): IDirection {
  const direction = facing.trim().toUpperCase();

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
