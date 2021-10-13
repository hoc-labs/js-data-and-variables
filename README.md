# 🥚 Comments and Logs

Comments and logs are for developers, not for the computer. They exist to help
you understand your program.

Comments and logging will not change what your program does, just how easy it is
to understand.

## Comments

```js
'use strict';

// comments are for people to read, not computers
// these are both one-line comments

// if you run or trace this snippet, nothing will happen

/* this is a block comment

  block comments are useful for writing longer messages

  - and for
  - things like
  - lists

  if you run or trace this snippet nothing will happen
*/
```

## Logging

```js
'use strict';

// print a message to the browser's console
console.log('-- logging --');

// an empty log
console.log();

// you can log more than one thing at a time
console.log('a', 'message', 'from', 'beyond'); // 'a', 'message', 'from', 'beyond'
```

---

# 🥚 Primitive Values

Programming computers is all about processing _data_. Data comes into a program,
your program processes the data, and some new data comes out at the end. In
JavaScript the most basic kinds of data are **primitive values**. When talking
about a primitive value, there are two important pieces of information:

- **Type**: What type of data is it? a string? a number? a boolean? undefined?
- **Value**: Which one of it's type is it? Is it the _number_ **5**? or the
  _string_ **'5'**?

You will learn more about each of these types as you work your way through JavaScript:

```js
'use strict';
console.log('--- booleans: true and false ---');
console.log(true);
console.log(false);


console.log('--- strings: anything wrapped in quotation marks ---');
console.log('hello');
console.log('good bye');
console.log('12'); // <- this  actually a string!
console.log(''); // an empty string


console.log('--- undefined: one way to say "there is nothing here" ---');
console.log(undefined);

console.log('--- null: another way to say "there is nothing here" ---');
console.log(null);
// we will later cover the difference between null and undefined

console.log('--- numbers: numbers that are not wrapped in quotation marks ---');
console.log(12);
console.log(0);
console.log(-12);
```
---
# Operators

Operators are what you use to process or change the data in your programs.
Operators take in values, do something, and return a new value. Each operator
has it's own rules about what it does and how it does it. To understand an
operator you need to understand these things:

- **Syntax**: how do you write the operator in your code?
- **Input(s)**: how many inputs does the operator take? what type are they? what
  are their values?
- **Output**: What does the operator evaluate to? What type does it return?
- **Behavior**: How does the operator use it's inputs to create an output?

Here are a few of the operators you will learn about in JavaScript, you will learn more about operators as you need them:

<details>
<summary>🥚 <code>typeof</code> (type of)</summary>

```js
'use strict';
console.log('-> type of: typeof');

/* the typeof operator will tell you the type of a value

  syntax: the typeof operator takes in only one value
    -> typeof _
  inputs: you can pass any value to typeof
  output: a string saying what type the value is
  behavior: typeof returns the name of a value's type
    in Welcome to JS the important types will be:
    -> 'boolean'
    -> 'string'
    -> 'undefined'
    -> 'object' (null, confusing but that's the way it is)
    -> 'number'
*/

console.log(typeof true); // 'boolean'
console.log(typeof 'hello'); // 'string'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof 12); // 'number'
```

</details>
<details>
<summary>🥚 <code>===</code> (strict equality)</summary>

```js
'use strict';
console.log('-> strict equality: ===');

/* the strict comparison operator will tell you if two primitives are the same

  syntax: the === operator takes in two values
    -> _ === _
  inputs: you can pass any value to ===
  output: a boolean value saying if the two values are the same
  behavior: === checks the type AND the value
    if the types are different, it returns false
    if the values are different, it returns false
    if the type and value are the same, it returns true
*/

// true comparisons: same type, same value
console.log(true === true); // true
console.log(12 === 12); // true
console.log('hello' === 'hello'); // true
console.log(undefined === undefined); // true
console.log(null === null); // true

// false comparisons: same type, different value
console.log(12 === 1); // false
console.log('hello' === 'Hello'); // false
console.log(true === false); // false

// false comparisons: different type, different value
console.log('12' === 12); // false
console.log('undefined' === undefined); // false
console.log(true === 'true'); // false
console.log(100 === 'true'); // false
console.log(true === 1); // false
```

</details>
<details>
<summary>🥚 <code>+</code> (concatenation or addition)</summary>

```js
'use strict';
/*
  the plus operator is more complex
  it behaves differently depending on the types passed in
  it is also called something different depending on the types used
  (but the syntax is always the same)
*/

console.log('-> concatenation: +');

/* string concatenation

  syntax: the + operator takes in two values
    -> _ + _
  inputs: two strings are passed in for concatenation
  output: a new string created by combining the first two
  behavior: when both arguments are a string, they are combined
    'a string' + 'another string'
    becomes
    'a stringanother string'

*/

console.log('hello ' + 'goode bye'); // 'hello good bye'
console.log('hello ' + 'goode ' + 'bye'); // 'hello good bye'

console.log('-> addition: +');
/* number addition

  syntax: the + operator takes in two values
    -> _ + _
  inputs: two numbers are passed in for addition
  output: a new number created by adding both arguments
  behavior: like normal math (for now)
    5 + 3 --> 8
    1 + 1 --> 2
    -1 + -1 --> 0

*/

console.log(5 + 8); // 13
console.log(3 + 3 + 3); // 9
```

</details>

## Practice Problems

<details>
<summary><code>+</code> operator - addition</summary>

```js
'use strict';

// your answers should only include numbers and +

console.log('--- find 5 ways to log the number 5 ---');
// examples
console.log(5);
console.log(0 + 2 + 3);
// exercises
console.log();
console.log();
console.log();
console.log();
console.log();

console.log('--- find 4 ways to log the number 4 ---');
// examples
console.log(4);
console.log(2 + 2);
// exercises
console.log();
console.log();
console.log();
console.log();
```

