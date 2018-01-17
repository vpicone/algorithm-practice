// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  const { left, right, data } = node;

  if (max !== null && data > max) {
    return false;
  }

  if (min !== null && data < min) {
    return false;
  }

  // min and max need to be passed down. Max needs to be updated with each node.
  if (left && !validate(left, min, data)) {
    return false;
  }

  // min needs to be updated with each node
  if (right && !validate(right, data, max)) {
    return false;
  }

  return true;
}


module.exports = validate;
