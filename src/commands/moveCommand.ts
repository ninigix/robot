import { Command } from "./command";
import { Robot } from "../models/robot";

export class MoveCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    try {
      this.robot.move();
    } catch (error) {
      console.error("Move command failed:", (error as Error).message);
    }
  }
}
