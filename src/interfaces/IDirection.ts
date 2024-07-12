import { IPosition } from "./IPosition";

export enum TurnDirection {
  LEFT,
  RIGHT,
}

export interface IDirection {
  getNextDirection(turnDirection: TurnDirection): IDirection;
  getNextPosition(position: IPosition): IPosition;
  name(): string;
}
