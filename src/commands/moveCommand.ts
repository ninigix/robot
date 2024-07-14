import { Command } from "./command";
import { IActor } from "../interfaces/IActor";

export class MoveCommand implements Command {
  constructor(private robot: IActor) {}

  execute(): void {
    try {
      this.robot.move();
    } catch (error) {
      console.error("Move command failed:", (error as Error).message);
    }
  }
}
