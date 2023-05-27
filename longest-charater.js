const findLongestCharacter = (str) => {
  let longestWord = "";
  const splittedStr = str.split(" ");

  for (let i = 0; i < splittedStr.length; i++) {
    if (longestWord.length > splittedStr[i].length) {
      longestWord = splittedStr[i];
    }
  }

  return longestWord;
};

console.log("Hello ", findLongestCharacter("Hello i'm ankit"));
console.log("sohailkhan", findLxongestCharacter("Hello i'm sohailkhan"));
