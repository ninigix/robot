import { TableTop } from "../../../models/tabletop";
import { Position } from "../../../models/position";

describe("TableTop", () => {
  let tabletop: TableTop;
  const width = 5;
  const height = 5;

  beforeEach(() => {
    tabletop = new TableTop(width, height);
  });

  it("should correctly return width and height", () => {
    expect(tabletop.width).toBe(width);
    expect(tabletop.height).toBe(height);
  });

  describe("isValid", () => {
    it("should return true for valid positions", () => {
      expect(tabletop.isValid(new Position(0, 0))).toBe(true);
      expect(tabletop.isValid(new Position(height - 2, width - 2))).toBe(true);
      expect(tabletop.isValid(new Position(height, 0))).toBe(true);
      expect(tabletop.isValid(new Position(0, width))).toBe(true);
    });

    it("should return false for invalid positions", () => {
      expect(tabletop.isValid(new Position(-1, 0))).toBe(false);
      expect(tabletop.isValid(new Position(0, -1))).toBe(false);
      expect(tabletop.isValid(new Position(0, width + 1))).toBe(false);
      expect(tabletop.isValid(new Position(height + 1, 0))).toBe(false);
    });
  });
});
