/**
 * @module Numbers
 */

/**
 * Represents the number zero.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const zero = func => func ? func(0) : 0;

/**
 * Represents the number one.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const one = func => func ? func(1) : 1;

/**
 * Represents the number two.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const two = func => func ? func(2) : 2;

/**
 * Represents the number three.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const three = func => func ? func(3) : 3;

/**
 * Represents the number four.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const four = func => func ? func(4) : 4;

/**
 * Represents the number five.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const five = func => func ? func(5) : 5;

/**
 * Represents the number six.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const six = func => func ? func(6) : 6;

/**
 * Represents the number seven.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const seven = func => func ? func(7) : 7;

/**
 * Represents the number eight.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const eight = func => func ? func(8) : 8;

/**
 * Represents the number nine.
 *
 * @param {function} [func] - A function to apply to the number.
 * @returns {number} The result of applying the function to the number, or the number itself.
 */
const nine = func => func ? func(9) : 9;

/**
 * @module Operations
 */

/**
 * Represents the addition operation.
 *
 * @param {number} y - The number to add.
 * @returns {function} A function that takes a number and returns the sum.
 */
const plus = y => x => x + y;

/**
 * Represents the subtraction operation.
 *
 * @param {number} y - The number to subtract.
 * @returns {function} A function that takes a number and returns the difference.
 */
const minus = y => x => x - y;

/**
 * Represents the multiplication operation.
 *
 * @param {number} y - The number to multiply by.
 * @returns {function} A function that takes a number and returns the product.
 */
const times = y => x => x * y;

/**
 * Represents the division operation.
 *
 * @param {number} y - The number to divide by.
 * @returns {function} A function that takes a number and returns the result of the division.
 */
const dividedBy = y => x => Math.floor(x / y); // Integer division
