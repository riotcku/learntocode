# Data Structures

After covering the basics, we introduce the concept of 'data structures'. It is a way of how we abstract and store data. A core computer science concept, it is a key building block to becoming a strong programmer.

### Table of contents

- [Arrays](#Arrays)


### Arrays

Arrays are single most common data structure in any language - a way to express data as a list. This list has integer index on each of its data items, starting at 0.

![array](https://i.imgur.com/K4hRofN.png)

Location above is the `index` of the array. Yes, `0` is always the first item in computer science. Please get used to it :)

Let's see how an Array is declared in javascript.

```
const catDogArray = ['dog', 'cat'];

console.log(catDogArray); // outputs `['dog', 'cat']`

console.log(catDogArray[0]); // outputs 'dog'
console.log(catDogArray[1]); // outputs 'cat'
console.log(catDogArray[2]); // Error: Index out of bounds
```
You access items within the array using numbers - its `index`. If an index out of bounds of the array is accessed, js will throw an error.

In javascript, you can think of an Array as a special object that is already defined. For example, it has some properties attached to it, such as its length
```
console.log(catDogArray.length); // outputs `2`
```


