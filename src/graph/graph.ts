import { Stack } from "../stack/stack";
import { Queue } from "../queue/queue";
import { Vertex } from "./vertex";

/**
 * undirected, unweighted
 */
export class Graph<T> {
  private adjacencyList: Map<Vertex<T>, Vertex<T>[]>;

  constructor() {
    this.adjacencyList = new Map<Vertex<T>, Vertex<T>[]>();
  }

  addVertex(v: Vertex<T>) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v: Vertex<T>, v2: Vertex<T>) {
    this.adjacencyList.get(v).push(v2);
    // Add the unidirectional reference
    this.adjacencyList.get(v2).push(v);
  }

  getVertexEdges(v: Vertex<T>) {
    return this.adjacencyList.get(v);
  }

  removeVertex(v: Vertex<T>) {
    // const vertsEdges = this.adjacencyList.get(v);
    // vertsEdges.forEach((vert) => {
    //   vert.edges = vert.edges.filter((ve) => ve !== v);
    // });
  }

  /**
   * Uses a queue to find shortest paths.
   * @param startingNode
   */
  breadthTraversal(startingNode: Vertex<T>) {
    console.log("Breadth First Traversal");
    const visited: Vertex<T>[] = [];
    const queue = new Queue<Vertex<T>>();
    visited.push(startingNode);
    queue.enqueue(startingNode);
    while (!queue.isEmpty()) {
      const queuedVertex = queue.dequeue();
      console.log(queuedVertex);
      const vertsEdges = this.adjacencyList.get(queuedVertex);
      vertsEdges.forEach((vert) => {
        if (!visited.find((v) => v === vert)) {
          visited.push(vert);
          queue.enqueue(vert);
        }
      });
    }
  }

  depthTraversal(startingNode: Vertex<T>) {
    console.log("Depth First Traversal");
    this.depthTraversalUtil(startingNode, new Stack<Vertex<T>>());
  }

  private depthTraversalUtil(vertex: Vertex<T>, visited: Stack<Vertex<T>>) {
    visited.push(vertex);
    console.log(vertex);
    const vertsEdges = this.adjacencyList.get(vertex);
    vertsEdges.forEach((vert) => {
      if (!visited.has(vert)) {
        this.depthTraversalUtil(vert, visited);
      }
    });
  }

  printGraph() {
    const keys = this.adjacencyList.keys();
    for (const i of keys) {
      const values = this.adjacencyList.get(i);
      for (const j of values) {
        // console.log(j);
      }

      console.log(i);
      console.log("Edges:");
      console.log(values);
    }
  }
}
