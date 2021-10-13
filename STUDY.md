# Setup for for study-lense

1. Install or update the `study-lenses` package globally
   - `$ npm install -g study-lenses` (if you do not have it installed)
   - `$ npm update -g study-lenses` (if you already have it installed)
   - having trouble updating?
     - try this:
       `$ npm uninstall -g study-lenses && npm install -g study-lenses`
2. Run the `study` command from your CLI in the root of your root folder.
   - `$ study`
3. The material will open in your default browser, you're good to go!

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






