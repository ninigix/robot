import { IPosition } from "../interfaces/IPosition";

export class Position implements IPosition {
  row: number;
  column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  isValid(maxRow: number, maxColumn: number): boolean {
    return (
      this.row <= maxRow &&
      this.row >= 0 &&
      this.column <= maxColumn &&
      this.column >= 0
    );
  }
}
