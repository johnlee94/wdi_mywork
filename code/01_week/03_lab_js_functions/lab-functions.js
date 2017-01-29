console.log("working!")

// 1.
function maxOfTwoNumbers(x, y) {
  return x>= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
function maxOfThree(x, y, z) {
  console.log(math.max(x, y, z));
}

// 3.
// function isCharAVowel (x) {
//   var z = toString(x);
//   return (isVowelRegEx(z)) ? "true" : "false";
//   }

// alternatively
function isCharAVowel2 (x) {
  var z = toString(x);
  if (z === 'a'|| z==='e' || z==='i' || z==='o' || z==='u') {
    return "true"
  } else {
    return "false"
  }
}

//4.
function sumArray (arr) {
  var sum = arr.reduce(function(a,b) {
    return a + b;
  })
  return sum;
}

//alternatively
function sumArray2 (arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}
