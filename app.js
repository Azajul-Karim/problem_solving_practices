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
function moduleSeven(arr) {}

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
