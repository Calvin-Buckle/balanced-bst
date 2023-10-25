



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
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null;
    let mid = Math.floor(array.length / 2);
    let node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
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

  delete(value, tmp = this.root) {
    if (tmp === null) {
      return tmp;
    }
    if (value < tmp.value) {
      tmp.left = this.delete(value, tmp.left);
    } else if (value > tmp.value) {
      tmp.right = this.delete(value, tmp.right);
    } else {
      if (tmp.left === null) return tmp.right;
      else if (tmp.right === null) return tmp.left;
      tmp.value = this.minValue(tmp.right);
      tmp.right = this.delete(tmp.value, tmp.right);
    }
    return tmp;
  }

  minValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  find(value, tmp = this.root) {
    if (tmp === null) {
      return false;
    }
    if (tmp.value === value) {
      return tmp.value;
    }
    if (tmp.value > value) {
      return this.find(value, tmp.left);
    } else {
      return this.find(value, tmp.right);
    }
  }

  levelOrder(tmp = this.root) {
    if (tmp === null) return [];
    let queue = [];
    let result = [];
    queue.push(tmp);

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.value);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return result;
  }

  inOrder() {
    let result = [];

    function traverse(node) {
      if (node !== null) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  preOrder() {
    let result = [];

    function traverse(node) {
      if (node !== null) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(this.root);

    return result;
  }

  postOrder() {
    let result = [];

    function traverse(node) {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }
    traverse(this.root);

    return result;
  }

  height() {
    function calcHeight(node) {
      if (node == null) {
        return 0;
      } else {
        const rightHeight = calcHeight(node.right);
        const leftHeight = calcHeight(node.left);
        return 1 + Math.max(leftHeight, rightHeight);
      }
    }
    return calcHeight(this.root);
  }

  depth(value, tmp = this.root, counter = 0) {
    if (tmp === null) {
      return "value does not exist";
    }
    if (tmp.value === value) {
      return counter;
    } else if (tmp.value < value) {
      return this.depth(value, tmp.right, counter + 1);
    } else if (tmp.value > value) {
      return this.depth(value, tmp.left, counter + 1);
    }
  }

  isBalanced(node = this.root) {
    if (node === null) return true;
    const leftHeight = this.height(node.left);
    if(leftHeight === -1)return false;
    const rightHeight = this.height(node.right);
    if(rightHeight === -1)return false;
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
  

  reBalance() {
    if (this.root === null) return;
    const sorted = [...new Set(this.inOrder().sort((a, b) => a - b))];
    this.root = this.buildTree(sorted);
  }
  
  prettyPrint() {
    prettyPrint(this.root, '', true);
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};




window.Tree = Tree;


