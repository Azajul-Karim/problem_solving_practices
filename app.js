function testModule(name, given, expect) {
  if (given.toString() === expect.toString()) {
    console.log(name + " passed");
  } else {
    console.log(name + " failed");
  }
}
//1 Write a function that returns the largest element in a list.

function moduleOne(arr) {
  return Math.max(...arr);
}

testModule("moduleOne", moduleOne([10, 15, 30, 40, 50]), 50);

//2 Write function that reverses a list, preferably in place.

function moduleTwo(arr) {
  return arr.reverse();
}

testModule("moduleTwo", moduleTwo([10, 15, 30, 40, 50]), [50, 40, 30, 15, 10]);

// 3 Write a function that checks whether an element occurs in a list
// function modulrThree(arr) {}

// 4 Write a function that returns the elements on odd positions in a list.
function moduleFour(arr) {
  let oddIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddIndex.push(arr[i]);
    }
  }

  return oddIndex;
}
testModule("moduleFour", moduleFour([10, 15, 30, 40, 25, 50]), [15, 40, 50]);

// 5 Write a function that computes the running total of a list.

function moduleFive(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}

testModule("moduleFive", moduleFive([10, 15, 30, 40, 50]), 145);

// 6 Write a function that tests whether a string is a palindrome.

function moduleSix(str) {
  let normalizeStr = str.toLowerCase();
  let revStr = normalizeStr.split("").reverse().join("");
  return normalizeStr === revStr;
}
testModule("moduleSix", moduleSix("Malayalam"), true);

// 7 Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)
function moduleSeven(num1, num2) {
  return num1 + num2;
}

// 8 Write a function on_all that applies a function to every element of a list. Use it to print the first twenty perfect squares. The perfect squares can be found by multiplying each natural number with itself. The first few perfect squares are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect square because there is no natural number m so that m*m=12. (This question is tricky if your programming language makes it difficult to pass functions as arguments.)

function moduleEight(arr) {
  return arr.map((arrSquare) => {
    return Math.pow(arrSquare, 2);
  });
}
testModule("moduleEight", moduleEight([10, 15, 40]), [100, 225, 1600]);

// 9 Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

function moduleNine(arr1, arr2) {
  let arrConcat = arr1.concat(arr2);
  // let arrConcat = [...arr1, ...arr2];
  return arrConcat;
}
testModule("moduleNine", moduleNine(["a", "b"], [1, 2]), ["a", "b", 1, 2]);

// 10 Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// function moduleTen(arr1, arr2) {}
// testModule("moduleTen", moduleTen(["a", "b"], [1, 2]), ["a", 1, "b", 2]);

// 11 Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
function moduleEleven(arr1, arr2) {
  let arrConcat = arr1.concat(arr2).sort();
  return arrConcat;
}
testModule("moduleEleven", moduleEleven([1, 4], [2, 3, 5]), [1, 2, 3, 4, 5]);

// 12 Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

// function moduleTwelve(arr1, arr2) {

// }

// 13 Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

// function moduleThirteen(arr1, arr2) {

// }

// 14 Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].
function moduleFourteen(num) {
  let convertStr = num.toString().split("");
  let convertnumber = convertStr.map((i) => {
    return Number(i);
  });
  return convertnumber;
}
testModule("moduleFourteen", moduleFourteen(123456), [1, 2, 3, 4, 5, 6]);
