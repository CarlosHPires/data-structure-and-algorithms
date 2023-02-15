/* Stacks! */
// * LIFO(Last In First Out)
// * The last element on the stack is the first one off the stack

// functions: push, pop, peek, lenght
// push() - adds one or more elements to the end of an array and returns the new length of the array.
// pop() - removes the last element from an array and returns that element. This method changes the length of the array.
// peek() - returns the value at the beginning of a collection.
// lenght() - returns the number of elements in that array.

var letters = []; // this is our stack

var word = "arara"; // this is a palindrome

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// console.log(letters);

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

console.log(rword);

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome");
}

// Creates a stack
// var Stack = function () {
//   this.count = 0;
//   this.storage = {};

//   // Adds a value onto the end of the stack
//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   // Removes and returns the value at the end of the stack
//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function () {
//     return this.count;
//   };

//   // Returns the value at the end of the stack
//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// };

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("CarlosPires");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
