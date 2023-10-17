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



 delete( value, tmp = this.root){
  if (tmp === null){
    return tmp
  }

  if(value < tmp.value){
  tmp.left = this.delete(value, tmp.left)
 }else if(value > tmp.value){
  tmp.right = this.delete(value, tmp.right)
 }else{

  if(tmp.left === null)return tmp.right
  else if (tmp.right === null )return tmp.left

tmp.value = this.minValue(tmp.right);

tmp.right =this.delete(tmp.value, tmp.right)

}
return tmp

}

minValue(node){
  let minValue = node.value;
  while(node.left != null){
  minValue = node.left.value
  node = node.left
}
return minValue
 }




 find(value, tmp = this.root){
if (tmp.value == null){return false}

if (tmp.value === value){return tmp.value};

if (tmp.value > value) {
  return this.find(value, tmp.left);
} else {
  return this.find(value, tmp.right);
}
 }







}
let tree = new Tree([10, 20, 30, 40, 50, 60, 70, 80, 90]);

console.log(tree);
console.log(tree.find(30))