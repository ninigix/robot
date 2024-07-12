import { Command } from "./command";
import { IActor } from "../interfaces/IActor";

export class TurnRightCommand implements Command {
  constructor(private robot: IActor) {}

  execute(): void {
    try {
      this.robot.turnRight();
    } catch (error) {
      console.error("Turn right command failed:", (error as Error).message);
    }
  }
}
