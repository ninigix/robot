import {Robot} from "./models/robot";
import {TableTop} from "./models/tabletop";
import {Position} from "./models/position";
import {NorthDirection, SouthDirection} from "./models/direction";

const tabletop = new TableTop(5, 5);
const robot = new Robot(tabletop);

robot.place(new Position(1,1), new NorthDirection())
robot.move()
robot.report()
