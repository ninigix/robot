import { Command } from "./command";
import { Robot } from "../models/robot";

export class ReportCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    this.robot.report();
  }
}
