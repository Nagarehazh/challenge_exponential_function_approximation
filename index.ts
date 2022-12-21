/**Challenge: Exponential function approximation
 * Exponential functions are of great importance in mathematics, physics, and engineering.
 * One of the most important functions is the exponential function e^x. It has the very important property that it is the only function that its derivative is the same as itself
 * e^x = d(e^x)/dx
 * So any process where the rate if change of a quantity is proportional to the quantity itself will be described by exponential functions. Finance, population growth, oscillators all have these characteristics.
 * When we want to model these processes in a computer we have a problem. e is irrational and that means that we have to calculate approximate values. Specially our digital computers only know how to solve simple operations...so how can we calculate the value of complex equations?
 * The answer is to simplify the functions into operations a computer can manage without any problem. Sums, multiplications and divisions are simple enough.
 * Let's use the following formula to estimate the value of e up to 9 decimals only using multiplications and sums:
 * e = 1 + 1/1! + 1/2! + 1/3! + 1/4! + 1/5! + 1/6! + 1/7! + 1/8! + 1/9!
 * As you can see x is only raised to integer powers (i.e multiplications) and n! stands fo factorial, which is the integer multiplication up to n(note that 0! and 1! is equal to 1).
 * 1. Build a program that given x and n would approximate e^x using the identity above. That is only using sums, multiplications and divisions (exponentials are not allowed by definition). You can use typescript.
 * 2. What should be the value of n in order to approximate e^1 up to 9 decimals?
 *  */

/**ANSWER */
//First, I define the factorial function, which is the product of all the integers from 1 to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n: number): number {
  //I define a variable to store the result, which is initialized to 1 because 0! = 1
  let result = 1;
  //I use a for loop to multiply the result by each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//Then, I define the exponent function, which is the product of x by itself n times. For example, 2^5 = 2 * 2 * 2 * 2 * 2 = 32
function exponent(x: number, n: number): number {
  let result = 1;
  let i = 1;
  while (i <= n) {
    //I use a while loop to multiply the result by x n times
    result *= x;
    i++;
  }
  return result;
}

//Finally, I define the exponential function, e^1 = 1 + 1/1! + 1/2! + 1/3! + 1/4! + 1/5! + 1/6! + 1/7! + 1/8! + 1/9!. Also, if x is not equal to 1, then e^x = 1 + x/1! + x^2/2! + x^3/3! + x^4/4! + x^5/5! + x^6/6! + x^7/7! + x^8/8! + x^9/9!
function exponential(x: number, n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    //I used my factorial and exponent functions to calculate the sum of the series
    result += exponent(x, i) / factorial(i);
  }
  return result;
}

console.log(exponential(1, 9));
