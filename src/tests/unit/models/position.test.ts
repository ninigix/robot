import { Position } from "../../../models/position";

describe("Position", () => {
  it("should correctly get row and column", () => {
    const position = new Position(3, 1);
    expect(position.row).toBe(3);
    expect(position.column).toBe(1);
  });

  describe("isValid", () => {
    it("should return true for valid positions", () => {
      expect(new Position(1, 1).isValid(3, 3)).toBe(true);
      expect(new Position(3, 3).isValid(3, 3)).toBe(true);
      expect(new Position(0, 0).isValid(3, 3)).toBe(true);
    });

    it("should return false for invalid positions", () => {
      expect(new Position(4, 0).isValid(3, 3)).toBe(false);
      expect(new Position(0, 5).isValid(3, 3)).toBe(false);
      expect(new Position(-1, 0).isValid(3, 3)).toBe(false);
      expect(new Position(0, -2).isValid(3, 3)).toBe(false);
    });
  });
});
