import {IPosition} from "../interfaces/IPosition";

export class TableTop {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    isValid(position: IPosition): boolean {
        return position.isValid(this.width, this.height);
    }
}