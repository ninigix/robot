import { Command } from "./command";
import { Robot } from "../models/robot";
import { Position } from "../models/position";
import { getDirection } from "../utils/directionFactory";

export class PlaceCommand implements Command {
  constructor(private robot: Robot) {}

  execute(args: string[]): void {
    const { row, column, facing } = this.parseArgs(args);
    const direction = getDirection(facing);

    if (row !== undefined && column !== undefined && !!direction) {
      this.robot.place(new Position(row, column), direction);
    } else {
      console.log(`Invalid PLACE command ${row}, ${column}, ${direction}`);
    }
  }

  private parseArgs(args: string[]): {
    row: number;
    column: number;
    facing: string;
  } {
    return {
      row: parseInt(args[0]),
      column: parseInt(args[1]),
      facing: args[2],
    };
  }
}
