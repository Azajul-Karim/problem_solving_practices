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
  let arrFilter = arr.filter((list) => {
    return list % 2 === 1;
  });
  return arrFilter;
}
testModule("moduleFour", moduleFour([10, 15, 30, 40, 25, 50]), [15, 25]);

// 5 Write a function that computes the running total of a list.

function moduleFive(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}

testModule("moduleFive", moduleFive([10, 15, 30, 40, 50]), 145);
