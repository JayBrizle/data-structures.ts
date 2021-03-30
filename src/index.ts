import { Graph } from "./graph/graph";
import { Vertex } from "./graph/vertex";

interface CurrentVertType {
  name: string;
}

const v1: Vertex<CurrentVertType> = { data: { name: "V1" }, edges: [] };
const v2: Vertex<CurrentVertType> = { data: { name: "V2" }, edges: [] };
const v3: Vertex<CurrentVertType> = { data: { name: "V3" }, edges: [] };
const v4: Vertex<CurrentVertType> = { data: { name: "V4" }, edges: [] };
const v5: Vertex<CurrentVertType> = { data: { name: "V5" }, edges: [] };
const vertices: Vertex<CurrentVertType>[] = [v1, v2, v3, v4, v5];

const graph = new Graph<{ name: string }>();

vertices.forEach((v) => {
  graph.addVertex(v);
});

//graph.printGraph();

graph.addEdge(v1, v2);
graph.addEdge(v1, v3);
graph.addEdge(v2, v3);
graph.addEdge(v2, v4);
graph.addEdge(v2, v5);
graph.addEdge(v5, v1);
//graph.printGraph();

graph.breadthTraversal(v2);
graph.depthTraversal(v2);
