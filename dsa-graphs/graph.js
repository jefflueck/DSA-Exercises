class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach((vertex) => this.nodes.add(vertex));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    this.nodes.forEach((node) => node.adjacent.delete(vertex));
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start, adjacent) {
    // My Solution attempt
    // let visited = [start];
    // let seen = new Set(visited);

    // while (visited.length > 0) {
    //   let current = visited.pop();
    //   if (current === adjacent) return true;

    //   for (let neighbor of current.adjacent) {
    //     if (!seen.has(neighbor)) {
    //       visited.push(neighbor);
    //       seen.add(neighbor);
    //     }
    //   }
    // }
    // return false;
    const visited = new Set();
    const result = [];

    function traverse(vertex) {
      // base case
      if (!vertex) {
        return null;
      }
      // visit node
      visited.add(vertex);
      result.push(vertex.value);

      // visit neighbors
      vertex.adjacent.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          return traverse(neighbor);
        }
      });
    }

    traverse(start);

    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    // * attempt one
    //   const visited = new Set();
    //   const result = [];
    //   const queue = [start];
    //   while (queue.length > 0) {
    //     let current = queue.shift();
    //     visited.add(current);
    //     result.push(current.value);
    //     current.adjacent.forEach((neighbor) => {
    //       if (!visited.has(neighbor)) {
    //         queue.push(neighbor);
    //       }
    //     });
    //   }
    //   return result;
    // }
    // * attempt two
    // --------------------------------
    //   const queue = [start];
    //   const visited = new Set();
    //   const result = [];

    //   while (queue.length > 0) {
    //     let current = queue.shift();
    //     visited.add(current);
    //     result.push(current.value);

    //     current.adjacent.forEach((neighbor) => {
    //       if (!visited.has(neighbor)) {
    //         queue.push(neighbor);
    //       }
    //     });
    //   }
    //   return result;
    // }
    // * Solution Code
    // Create an empty queue
    const queue = [start];
    const result = [];
    const visited = new Set();
    let currentVertex;

    // visit node
    visited.add(start);

    // While there is still remaining vertices in queue
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex.value);

      // visit neighbors
      currentVertex.adjacent.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = { Graph, Node };
