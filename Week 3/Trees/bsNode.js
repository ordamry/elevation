class BSNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertNode(val) {
    if (this.value === null) {
      this.value = val;
      return;
    }

    if (val < this.value) {
      if (this.left === null) this.left = new BSNode(val);
      else this.left.insertNode(val);
    } else if (val > this.value) {
      if (this.right === null) this.right = new BSNode(val);
      else this.right.insertNode(val);
    }
  }


//exercise 1:
  findNode(val) {
    if (this.value === val) return true;
    if (val < this.value && this.left !== null) return this.left.findNode(val);
    if (val > this.value && this.right !== null) return this.right.findNode(val);
    return false;
  }

//exercuse 2:
  findCommonParent(val1, val2) {
    if (val1 < this.value && val2 < this.value) {
      return this.left.findCommonParent(val1, val2);
    } else if (val1 > this.value && val2 > this.value) {
      return this.right.findCommonParent(val1, val2);
    } else {
      return this.value;
    }
  }

  //exercise 3:
    removeNode(node, val) {
    if (!node) return null;

    if (val < node.value) {
      node.left = this.removeNode(node.left, val);
    } else if (val > node.value) {
      node.right = this.removeNode(node.right, val);
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let maxLeft = node.left;
      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }
      node.value = maxLeft.value;
      node.left = this.removeNode(node.left, maxLeft.value);
    }

    return node;
  }


}

const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree1 = new BSNode();
letters.forEach(l => bsTree1.insertNode(l));

console.log(bsTree1.findNode("H")); // true
console.log(bsTree1.findNode("G")); // true
console.log(bsTree1.findNode("Z")); // false
console.log(bsTree1.findNode("F")); // false
console.log(bsTree1.findNode("y")); // false

const letters2 = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
const bsTree2 = new BSNode();
letters2.forEach(l => bsTree2.insertNode(l));

console.log(bsTree2.findCommonParent("B", "I")); // H
console.log(bsTree2.findCommonParent("B", "G")); // E
console.log(bsTree2.findCommonParent("B", "L")); // J
console.log(bsTree2.findCommonParent("L", "Y")); // R
console.log(bsTree2.findCommonParent("E", "H")); // J

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild = nodeWithOneChild.removeNode(nodeWithOneChild, 9);
console.log(JSON.stringify(nodeWithOneChild, null, 2)); // 9 should be removed

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
nodeWithTwoChildren = nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8);
console.log(JSON.stringify(nodeWithTwoChildren, null, 2)); // 8 should be replaced with 5
