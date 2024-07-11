export class InvalidPositionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidPositionError";
  }
}

export class InvalidPlacementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidPlacementError";
  }
}

export class InvalidTabletopSizeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidTabletopSizeError";
  }
}

export class RobotNotPlacedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RobotNotPlacedError";
  }
}

export class TabletopNotSetError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TabletopNotSetError";
  }
}
