# Data Structures

Ways of organizing information with optimal runtime complexity. For adding or removing records. Note: JavaScript natively implements several data structures. **You will be asked about inferior data structures.** For example, a queue is a very specific implementation using a very powerful tool (Arrays). You could still be asked to make one from scratch.

## Data structure implementations

### Queue

* FIFO
* Elements are enqueued and dequed
* Implemented by only giving access to the unshift and pop methods outside of the class
* Use unshift and pop to get a left->right flow
* Peek shows next item without removing it

### Stack

* Ordered list of records, FILastOut
* Elements are pushed and popped
* Elements always come out the right side.

### Linked Lists

* Chain of nodes that collects data and a reference to the next node.
* Head Node: first
* Tail Node: last - No reference to other nodes)
* Nodes have two properties: data and next
* Data can be anything, next is a reference to the next List item.
* prefer parameter defaults rather than `|| null`;
* Instead of getFirst maybe write a getAt generic solution.

#### Generators

```JavaScript
function *numbers() {
    const result = 1+1;
    return 20 + (yield result);
}

const gen = numbers(); // Returns a generator that can step thru w/ next
```

#### Linked List Problems

1. Midpoint

   * Iterate through with two pointers slow and fast.
   * Fast goes twice as fast as slow.
   * After each loop, check for fast.next && fast.next.next
   * If one or both don't exist, slow will be at the midpoint

2. Linked List Loops

   * Same slow/fast procedure.
   * Check for fast.next && fast.next.next.
   * If fast = slow its circular.
   * If fast hits a null, it's not.
   * Can't compare data, nodes can obviously have the same data.

3. From Last
   * Both start at beggining again.
   * Move leading ahead by n,
   * While leading.next !== null, move everything fwd one
   * trailing will be the desired

### Trees

* Parent node has a value and an array of children
* data can be anything, children is always an array [] can be empty
* Nodes at same level are not siblings unless they share a parent.
* Tree traversal = iterating through the entire tree
* Breadth-first = by level
* Depth-first = explore all children's trees
  1. BF
     * Create a queue with just the root.
     * Push the root's children to the queue
     * Shift the root off the queue and process it.
     * Repeat while the queue still has things to be processed
  2. DF
     * Repeat BF
     * Only difference is that the node's children are unshifted

#### Tree Problems

* level-width
  * Whenever you see width you should think breadth first
  * Create an array with the root and a marker.
  * while there length > 1 (not just marker), shift off the first record
  * if the element is the marker, push it back to the end and start a new counter
  * if node.children, add them to the array
  * if

### Events
* For something like an event library, consider using an object rather than an array
* It's easier to look something up with obj[key] than using .find(obj.key => key)
* If order doesn't matter, object is going to be easier to work with


### Sorting Algorithims (least -> greatest)
* ASSUME N(LOGN)
* Bubble sort
  - Worst `n^2`
  - easiest to implement
* Selection sort
  - Worst `n^2`
  - easier to implement
* MergeSort
  - Worst `n*log(n)`
  - Doesn't grow in complexity quite as rapidly
  - medium to implement

1. Bubble sort
  * write a for loop that iterates all.
  * write an innerloop that starts at 0 and iterates to length - i
  * inner loop is restricted as time progresses
  * Because the inner loop needs to reference [j+1], it should only go up to the length - i - 1.

1. Selection sort *prove me wrong*
  * Iterate through all elements.
  * Assume element at i is the least
  * For j from i + 1 to end of array
    * see if there is an element with lower val=>
    * if there is, record its index
  * If the index of the current element !== index of the lowest element swap them.
