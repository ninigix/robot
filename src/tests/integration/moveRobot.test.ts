import { TableTop } from "../../models/tabletop";
import { IActor } from "../../interfaces/IActor";
import { Robot } from "../../models/robot";
import { parseInput } from "../../utils/parseInput";
import { PlaceCommand } from "../../commands/placeComand";
import { MoveCommand } from "../../commands/moveCommand";
import { TurnLeftCommand } from "../../commands/turnLeftCommand";
import { TurnRightCommand } from "../../commands/turnRightCommand";
import { ReportCommand } from "../../commands/reportCommand";
import { ExitCommand } from "../../commands/exitCommand";
import { Command } from "../../commands/command";

describe("Integration Tests for Robot Application", () => {
  let tabletop: TableTop;
  let robot: IActor;
  let commands: { [key: string]: Command };

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);

    commands = {
      PLACE: new PlaceCommand(robot),
      MOVE: new MoveCommand(robot),
      LEFT: new TurnLeftCommand(robot),
      RIGHT: new TurnRightCommand(robot),
      REPORT: new ReportCommand(robot),
      EXIT: new ExitCommand(),
    };
  });

  const runCommands = (inputs: string[]) => {
    for (const input of inputs) {
      const { command, args } = parseInput(input);
      if (commands[command]) {
        commands[command].execute(args);
      }
    }
  };

  it("should run commands correctly", () => {
    const commandsSequence = ["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE"];

    runCommands(commandsSequence);
    expect(robot.report()).toBe("Output: 3,3,NORTH");
  });

  it("should ignore invalid commands", () => {
    const commandsSequence = [
      "PLACE 1,2,EAST",
      "MOVE",
      "INVALIDCOMMAND",
      "LEFT",
      "MOVE",
    ];

    runCommands(commandsSequence);

    expect(robot.report()).toBe("Output: 2,3,NORTH");
  });

  it("should not place the robot out of boundaries", () => {
    const logSpy = jest.spyOn(global.console, "error");
    const commandsSequence = ["PLACE 6,6,NORTH", "REPORT"];
    runCommands(commandsSequence);

    expect(logSpy).toHaveBeenCalledWith(
      "Place command failed:",
      "Invalid position",
    );
  });
});
