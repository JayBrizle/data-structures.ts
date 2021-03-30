import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree<any>;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("should exist", () => {
    expect(bst).toBeDefined();
  });
});
