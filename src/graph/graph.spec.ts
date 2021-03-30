import { Graph } from "./graph";

describe("Graph", () => {
  let graph: Graph<any>;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should exist", () => {
    expect(graph).toBeDefined();
  });
});
