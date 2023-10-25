const newTreeWindow = window.Tree;


function generateRandomArray() {
  const array = [];
  const arraySize = Math.ceil(Math.random() * 100);

  for (let i = 0; i < arraySize; i++) {
    const randomNum = Math.ceil(Math.random() * 100);
    array.push(randomNum);
  }

  return array;
}

const randomArray = generateRandomArray();
const tree = new Tree(randomArray);

console.log("Is Balanced:", tree.isBalanced());

console.log("Level Order:", tree.levelOrder());
console.log("Pre Order:", tree.preOrder());
console.log("Post Order:", tree.postOrder());
console.log("In Order:", tree.inOrder());

for (let i = 0; i < 10; i++) {
  const randomNum = Math.floor(Math.random() * 101) + 100;
  tree.insert(randomNum);
}

// Confirm that the tree is unbalanced after adding elements > 100.
console.log("Is Balanced After Unbalance:", tree.isBalanced());

tree.reBalance();

// Confirm that the tree is balanced after rebalancing.
console.log("Is Balanced After Rebalance:", tree.isBalanced());

console.log("Level Order:", tree.levelOrder());
console.log("In Order:", tree.inOrder());
console.log("Pre Order:", tree.preOrder());
console.log("Post Order:", tree.postOrder());


