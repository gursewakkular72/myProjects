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

function domainName(url) {
  const newArr = url.split("/");
  // checks if the string starts with http:// or https://
  if (newArr[2] === undefined) {
    return newArr[0].split(".")[1];
  }
  if (newArr[2].split(".")[0] === "www") {
    return newArr[2].split(".")[1];
  } else {
    return newArr[2].split(".")[0];
  }
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("https://youtube.com"));
console.log(domainName("www.xakep.ru"));
