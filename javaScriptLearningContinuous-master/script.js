"use strict";

// Kata 8- 1

// Consider an array/list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the array (true means present).

const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  undefined,
  null,
];

const countSheep = function (arr, count) {
  const val = arr.find((val) => {
    if (val != null && val != undefined && val != false) count++;
    return false;
  });
  console.log(val);

  return count;
};

//     console.log(countSheep(sheep,0));

///----------------- Kata 8 -2

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

const spinWords = function (input) {
  const reverse = function (element) {
    let newString = "";
    for (let i = element.length - 1; i >= 0; i--) {
      newString += element[i];
    }
    return newString;
  };

  const arr = input.split(" ");

  arr.forEach((element, index) => {
    if (element.length >= 5) {
      arr[index] = reverse(element);
    }
  });
  return arr.join(" ") + "";
};

// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"));
// console.log(spinWords("This is another test"));

///////// kata - 6

function narcissistic(value) {
  // variable to store the sum of each individual digit, raised to the power of the number of digits in a given base
  let sumOfDigits = 0;
  //converting number to string
  const valToString = value + "";
  // lenght of the new string
  const strLength = valToString.length;
  for (let i = 0; i < strLength; i++) {
    // calcaulating the value of each digit
    sumOfDigits += (+valToString[i]) ** strLength;
  }
  // returning true if the sum matches the provided number otherwise false.
  return sumOfDigits === value ? true : false;
}

// console.log(narcissistic(153));

///console.log('123'.split(''));

// Your task is to make a function that can take any non-negative integer as an
// argument and return it with its digits in descending order. Essentially, rearrange
//  the digits to create the highest possible number.

function descendingOrder(n) {
  // if the number passed is less than 0, return immediately
  if (n < 0) return;
  // splitting the integer into array of individual numbers
  const intgerArray = (n + "").split("");
  // sorting the array in descending order
  intgerArray.sort((a, b) => b - a);
  return +intgerArray.join("");
}
//You probably know the "like" system from Facebook and other pages.
//People can "like" blog posts, pictures or other items. We want to create
//the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people
//that like an item. It must return the display text as shown in the examples:

//Expected output:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  // TODO
  const suffix = `like`;
  const suffix2 = `this`;
  if (names.length === 0) return `no one ${suffix}s ${suffix2}`;
  if (names.length === 1) return `${names[0]} ${suffix}s ${suffix2}`;
  if (names.length === 2)
    return `${names[0]} and ${names[1]} ${
      names.length > 1 ? `${suffix} ${suffix2}` : ``
    }`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} ${suffix} ${suffix2}`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others ${suffix} ${suffix2}`;
}
// console.log(likes([]));
// console.log(likes(["Peter"] ));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"] ));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

//kata -5
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str.length === 0) return false;
  if (str.trim().length === 0) return false;
  const hash = `#`;
  const strArr = str.trim().split(" ");
  const newStrArr = strArr.filter((item) => item !== "");

  const stringWithoutHash = newStrArr.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  // adding hash to the array
  stringWithoutHash.unshift(hash);

  if (stringWithoutHash.join("").length > 140) return false;
  console.log(stringWithoutHash.join(""));
  return stringWithoutHash.join("");
}

//////////////////// kata 5////////////////
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

////domainName("http://github.com/carbonfive/raygun") == "github"
//domainName("http://www.zombie-bites.com") == "zombie-bites"
//domainName("https://www.cnet.com") == "cnet"

// function domainName(url) {
//   // checks if the string starts with http:// or https://
//   const arr = url.split(".");
//   console.log(arr);
// }

// console.log(domainName("http://github.com/carbonfive/raygun"));
// console.log(domainName("http://www.zombie-bites.com"));

////********* counting number of characters in a string */
const countChars = function (str) {
  const objectOfChars = {};
  const newStr = str.toLowerCase();
  for (const char of newStr) {
    if (checkAlmphaNumberic(char))
      objectOfChars[char] = ++objectOfChars[char] || 1;
  }
  return objectOfChars;
};

const checkAlmphaNumberic = function (char) {
  const charCode = char.charCodeAt(0);

  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }
  return false;
};

// console.log(countChars("Hello World 11 23 ! ? &"));

//*********** Check if two arrays are equal in lenght and the one of the arrays contains the square root of every element in the other array.
//********* the order of the sqaure root does not have correspond to the element in the first array/
// same([1,2,3,2], [9,1,4,4])

const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`the lenght of array does not match; it has to be same.`);
    return;
  }

  const objectOfArr1 = {};
  const objectOfArr2 = {};

  for (let item of arr1) {
    objectOfArr1[item] = ++objectOfArr1[item] || 1;
  }

  for (let item of arr2) {
    // console.log(item);
    objectOfArr2[item] = ++objectOfArr2[item] || 1;
  }

  console.log(objectOfArr1);
  console.log(objectOfArr2);

  for (let prop in objectOfArr1) {
    if (!(prop ** 2 in objectOfArr2)) {
      return false;
    }

    if (objectOfArr1[prop] !== objectOfArr2[prop ** 2]) {
      return false;
    }
  }
  return true;
};

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
// console.log(same([1, 2, 3, 2], [9, 1, 4]));
// console.log(same([1, 5, 2, 2], [4, 1, 25, 4]));
// console.log(same([1, 5, 3, 2], [9, 1, 4, 4]));

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.lenght !== str2.lenght) return;
  const obj1 = {};
  const obj2 = {};
  for (let item of str1) {
    obj1[item] = ++obj1[item] || 1;
  }
  for (let item of str2) {
    obj2[item] = ++obj2[item] || 1;
  }

  console.log(obj1);
  console.log(obj2);

  for (let item in obj1) {
    if (!(obj1[item] === obj2[item])) return false;
  }

  return true;
}

// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("azz", "zaz"));
// console.log(validAnagram("", ""));
// console.log(validAnagram(" ", "  "));
// console.log(validAnagram("awesome", "weaosme"));

// ******** Write a function that returns the pair in the form of array whose sum is zero otherwise return undefined. The function should except a sorted array.
// sumZero([-4,-2,-1,0,1,3,5,6]);

const sumZero = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

// console.log(sumZero([-4, -2, -1, 0, 1, 3, 5, 6]));

// ***---create a function "countUniqueValues" which counts the amount of unique values inside of a sorted array.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

//----The solution below is without the two pointers approach
// const countUniqueValues = function (arr) {
//   const obj = {};
//   for (let item of arr) {
//     if (obj[item] === 1) {
//     } else {
//       obj[item] = 1;
//     }
//   }
//   return Object.keys(obj).length;
// };

///--The solution below is with the two pointers apporach

const countUniqueValues = function (arr) {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      // console.log(arr[i], "!==", arr[j]);
      j++;
    }
  }
  return j + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]), 2); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7); // 7
console.log(countUniqueValues([]), 0); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1]), 4); // 4
