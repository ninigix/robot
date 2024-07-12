import { IDirection } from "../interfaces/IDirection";
import {
  EastDirection,
  NorthDirection,
  SouthDirection,
  WestDirection,
} from "../models/direction";
import { InvalidDirectionError } from "./error";

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
