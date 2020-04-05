# Javascript Basics

This section of lessons will cover the first building blocks of javascript knowledge. We will first start with 'why are we even learning javascript of all possible choices?' then go into the fundamentals of it. Basics will include `variables`, `types`, `scope`, `conditional blocks`, and `loops`.

### Table of contents

- [Javascript Basics](#javascript-basics)
  * [Table of contents](#table-of-contents)
  * [Why Javascript?](#why-javascript)

- [Lessons](#lessons)
  * [Lesson One: Variables and Types](#lesson-one-variables-and-types)
    + [Variable assignment with let](#variable-assignment-with-let)
    + [console.log() part 1](#consolelog-part-1)
    + [Primitive Types](#primitive-types)
      - [String](#string)
      - [Number](#number)
      - [Boolean](#boolean)
      - [undefined](#undefined)
      - [null](#null)


### Why Javascript?

This is a good question because javascript is admittedly not the ideal first language to learn. It is very loosely typed with lot of 'gotcha' knowledge that only come with experience of using the language.

That said, few reasons why I chose this

- It is currently the most popular language due to the fact is it what all browsers natively run. This is extremely powerful as every operating system (MacOSX, Windows, Linux, shit probably even TempleOS) runs browsers. This cross-compatibility has made javascript not only the language of choice for browsers, but industry-level servers as well (NodeJs), as well as slew of resources based on it.
- Based on above fact, it is very easy to run on computers, making the setup much easier for you and me.
- I, as a programmer, am strongest in javascript. Though I've developed professionally in Java (yes, Java does NOT equal javascript) and Ruby, my main professional language has been js for the past half decade plus.

## Lessons

Below are our lessons, covered live in twitch.

### Lesson One: Variables and Types

Variables, in coding terms, are information that is stored that we can reference later to use. Variable behaves differently depending on how you declare it. We will focus on javascript variables here.

Javascript variables are very freeform. They can hold anything, including nothing. I'll explain in detail, don't worry.

### Variable assignment with let

Recommend you open up codepen.io or your development environment such as VSCode and type stuff along. Here is how a javascript variable is declared.

`let newVariable = 10;`

lets deconstruct above statement. `let` is a way to tell javascript code that I am declaring a NEW variable. There's 3 types of variables, `let` `var` and `const`, but let's just worry about `let` for now. After telling javascript you are declaring a variable with `let`, you can name it whatever you want. In our example, I named it `newVariable` to make it obvious I'm naming it.

A JavaScript variable name must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0–9).

Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) as well as "a" through "z" (lowercase). `newvariable` would've been a fine name, but I capitalized the second letter to make it easier to read the second word. It must all be one word, having space in between does not work.

Then, we *assign* a value to `newVariable` using `=` followed by a value, which in this case is `10`. Then we use `;` to tell javascript this is one line of code.

All that combined results in a new variable named `newVariable` with the value `10` that we can reference later in code. Let's declare another variable.

```
let newVariable = 10;
let anotherOne = newVariable;
```

Yes, a variable can be another variable! So `anotherOne` currently holds the value of `10`. Let's go one step further.

```
let newVariable = 10;
let anotherOne = newVariable;
newVariable = 5;
```

You can re-assign new values to already declared variables. Notice that we don't have a `let` before re-assignment. This is because for per *scope* of code, variable names must be unique. We'll get to what Scope is later :)

Question: What do you think the value of `anotherOne` became after the re-assignment?

```
let newVariable = 10;
let anotherOne = newVariable;
newVariable = 5;

console.log(newVariable) // outputs 5
console.log(anotherOne) // ?
```

anotherOne actually holds the value of... `10`! When you assign a *primitive* type variable to something, it BECOMES that value instead of POINTING to the value. What are *primitive* variables? Again, I'll explain in detail later, I got you. But let's go over the crazy `console.log` statement I threw out quick.

### `console.log()` Part 1

This basically tells the javascript code to output the evaluated value within the parenthesis, `()`, to the console. Warning: I'm about to use some terms in the next few sentences that won't make sense until later, please bear with me, it'll be covered in upcoming lessons and I'll circle back.

`console` is a global *object* that is defined by default in javascript. You can type in `console.log(console)` in codepen and it'll spit out the object and its definitions. `log()` part in `console.log()` is a *Function* that is defined within `console` that logs whatever *argument* is within the parenthesis to the console. I know it's a lot, we'll circle back to this later when we get there! For now, it's important to learn that `console.log()` outputs your results, and you'll be using it often to debug your program.

Let's take the code we wrote so far and output each step using console.log.

```
let newVariable = 10;
console.log(newVariable); // outputs 10
let anotherOne = newVariable;
console.log(anotherOne); // outputs 10
newVariable = 5;

console.log(newVariable); // outputs 5
console.log(anotherOne); // outputs 10
```

Above code block will output `10, 10, 5, 10` in your console. This step-by-step approach of logging code values will help you write and understand a javascript code as it runs.

### Primitive Types

Primitive value means that when you assign a primitive type value to a variable, it BECOMES that value instead of POINTING to it. We saw an example of how that works earlier when we re-assigned a new value to a variable that has been assigned to another variable. Basically, to show via example again,

```
let x = 1; // 1 is a number, a primitive type
let y = x; // y now BECOMES 1. it does not POINT to x, it BECOMES 1
// so at this point, x === 1, and y === 1.

x = 2; // x is now equal to 2. This does not effect y at all.
// at this point, x === 2, and y === 1 because numbers are primitive types.
```

Let's learn a new command. Type this into your javascript console or a new js file you will run.

```
let x = 5;
console.log(typeof x); // outputs 'number'
```

you should see the output `"number"`. Notice the quotations around it - it means the output is a **string**. What is a string? I'll explain in detail in a bit. I wanna step back and explain 'types'.

**Type** is how a data is defined in a programming language. It allows different operations and interactions - for example, telling the program to add two numbers together (think 1 + 1) is different from adding two words together.

Let's go over each **Primitive types** below.

#### String

String, in layman's terms, it's what we think of when we hear the word 'sentence' - a series of alphanumerics. In any programming language, a string is a sequence of characters used to represent a text. Do you remember how I said some types are *primitive* earlier? String is a primitive.

To declare a string, you wrap alphanumeric characters within EITHER `'` or `"`. Yes, they are BOTH STRINGS. This is pretty unique to Javascript, as usually in other languages quotes and apostrophe define different types of variables. Not in Javascript.

You may ask, why would you need one over the other? To write a string with `"` within it, you'd write something like `'hello, "world"'`. The outer `'` denotes that we are describing a string value, and inside `"` is treated as a character in a string.

- Primitive: Yes
- Examples: `"hello world"`, `"x"`, `'hello world'`
- Typeof output: 'string'
- Typeof Example:
```
let stringVar = "hello, world";
console.log(typeof stringVar); // outputs 'string'

stringVar = 'hello, world';
console.log(typeof stringVar); // outputs 'string'
```

#### Number

Number is... a number! Number is defined by sequence of mathematically-numeric characters, such as 1, 10, 100.13013, or 10e100.

- Primitive: Yes
- Examples: `1`, `10`, `1.12`
- Typeof output: 'number'
- Typeof Example:
```
let numVar = 1;
console.log(typeof numVar); // outputs 'number'

numVar = 1.25;
console.log(typeof numVar); // outputs 'number'
```

#### Boolean

Boolean is a binary (means has 2), logical data type that only has 2 values - `true`, or `false`.

- Primitive: Yes
- Examples: `true`, `false`
- Typeof output: 'boolean'
- Typeof Example:
```
let trueVar = true;
console.log(typeof trueVar); // outputs 'boolean'

let falseVar = false;
console.log(typeof falseVar); // outputs 'boolean'
```

### Introduction to non-existant values

We've gone over all the primitive values that represent the presence of some data. The next primitives we'll go over represent the ABSENCE of data. The concept of representing nothing with something is kind of strange, but very important in programming.

#### undefined

Undefined is a primitive value that is assigned to any correctly (syntax-wise) declared variables that was not assigned a value. So, simply typing in `let x` declares a variable `x` that has the value of `undefined`. It helps to think of `undefined` as a badly named definition of a value. As in, it actually is defined - it is defined as something called 'undefined'.

- Primitive: Yes
- Examples: `let x; // x was not assigned any value, so it has the value 'undefined'`
- Typeof output: 'undefined'
- Typeof Example:
```
let someVar;
console.log(typeof someVar); // outputs 'undefined'

let someOtherVar = undefined;
console.log(typeof someOtherVar); // outputs 'undefined'
```

javascript `undefined` is kind of a mess because so many things default to undefined, and like you saw in the example above, you can actually assign a value of `undefined` to a variable. (Kinda oxymoronic... you're defining something as undefined.) Understanding the full picture of `undefined` really comes with experience, guidance and practice, which i hope to provide you guys with :)

#### null

`null` is a primitive value that is intentionally defined as a non-existent. So when you want to assign a value to a variable declaring it as completely nulled/non-existent, you can set it to the value `null`. An example of where you might want this is if you want to make sure you want to use some variable once, you may turn it to null after you use it and check to make sure it is not null before usage.

There is a pretty ridiculous gotcha about null in javascript, which is actually a deep seated, wont-be-fixed bug in the language. `typeof null` outputs... `object`. This is fucky because `object` is NOT a primitive value. (We'll go over objects later!) However, null absolutely is a primitive - any variable assigned null BECOMES null, not point to whatever variable it was. Why does it do this? Again, it's a BUG. Read the history of why this happened below.

https://2ality.com/2013/10/typeof-null.html

- Primitive: Yes
- Examples: `null`
- Typeof output: 'object'
- Typeof Example:
```
let nullVar = null;
console.log(typeof nullVar); // outputs 'object'
```

### Lesson Two: Conditionals

We make decisions all the time based on some truth. We may ask, 'should I go for a run?' and decide yes or no based on some factor: 'i will not go run, for it is raining'. This type of decision making based on a condition is expressed in javascript via Conditionals. The most commonly used of which is the `if/else` statement.

#### if else

if ... else looks like this.
```
if (condition) {
  // run code written here, between the { and }, if the 'condition' evaluates to true
} else {
  // run code written here if the 'condition' is falsey
}
```

Let's break this down.
1. The first statement `if` tells the javascript engine we are declaring a conditional block.
2. `condition` is placed inside a parenthesis. Inside this parenthesis will be evaluated by javascript to see if that condition is true or not. For example, maybe you might check if some number is greater than another.
3. Curly braces. Code inside the first curly braces will run if `condition` is evaluated as true.
4. `else` followed by curly braces. Code in the `else` block will run if `condition` is evaluated as false.

Let's try writing some actual condition in. In javascript, you can use less than or greater than (`<`, `>`) symbols like in mathematics.

```
let x = 1;

if (x > 0) {
  console.log('x is greater than zero.')
} else {
  console.log('x is smaller or equal to zero.')
}
```

Above code block will output `x is greater than zero`. Note that `else` doesn't need to be there for a conditional statement. Following is perfectly acceptable javascript

```
let x = 1;

if (x > 0) {
  console.log('x is greater than zero.');
}

console.log('hello world.'); // this code will always run, whether x was greater than 0 or not.
```

You can also use `<=`, `>=` symbols combined to express the condition 'less than or equal to,' or 'greater than equal to'. So in example

```
let x = 1;

if (x >= 0) {
  console.log('x is greater than or is zero.')
} else {
  console.log('x is smaller than zero, a negative number.')
}
```

#### Equality check

Oftentimes, we want to check if some value is equal to another. In javascript, this is done like so:

```
let y = 1;

if (y === 1) {
  console.log('y is 1.');
}
```

This `===` checks if the left side of the expression is equal to the right. How do you check if it is NOT equal?

```
let z = 2;

if (z !== 1) {
  console.log('z is not 1.');
} else {
  console.log('z is 1.');
}
```

as shown, `!==` is checking is the left side of the expression is NOT equal to the right. The `else` block will only trigger if the condition `(z !== 1)` is false, which must mean it is equal to 1.

What happens if multiple blocks that can be true are chained like this?

```
let y = 1;
let z = 2;

if (y === 1) {
  console.log('y is 1.');
} else if (z === 2) {
  console.log('z is 2.');
} else {
  console.log('y is not 1. z is not 2.');
}
```

Expressions of logic always evaluate in-order of code. So in above example, the first condition block, `y === 1` will evaluate as true. After outputting `y is 1`, the other else blocks are not evaluated because the first `if` condition was met.

#### Javascript value comparisons

So what does it really mean to be a `truthy` condition in javascript? Does a string expression evaluate to a true condition, if used like so?
```
let stringVar = 'hello, world';

if (stringVar) {
  console.log('and hello to you too!');
}
```
The answer is... yes! You will run into this in js again and again; learning whether each value evaluates to `true` if used as a conditional is important to become a proficient javascript developer. Here is the rule:

**Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string ('') actually returns true!**

I know that is kind of unintuitive at first, but see this code below.
```
let stringVar = 'hello, world';
let x = -1;
let y = 0;
let z;

if (stringVar) {
  console.log('stringVar is truthy.');
}
if (x) {
  console.log('x is truthy.');
}
if (y) {
  console.log('y is truthy.');
}
if (z) {
  console.log('z is truthy.');
}
```
Above program will output `stringVar is truthy` and `x is truthy`. Yes, negative numbers are truthy, but 0 is not.

Using `typeof` command we learned earlier, we can check for types of a variable before executing some code.
```
let stringVar = 'hello, world';

if (typeof stringVar === 'string') {
  console.log('found a string variable!');
}
```
This is very useful and a commonly used pattern in javascript coding.