</details>

<details>
<summary><code>+</code> operator - concatenation</summary>

```js
'use strict';

// your answers should only include strings and +

console.log('--- find 3 ways to log "hello" ---');
// examples
console.log('hello');
console.log('h' + 'ello');
// exercises
console.log();
console.log();
console.log();

console.log('--- find 4 ways to log "good bye" ---');
// examples
console.log('good bye');
console.log('good' + ' ' + 'bye');
// exercises
console.log();
console.log();
console.log();
console.log();
```
</details>

<details>
<summary><code>===</code> strict equality operator</summary>

```js
'use strict';

// your answers must include ===, but can use any type

console.log('--- write 5 comparisons that evaluate to true ---');
// examples
console.log('hello' === 'hello');
console.log('Bye' === 'Bye');
console.log(1 === 1.0);
// exercises
console.log();
console.log();
console.log();
console.log();
console.log();

console.log('--- write 5 comparisons that evaluate to false ---');
// examples
console.log('hello' === 'hello ');
console.log('Bye' === 'bye');
console.log(1 === 1.1);
// exercises
console.log();
console.log();
console.log();
console.log();
console.log();
```
</details>

<details>
<summary>typeof operator</summary>

```js

'use strict';

// your answers must use typeof, but can use any values
console.log('-- write 2 values with the type "boolean" --');
console.log(typeof _); // 'boolean'
console.log(typeof _); // 'boolean'

console.log('-- write 1 value with the type "object" --');
console.log(typeof _); // 'object'

console.log('-- write 5 values with the type "string" --');
// examples
console.log(typeof 'hello'); // 'string'
console.log(typeof ''); // 'string'
// exercises
console.log(typeof _); // 'string'
console.log(typeof _); // 'string'
console.log(typeof _); // 'string'
console.log(typeof _); // 'string'
console.log(typeof _); // 'string'

console.log('-- write 5 values with the type "number" --');
// examples
console.log(typeof 0); // 'number'
console.log(typeof 18.5); // 'number'
// exercises
console.log(typeof _); // 'number'
console.log(typeof _); // 'number'
console.log(typeof _); // 'number'
console.log(typeof _); // 'number'
console.log(typeof _); // 'number'

```
</details>

---
# Booleans

A primitive type with two values: `true` and `false`.

These are helpful for making decisions in your programs, it's like asking `yes`
or `no`.

```js
'use strict';
console.log('-- booleans --');

// there are only two boolean values:
console.log(true); // true
console.log(false); // false
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof booleans --');

// they both have the type "boolean"
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- booleans: strict equality --');

// boolean values are only strictly equal to themselves
console.log(true === true); // true
console.log(false === false); // true

// they are not equal to each other
console.log(true === false); // false
console.log(false === true); // false

// booleans are not equal to any other type
console.log(true === 'true'); // false
console.log(false === ''); // false
console.log(true === 12); // false
console.log(false === undefined); // false
```

</details>
<details>
<summary>🥚 strict inequality</summary>

```js
'use strict';
console.log('-- booleans: strict inequality --');

// boolean values are strictly inequal to everything but themselves
console.log(true !== true); // false
console.log(false !== false); // false

// they are not equal to each other
console.log(true !== false); // true
console.log(false !== true); // true

// booleans are not equal to everything else
console.log(true !== 'true'); // true
console.log(false !== ''); // true
console.log(true !== 12); // true
console.log(false !== undefined); // true
```

</details>
<details>
<summary>🥚 not</summary>

```js
'use strict';
console.log('-- not --');

// you can use ! to reverse true and false
console.log(!true); // false
console.log(!false); // true
```

</details>
<details>
<summary>🐣 and</summary>

```js
'use strict';
console.log('-- and --');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

</details>
<details>
<summary>🐣 or</summary>

```js
'use strict';
console.log('-- or --');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

</details>

## Practice Problems

<details>
<summary><code>and</code> operator</summary>

```js
'use strict';

// fill in the _ to complete the exercises
//  your answers should all be boolean values

console.log(true && _); // true
console.log(_ && true); // false
console.log(false && _); // false
console.log(_ && false); // false

console.log(_ && _); // false
console.log(_ && _); // false
console.log(_ && _); // true
console.log(_ && _); // false
```
</details>

<details>
<summary><code>not</code> operator</summary>

```js
'use strict';

// your answers can only use ! and boolean values
//  all of your answers do not need the ! operator

console.log(); // true using !
console.log(); // true without !
console.log(); // false using !
console.log(); // false without !
```
</details>

<details>
<summary><code>or</code> operator</summary>

```js
'use strict';

// fill in the _ to complete the exercises
//  your answers should all be boolean values

console.log(true || _); // true
console.log(_ || true); // true
console.log(false || _); // true
console.log(_ || false); // false

console.log(_ || _); // true
console.log(_ || _); // false
console.log(_ || _); // true
console.log(_ || _); // true
```
</details>

---
# Strings

A primitive type used for saving and working with text. A string is anything
wrapped in quotes: `'something'` or `"something"`:

