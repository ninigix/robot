import { Command } from "./command";
import { Robot } from "../models/robot";

export class LeftCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    this.robot.turnLeft();
  }
}
