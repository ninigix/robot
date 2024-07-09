import { Command } from "./command";
import { Robot } from "../models/robot";

export class RightCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    this.robot.turnRight();
  }
}
