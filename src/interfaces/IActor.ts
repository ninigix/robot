import { IPosition } from "./IPosition";
import { IDirection } from "./IDirection";

export interface IActor {
  place(
    position?: IPosition | undefined,
    direction?: IDirection | undefined,
  ): void;
  move(): void;
  report(): string;
  turnLeft(): void;
  turnRight(): void;
}
