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

Recommend you open up codepen.io and type stuff along. Here is how a javascript variable is declared.

`let newVariable = 10;`

lets deconstruct above statement. `let` is a way to tell javascript code that I am declaring a NEW variable. There's 3 types of variables, `let` `var` and `const`, but let's just worry about `let` for now. After telling javascript you are declaring a variable with `let`, you can name it whatever you want. In our example, I named it `newVariable` to make it obvious I'm naming it. It can be named almost any sequence of alphanumeric characters. `newvariable` would've been a fine name, but I capitalized the letter to make it easier to read the second word. Then, we *assign* a value to `newVariable` using `=` followed by a value, which in this case is `10`. Then we use `;` to tell javascript this is one line of code.

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

You can re-assign new values to already declared variables. Notice that we don't have a `let` before re-assignment. This is because for per *scope* of code, variable names must be unique. Question: What do you think the value of `anotherOne` became after the re-assignment?

```
let newVariable = 10;
let anotherOne = newVariable;
newVariable = 5;

console.log(newVariable) // outputs 5
console.log(anotherOne) // ?
```

anotherOne actually holds the value of... `10`! When you assign a *primitive* type variable to something, it BECOMES that value instead of POINTING to the value. What are *primitive* variables? Again, I'll explain in detail, I got you. But let's go over the crazy `console.log` statement I threw out quick.

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

Above code block will output `10, 10, 5, 10` in your console. This step-by-step approach of logging code values will help you write and understand a javascript code as it increases in value.