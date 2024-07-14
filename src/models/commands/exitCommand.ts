import { Command } from "../../interfaces/command";

export class ExitCommand implements Command {
  execute(): void {
    console.log("Exiting robot");
    process.exit();
  }
}
