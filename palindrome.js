const palindromeString = (str) => {
  const str1 = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .trim()
    .split(" ");
  //   let str1 = str.trim().split(' ');
  console.log(str1);
  const l = str1.length;
  const arr = [];
  //   console.log(str1);
  for (let i = 0; i < l; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(str1[i].length / 2); j++) {
      if (!(str1[i][j] === str1[i][str1[i].length - 1 - j])) {
        break;
      } else {
        count += 1;
      }
    }
    // console.log(count, Math.floor(str1[i].length / 2));
    if (count === Math.floor(str1[i].length / 2)) {
      arr.push(str1[i]);
    }
  }
  console.log(arr);
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    if (temp.length < arr[i].length) {
      temp = arr[i];
    }
  }
  return temp;
};
console.log(
  palindromeString("Hello Mam, how are you. Madam, do you know racecar?")
);

const obj = { a: 1, b: 2 };
console.log(obj);
const keys = Object.keys(obj);
console.log(keys);
for (let i = 0; i < keys.length; i++) {
  if (obj.hasOwnProperty("a")) {
    console.log("Hello");
  }
}
