import { Command } from "./command";
import { Robot } from "../models/robot";

export class LeftCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    try {
      this.robot.turnLeft();
    } catch (error) {
      console.error("Turn left command failed:", (error as Error).message);
    }
  }
}
