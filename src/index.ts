import inquirer from "inquirer";
import { Robot } from "./models/robot";
import { TableTop } from "./models/tabletop";
import { PlaceCommand } from "./models/commands/placeComand";
import { MoveCommand } from "./models/commands/moveCommand";
import { TurnLeftCommand } from "./models/commands/turnLeftCommand";
import { TurnRightCommand } from "./models/commands/turnRightCommand";
import { ReportCommand } from "./models/commands/reportCommand";
import { ExitCommand } from "./models/commands/exitCommand";
import { Command } from "./interfaces/command";
import { parseInput } from "./utils/parseInput";

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
