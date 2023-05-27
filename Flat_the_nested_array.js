// Input:-  ["a", "b"],
//          ["c", "d"],
//          ["e", "f", ["g", "h", ["i", "j"]]],

// Output:- ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const nestedToSingleArray = (arr) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr1.push(...nestedToSingleArray(arr[i]));
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};
console.log(
  nestedToSingleArray([
    ["a", "b"],
    ["c", "d"],
    ["e", "f", ["g", "h", ["i", "j"]]],
  ])
);
