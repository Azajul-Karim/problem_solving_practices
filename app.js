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
