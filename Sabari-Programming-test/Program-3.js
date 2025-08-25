// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5
//     5) input a = 5, then output : 1, 3, 5, 7, 9
//     6) input a = 6, then output : 1, 3, 5, 7, 9
//     .
//     .
//     7) input a = x, then output : 1, 3, 5, 7, .......



function generateOddNum(a) {
  let result = [];
  let count;

  if (a % 2 === 0) {
    count = a - 1;
  } else {
    count = a;
  }

  for (let i = 0; i < count; i++) {
    let oddNumber = 2 * i + 1; 
    result.push(oddNumber);
  }

  return result;
}

// Test examples given
console.log(generateOddNum(1)); 
console.log(generateOddNum(2)); 
console.log(generateOddNum(3)); 
console.log(generateOddNum(4)); 
console.log(generateOddNum(5)); 
