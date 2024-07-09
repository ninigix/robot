export interface IPosition {
    row: number;
    column: number
    isValid(maxRow: number, maxColumn: number): boolean;
}