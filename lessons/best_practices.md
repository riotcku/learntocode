# Coding Best Practices

Coding is not a solitary activity. Code is solidified logic meant to be re-used later by others. To better share code and have it more easily understood, there are a set of agreed-upon best practices for programming.

Please note almost none of the examples below are actual compilable code, but just pseudo-code to show an example.

#### Indentation

Indentation is the spacing before some line of code. The most common spacing patterns are single tab, double tab, 2-spaces, and 4-spaces.

```
if (a) {
  ...; // indented with 2 spaces here
}
if (b) {
    ...; // indented with 4 spaces here
}
if (a && b) {
	...; // indented with tab here
}
if (a && !b) {
		...; // indented with 2 tabs here
}
```

There is no right or wrong indentation that is followed by everyone. However, one must be **consistent** with the decision. An engineering group will come to an concensus about what indentation rule they will use, and it is important everyone keeps that rule.

Indentation should be added on every new code scope, so every time you use `{}` you should start a new line and indent one more level.

```
if (a) {
  ...; // indentation level 1

  if (b) {
    ...; // indentation level 2
  }
}
```

#### Spacing

Spaces are may not be necessary for the code, but it certainly makes reading code easier. Consider the following code blocks.

```
for(let i=0;i<someArr.length;i++){
  ...
}

for(let i = 0; i < someArr.length; i++){
  ...
}
```

The above two for loops do the exact same thing, but one is much easier to read. Above for loop would not be acceptable in a group coding environment, and probably not something you want in your github portfolio.

Vertical spacing between lines can add readability.

```
let x = 0;
let y = 0;
// this empty line here adds separation of variable declaration and function, making it easier to read.
function doSomething() {
  ...
}
```

Grouping code by tasks, separating them with an empty line, is always a good idea. You can add comment before each block to further emphasize the visual separation.

#### Naming

Naming variables is something that, in my opinion, never gets easy even with experience. Naming some variables or arguments like

```
let x1 = {
  t: 'client',
  e: 's@something.com'
};
let y2 = {
  t: 'administrator',
  e: 's@something.com'
};

function z(c) {
  ...
}

```

is confusing and less readable to not only other devs, but you as well. You may remember what `x1.e` is now, but will you remember next week? In a month?

Always name your variables, properties and arguments in a way that describes itself and its purpose.

```
let client1 = {
  type: 'client',
  email: 's@something.com'
};
let client2 = {
  type: 'administrator',
  email: 's@something.com'
};

function makeAdministrator(client) {
  ...
}
```

As a general rule, variable names

1. Tend to start with a letter
2. Do not use special characters within the name
3. Do not allow spaces
4. allows digits, but respecting rule 1.

#### Capitalization

Capitalization when naming variables is important convention to add readability. You may have noticed that most of our variables are `namedLikeThis`. This is called camelCase, as the 'hump' in the middle are capitalizations.

```
let camelCaseVariableName;
```

Another popular one is snake case.

```
let snake_case_variable_name;
```

Often, if a string variable is to never be changed, it is written in all-caps.

```
const CHART_TYPE = "spreadsheet"
```

Whichever capitalization scheme you/your team chooses, keep it consisten throughout the application!

#### Don't repeat yourself (DRY)

If you find yourself repeating the same logic again and again,

```
if (customer1.birthday === today) {
  console.log("Happy birthday, " + customer1.name);
}
if (customer2.birthday === today) {
  console.log("Happy birthday, " + customer2.name);
}
if (customer3.birthday === today) {
  console.log("Happy birthday, " + customer3.name);
}
if (customer4.birthday === today) {
  console.log("Happy birthday, " + customer4.name);
}
if (customer5.birthday === today) {
  console.log("Happy birthday, " + customer5.name);
}
```
It is likely you will hear other programmers to DRY this code - Don't Repeat Yourself. Here's how one could DRY up above code.

```
function wishIfBirthday(customer) {
  if (customer.birthday === today) {
    console.log('Happy birthday, ' + customer.name);
  }
}

const customerList = [customer1, customer2, customer3, customer4, customer5];

for (let i=0; i < customerList.length; i++) {
  wishIfBirthday(customerList[i]);
}
```

This is much more of a scalable solution, as if your list of customers increases, your birthday wishing will still work.

#### Commenting

We will all inevitably write some complex code that will be hard to understand at first. Or maybe you wrote a function that is hundreds of lines long, and you expect it to be used by your coworkers. In such times, it is important you comment your code. Here's some general rules to know when to comment!

- When you believe WHY you did something is not obvious

```
// 56 is to account for height of the menu bar.
let totalHeight = 56 + currentHeight;
```

- When you think some logic is complex and could be easier understood with words

```
// below tries to take middle item of array by dividing length by two and flooring it
let mid = array[Math.floor(array.length/2)]
```

Note that above type of comment usually depends on the expected level of your reader. Remember to avoid painfully obvious comments, like

```
// if country is US
if (country === 'US') {
  ...
}
```

Above comment is unnecessary and almost insulting to the reader.

- When writing a function you expect to be used by others, or is large / complex / has lots of arguments

When you comment functions, the convention is to follow the [javadoc commenting style](http://www.drjava.org/docs/user/ch10.html).

Copy pasted from above...

In general, Javadoc comments are any multi-line comments ("/** ... */") that are placed before class, field, or method declarations. (...) Normal Javadoc comments can be placed before any class, field, or method declaration to describe its intent or characteristics.

Tags can be used to provide structured information. Most commonly, `@param` and `@return` tags are to be used when applicable. These tags should describe the expected type, often surrounded in `{}` to denote it is a type, not a variable name.

```
/**
  Creates a new student object with a name property.

  @return {object} with property `name` which is a {string}
*/
function createStudent() {
  return {
    name: 'Matt Damon'
  };
}

/**
  Sets the name of a given student. This may involve a lengthy legal process.

  @param student {object} with property `name` that
                          will be overwritten
  @param newName {string} the new name of the student
*/
function setName(student, newName) {
  student.name = newName;
}// note the lack of @return, which means this function returns nothing, so `undefined`
```

You do not have to use the `@` annotation, though very common. It is more important you write comments that describe the resulting effect of your function and, if not obvious, WHY this function is needed.

