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
  * [Lesson Two: Conditionals](#lesson-two-conditionals)
    + [if else](#if-else)
    + [Equality Check](#equality-check)
    + [Javascript Value comparisons](#javascript-value-comparisons)
    + [Logical Operators - AND OR and NOT](#logical-operators-and-or-and-not)
    + [AND OR](#and-or)
    + [NOT](#not)
    + [How Logical Operators work in Javascript](#how-logical-operators-work-in-javascript)
    + [Logical Order of Operations](#logical-order-of-operations)
  * [Lesson 3: Non-primitive types](#lesson-3-non-primitive-types)
    + [Function](#function)
      - [return](#return)
      - [Calling Functions](#calling-functions)
    + [Object](#Object)
      - [Accessing Object Values](#accessing-object-values)
      - [When to use bracket notation](#when-to-use-bracket-notation)
      - [More on objects](#more-on-objects)
  * [Lesson 4: Scopes and loops](#lesson-4-scopes-and-loops)
    + [Scope](#scope)
      - [const](#const)
      - [var](#var)
    + [Loops](#Loops)
      - [for](#for)
      - [return statement within a loop](#return-statement-within-a-loop)
      - [break](#break)
      - [continue](#continue)
      - [while](#while)

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

#### Logical Operators - AND, OR, and NOT

So far we learned to check if something IS. How do we express if something IS AND / OR something? Or, how do we check if something IS NOT something?

In js, we describe above scenarios using what are called **logical operators**. They are named **AND** (`&&`), **OR** (`||`), and **NOT** (`!`). In the next section, we describe each of these operators in terms of logic mathematics, and how javascript chooses to evaluate these operators.

#### AND OR

![logicgatetable](https://arith-matic.com/notebook/img/logic-gates/and-or-logic-gate.jpg)

Above is a representation of a logical gate. This is used in electronic circuits to represent the logic of AND and OR. Say 0 represents `false` and 1 represents `true`. So if our input was A and B, 1 would represent `true` and 0 would represent `false`.

The logical gate AND, when given A and B with binary values of 1 or 0, only output 1 (again, representing `true`) if and only if both A and B are `1`.

The logical gate OR, when given A and B with binary values of 1 or 0, outputs 1 if at least one of A or B is 1, including the case when they are both 1.

#### NOT

NOT gate, in lieu to the binary 0-false and 1-true example above, would simply give you the other binary value from the one given. So if input is 1, it'd become 0. If input was 0, it'd become 1.

These above 3 gates are fundamental building blocks of logic. By chaining these gates together, stuff like stoplights / flashlights with multiple settings are built. Understanding the logical operations and how we abstract each binary value to represent a state is important to learning not only javascript, but all of coding and computer science.


#### How logical operators work in javascript

Here's a table of how to express the logic operators in javascript.

Name | Syntax | Description
--- | --- | ---
AND | `condition1 && condition2` | if condition1 is truthy, returns condition2. If condition1 is not truthy, return condition1.
OR | condition1 `\|\|` condition2 | if condition1 is truthy, returns condition1. If not, return condition2.
NOT | `!condition` | returns the boolean `false` if `condition` is truthy. If not, returns `true`.

It may seem the descriptions seem unrelated to the logical tables we went over above. That's why it was important to go over the concept of the logic tables first, then go into how javascript implemented them. The above concept, in the simplest case, each `condition` variables would be just booleans. Let's go over the `AND` operator with the simple case of `boolean` variables.

```
console.log(false && false) // outputs false
console.log(true && false) // outputs false
console.log(false && true) // outputs false
console.log(true && true) // outputs true
```
You will notice that this pretty much follows the logic gate described above - It only outputs true when both are true. However, what javascript is actually doing is "if condition1 is truthy, returns condition2. If condition1 is not truthy, return condition1." If you follow that rule to each of the cases listed, you'll see that statement is true.

This is important to understand because in javascript each condition isn't simply a binary 1 or 0, but any type of value such as 'string', 'number', 'undefined', 'null', etc. Let's go over the above example with different value types.

```
console.log(undefined && null) // outputs undefined
console.log(null && 'world') // outputs null
console.log('' && null) // outputs ''
console.log('hello' && null) // outputs null
console.log('hello' && 'world') // outputs 'world'
```

the && operator DOES NOT return a boolean `false` or `true` in javascript. It always returns either the first statement or second statement it is given, depending on their truthy state. The same concept goes for `||`

```
// boolean examples
console.log(false || false) // outputs false
console.log(true || false) // outputs true
console.log(false || true) // outputs true
console.log(true || true) // outputs true

// using || with other types
console.log(undefined || null) // outputs null
console.log(null || 'world') // outputs 'world'
console.log('' || null) // outputs null
console.log('hello' || null) // outputs 'hello'
console.log('hello' || 'world') // outputs 'hello'
```

As stated, the OR operator does the following logic: if condition1 is truthy, returns condition1. If not, return condition2. The behavior of these two logical operators is a pretty large 'gotcha' in javascript, and many developers go for years without fully understanding it. However, deep understanding of this is a valuable building block to becoming a great javascript engineer.

NOT operator, `!`, is different from the above two as it actually outputs a boolean `true` or `false`.

```
// boolean examples
console.log(!false) // outputs true
console.log(!true) // outputs false

// other types
console.log(!null) // outputs true
console.log(!'world') // outputs false
console.log(!undefined) // outputs true
console.log(!'') // outputs true
```

This makes sense from implementation perspective, as 'NOT' of a `string` doesn't really make much sense, so it must be converted into a true/false statement (a `boolean`) before giving a reasonable answer.

#### Logical order of operations

Let's consider this code below. It's a bit trickier, but we'll go over it in detail.

```
let x = 1;
let y = null;

console.log(x === 1 || !x && y)
```

What would console.log output here? Let's think this through together. If one assumes that javascript will do this in order, we could evaluate it like so:

1. `x === 1` becomes true as `x` is `1`, so let's think of this as `console.log(true || !x && y)`
2. Since OR (`||`) statements returns the left-side statement if it is truthy, we don't even have to worry about `!x` part of that. `console.log(true || !x && y)` becomes `console.log(true && y)`
3. Since AND (`&&`) returns the right-side statement if the left side is truthy, it becomes `y`, so statement becomes `console.log(y)`, which outputs `null`.

However, when you run this code, it actually outputs the boolean `true`!! This is because the `&&` operator is executed before the `||` operator, kinda like how in good old PEMDAS, multiplication is executed before addition! What actually happened is

1. Within `console.log(x === 1 || !x && y)`, `&&` operator is executed first. So we look at `!x && y`. `x` is a number with a value that is not `0`, so it is truthy. `!x`, therefore, becomes `false`. Since AND (`&&`) immediately returns the left-side statement if it was falsey, we don't even have to look at `y`. The statement `!x && y` becomes `false`. Let's simplify the current step of our console statement as `console.log(x === 1 || false)`
2. Since OR statements return the left-side statement if it is truthy, we don't evaluate the `false` expression on the right in `console.log(x === 1 || false)`. The left side becomes `true`, so the entire expression becomes `true`.

Phew, we figured out what's going on. So what if you want to evaluate the `||` statement first instead of letting javascript engine do what it wants? Just like in math, we use parenthesis:

```
let x = 1;
let y = null;

console.log((x === 1 || !x) && y) // this will run the `||` statement first, then `&&`
```
This above code will execute as we detailed the first time through, when we assumed javascript will evaluate code in order. If you're curious, here's the [full list of order precendence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)... though at this point lot of stuff on there you wouldn't know about. Just remember to put things in parenthesis if you're expecting that expression to be evaluated first!

Another example of this, bit trickier, is
```
let x = 1;

if (!typeof x === 'string') {
  console.log('x is not a string');
} else {
  console.log('x is a string');
}
```

When writing this, we are expecting to evaluate `typeof x === 'string'`, then take the `NOT` of that, effectively checking that `typeof x` is NOT a string. However, this code will output `x is a string` when run!

This is, as you may have guessed, because of order of operations. Let's go through what's happening in detail.
1. javascript evaluates `typeof x` part of the statement first, which becomes `'number'`. Let's write that out: `if (!'number' === 'string')`
2. The `!` is applied to `'number'`, becoming `(false === 'string')`. Since `false` is not equal(`===`) to `'string'`, the `if` statement evaluates as falsey and goes to the `else` statement.

To solve this problem, we can use the parenthesis like this:
```
let x = 1;

if (!(typeof x === 'string')) {
  console.log('x is not a string');
} else {
  console.log('x is a string');
}
```
Which would evaluate the parenthesis, in this order:
1. javascript evaluates `typeof x` part of the statement first, which becomes `'number'`. Let's write that out: `if (!('number' === 'string'))`
2. Since `'number' === 'string'` is false, it becomes `if (!(false))`
3. Then, the `!` makes the `false` become `true.`. The `if` statement is evaluated as truthy, and it will output the first code block.

Or even simpler, we can just use `!==`
```
let x = 1;

if (typeof x !== 'string') {
  console.log('x is not a string');
} else {
  console.log('x is a string');
}
```
Which would be easier to read and understand, so is the recommended way of writing such code.

## Lesson 3: Non-primitive types

Everything we've learned so far was to introduce these more complex types. Specifically, we will cover functions and objects, the core building blocks of programming and how they behave in javascript.

#### Function

Functions are a way in javascript to enclose a set of statements that performs a specific task or calculation. This is powerful as it allows us to encapsulate any complex set of code and re-use it anywhere else later. Let's learn how to define functions.

```
function add(number1, number2) {
  return number1 + number2;
}
```

The statement `function` declares what is to follow will be the name of the function with arguments it takes. Arguments here are `number1` and `number2`. When you declare those arguments, they are automatically defined as a variable within the enclosing `{}` brackets. `return` is important - it immediately returns the following statement to the caller. That means any code after the `return` statement is unreacheable, like so:

```
function add(number1, number2) {
  return number1 + number2;

  console.log('got here');
}
```
In the above case, `'got here'` will never show up in the console, and is dead code - code that is useless because it can never execute.

Let's use this function we just declared.
```
function add(number1, number2) {
  return number1 + number2;
}

let x = 1;
let y = 1;
let sum = add(x, y);

console.log(sum); // outputs 2
```

It's not required to save the result of a function into a variable, it just evaluates to whatever it `return`s. An example
```
function add(number1, number2) {
  return number1 + number2;
}

let x = 1;
let y = 1;

console.log(add(x, y)); // outputs 2
```

It is also possible to declare a function as a variable!
```
let add = function(number1, number2) {
  return number1 + number2;
}

let x = 1;
let y = 1;

console.log(add(x, y)); // outputs 2
```

#### return

You can return any statement that evaluates. Simple cases for types such as below.

```
// below are just examples of return statements
return true;
return 'hello';
return add(x, y); // would return whatever add() function returns
```

Some less obvious way to return might be using our && / || behavior we went over.

```
let x = false;
let y = 'I am the walrus';
return x || y // returns 'I am the walrus'
```

as we know, in above statement `x || y` the behavior of `||` makes it so the statement evaluates to `y`, which is 'I am the walrus'.

It's important to remember that you do not have to return anything!
```
function printNumber(someNum) {
  if (typeof someNum === 'number') {
    return someNum;
  } else {
    return;
  }
}
```

We can see our second `return` statement has nothing except the semicolon after it. What does it return when it gets to that code block?
```
let result = printNumber("Not a number type");

console.log(result); // what does this statement print?
```

The answer is `undefined`. Returning nothing, to javascript, is simply returning an `undefined` value. In fact, that `return` is not necessary in the function. Consider the following change
```
function printNumber(someNum) {
  if (typeof someNum === 'number') {
    return someNum;
  }
}
```
The above function behaves exactly the same as the function with a second `else return` statement. When a function code reaches the end of execution without encountering any `return` statements, it simply returns `undefined` and ends execution.

#### Calling functions

Functions are evaluated soon as it is called, so you can use it in various contexts. For example, let's say the functions we discussed as examples, `add` and `squareNumber` has been declared. You can use them like below
```
let x = 1;
let y = 1;

let answer = squareNumber(add(x, y));
console.log(answer); // outputs 4
```

So the innermost `add(x,y)` is evaluated first, becoming `2`, then that becomes the argument for `squareNumber`, which returns `4`. We print the `answer` after.

Functions do not need an argument, it can simply run a grouping of code without any.
```
function printHelloWorld() {
  console.log('hello, world');
}

printHelloWorld();
printHelloWorld(); // we called it twice, so hello world is output to the console twice.
```

It's important to remember that when declaring a function like this, code within the function has no context of the caller. What I mean is shown below
```
let str = 'hello, world.';

function printStr() {
  console.log(str); // prints `undefined`, as `str` is not defined within this scope.
}
```
Above code introduces the very important concept of **scope**, which we will go over in detail later in upcoming lessons.

**Calling functions with missing arguments**

Javascript is very (some argue it is too) flexible and do not require every declared parameter to actually have a value assigned!

```
function squareNumber(input) {
  if (typeof input === 'number') {
    return input * input;
  } else {
    console.log('please give me a number');
  }
}

squareNumber(); // outputs 'please give me a number'
```

What's going on here? Let's modify our function to give us more details on our input to learn about it.

```
function squareNumber(input) {
  if (typeof input === 'number') {
    return input * input; // note: `*` is a multiplication operator in javascript
  } else {
    console.log('you gave me a type of ' + typeof input) // yes, you can add strings together and they become joined
    console.log('please give me a number'); // we removed the return statement below
  }
}

squareNumber(); // outputs 'you gave me a type of undefined' and 'please give me a number'
```

So functions actually just declares the arguments with value assigned, or simply declares it as undefined. You can see why actually setting some variable as `undefined`, like `let something = undefined`, is a bad practice - javascript sets things as undefined for you on anything that's declared but not assigned a value. We'll see more examples of this soon!

Function is its own type as well. This is the first **non-primitive** value we have learned!
```
// ... assume there's code that declared add as a function like we've been doing
console.log(typeof add) // outputs 'function'
```

What is special about non-primitive values? Well, to fully understand the concept, let's learn another very important non-primitive value - Objects.

### Object

Objects can be thought of data with properties attached to it. In real life, an object, say, apple, also has properties. Its color may be red, while its weight might be 2 ounces.

Let's define an object here.

```
let apple = {};
```

We've just defined an object named `apple`! Just like a real object, a javascript object should have variables that is attached as its property.

```
let apple = {};
apple.color = 'red';

console.log(apple);
```

The above should output something like `{ color: 'red' }`. We initialized the object with `let apple = {}` then added a property `color` in the next line. There's multiple ways to initialize an object - you can set values right as you create one.

```
let apple = {};
apple.color = 'red';

console.log(apple);

let greenApple = {
  color: 'green'
};

console.log(greenApple);
```

The second apple defined here immediately defined its property using the syntax `color: 'green'`. The left hand side here, `color`, is called the **key** of the property. Right hand side, `'green'`, is the **value**.

Let's add the weight property to our objects.
```
let apple = {};
apple.color = 'red';
apple.weight = '2oz';

console.log(apple);

let greenApple = {
  color: 'green',
  weight: '2oz'
};

console.log(greenApple);
```

Each property in an object assignment as shown in
```
let greenApple = {
  color: 'green',
  weight: '2oz'
};
```
must be separated by commas.

Both ways of initializing the apple objects are valid and achieved the same result. Of course, you can add or edit additional properties no matter method of initialization.

```
let apple = {};
apple.color = 'red';
apple.weight = '2oz';

console.log(apple);

let greenApple = {
  color: 'green',
  weight: '2oz'
};

greenApple.weight = '3oz'; // correct the weight
console.log(greenApple);
```
We just overwrote the `weight` property in `greenApple` with a new value.

#### Accessing Object values

We've seen how to create an object. Let's go into how to access its properties.

```
let greenApple = {
  color: 'green',
  weight: '2oz'
};

console.log(greenApple.weight); // outputs '2oz'
let greenAppleWeight = greenApple.weight;
console.log(greenAppleWeight); // outputs '2oz'
```

the `<objectName>.<propertyKeyName>` notation (named dot notation) is how you access the property key value in javascript. Let's introduce another way to access the values.

```
let greenApple = {
  color: 'green',
  weight: '2oz'
};

console.log(greenApple['color']) // outputs 'green'
```
This `<objectName>[<propertyKeyName>]` is called the bracket notation and is another valid way to access a property value. What's important to remember is that the key name is stored as a **string**! To drive this point, see the following code
```
let greenApple = {
  color: 'green',
  weight: '2oz'
};
let colorString = 'color';

console.log(greenApple[colorString]) // outputs 'green'
```

#### When to use bracket notation

So when would you use one over the other? The bracket notation should be used when you are using a variable to represent a property key name. To illustrate this point, let's make a function that creates an apple object.

```
function makeApple(givenColor) {
  let weightMap = {
    red: '2oz',
    green: '3oz',
    blue: '0oz' // the mythical floating apple
  };

  return {
    color: givenColor,
    weight: weightMap[givenColor]
  }
}

makeApple('red') // returns { color: 'red', weight: '2oz' }
makeApple('blue') // returns { color: 'blue', weight: '0oz' }
```

This was a bit more complex, so let's dive in a bit. This function named `makeApple` first defines an object called `weightMap` that, when given a property key of `red` `green` or `blue` returns a string that represents a weight. This object is used to construct the returned object.

We can see the simplicity of using an object as a mapping from some value to another. This is why we named the variable `weightMap`, as it is a `map` of the color to its weight value. Imagine writing the `weight` property based on color without the `map`; it would have to be something like
```
// ... inside the makeApple function..
let apple = { color: givenColor };

if (givenColor === 'red') { apple.weight = '2oz'; }
else if (givenColor === 'green') { apple.weight = '3oz'; }

return apple
```
Which is a lot more code than our solution using the `weightMap` above, and much more work to add new key/value combos as we'd have to write an `if` statement for each to color/weight combination. Using a `map`, we can simply just define the new property and it'd be recognized.

#### More on Objects

So what data can objects store? Anything, really. Here's an example of an object storing a function.
```
function eatApple() {
  console.log('You took a big bite of the apple. Yum!');
}

let apple = {
  color: 'red',
  weight: '2oz',
  eat: eatApple
};

apple.eat() // outputs 'You took a big bite of the apple. Yum!'
```

What's key to notice here is that **we did not call eatApple()**, but rather just assigned it to the property key `eat`!

We called it later, when we ran `apple.eat()`. Let us illustrate the difference.

```
function eatApple() {
  console.log('You took a big bite of the apple. Yum!');
}

let apple = {
  color: 'red',
  weight: '2oz',
  eat: eatApple
};

apple.eat(); // outputs 'You took a big bite of the apple. Yum!'
apple.eat; // does not output anything.

console.log(typeof apple.eat()) // outputs the big bite statement then the string `"undefined"`
console.log(typeof apple.eat) //  outputs 'function'
```

The function, when NOT called with `()`, is like another variable - it can be passed around and called when needed. However, when you DO call it with `()`, it becomes whatever value it returns.

Objects can hold other objects.
```
let appleStats = {
  weight: '2oz',
  height: '3 inches',
  width: '2.6 inches'
};

let apple = {
  color: 'red',
  stats: appleStats
};

console.log(apple.stats.width); // outputs '2.6 inches'
console.log(apple.stats.height); // outputs '3 inches'
console.log(apple.color); // outputs 'red'
```

#### Value assignment and Objects

Consider this code
```
let appleStats = {
  weight: '2oz',
  height: '3 inches',
  width: '2.6 inches'
};

let apple = {
  color: 'red',
  stats: appleStats
};

appleStats.weight = '200mg';

console.log(apple.stats.weight); // what does this output?
```

The answer here is `200mg`. What happened here? If we think back to when we first learned about variable assignments, we tried to hammer in the point of `primitive` types BECOMING a value instead of POINTING to something.

Objects are a `non-primitive`! When you assign a non primitive types to a variable, like we did in
```
let apple = {
  color: 'red',
  stats: appleStats // we are assigning appleStats to stats
}
```
We were not saying `apple.stats` is a new object that looks exactly like `appleStats`, it is POINTING to it - stats now just referencing appleStats. So, if you change `appleStats` like

`appleStats.weight = '200mg';`

We are also changing the value of everything that's pointing at `appleStats`, in this case our `apple.stats`.

This concept is a little complex, and many experienced developers make the mistake of forgetting this. The key is to have this type of knowledge in your head so you can correct mistakes you will undoubtedly make.

Here's a little more example code illustrating this behavior.
```
let appleStats = {
  weight: '2oz',
  height: '3 inches',
  width: '2.6 inches'
};

let apple = {
  color: 'red',
  stats: appleStats
};

let greenApple = {
  color: 'green',
  stats: appleStats
};

console.log(apple.stats.weight, greenApple.stats.weight); // outputs '2oz 2oz'

appleStats.weight = '200mg';

console.log(apple.stats.weight, greenApple.stats.weight); // outputs '200mg 200mg'
```

## Lesson 4: Scopes and loops

You may have ran into a problem where a certain variable has been defined, but when referenced causes an ReferenceError. This is due to scoping, a concept very important in programming. In this section, we go over scoping in more detail and introduce the concept of loops.

### Scope

Scope is the context of code being executed. It is the context in which defined values, like variables and properties of objects, are visible or can be referenced.

Here is an example of variable not existing outside its scope
```
function sayHello() {
  let greetings = 'hello, world';
  console.log(greetings);
}

console.log(greetings); // syntax error
```
Scope is passed down top-down, as in the children scopes have context of the parent values. Like below

```
let greetings = 'hello, world';

function sayHello() {
  console.log(greetings);
}
```

Whenever there are curly braces surrounding a block of code, that is a new child scope. `let` is only available on that scope level and its children scopes.
```
// scope level 0 is top level
let x = 0;
if (true) { // true makes it guaranteed to execute
  // let's call inside this if block level 1
  let y = 1;
  if (true) {
    // we'll call inside this second if block level 2
    let z = 2;
    console.log(x,y,z); // logs 0 1 2
  }

  console.log(z) // Error: z is not defined
}
console.log(y) // Error: y is not defined
```

There are multiple ways you can define a variable, which changing its behavior and scope.

#### const

`const` is scoped the same way as `let` declarations, as in they are assigned to the block it is called in. However, `const`, standing for `constant`, cannot be re-assigned another variable value - term known as 'read-only'. This is for efficiency in memory usage, and is good practice. If you know a variable will have a certain value, and it always will have that value, declare it with a `const`.

```
const HELLO_PHRASE = 'hello, world'; // commonly, consts are all-caps, though not required

console.log(thatPhrase); // outputs 'hello, world'

HELLO_PHRASE = 'henlo world!' // Error: Assignment to constant variable
```

#### var

So far, we've mostly used `let`. This is because `let` has the most predictable way of defining a variable - to the scope it is in, and for its children scopes.

`var` is another way of declaring a variable. The different between `let` and `var` is that `var` declared variables are either **global-level** or if you call it within a function, **function-level**.

```
if (true) {
  var x = 'hello';
}

console.log(x); // prints 'hello'

function someFunction() {
  console.log(x); // prints 'hello'

  if (true) {
    var y = 'world';
  }

  console.log(y); // prints 'world'
}

someFunction();
console.log(y); // Error: y is not defined
```

Notice how accessing `y` caused an error outside the function someFunction, yet was available outside the `if` block that surrounds it. `var` variables escape its scope to the function that it is called in, and is available in that context.

`var` is an older javascript declarator, and has been around since the start of js. However, there are very few contexts where using it is recommended over a `let`, which is when you want some variable within a child scope to be available to the whole function.

### Loops

Whenever you find yourself needing to execute some code repeatedly, loops offer that mechanism.

There are many different kinds of loops, but they all do the same thing: repeat some line of code a number (could be zero) of times. Let's go over two types that are used most commonly - `for` loops and `while` loops.

#### for

A for loop repeats until a specific condition evaluates to false. Let's see how to declare those conditions below

```
for (initialExpression; condition; incrementExpression) {
  <code>// code runs until <condition> is false
}
```

To put it in more concrete example,

```
for (let i = 0; i < 5; i++) {
  console.log(i);
} // prints 0 1 2 3 4
```

Below is shamelessly taken and edited slightly from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

When a for loop executes, the following occurs in order:

1. The initializing expression initialExpression, if any, is executed. This expression usually declares one or more loop counter variable. You can do more complex things here, but let's not worry about it for now. This step is only ran once at the very beginning of the loop!
2. The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.) In this case, `i < 5` is the condition expression. The loop will check whether `i` is less than `5` here.
3. The code wrapped in `{}` executes once. Note that this block has access to `initialExpression`, as shown in `console.log(i)` in example code. If it encounters a `break` statement, the loop terminates. We'll go over this later.
4. If present, the update expression incrementExpression is executed. In this example, we have `i++`. `++` is a shorthand for `i += 1`, which is a shorthand for `i = i + 1`. Similarly, `--` is a shorthand for `i -= 1`, which is a shorthand for `i = i - 1`.
5. go to step 2

Let's use some of what we've learned from [Arrays](https://github.com/riotcku/learntocode/blob/master/lessons/data_structures.md#arrays) with a for loop. This is one of the most common uses of a for loop, iterating through a list.

```
const animals = ['dog', 'cat'];

for (let index = 0; index < animals.length; index++) {
  const currentAnimal = animals[index];
  console.log("I found an animal! It's a " + currentAnimal);
}
```

Above loop will output the console statement with each of the animal in the array `animals`. Notice the use of `animals.length` - `length` is a property of all arrays which gives us the length of the array (not 0-based!) which in this case is a 2.

For loops can decrement instead of just increasing.
```
const animals = ['dog', 'cat'];

for (let index = animals.length - 1; index > 0; index--) {
  const currentAnimal = animals[index];
  console.log("I found an animal! It's a " + currentAnimal);
} // outputs the statement, but 'cat' first then 'dog'
```
Notice how i did `animals.length - 1`. It's because `length` property is not 0-based - it starts at 1. If we left that statement out, we'd be trying to access index `2` of the `animals` array, which has no data in it.

For loops can be used to modify variables from the parent scope. One may wonder if the list of animals in the `animals` array contains a cat. We can check that like so

```
const animals = ['dog', 'cat'];
let foundACat = false;

for (let index = 0; index < animals.length; index++) {
  const currentAnimal = animals[index];
  if (currentAnimal === 'cat') {
    foundACat = true;
  }
}

if (foundACat) {
  console.log('I found a cat!');
}
```

#### return statement within a loop

Let's say we have multiple arrays with different animals.
```
const animalsInChicago = ['dog', 'cat', 'horse', 'fish', 'bird'];
const animalsInAntarctica = ['penguin', 'bird']; // are penguins birds? Kind of I guess? Let's say they're distinct
```
And we want to find if a 'cat' exists in these arrays. I don't want to have to call multiple `for` loops for each of these arrays. This is a perfect time for abstracting it to functions!

I want a function named `findCat` that will accept some array as its parameter, and it will return true or false depending on whether it found a string 'cat' in that array.

```
const animalsInChicago = ['dog', 'cat', 'horse', 'fish', 'bird'];
const animalsInAntarctica = ['penguin', 'bird'];

function findCat(animalArray) {
  for (let index = 0; index < animalArray.length; index++) {
    if (animalArray[index] === 'cat') {
      return true;
    }
  }
  return false;
}

if (findCat(animalsInChicago)) {
  console.log('there are cats in Chicago!');
}
if (findCat(animalsInAntarctica)) {
  console.log('there are cats in Antarctica!');
}
```

Above code outputs 'there are cats in Chicago!'. Notice how there is a `return` statement within a `for` loop, and it ends all code execution there. `return` is a way, just like `break` (as we'll go over in the next section), that a loop can end execution on the spot. If every animal in the index has been looped and for loop ends, then we can return `false` as we know we've checked everything in the list and did not find a cat.


#### break

Break statement is used to terminate the loop we are currently in. This is useful if we know if a certain condition is met, we no longer need the rest of the loops - for example, in the code above, when we find a cat, we no longer need to check the rest of the array: we completed what we wanted to do. This is for quicker, more efficient code. Let's make the `animals` array bigger and add a break statement when we find a cat.

```
const animals = ['dog', 'cat', 'horse', 'fish', 'elephant', 'bird'];
let foundACat = false;

for (let index = 0; index < animals.length; index++) {
  const currentAnimal = animals[index];
  if (currentAnimal === 'cat') {
    foundACat = true;
    break; // we found a cat, no need for rest of the loop
  } else {
    console.log("This is not a cat, it's a " + currentAnimal);
  }
}

if (foundACat) {
  console.log('I found a cat!');
}
```

Above line would first find a dog and output `'This is not a cat, it's a dog'` then after finding a cat, break out of the loop and say that we found a cat. This may seem unnecessary, but consider that in programming world the list of animals could be every single animal ever, which would be a very large array. It's good programming to identify when you do not need to iterate the entire list of options and break early.

#### continue

The `continue` statement tells the loop to skip the rest of the code block and go to the next iteration of the loop.

```
const animals = ['dog', 'cat', 'horse', 'fish', 'elephant', 'bird'];
let foundACat = false;

for (let index = 0; index < animals.length; index++) {
  const currentAnimal = animals[index];
  if (currentAnimal !== 'cat') {
    continue;
  }
  foundACat = true; // this line of code only executes when currentAnimal IS 'cat'
}

if (foundACat) {
  console.log('I found a cat!');
} else {
  console.log('No cats here :(');
}
```

`continue` is, similar to break, used to more efficiently run the loop. If you know you don't need to run any more code on one iteration after a certain condition, `continue` offers that mechanism.

#### while

`while` loops is another way of looping through code. It runs while a specific given condition evaluates as a truthy statement. Here's a simple example.

```
let x = 5;

while(x !== 0) {
  x--;
}

console.log(x); // outputs 0
```

`while` simply repeats the code until the condition within the parenthesis is truthy. This means that condition to make it false, in order to exit the loop, must exist. In the above example's case, we are decrementing `x` by 1 every loop, until `x` is 0.

What happens when the loop never exits?

```
let x = 5;

while(x !== 0) {
  x++;
}

console.log(x);
```

Here, there is an obvious bug where x is incremented by 1 each iteration, while the condition expects `x` to decrement to 0. When this code executes, the program never terminates and runs forever until terminated (Control + c terminates execution of current process in the terminal). This is called an **infinite loop**.

Infinite loops are worse than crashes because the program just halts there, never reporting what's wrong. Make sure when using either for or while loops you are guaranteed to exit!

`break` and `continue` statements work in `while` loops as well.

```
let x = 5;
let numOfLoops = 0;

while (x !== 0) {
  if (numOfLoops > 100) {
    console.log('Okay, 100 times is enough. Exiting the while loop');
    break;
  }
  x++;
  numOfLoops++;
}
```

Above statement has a failsafe built in for infinite loops, where it has a separate variable counting the loop step.

### Putting it all together

Let's try putting everything we learned together and build a more complex program. As practice, together we will create a program that feeds animals.

#### Project description

The goal will of this exercise will be setting up a net of custom objects and functions that interact with one another.

We will make `food` objects, to be stored in an array, which have the following properties

- `{string} name`, name of the food, such as apple, steak, or onion.
- `{string} type`, describing the type of food - 'meat', 'fruit', or 'vegetable'.
- `{number} price`, describing the price of the food.
- `{boolean} eaten`, boolean that denotes its state of having already been eaten or not.

And also make `animal` objects, to be stored in an array, which have the following properties

- `{string} name`, name of the animal, such as Roy, Arya or Snowball.
- `{string} type`, type of the animal, such as dog, shark or songbird.
- `{string} diet`, what does the animal eat, will be one of `omnivore`, `carnivore` or `herbivore`.
- `{boolean} isHungry`, a boolean that is true when animal is hungry and false otherwise.

And lastly the `recordBook` object, which have following properties for record keeping

- `{object} fruits`, object which has these properties
  * `{number} totalEaten`, total number of fruits eaten by animals
  * `{number} totalCost`, total of all prices that animals have eaten
- `{object} vegetables`, object which has these properties
  * `{number} totalEaten`, total number of vegetables eaten by animals
  * `{number} totalCost`, total of all prices that animals have eaten
- `{object} meats`, object which has these properties
  * `{number} totalEaten`, total number of meats eaten by animals
  * `{number} totalCost`, total of all prices that animals have eaten

To help keep these animals alive, we need the function `feed`, as follows

```
/**
  feed
  attempts to feed an animal. If the fruit is not eaten already, and if the `diet` of the animal matches the `type` of food offered, it will eat the food. If food is eaten, it sets the `eaten` flag of the `food` object to `true` while setting the animals `isHungry` flag to false. If food was eaten, update the recordBook object to reflect the new total number of eaten and total cost of foods eaten.

  @param
    food {object} object that will be given to the animal to eat.
    animal {object} object that will be offered food to eat.

  @return
    {boolean} true if food was eaten, false if animal cannot eat the given food type due to dietary restrictions.
*/
function feed(food, animal) {
  //... TODO: implement this function
}
```

#### Working through the project

The simplest of these tasks are to create `recordBook` object, which just needs to be declared. First, we know it's an object with three objects within. Before populating the objects within, let's declare them first.

```
const recordBook = {
  fruits: {},
  vegetables: {},
  meats: {},
}
```

So we now have `recordBook.fruits`, `recordBook.vegetables`, and `recordBook.meats` initialized as empty objects. Now, within, I want a totalEaten and totalCost properties, both numbers. Since none are eaten or costed me anything, we will set the values as 0.

```
const recordBook = {
  fruits: {
    totalEaten: 0,
    totalCost: 0
  },
  vegetables: {
    totalEaten: 0,
    totalCost: 0
  },
  meats: {
    totalEaten: 0,
    totalCost: 0
  }
}
```
There is our record book, ready to be used. Let's setup some `food` objects, just as simple to set up.

```
const grape = {
  name: 'grape',
  type: 'fruit',
  price: 1,
  eaten: false
};
const lettuce = {
  name: 'lettuce',
  type: 'vegetable',
  price: 2,
  eaten: false
};
const steak = {
  name: 'steak',
  type: 'meat',
  price: 8,
  eaten: false
};
const foods = [grape, lettuce, steak];
```

And only remaining are some animal objects.

```
const roy = {
  name: 'Roy',
  type: 'dog',
  diet: 'carnivore',
  isHungry: true,
};
const bambi = {
  name: 'Bambi',
  type: 'deer',
  diet: 'herbivore',
  isHungry: true,
};
const dumbo = {
  name: 'Dumbo',
  type: 'elephant',
  diet: 'herbivore',
  isHungry: true,
};
const animals = [roy, bambi, dumbo];
```

Let's solve the `feed()` function step by step. So we know that animals being able to eat the food given is important. Let's first write a condition that if the food offered is compatible with the diet of the animal, we will return true.

To do this, let's think it all out then write code. When can animals eat something?

1. If animal diet is omnivore, any type of food is acceptable.
2. If animal diet is carnivore, only food type of 'meat' is acceptable.
3. If animal diet is herbivore, either food types of 'fruit' or 'vegetable' are acceptable.

Let's write that out into code.


```
function feed(food, animal) {
  const animalDiet = animal.diet;
  const foodType = food.type;

  // 1. If animal diet is omnivore, any type of food is acceptable
  if (animalDiet === 'omnivore') {
    // eat food
  }
  // 2. If animal diet is carnivore, only food type of 'meat' is acceptable.
  if (animalDiet === 'carnivore' && foodType === 'meat') {
    // eat food
  }
  // 3. If animal diet is herbivore, either food types of 'fruit' or 'vegetable' are acceptable.
  if (animalDiet === 'herbivore' && (foodType === 'fruit' || foodType === 'vegetable')) {
    // eat food
  }
}
```

Do all those `if` blocks do the same thing? Yes, they should all eat the food. Let's combine all three `if` into one statement that becomes true if any of the condition is met... which is a job for `||`! You simply can throw `()` around each of the `if` blocks and `||` it together. Since that is a long statement, let us save it into a variable called `canEat`

```
function feed(food, animal) {
  const animalDiet = animal.diet;
  const foodType = food.type;
  const canEat = animalDiet === 'omnivore'
    || (animalDiet === 'carnivore' && foodType === 'meat')
    || (animalDiet === 'herbivore' && (foodType === 'fruit' || foodType === 'vegetable'))

  if (canEat) {
    // eat food
  } else {
    return false; // we know the animal cannot eat the food here in this else block.
  }
}
```

Let's remember to make sure the food is not eaten already, and add it to our statement.

```
function feed(food, animal) {
  const animalDiet = animal.diet;
  const foodType = food.type;
  const canEat = animalDiet === 'omnivore'
    || (animalDiet === 'carnivore' && foodType === 'meat')
    || (animalDiet === 'herbivore' && (foodType === 'fruit' || foodType === 'vegetable'));

  if (canEat && !food.eaten) {
    // eat food
  } else {
    return false; // we know the animal cannot eat the food here in this else block.
  }
}
```

Now we implement the actual eating of the food, which is just simple setting of properties, and returning the boolean `true`.

```
function feed(food, animal) {
  const animalDiet = animal.diet;
  const foodType = food.type;
  const canEat = animalDiet === 'omnivore'
    || (animalDiet === 'carnivore' && foodType === 'meat')
    || (animalDiet === 'herbivore' && (foodType === 'fruit' || foodType === 'vegetable'));

  if (canEat && !food.eaten) {
    food.eaten = true;
    animal.isHungry = false;

    return true;
  } else {
    return false; // we know the animal cannot eat the food here in this else block.
  }
}
```

We are missing just one step - updating our record book. The tricky part is that record books have different objects for eat different type of food. The problem is simple once we store the correct desired object from our recordBook once we read our food type. After we are pointing to the correct record, it's simple to update it while feeding our food.

```
function feed(food, animal) {
  const animalDiet = animal.diet;
  const foodType = food.type;
  const canEat = animalDiet === 'omnivore'
    || (animalDiet === 'carnivore' && foodType === 'meat')
    || (animalDiet === 'herbivore' && (foodType === 'fruit' || foodType === 'vegetable'));

  let currentRecord; // initially unset
  // set as the recordBook for our desired type
  if (foodType === 'meat') {
    currentRecord = recordBook.meats;
  }  else if (foodType === 'fruits') {
    currentRecord = recordBook.fruits;
  } else {
    currentRecord = recordBook.vegetable;
  }

  if (canEat && !food.eaten) {
    // eat the food
    food.eaten = true;
    animal.isHungry = false;
    // update records
    currentRecord.totalEaten++;
    currentRecord.totalPrice += food.price;

    return true;
  } else {
    return false; // we know the animal cannot eat the food here in this else block.
  }
}
```

#### Arrow Functions

Arrow function is another syntax for creating a function, except with one key difference - it does not create its own unique scope! Rather, it just inherits the parent's scope as its own. Here is an example.

```
let someVar = 'Hi! I am someVar.';

function foo() {
  console.log(someVar);
}

const bar = () => {
  console.log(someVar);
}

foo(); // outputs undefined
bar(); // outputs 'Hi! I am someVar.'
```

Arrow function allow you to return an expression without `{}`. If `{}` is omitted, evaluated expression to the right of `=>` will be returned. Here's an example, with its equal regular function counterpart.

```
// regular function
let isGreaterThanZero = function(number) {
  return number > 0
}

// arrow function
isGreaterThanZero = (number) => number > 0

// above function is same as
isGreaterThanZero = (number) => {
  return number > 0
}

// when there is only one argument, arrow functions do not need ()
isGreaterThanZero = number => number > 0
```

All three arrow function above do the exact same thing. As you can see, arrow functions allow you to write concise, syntactically simple functions. It's especially useful when defining a function as a parameter for Array methods, as shown below.

```
let numArr = [1, 2, 3]

// using regular function
let doubledArr = numArr.map(function(element) {
  return element * 2
});

// using arrow function
let doubledArr2 = numArr.map(element => element * 2);

// above function is same as `(element) => { return element * 2 }` - its just more concise
```
Both above functions do exactly the same thing! When you just need a simple function with a one-liner return, arrow functions are very useful.

When should you use arrow functions over regular functions? Well, pretty much every time except when you need the `arguments` object which is not provided to the arrow function. We didn't learn this yet, so don't worry - its very rare you would want this. Also, maybe you'd like to keep a function's scope to itself.

One thing to note, however - arrow functions are, just like `let` and `const`, from the 6th edition of javascript engine, which means they are not available in old browsers like Internet Explorer. I dream of a world where you don't have to worry about this, but just know some javascript stuff won't work in older browsers.

