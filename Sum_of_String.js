var addStrings = function (num1, num2) {
  let l1 = num1.length;
  let l2 = num2.length;
  let l;
  let num3 = "";
  if (l1 > l2) {
    l = l1 - l2;
    for (let i = 0; i < l; i++) {
      num2 = "0" + num2;
    }
  } else {
    l = l2 - l1;
    for (let i = 0; i < l; i++) {
      num1 = "0" + num1;
    }
  }
  let carry = 0;
  let sum = 0;
  let l3 = num1.length;
  let result = "";
  while (l3 > 0) {
    sum = carry;
    sum = sum + (num1[l3 - 1] - "0");
    sum = sum + (num2[l3 - 1] - "0");
    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    l3 = l3 - 1;
    result = sum + result;
  }
  if (carry == 1) {
    return 1 + result;
  } else {
    return result;
  }
};
console.log(addStrings("546", "999"));
