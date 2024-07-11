import { Command } from "./command";
import { Robot } from "../models/robot";

export class RightCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    try {
      this.robot.turnRight();
    } catch (error) {
      console.error("Turn right command failed:", (error as Error).message);
    }
  }
}