```js
'use strict';
console.log('-- strings --');

console.log('this is a string');
console.log('so is this');

// use \n to make a string print on more than one line
console.log('first line\nsecond line\nthird line');

// use ' and " to put quotes inside your strings
console.log('strings can use "double quotes"');
console.log("strings can use 'single quotes'");

// the empty string: quotes with nothing in them
// it's still a string!
console.log('');
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof strings --');

// strings are anything wrapped in quotations, ' or "
console.log('hello!'); // 'hello!'
console.log('you say "hello", i say "good bye"'); // 'you say "hello", i say "good bye"'
console.log("you say 'hello', i say 'good bye'"); // "you say 'hello', i say 'good bye'"

// this is the empty string. it is a string, but with no characters
console.log(''); // ''

// you can check if something is a string with typeof
console.log(typeof ''); // 'string'
console.log(typeof 'trees'); // 'string'
console.log(typeof 'apple "the green" fruit'); // 'string'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- strings: strict equality --');

// two strings are the same thing if they have exactly the same characters
console.log('' === ''); // true
console.log('asdf' === 'asdf'); // true
console.log('12D' === '12D'); // true

// two strings with different characters are not the same string
console.log('' === ' '); // false
console.log('asdf' === 'Asdf'); // false
console.log('cow' === 'horse'); // false

// strings are never the same as different types
console.log('' === true); // false
console.log('true' === true); // false
console.log('12' === 12); // false
console.log('null' === null); // false
console.log('hello' === 100); // false
```

</details>
<details>
<summary>🥚 strict unequality</summary>

```js
'use strict';
console.log('-- strings: strict inequality --');
// the opposite of strict equality

// two strings are not unequal if they have exactly the same characters
console.log('' !== ''); // false
console.log('asdf' !== 'asdf'); // false
console.log('12D' !== '12D'); // false

// two strings with different characters are unequal
console.log('' !== ' '); // true
console.log('asdf' !== 'Asdf'); // true
console.log('cow' !== 'horse'); // true

// strings are always unequal to different types
console.log('' !== true); // true
console.log('true' !== true); // true
console.log('12' !== 12); // true
console.log('null' !== null); // true
console.log('hello' !== 100); // true
```

</details>
<details>
<summary>🥚 string concatenation</summary>

```js
'use strict';
console.log('-- string concatenation --');

// you can combine strings using +
console.log('abc' + '123'); // 'abc123'
console.log('a' + 'bc1' + '23'); // 'abc123'
```

</details>

---
# Undefined

A primitive type used to show that there is no value.

```js
'use strict';
console.log('-- undefined --');

// just this, nothing more to it
console.log(undefined);
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof undefined --');

console.log(typeof undefined); // 'undefined'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- undefined: strict equality --');

// undefined is only strictly equal to undefined
console.log(undefined === undefined); // true

// any other strict equality is false
console.log(undefined === 'undefined'); // false
console.log(undefined === 0); // false
console.log(undefined === null); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
'use strict';
console.log('-- undefined: strict inequality --');
// this will always be the opposite of strict equality

console.log(undefined !== undefined); // false

// any other strict inequality is true
console.log(undefined !== 'undefined'); // true
console.log(undefined !== 0); // true
console.log(undefined !== null); // true
```

</details>

This is the default value for all variables that have not been assigned, more
about that in the next folder.

---
# Variables

Variables allow you to save values to use later in your program.

They're kind of like a box that can only hold one thing at a time.

```js
"use strict";
// let -> the declaration
// iAm -> the variable name
// = -> the assignment operator
// 'a variable' -> the initial value
let iAm = "a variable";
console.log(iAm);
```

<details>
<summary>🥚 declare, initialize, assign</summary>

```js
"use strict";
console.log("-- declare, initialize, assign --");

// declare a value and initialize it's value
let favoriteTree = "palm";
console.log(favoriteTree); // 'palm'

// assigning a different value
favoriteTree = "oak";
console.log(favoriteTree); // 'oak'

// declare variable with an initial value
let bread = "fresh";
console.log(bread); // 'fresh'

// re-assign the variable
bread = "stale";
console.log(bread); // 'stale'
```

</details>
<details>
<summary>🥚 uninitialized variables</summary>

```js
"use strict";
console.log("-- uninitialized variables --");

// declaring a variable without an initial value
//  it will be initialized to undefined by default
let uninitialized;
console.log(uninitialized); // undefined

// you can assign values to uninitialized variables
uninitialized = "something";
console.log(uninitialized); // 'something'

// initializing a variable to undefined does the same thing
let initialized = undefined;
console.log(initialized); // undefined
```

</details>

> PS. In this module you will only learn about `let`. You will cover `const` and
> `var` in later modules.

---

## Using Variables

Variables are relatively simple, they store a value and that value can change.
What becomes more challenging is understanding how to use variables in a
program.

Below is a few examples of what you can do with variables, the
[naming-variables](../naming-variables) exercises go into more depth on the
different ways you can use a variable in your programs.

<details>
<summary>🥚 different types</summary>

```js
"use strict";
console.log("-- variables: different types --");
// variables can store any type
//  and you can change the types all you want

// declare and assign a boolean value
let variable = true;
console.log(typeof variable); // 'boolean'

// assign a string to the variable
variable = "computers";
console.log(typeof variable); // 'string'

// assign undefined to the variable
variable = undefined;
console.log(typeof variable); // 'undefined'

// and another boolean
variable = false;
console.log(typeof variable); // 'boolean'
```

</details>
<details>
<summary>🥚 assigning results</summary>

```js
"use strict";
console.log("-- assigning results --");
// you can assign the result of an operation to a variable

// boolean logic
let falseOrTrue = false || true;
console.log(falseOrTrue); // true

// string concatenation
let favoriteTree = "p" + "a" + "l" + "m";
console.log(favoriteTree); // 'palm'

// replacing things in a string
let noJoy = "enjoy life".replaceAll("joy", "");
console.log(noJoy); // 'en life'

// searching a string with .includes
let hasAnApple = "bananaapplemango".includes("apple");
console.log(hasAnApple); // true
```

</details>
<details>
<summary>🥚 reading variables</summary>

