export interface Cell<T> {
  row: number;
  col: number;
  value: T;
  backgroundColour: CellColour;
  showRightArrow: boolean;
  showDownArrow: boolean;
}

export interface CellColour {
  color: string;
  background?: string;
}

export interface PathFinderResult {
  cost: number;
  minWeightPath: string;
  row: number;
  col: number;
}

export class DragPosition {
  left: number;
  top: number;
  constructor(left: number, top: number) {
    this.left = left;
    this.top = top;
  }
}

export class TreeNode {
  data: number;
  position: DragPosition;
  constructor(num: number, dp: DragPosition) {
    this.data = num;
    this.position = dp;
  }
}

export class BinaryNode {
  value: number;
  left?: BinaryNode;
  right?: BinaryNode;
  constructor(num: number) {
    this.value = num;
  }
}
