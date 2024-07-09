import { Command } from "./command";
import { Robot } from "../models/robot";
import { Position } from "../models/position";
import { getDirection } from "../utils/directionFactory";

export class PlaceCommand implements Command {
  constructor(private robot: Robot) {}

  execute(args: string[]): void {
    const { x, y, facing } = this.parseArgs(args);
    const direction = getDirection(facing);

    if (x && y && direction) {
      this.robot.place(new Position(x, y), direction);
    } else {
      console.log("Invalid PLACE command");
    }
  }

  private parseArgs(args: string[]): { x: number; y: number; facing: string } {
    return { x: parseInt(args[0]), y: parseInt(args[1]), facing: args[2] };
  }
}
