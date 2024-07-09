import {IPosition} from "../interfaces/IPosition";
import {IActor} from "../interfaces/IActor";
import {IDirection} from "../interfaces/IDirection";
import {TurnDirection} from "./direction";
import {TableTop} from "./tabletop";

export class Robot implements IActor {
    private direction: IDirection | undefined;
    private currentPosition: IPosition | undefined;
    private tableTop: TableTop | undefined

    constructor(tableTop: TableTop) {
        this.tableTop = tableTop;
    }

    place(position: IPosition | undefined, direction: IDirection | undefined): void {
        this.direction = direction;
        this.currentPosition = position;
    }

    move(): void {
        if (this.currentPosition) {
            const newPosition = this.direction?.getNextPosition(this.currentPosition);
            if (newPosition && this.tableTop?.isValid(newPosition)) {
                this.currentPosition = newPosition;
            }
        }
    }

    turnLeft(): void {
        this.direction = this.direction?.getNextDirection(TurnDirection.LEFT);
    }

    turnRight(): void {
        this.direction = this.direction?.getNextDirection(TurnDirection.RIGHT);
    }

    report(): void {
        console.log(`Robot at position row: ${this.currentPosition?.row}, column: ${this.currentPosition?.column}, direction: ${this.direction?.name()}`)
    }
}