# JavaScript - Data & Variables

## Overview
There are three sections that contain the work for this assignment:
* [Data & Variables Fundamentals/Exercises](#data--variables-fundamentalsexercises)
* [Launch Code Exercise](#launch-code-exercise)
* [Launch Code Studio](#launch-code-studio)


The following online JavaScript curriculum is a good reference when you need further help with any of the JavaScript concepts, or the Launch Code Exercise/Studio. 

[Launch Code - Data & Variables](https://education.launchcode.org/intro-to-professional-web-dev/chapters/data-and-variables/index.html)

## Setup for for study-lense

study-lense is a really cool tool someone at Hack Your Future (a bootcamp in Belgium for refugees) created to help students learn JavaScript. It allows you to navigate through a tree of folders containing both README and JavaScript files, and for the JavaScript files, or JavaScript code embedded in the README files, launches it in the browser and provides a bunch of useful study "lenses" to allow you to interact with the code in different ways.

He created a bunch of exercises to be used to introduce their students to JavaScript. We're going to use some of them in our class.

You will need
[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and
[nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed on your computer to study this material.

1. Install or update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - having trouble updating?
     - try this:
       `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Fork and clone this repository:
   1. fork the HackYourFuture repository to your personal account
      - [https://github.com/hoc-labs/js-data-and-variables](https://github.com/hoc-labs/js-data-and-variables)
   2. clone your fork to your computer
3. Run the `study` command from your CLI in the root of your root folder.
   - `$ study`
4. The material will open in your default browser, you're good to go!

## Data & Variables Fundamentals/Exercises

There are a series of series of folders in this directory, which should be studied sequentially, as each folder builds on the concepts introduced in the last one. 

We're going to go through many of the exercises during class, but you should also experiment with them on your own to learn.

Here is a list of the exercises you should make sure you complete:
* **02-operators**: all .js files
* **03-booleans**: all .js files
* **04-strings**: all .js files
* **06-variables**
  * **blanks**: pick 2
  * **fix-errors**: all .js files
  * **parsons**: swap-1, swap-2, swap-3
  * **quiz**: all .md files
  * **trace**: drive-a-car, swap-1, one-fish-two-fish
* **09-numbers**:
  * **ranges**: all .js files
## Priorities

Concepts and examples in this chapter are each given a priority (🥚, 🐣, 🐥).
The main goal of this module is learning to read and trace code that is already
written.

You know you have mastered an example when you can answer all the `[ask me]`
questions about it, and/or when you can use a trace table to explain how it
works.

---

## Exercises

There are a few different kinds of exercises in this module. None of these exercises will ask you to write code from an empty file, to write functions, or to pass some automated tests.

Instead, the exercises will be built around completed programs. You will need to
either fill in missing pieces, rearranged the lines, or trace how the variables
are used.

---

### 🥚 Quiz

Some chapters will have a `/quiz` folder, these contain multiple choice
questions to test your knowledge. By the end of this module you should be
comfortable finding the right answers for each quiz **_and_** understanding why
the wrong answers are incorrect.

Careful, passing the quizzes is not enough! Being able to answer questions is
not the same thing as building and practicing skills. Even if you are
comfortable with the quiz in a chapter, you should _still_ keep practice the
exercises.

---

### 🥚 WriteMe

With WriteMe exercises you will practice writing out programs from a blank page.
On the left is an empty editor, on the right is the finished code: you need to
re-write the program _exactly_ into the editor on the left. But there's a catch!
You can only see one of the editors at a time, and you can't copy-paste >:) Your
goal will be to memorize the syntax and structures of JavaScript, you will not
be running these programs or changing them.

You can study these exercises alone to memorize and master JS syntax, flipping
between _read_ and \_write like a flashcard. Or you can do them in pairs. If you
study these in pairs you and your study buddy should take turns in each role:

- **Reader**: The _reader_ will open the finished program and will read the
  program out loud, guiding the _writer_ as they complete the program. The
  reader's challenge is help the writer _exactly_ reproduce the code; each
  space, each new line, each character, each capital letter, everything!
- **Writer**: the _writer_ will try to write down _exactly_ the correct program
  following only the instructions of reader. No peaking! The writer should not
  look at the finished program, only listen to the advice of their reader and
  follow the hints of the editor.

Looking for an extra challenge? Try to complete these exercises _without ever_
showing each other your screens!

---

### 🥚 Tracing Execution

You will learn how to _be the computer_, how to execute code line by line with
your mind the same way the computer does. Until you learn how to _trace_ code,
programs and bugs will be a mystery! After you've learned how to trace, it will
still be hard to understand programs but you'll at least know how to start :)
Learning to trace is tricky, but will save you many many hours in the future.

Because it can be hard to know if you are tracing correctly without someone by
your side to answer your questions, there are a few buttons to help you along
the way:

- **table**: the _table_ button will open an empty trace table in your browser
  that you can use to step through a program by hand.
- **trace**: the _trace_ button will log a trace of the program's execution to
  the console. You can use this to learn how to step through a program, and to
  see if your trace tables are correct.
- **openIn JsTutorLive**: exercises without user interactions can be opened in
  JS Tutor, this website will show you what is happening in program memory with
  each step.

If you like to draw on code as you trace what's happening you can do that with
any file! Just replace `?--defaults` in your browser's URL bar with `?highlight`
and you're good to go.

<details>
<summary>Trace Tables</summary>

Trace tables have been around as long as computer programming (probably). The
challenge with a trace table is to run the code in your head, keeping track of
all the variables in your program by hand. This is also called a _dry run_ or a
_desk check_.

You can write trace tables on paper with a pencil, or you can use the trace
tables built into Study Lenses. There are two different types of trace table
available in Study Lenses:

1. **steps**: The _steps_ table asks you to be the computer and to go step by
   step through the program, recording each time a variable is declared, read,
   or assigned. When you use the steps table you can check your work by pressing
   `trace` button and comparing your table to the console output.
2. **values**: The _values_ table is the traditional type of trace table. With
   the _values_ table you only keep track of each time a variable is assigned a
   new value. You can also check your _values_ table by using the `trace` button
   but it will take a little more practice

You may find that the **steps** table is more helpful in the beginning when you
are first learning. It forces you to pay close attention to each step of program
execution.

Later on you may prefer the **values** table because it allows you to look at
the bigger picture and see more clearly the _strategy_ (or _algorithm_) of a
program.

<details>
<summary>links about <strong>values</strong> trace tables</summary>
<br>

- videos
  - [TeamComputing](https://www.youtube.com/watch?v=DyeVR1zb7Jo)
  - [Computer Science Tutorials](https://www.youtube.com/watch?v=UbANyxE7pGE)
  - [Chris Mayfield](https://www.youtube.com/watch?v=tJGrie7k97c)
  - [Revise Computer Science](https://www.youtube.com/watch?v=dzYlncc72O0)
  - [5 Minutes to Code: Programming Basics "Trace Tables"](https://www.youtube.com/watch?v=i2qLAVBUERs)
- articles
  - [akxl - Desk Checking](https://www.akxl.org/JavaProgramming1/TraceTables.htm)
  - [101computing](https://www.101computing.net/using-trace-tables/),
    [online table](https://www.101computing.net/trace-table/)
  - [ibcomputerscience](https://ibcomputerscience.xyz/trace-tables/)
  - [wikipedia](https://en.wikipedia.org/wiki/Trace_table)
  - [bits of bytes](https://www.bitsofbytes.co/trace-tables.html)

</details>

</details>

---

### 🐣 Fill in the Blanks

Fill-in-the-blanks exercises will be JS scripts with some blanks for you to fill
in and (sometimes) a comment describing what should happen. Some exercises will
simple like this:

```js
'use strict';
console.log(true && _); // true
```

But others will be more complex. Larger exercises will open with the `?blanks`
lens where you will be able to decide how many words you want to remove from the
program. You will be shown a list of all the words that have ben removed from
the program, and have the option to compare the modified program to the correct
solution using a _diff editor_.

---

### 🐥 Parsons Problems

Parsons problems are designed to help you study snippets of code without getting
caught by errors. You'll be given lines of code and your task is to place them
in order. But it's not always as easy as it sounds! Exercises will have extra
lines as distraction, you'll need to figure out which lines are part of the
program and which are there to confuse you.

- [all of the learning, less of the time time](https://computinged.wordpress.com/2017/11/17/parsons-problems-have-same-learning-gains-as-writing-or-fixing-code-in-less-time-koli-calling-2017-preview)
- [How to study programming](https://medium.com/swlh/how-to-study-computer-programming-parsons-problems-2bfdefabfd86)
- [what are these?](https://georgejmount.com/parsons-problems/)

---

## Launch Code Exercise

Do the exercise in the launch-code-exercise folder. The directions are in the script.js file.

If you need help, you can check your solution [here](https://education.launchcode.org/intro-to-professional-web-dev/appendices/exercise-solutions/data-and-variables.html#data-and-variables-exercise-solutionse).

## Launch Code Studio

Do the exercise in the launch-code-studio folder. The directions are in the script.js file.

The following is the output that the script should write to the console.

This is a really good exercise to practice using some of the VS Code short-cuts for multi-edit cursors.
* Copy and paste the sample output as your starting output.
* Use tAlt-Shift . and drag down the left edge and add console.log(" to each line.
* Use Atl . to select the end of each line and then add ");


```
-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: Monday 2019-03-18
Time: 10:05:34 AM

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: 7
* status: ready

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: -225 C
* Fuel level: 100%

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: 564.9 kg
* Fuel mass: 760000 kg
* Shuttle mass: 74842.31 kg
* Total mass: 835407.21 kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: clear

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES
```


