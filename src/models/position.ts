import { IPosition } from "../interfaces/IPosition";

export class Position implements IPosition {
  private _row: number;
  private _column: number;

  constructor(row: number, column: number) {
    this._row = row;
    this._column = column;
  }

  isValid(maxRow: number, maxColumn: number): boolean {
    return (
      this._row <= maxRow &&
      this._row >= 0 &&
      this._column <= maxColumn &&
      this._column >= 0
    );
  }

  get row(): number {
    return this._row;
  }

  get column(): number {
    return this._column;
  }

  equals(other: IPosition): boolean {
    return this._row === other.row && this._column === other.column;
  }
}
