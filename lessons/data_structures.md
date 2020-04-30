# Data Structures

After covering the basics, we introduce the concept of 'data structures'. It is a way of how we abstract and store data. A core computer science concept, it is a key building block to becoming a strong programmer.

As we are learning javascript, we will initially focus on javascript data structures. This may be seen as a poor choice by some, as javascript mixes up various defined data structures together - for example, Arrays can be used as a Queue, Stack, List, and even Trees. Let's not worry about any of that for now - it's important we learn how to use javascript Arrays first.

### Table of contents

- [Arrays](#Arrays)
  *[Declaring and Setting Values](#declaring-and-setting-values)
  *[Javascript Array Properties](#javascript-array-properties)


### Arrays

Arrays are single most common data structure in any language - a way to express data as a list. In javascript, Arrays are declared and used with a special syntax made just for Arrays. Arrays are accessed using integer **index**. This list below has integer index on each of its data items, starting at 0.

![array](https://i.imgur.com/K4hRofN.png)

"Location" is known as the `index` of the array. Yes, `0` is always the first item in computer science. Please get used to it :) This is known as zero-based numbering.

#### Declaring and Setting Values

Let's see how an Array is declared in javascript.

```
const catDogArray = ['dog', 'cat'];

console.log(catDogArray); // outputs `['dog', 'cat']`

console.log(catDogArray[0]); // outputs 'dog'
console.log(catDogArray[1]); // outputs 'cat'
console.log(catDogArray[2]); // Error: Index out of bounds
```

You access items within the array using its `index`. Common bug in programming is accidentally accessing an index that does not exist - something like `catDogArray[10000] // doesn't exist`. If an index out of bounds of the array is accessed, js actually just returns `undefined`. In most other languages, this would crash your code. Be mindful of your index and zero-based numbering!

We can set a value to an element of an Array as we access it.

```
const catDogArray = ['dog', 'cat'];
console.log(catDogArray[0]) // 'dog'

catDogArray[0] = 'elephant'

console.log(catDogArray[0]) // 'elephant'
```

In javascript (this is actually almost exclusively to javascript), you can actually assign value to an index that does not exist yet, like so

```
const someNewArray = []; // empty array of length 0
someNewArray[4] = 'someValue'; // someNewArray now looks like [undefined, undefined, undefined, undefined, 'someValue']
```

This is bad practice, and almost never recommended. However, it is useful to remember that this does not crash your code. So how would you increase the size of the Array? We use its attached property functions.

#### Javascript Array Properties

In javascript, you can think of an Array as a special object that is already defined. For example, it has some properties attached to it, such as its length
```
const catDogArray = ['dog', 'cat'];
let catDogArrayLength = catDogArray.length; // 2

let lastItemInArray = catDogArray[catDogArray.length - 1]; // 'cat'
```

Notice how length is 2 - it is NOT a zero-based counting. This is because an empty array, when there are no elements, would have a length of 0.

Arrays have many attached properties that allows you to mutate and traverse the elements. Here are some examples the most common ones below.

```
const animalArray = ['dog', 'cat'];

// append to end of the list
animalArray.push('alligator');
// animalArray is now ['dog', 'cat', 'alligator']
animalArray.push('armadillo');
// animalArray is now ['dog', 'cat', 'alligator', 'armadillo']
animalArray.push('bird', 'monkey', 'koala');
// animalArray is now ['dog', 'cat', 'alligator', 'bird', 'monkey', 'koala']

// remove from the end
let lastItem = animalArray.pop();
// now ['dog', 'cat', 'alligator', 'bird', 'monkey']
console.log(lastItem); // outputs 'koala' - pop() returns the item that was popped.

// remove from start
let firstItem = animalArray.shift();
// now ['cat', 'alligator', 'bird', 'monkey']
console.log(firstItem); // outputs 'dog'

// append to the start of the list
animalArray.unshift(firstItem);
// now ['dog', 'cat', 'alligator', 'bird', 'monkey']
animalArray.unshift('rat');
// now ['rat', 'dog', 'cat', 'alligator', 'bird', 'monkey']

// remove at a specific index
animalArray.splice(2, 1); // first argument is the index, second is how many items to remove
// now ['rat', 'dog', 'alligator', 'bird', 'monkey']
animalArray.splice(0, 1);
// now ['dog', 'alligator', 'bird', 'monkey']
animalArray.splice(1, 0);
// above code does nothing as we remove 0 items from index 1
```

Whenever you forget what properties are there, visit [MDN's documentation on Arrays for a well organized, complete list.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)