```js
"use strict";
console.log("-- reading variables --");

// you can read the values stored in a variable
//  and use them anywhere you can use the value it stores

// operate on a string stored in a variable
let car = "vrooom";
let loudCar = car.toUpperCase();
let excitedCar = loudCar.replaceAll("O", "!");
console.log(excitedCar); // 'VR!!!M'

// use a string stored in a variable as an argument
let oldLetter = "f";
let newLetter = "d";
let happyAnimal = "fog".replaceAll(oldLetter, newLetter);
console.log(happyAnimal); // 'dog'

// all together
let characterName = "  harry potter   ";
let trimmedName = characterName.trim(); // 'harry potter'

let bookTitle = "Harry Potter and the Magical Thing";
let titleLowerCase = bookTitle.toLowerCase(); // 'harry potter and the magical thing'

let includesName = titleLowerCase.includes(trimmedName);
console.log(includesName); // true
```

</details>
<details>
<summary>🥚 swapping values</summary>

```js
"use strict";
console.log("-- swapping values --");

/*
  swapping values between two variables is a good little exericse
  it's not something you'll see much in programs
  but it's a great way to understand how variables work
*/

// declare two variables with values that need to be swapped
let a = 2;
let b = 1;
// declare a variable to store values temporarily
let temp;
console.log(a, b, temp); // 1, 2, undefined

// assign the value stored in 'a' to 'temp'
temp = a;
console.log(a, b, temp); // 2, 1, 2

// assign the value stored in 'b' to 'a'
a = b;
console.log(a, b, temp); // 1, 1, 2

// assign the value stored in 'temp' to 'b'
b = temp;
console.log(a, b, temp); // 1, 2, 2
```

</details>

---

## Three Common Errors

Programming languages have strict rules about what you can and cannot do. Here
are three errors you will make quite a bit when you start your own
[explorations](../explorations), even a spelling mistake can cause these errors!

You may get different error messages depending on which browser you are using,
but they mean the same thing. In Debugging we will go much deeper into
interpreting and correcting program errors.

<details>
<summary>🥚 not declaring a variable</summary>
<br>

Using a variable that has not been declared will throw an error (when you're in
strict mode, but that's a story for another day. All the exercises in this repo
are run in strict mode).

```js
"use strict";
console.log("-- not declaring 1 --");

// let animal; // uncomment this line to fix the error
animal = "horse"; // ReferenceError
```

```js
"use strict";
console.log("-- not declaring 2 --");

// a common mistake is spelling your variables incorrectly
let spellingMistake = "oops!";
console.log(spelingMistake); // ReferenceError
```

</details>
<details>
<summary>🥚 using a variable before it is declared</summary>

```js
"use strict";
console.log("-- using before declaration --");

// read the variable - will throw an error!
console.log(favoriteColor);

// declare and initialize the variable
let favoriteColor = "red";

// read the variable
console.log(favoriteColor);
```

</details>
<details>
<summary>🥚 declaring a variable twice</summary>
<br>

Declaring a variable tells JavaScript to prepare a place in memory with that
name. Trying to create two spaces in memory with the same name will cause an
error.

- Chrome & Chromium-based browsers:
  `SyntaxError: Identifier '_' has already been declared`
- Firefox: `SyntaxError: redeclaration of let _`

```js
"use strict";
// ! this log never happens !
//  syntax errors happen before the program runs
//  so no single line of code will happen
//  you will learn more about program life cycle in Debugging
console.log("-- declaring twice --");

let vegetable = "carrot";
let vegetable = "potato"; // SyntaxError
// vegetable = 'potato'; // no error
```

</details>

---

## Variable Names

In JavaScript there are a few rules about naming variables. There aren't too
many rules and the rules aren't very complicated, you just need to learn them:

