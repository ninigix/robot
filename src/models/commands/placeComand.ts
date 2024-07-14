import { Command } from "../../interfaces/command";
import { Position } from "../position";
import { getDirection } from "../../utils/directionFactory";
import { IActor } from "../../interfaces/IActor";
import { IDirection } from "../../interfaces/IDirection";

export class PlaceCommand implements Command {
  constructor(private robot: IActor) {}

  execute(args: string[]): void {
    try {
      const { row, column, facing } = this.parseArgs(args);
      const direction = getDirection(facing);

      if (this.isValidPlacement(row, column, direction)) {
        this.robot.place(new Position(row, column), direction);
      } else {
        console.error(`Invalid PLACE command ${row}, ${column}, ${direction}`);
      }
    } catch (error) {
      console.error("Place command failed:", (error as Error).message);
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

  private isValidPlacement(
    row: number,
    column: number,
    direction: IDirection,
  ): boolean {
    return row !== undefined && column !== undefined && !!direction;
  }
}
