import { Robot } from "../../../models/robot";
import { IActor } from "../../../interfaces/IActor";
import { TableTop } from "../../../models/tabletop";
import { Position } from "../../../models/position";
import { getDirection } from "../../../utils/directionFactory";
import { ReportCommand } from "../../../models/commands/reportCommand";

describe("ReportCommand", () => {
  let robot: IActor;
  let tabletop: TableTop;

  beforeEach(() => {
    tabletop = new TableTop(5, 5);
    robot = new Robot(tabletop);
  });

  it("should report the current position", () => {
    const position = new Position(0, 0);
    const direction = getDirection("north");
    robot.place(position, direction);

    const logSpy = jest.spyOn(global.console, "log");
    const reportCommand = new ReportCommand(robot);
    reportCommand.execute();

    expect(logSpy).toHaveBeenCalledWith("Output: 0,0,NORTH");
  });
});
