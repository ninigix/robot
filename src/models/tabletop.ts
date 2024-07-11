import { IPosition } from "../interfaces/IPosition";
import { InvalidTabletopSizeError } from "../utils/error";

export class TableTop {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new InvalidTabletopSizeError("Tabletop size must be positive");
    } else {
      this.width = width;
      this.height = height;
    }
  }

  isValid(position: IPosition): boolean {
    return position.isValid(this.width, this.height);
  }
}
