export interface Vertex<T> {
  data: T;
  edges: Vertex<T>[];
}
