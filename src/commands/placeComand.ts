import { Command } from "./command";
import { Position } from "../models/position";
import { getDirection } from "../utils/directionFactory";
import { IActor } from "../interfaces/IActor";

export class PlaceCommand implements Command {
  constructor(private robot: IActor) {}

  execute(args: string[]): void {
    const { row, column, facing } = this.parseArgs(args);
    const direction = getDirection(facing);

    if (row !== undefined && column !== undefined && !!direction) {
      this.robot.place(new Position(row, column), direction);
    } else {
      console.error(`Invalid PLACE command ${row}, ${column}, ${direction}`);
    }
  }

  private parseArgs(args: string[]): {
    row: number;
    column: number;
    facing: string;
  } {
    return {
      row: parseInt(args[1]),
      column: parseInt(args[0]),
      facing: args[2],
    };
  }
}
