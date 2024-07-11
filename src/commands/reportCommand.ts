import { Command } from "./command";
import { Robot } from "../models/robot";

export class ReportCommand implements Command {
  constructor(private robot: Robot) {}

  execute(): void {
    try {
      this.robot.report();
    } catch (error) {
      console.error("Report command failed:", (error as Error).message);
    }
  }
}
