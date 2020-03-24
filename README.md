# About

This repo is a scratchpad for the files and lessons learned from [Digging Into Node](https://frontendmasters.com/courses/digging-into-node) by Kyle Simpson on Front End Masters.

## Motivation

I learn by writing and blowing things up. All of my repositories that start with the word "learnings" are from tutorials or books I have read.

## Goals for Project

-   documenting things I learned so I can use them as resource later
-   Introduction to mocha testing
-   general awesomeness in Node developmnt

# Tech Used

-   [Node](https://nodejs.org/en/)
-   [Express](https://express.com/)
-   [Mocha](https://mochajs.or/)

# Installaton

# Lessons Learned

-   STD (out/in/error)
    -   out - basically console log is stdout wrapped for easier use
    -   in - weird without getStandardIn, very finicky and dependant on envs
    -   error - similar to out but is logged differently in process
-   Creating a CLI script
    -   prepend the '#! /usr/bin/env node' to the file, this tells bash the associated program to run with the script
    -   chmod u+e filename.js so that it gets written as an executable file
    -   run it: just ./filename.js and it will run (without note)
    -   using argv, you can slice the argv array after 2 and parse any arguments using a library like minimist to see wahts been passed in

## Follow Ups
