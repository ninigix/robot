import { Command } from "../../interfaces/command";
import { IActor } from "../../interfaces/IActor";

export class TurnLeftCommand implements Command {
  constructor(private robot: IActor) {}

  execute(): void {
    try {
      this.robot.turnLeft();
    } catch (error) {
      console.error("Turn left command failed:", (error as Error).message);
    }
  }
}
