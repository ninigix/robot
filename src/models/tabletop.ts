import { IPosition } from "../interfaces/IPosition";
import { InvalidTabletopSizeError } from "../utils/error";

export class TableTop {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new InvalidTabletopSizeError("Tabletop size must be positive");
    } else {
      this._width = width;
      this._height = height;
    }
  }

  isValid(position: IPosition): boolean {
    return position.isValid(this._width, this._height);
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
}
