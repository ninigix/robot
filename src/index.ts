import inquirer from "inquirer";
import { Robot } from "./models/robot";
import { TableTop } from "./models/tabletop";
import { PlaceCommand } from "./commands/placeComand";
import { MoveCommand } from "./commands/moveCommand";
import { TurnLeftCommand } from "./commands/turnLeftCommand";
import { TurnRightCommand } from "./commands/turnRightCommand";
import { ReportCommand } from "./commands/reportCommand";
import { ExitCommand } from "./commands/exitCommand";
import { Command } from "./commands/command";

const tabletop = new TableTop(5, 5);
const robot = new Robot(tabletop);

const commands: { [key: string]: Command } = {
  PLACE: new PlaceCommand(robot),
  MOVE: new MoveCommand(robot),
  LEFT: new TurnLeftCommand(robot),
  RIGHT: new TurnRightCommand(robot),
  REPORT: new ReportCommand(robot),
  EXIT: new ExitCommand(),
};

function parseInput(input: string): { command: string; args: string[] } {
  const parts = input.trim().toUpperCase().split(/\s+/);
  const command = parts[0];
  const args = parts[1]?.split(`,`);

  return { command, args };
}

async function promptUser(): Promise<void> {
  const answer = await inquirer.prompt<{ command: string }>({
    name: "command",
    type: "input",
    message: "",
  });

  const { command, args } = parseInput(answer.command);

  if (commands[command]) {
    commands[command].execute(args);
  } else {
    console.log(`Command "${command}" not recognized.`);
  }

  promptUser();
}

promptUser();
