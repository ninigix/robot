import { Command } from "./command";
import { IActor } from "../interfaces/IActor";

export class ReportCommand implements Command {
  constructor(private robot: IActor) {}

  execute(): void {
    try {
      console.log(this.robot.report());
    } catch (error) {
      console.error("Report command failed:", (error as Error).message);
    }
  }
}