- [javascript.info](https://javascript.info/variables#variable-naming)
- [nexTRIE](https://www.youtube.com/watch?v=O5WlRR-lEDE)
- [launchcode](ntro-to-professional-web-dev/chapters/data-and-variables/more-on-variables.html#naming-variables)

<details>
<summary>🥚 variable names <strong>can</strong> use numbers, letters, $, or _</summary>

```js
"use strict";
console.log("-- valid variable names --");
// all of these variable names are ok

let $ = 1;
let _ = 2;
let a = 3;
let A = 4;
let b1_$ = 5;
let HackYourFuture2021_$ = 6;
let b_e_l_g_i_u_m = 7;
// ...
```

</details>
<details>
<summary>🥚 variable names <strong>are</strong> case-sensitive</summary>

```js
"use strict";
console.log("-- variable names are case-sensitive --");

// notice, there is no error.
//  JS does not consider this as declaring the same variable twice
let javascript = "a programming language";
let JavaScript = "upper case!";

console.log(javascript); // 'a programming language'
console.log(JavaScript); // 'upper case!'
```

</details>
<details>
<summary>🥚 variable names can <strong>not</strong> start with a number</summary>

```js
'use strict';
console.log('-- variable names cannot start with a number --')

let a1 = 'this works';

let 1a = 'will throw an error';
```

</details>
<details>
<summary>🥚 variable names can not use any other characters</summary>

```js
'use strict';
let a*a = 'will throw an error';
```

```js
'use strict';
let a-b-c = 'will throw an error';
```

```js
'use strict';
let @hyf = 'will throw an error';
```

```js
'use strict';
// spaces count as other characters
let hack your future = 'will throw an error';
```

</details>
<details>
<summary>🥚 variable names can not be <strong>reserved words</strong></summary>
<br>

In JavaScript there are some words that you cannot use as variable names. These
are called _Reserved Words_. Some of them are words which carry special meaning
in JS like `let` or `null`. Other reserved words don't have any special meaning
yet, but may in the future.

```js
'use strict';
let var = 'will throw an error';
```

```js
'use strict';
let null = 'will throw an error';
```

```js
'use strict';
let function = 'will throw an error';
```

```js
"use strict";
let public = "will throw an error";
```

all the reserved works, in a list:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
- [w3schools](https://www.w3schools.com/js/js_reserved.asp)

</details>

### Good Variable Names

Just because a variable name doesn't throw an error doesn't mean it's a good
name.

A good variable name is easy to read and helps you understand what the program
does. You will learn more about how to choose good variable names in Debugging.
For now take a look at these two programs with the same logic. see how good
names help, and bad names can be confusing:

<details>
<summary>🐣 confusing variable names</summary>

```js
"use strict";
let thisThing = "hello";
let thatThing = "";

for (let oneThing of thisThing) {
  thatThing = oneThing + thatThing;
}

console.log(thatThing); // 'olleh'
```

</details>

<details>
<summary>🐣 helpful variable names</summary>

```js
"use strict";
let forwards = "hello";
let backwards = "";

for (let nextLetter of forwards) {
  backwards = nextLetter + backwards;
}

console.log(backwards); // 'olleh'
```

</details>

### Built-in Variables

Some variables already come with JavaScript, you do not need to declare them to
use them. Think of `console` - you didn't write that variable but you use it all
the time.

These a not the same as reserved words, you can use declare or reassign them!
Declaring built-in variables will almost always cause problems in your programs
because you _over-write_ the value that was stored before. There are some
advanced use-cases when this is helpful, but you won't learn about those at HYF.

Here are some examples of using built-in variable names in your programs. These
are just examples, not suggestions ;)

<details>
<summary>🐥 assigning to a built-in variable</summary>

```js
"use strict";
// this log will work because console has not been reassigned
console.log("-- assigning to console --");

console = "hello";

// see? it's a string!
alert(console);

// this log will not work, console now stores a string
console.log("will throw an error");
```

</details>
<details>
<summary>🐥 declaring a built-in name</summary>

```js
"use strict";
console.log("-- declaring a variable named alert 1 --");

// this will not work!
//  JS treats this like using a variable before it's declaration
alert("huh?"); // ReferenceError - use before declare

let alert = "hello";

console.log(alert);
```

```js
"use strict";
console.log("-- declaring a variable named alert 2 --");

let alert = "hello";

console.log(alert);

alert("will throw an error"); // TypeError - not a function
```

</details>

---

## Practice Problems

<details>
<summary>Fix errors - 1</summary>

```js
'use strict';

let favorteColor = 'red';
console.log(favoriteColor); // 'red'

hasFiveFingers = true;
console.log(hasFiveFingers); // true
```
</details>

<details>
<summary>Fix errors - 2</summary>

```js
'use strict';

let favoriteVegetable = 'potato';
console.log(favoriteVegetable); // 'potato'

let favoriteVegetable = 'carrot';
console.log(favoriteVegetable); // 'carrot'
```
</details>

<details>
<summary>Fix errors - 3</summary>

```js
'use strict';

favoriteVegetable = 'potato';
console.log(favoriteVegetable); // 'potato'

let favoriteVegetable = 'carrot';
console.log(favoriteVegetable); // 'carrot'
```
</details>

<details>
<summary>Tracing Instructions - 1</summary>

```js
'use strict';

let phrase = 'a';

phrase = ' ' + phrase + ' ';

phrase = phrase + 'car';

phrase = 'drive' + phrase;

console.log(phrase); // 'drive a car'
```
</details>

<details>
<summary>Tracing Instructions - 2</summary>

```js
'use strict';

let a = 'bye';
let b = 'hi';
let temp;

temp = a;
a = b;
b = temp;

console.log('a:', a);
console.log('b:', b);
console.log('temp:', temp);
```

</details>

<details>
<summary>Tracing Instructions - 3</summary>

```js
'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b;
b = a;
a = temp;

console.log('a:', a);
console.log('b:', b);
console.log('temp:', temp);
```
</details>

<details>
<summary>Parsons</summary>

```js
'use strict';

let a = 'bye';
let b = 'hi';
let temp;

temp = a;
a = b;
b = temp;

console.log('a:', a);
console.log('b:', b);
console.log('temp:', temp);
```
</details>

<details>
<summary>Fill in the Blanks</summary>

```js
/* 1. declare 3 variables */
let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b
  this can be done with 3 assignments
*/
temp = a;
a = b;
b = temp;

/* 3. compare the final values
  all the comparisons should be true
*/
console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'y'); // true
```
</details>

## Quiz - Errors

<details>
<summary>Error 1</summary>

```js
'use strict'; // line 1

let animal = 'dog'; // line 2

console.log(animal); // line 3

let animal = 'cat'; // line 4
```

### Which error will be thrown by this code?

<details>
<summary><strong>A. SyntaxError</strong></summary>
<br>

Correct! Declaring two variables with the same name is a _SyntaxError_.

This error is caught in _creation phase_, the program will not even start
running. (you'll learn more about this in Debugging)

</details>
<details>
<summary><strong>B. ReferenceError</strong></summary>
<br>

Nope. _ReferenceErrors_ happen when you try to use a variable that was never
declared.

The problem here is that the variable was declared twice.

</details>

### On which line will the error occur?

<details>
<summary><strong>A. line 1</strong></summary>
<br>

Nope. Line 1 is the `"use strict";` directive, it changes the way JS interprets
your code but it's not a _step_ in your program.

Errors will never occur on the `"use strict";` line.

</details>
<details>
<summary><strong>B. line 2</strong></summary>
<br>

Nope. The first time you declared the variable `animal` everything is ok, you
can always declare a variable once.

</details>
<details>
<summary><strong>C. line 3</strong></summary>
<br>

Nope. This line is never actually executed!

Because the _SyntaxError_ occurs **before** the program actually runs (creation
phase), the value stored in `animal` is never logged.

</details>
<details>
<summary><strong>D. line 4</strong></summary>
<br>

Correct! The error occurs on _line 4_ because this is where `animal` is declared
for the **second** time.

Declaring the same variable twice will cause an error. (unless they're in
different _scopes_, more on this in a few chapters.)

</details>
</details>

<details>
<summary>Error 2</summary>

```js
'use strict'; // line 1

animal = 'dog'; // line 2

console.log(animal); // line 3

let animal = 'cat'; // line 4
```

## Which error will be thrown by this code?

<details>
<summary><strong>A. SyntaxError</strong></summary>
<br>

Nope. A _SyntaxError_ occurs with `let` when you try to declare the same
variable more than once.

In this snippet `animal` is only declared once, so that's not the problem.

</details>
<details>
<summary><strong>B. ReferenceError</strong></summary>
<br>

Yup! This is a _ReferenceError_ because you are trying to use the variable
`animal` _before_ it was declared.

It is _declared_ on line 4, but it is first _read_ on line 2.

</details>

### On which line will the error occur?

<details>
<summary><strong>A. line 1</strong></summary>
<br>

Nope. Line 1 is the `"use strict";` directive, it changes the way JS interprets
your code but it's not a _step_ in your program.

Errors will never occur on the `"use strict";` line.

</details>
<details>
<summary><strong>B. line 2</strong></summary>
<br>

Correct! On line 2 the `animal` is _read_, but `animal` is _declared_ on line 4.
Reading a variable before it is declared will cause a _ReferenceError_.

</details>
<details>
<summary><strong>C. line 3</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 3.

</details>
<details>
<summary><strong>D. line 4</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 4.

Yes, this line does declare the variable `animal`. But that doesn't matter
because `animal` is _read_ on line 2 before it is _declared_ on line 4.

</details>
</details>

<details>
<summary>Error 3</summary>

```js
'use strict'; // line 1

animal = 'dog'; // line 2

console.log(animal); // line 3

animal = 'cat'; // line 4
```

### Which error will be thrown by this code?

<details>
<summary><strong>A. SyntaxError</strong></summary>
<br>

Nope. A _SyntaxError_ occurs with `let` when you try to declare the same
variable more than once.

In this snippet `animal` is only declared once, so that's not the problem.

</details>
<details>
<summary><strong>B. ReferenceError</strong></summary>
<br>

Yup! This is a _ReferenceError_ because you are trying to use the variable
`animal` while it was never declared in the program.

</details>

### On which line will the error occur?

<details>
<summary><strong>A. line 1</strong></summary>
<br>

Nope. Line 1 is the `"use strict";` directive, it changes the way JS interprets
your code but it's not a _step_ in your program.

Errors will never occur on the `"use strict";` line.

</details>
<details>
<summary><strong>B. line 2</strong></summary>
<br>

Correct! On line 2 the `animal` is _read_, but `animal` is never _declared_.
Reading a variable before it is declared will cause a _ReferenceError_.

</details>
<details>
<summary><strong>C. line 3</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 3.

</details>
<details>
<summary><strong>D. line 4</strong></summary>
<br>

Nope. The error occurs earlier in the program so the program will never reach
line 4.

</details>

</details>

---
## Quiz - Swapping Values

<details>
<summary>Swapping Values</summary>

```js
'use strict'; // line 1

// declare and initialize variables
let a = 'y'; // line 2
let b = 'x'; // line 3
let temp; // line 4

// swap the values stored in `a` and `b`
temp = b; // line 5
b = a; // line 6
a = temp; // line 7
```

### What is the _final_ value of `a`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. `a` never stores the value `undefined` in this program.

`a` is _initialized_ to `"y"` on line 2, and later _reassigned_ to `"x"` on
line 7.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Correct! On line 7 `"x"` is _assigned_ to `a`.

Because this is the last time `a` is _assigned_ a value, `"x"` is the final
value stored in `a`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `"y"` is the _initial_ value stored in `a`, but on line 7 `a` is
reassigned a new value.

Because line 7 is the _last time_ `a` is assigned a new value and it is assigned
`"x"`, it's not possible for the final value to be `"y"`.

</details>

### What is the _final_ value of `b`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. `b` never stores the value `undefined` in this program.

`b` is _initialized_ to `"x"` on line 3, and later _reassigned_ to `"y"` on
line 6.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Nope. `"x"` is the _initial_ value stored in `b`, but on line 6 `b` is
reassigned a new value.

Because line 6 is the _last time_ `b` is assigned a new value and it is assigned
`"y"`, it's not possible for the final value to be `"x"`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Correct! On line 6 `"y"` is _assigned_ to `b`.

Because this is the last time `b` is _assigned_ a value, `"y"` is the final
value stored in `b`.

</details>

### What is the _initial_ value of `temp`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Correct! On line 4 `temp` is _declared_ but not _initialized_, so it's value is
`undefined` by default.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Nope. `temp` is _declared_ but not _initialized_. This means it's initial value
will be `undefined` by default.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `temp` is _declared_ but not _initialized_. This means it's initial value
will be `undefined` by default.

</details>

### What is the _final_ value of `temp`?

<details>
<summary><strong>A. undefined</strong></summary>
<br>

Nope. The _initial_ value for `temp` is `undefined`, but on line 5 it is
assigned the value `"x"`.

Because this is the last time that `temp` is _reassigned_, `"x"` is the final
value.

</details>
<details>
<summary><strong>B. "x"</strong></summary>
<br>

Correct! On line 5 `"x"` is _assigned_ to `temp`.

Because this is the last time `temp` is _assigned_ a value, `"x"` is the final
value stored in `temp`.

</details>
<details>
<summary><strong>C. "y"</strong></summary>
<br>

Nope. `temp` never stores the value `"y"`. The only two values it stores in this
program are `"x"` and `undefined`.

</details>
</details>

---

# Null

Another primitive type used to represent nothing.

```js
'use strict';
console.log('-- null --');

// that's it, plain and simple
console.log(null);
```

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof null --');

// this is not intuitive, you just need to memorize it
console.log(null); // null
console.log(typeof null); // 'object'
```

</details>
<details>
<summary>🥚 strict equality</summary>

```js
'use strict';
console.log('-- null: strict equality --');

// null is only strictly equal to null
console.log(null === null); // true

// any other comparison is false
console.log(null === 'null'); // false
console.log(null === 0); // false
console.log(null === undefined); // false
```

</details>
<details>
<summary>🥚  strict inequality</summary>

```js
'use strict';
console.log('-- null: strict inequality --');
// this will always be the opposite of strict equality

console.log(null !== null); // false

// any other strict inequality with null will be true
console.log(null !== 'null'); // true
console.log(null !== 0); // true
console.log(null !== undefined); // true
```

</details>

## `null` vs. `undefined`

> The ECMAScript language specification describes them as follows:
>
> - `undefined` is “used when a variable has not been assigned a value”
> - `null` “represents the intentional absence of any object value”
>
> [2ality](https://2ality.com/2021/01/undefined-null-revisited.html)

The practical difference between `null` and `undefined` is that `null` will not
appear in your program by accident. `undefined` can appear in your program if
you forgot to assign a value, but `null` always need to be assigned.

If a variable stores `null` it was put there on purpose.

```js
'use strict';
console.log('-- variables with null --');

// you need to assign null to a variable
//  a variable cannot store null by accident
let variable;
console.log(variable); // undefined
console.log(typeof variable); // 'undefined'

variable = null;
console.log(variable); // null
console.log(typeof variable); // 'object'

// you can also initialize a variable to null
let breakfast = null;
console.log(breakfast);
console.log(typeof breakfast);
```

---
# User Interactions

Logging is for developers, Interactions are for Users. JavaScript in the browser
has 3 ways to do basic user interactions. They don't create the best user
experience but they are practical for learning to program.

Learning to use these 3 functions will help you to understand primitive types
and values. Each interaction is a _function_ (you'll learn more about functions
in Debugging). Functions _return_ a value, meaning that you can use them to
assign a value to a variable. But each interaction returns a _different_ type.

Adding interactions into your programs will make them more interesting to study.
You can't know exactly what values a user will input, so your programs have to
deal with some uncertainty!

Trace this example and see each type of interaction in action:

```js
'use strict';
console.log('-- user interactions --');

let alertValue = alert('this is an alert');
console.log(alertValue); // undefined

let confirmValue = confirm('this is a confirm');
console.log(confirmValue); // true or false

let promptValue = prompt('this is a prompt');
console.log(promptValue); // a string or null
```

<details>
<summary>🥚 alert</summary>

```js
'use strict';
console.log('-- alert --');
// alert: displays a message to the user
//  the user can only read the message, they can't input anything to your program
let alerted = alert('pancakes');

// alert will always return undefined, no matter what
console.log(alerted); // undefined
console.log(typeof alerted); // 'undefined'
```

</details>
<details>
<summary>🥚 confirm</summary>

```js
'use strict';
console.log('-- confirm --');
// confirm: display a message and ask the user to say "yes" or "no"

// run this example a few times with your console open. what happens if you:
//  click "ok"?
//  click "cancel"?
//  press the "enter" key on your keyboard?
//  pres the "esc" key on your keyboard?
let confirmed = confirm('want some pancakes?');

// confirm will always return a boolean value:
//  true if the user clicks ok
//  false if the user clicks cancel
console.log(confirmed); // true or false
console.log(typeof confirmed); // 'boolean'
```

</details>
<details>
<summary>🥚 prompt</summary>

```js
'use strict';
console.log('-- prompt --');

// prompt: display a message and allow the user to input some text

// run this example a few times in the console. what happens if you:
//  type something -> click "cancel" or press the "esc" key
//  type something -> click "ok" or press the "enter" key
//  do not type anything -> click "cancel" or press the "esc" key
//  do not type anything -> click "ok" or press the "enter" key
let prompted = prompt('what is your favorite kind of pancake');

// prompt will either return a string or null
//  null: if the user clicks "cancel" or presses the "esc" key
//  string: if the user clicks "ok" or uses the "enter" key
//    it doesn't matter if the user types anything or not!
//    if they type nothing, prompt returns an empty string
console.log(prompted); // the user's text or null
console.log(typeof prompted); // 'string' or 'object'
```

</details>

---

## Tracing User Interactions

Tracing code with user interactions is more challenging than tracing code with
no interactions. In programs with user interactions it's impossible to know what
values will be in your program until you run it!

This means you must think about all the different things a user could do. To
fully understand an interactive program you will need to trace it many times,
each time with different imagined values from the user.

---

## A Small Program

Here's a small program that uses `prompt`, `alert` and `confirm`. You'll learn
how it all works in the coming chapters.

<details>
<summary>check it out</summary>

```js
'use strict';
console.log('-- user interactions --');

let input = null;
while (input === null) {
  input = prompt('enter something');
}

let didConfirm = confirm('is this correct?\n\n "' + input + '"');
if (didConfirm) {
  alert('yes!');
} else {
  alert('no :(');
}
```

</details>

---
# Numbers

A primitive type used to represent numbers. The programs in this module used
mostly strings, but there will be few numbers.

Numbers in JavaScript are challenging to work with and understand, even for
experienced developers. You will take a deeper look into numbers in the next
module - Debugging. For now you just need to know this:

<details>
<summary>🥚 typeof</summary>

```js
'use strict';
console.log('-- typeof numbers --');

// you write numbers in JS by writing numbers. without quotes
console.log(-1); // -1
console.log(0); // 0
console.log(1); // 1

// the type of numbers is 'number'
console.log(typeof 100); // 'number'
console.log(typeof -100); // 'number'
console.log(typeof 12.3); // 'number'
```

</details>
<details>
<summary>🐣  strict equality</summary>

```js
'use strict';
console.log('-- numbers: strict equality --');

// are two numbers the same?
console.log(1 === 1.0); // true
console.log(12 === 12); // true
console.log(-3.0 === -3); // true

console.log(1 === 1.1); // false
console.log(-12 === 12); // false
console.log(0.3 === 3.0); // false

// comparing with any other type will always be false
console.log(1 === true); // false
console.log(12 === '12'); // false
console.log(0 === null); // false
```

</details>
<details>
<summary>🐣  strict inequality</summary>

```js
'use strict';
console.log('-- numbers: strict inequality --');
// this will always be the opposite of strict equality

// are two numbers different?
console.log(1 !== 1.0); // false
console.log(12 !== 12); // false
console.log(-3.0 !== -3); // false

console.log(1 !== 1.1); // true
console.log(-12 !== 12); // true
console.log(0.3 !== 3.0); // true

// comparing with any other type will always be true
console.log(1 !== true); // true
console.log(12 !== '12'); // true
console.log(0 !== null); // true
```

</details>
<details>
<summary>🐣 arithmetic</summary>

```js
'use strict';
console.log('-- numbers: arithmetic --');

console.log(' +');
// adding numbers
console.log(1 + 1); // 2
console.log(-1 + 1); // 0

console.log(' -');
// subtracting numbers
console.log(3 - 2); // 1
console.log(2 - 3); // -1

console.log(' *');
// multiplying numbers
console.log(3 * 2); // 6
console.log(3 * 5); // 15

console.log(' /');
// dividing numbers
console.log(30 / 2); // 15
console.log(12 * 3); // 4
```

</details>

<details>
<summary>🐣  comparisons</summary>

```js
'use strict';
console.log('-- relational operators --');

console.log(' >');
// is the left number bigger than the right one?
console.log(3 > 22); // false
console.log(22 > 3); // true
console.log(1 > 1); // false

console.log(' <');
// is the left number smaller than the right one?
console.log(3 < 22); // true
console.log(22 < 3); // false
console.log(1 < 1); // false

console.log(' >=');
// is the left number bigger than OR equal to the right one?
console.log(3 >= 22); // false
console.log(22 >= 3); // true
console.log(1 >= 1); // true

console.log(' <=');
// is the left number smaller than OR equal to the right one?
console.log(3 <= 22); // true
console.log(22 <= 3); // false
console.log(1 <= 1); // true
```

</details>

## Practice Problems

<details>
<summary>ranges</summary>

Fill in the  `_` and then test your answers by experimenting with different values for `number`.
### Exclusive Example
```js
'use strict';

// let number = -1;
// let number = 0;
// let number = 0.5;
// let number = 1;
let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;

console.log(number + ' is between 1 and 2 (excluding 1 and 2)');

// number is less than 1
console.log(number < 1);

// number is greater than 1 AND less than 2
console.log(number > 1 && number < 2);

// number is greater than 2
console.log(number > 2);
```

### Inclusive
```js
'use strict';

// let number = -1;
// let number = 0;
// let number = 0.5;
// let number = 1;
let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;

console.log(number + ' is between 1 and 2 (including 1 and 2)');

// numbers is less than or equal to 1
console.log(number <= 1);

// number is greater than or equal to 1 AND less than or equal to 2
console.log(number >= 1 && number <= 2);

// number number is greater than or equal to 2
console.log(number >= 2);

```

```js
'use strict';

// let number = -1;
// let number = 0;
// let number = 0.5;
// let number = 1;
let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;

console.log(number + ' is 1, 2 or 3');

// number is equal to 1
console.log(_);

// number is equal to 2
console.log(_);

// number is equal to 3
console.log(_);

// number is equal to 1 OR is equal to 2 OR is equal to 3
console.log(_);
```

```js
'use strict';

let number = 0;
// let number = 0.5;
// let number = 1;
// let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;
// let number = 3.5;
// let number = 4;
// let number = 4.5;
// let number = 5;
// let number = 5.5;
// let number = 6;

console.log(number + ' between 1 and 2, OR between 4 and 5 (inclusive)');

// number is greater than or equal to 1 AND is less than or equal to 2 (inclusive)
console.log(_);

// number is greater than or equal to 4 AND is less than or equal to 5 (inclusive)
console.log(_);

// number between 1 and 2 OR between 4 and 5 (inclusive)
console.log(_);
```

```js
'use strict';

let number = 0;
// let number = 0.5;
// let number = 1;
// let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;
// let number = 3.5;
// let number = 4;
// let number = 4.5;
// let number = 5;
// let number = 5.5;
// let number = 6;

console.log(number + ' between 1 and 2, OR between 4 and 5 (exclusive)');

// number is greater than 1 AND is less than 2 (exclusive)
console.log(_);

// number is greater than 4 AND less than 5 (exclusive)
console.log(_);

// number between 1 and 2 OR between 4 and 5 (exclusive)
console.log(_);
```

</details>

