class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    array.sort((a, b) => a - b); // Ensure the array is sorted.
    this.root = this.buildtree(array);
  }

  buildtree(array) {
    if (array.length === 0) return null;
    let mid = Math.floor(array.length / 2);
    let node = new Node(array[mid]);
    node.left = this.buildtree(array.slice(0, mid));
    node.right = this.buildtree(array.slice(mid + 1));
    return node;
  }

  insert(value, tmp = this.root) {
    if (tmp === null) {
      return new Node(value);
    }
    if (tmp.value === value) {
      return tmp;
    }
    if (tmp.value > value) {
      tmp.left = this.insert(value, tmp.left);
    } else {
      tmp.right = this.insert(value, tmp.right);
    }
    return tmp;
  }
}

let tree = new Tree([10, 20, 30, 40, 50, 60, 70, 80, 90]);
console.log(tree);
console.log(tree.insert(35));