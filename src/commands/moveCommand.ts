import { Command } from "./command";
import { Robot } from "../models/robot";

export class MoveCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    this.robot.move();
  }
}
