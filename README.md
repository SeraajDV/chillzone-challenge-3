# Chill Zone Challenge 3

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```javascript
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```
## Requirements:
* There must be a function for each number from 0 ("zero") to 9 ("nine").

* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy.

* Each calculation consists of exactly one operation and two numbers.

* The outermost function represents the left operand, and the innermost function represents the right operand.

* Division should be integer division. For example, this should return 2, not 2.666666...:

```javascript
eight(dividedBy(three())); // must return 2
```
## Solution
### Overview

```app.js``` is a JavaScript file that contains functions for representing numbers and mathematical operations.

#### Number Functions

The file defines functions for each number from 6 to 9, which take an optional function as an argument. If a function is provided, it is applied to the number; otherwise, the number itself is returned.

* ```six(func)```: Represents the number 6.
* ```seven(func)```: Represents the number 7.
* ```eight(func)```: Represents the number 8.
* ```nine(func)```: Represents the number 9.

#### Mathematical Operation Functions

The file also defines functions for basic mathematical operations:

* ```plus(y)```: Represents the addition operation.
* ```minus(y)```: Represents the subtraction operation.
* ```times(y)```: Represents the multiplication operation.
* ```dividedBy(y)```: Represents the division operation.
  
#### Usage

These functions can be used to perform calculations by chaining them together. For example:

```javascript
seven(times(five())); // returns 35
four(plus(nine())); // returns 13
eight(minus(three())); // returns 5
six(dividedBy(two())); // returns 3
```
Note that the dividedBy function performs integer division, rounding down to the nearest whole number.