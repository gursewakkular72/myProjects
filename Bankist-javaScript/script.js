'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//// The follwing data is added later

movementsDates: [
  '2019-11-01T13:15:33.035Z',
  '2019-11-30T09:48:16.867Z',
  '2019-12-25T06:04:23.907Z',
  '2020-01-25T14:18:46.235Z',
  '2020-02-05T16:33:06.386Z',
  '2020-04-10T14:43:26.374Z',
  '2020-06-25T18:49:59.371Z',
  '2020-07-26T12:01:20.894Z',
];

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2021-06-29T10:51:36.790Z',
  ],
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentUser;
let inputUserName;
let inputUserPin;
let userTransferAcc;
let userTransferAmount;
let receviver;
let closeUser;
let closePin;
let foundUser;
let loanInput;
let canLoanBeGranted;
let timer;
let timerSpan;
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/// All the Dates Variables
const now = new Date();
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const actualDate = `${now.getDate()}`.padStart(2, 0);
const year = now.getFullYear();

//const currentDate = `${month}\\${actualDate}\\${year}`;
console.log(`------------++++++---------`);
const currentDateStamp = Date.now();

// formatting the date to be displayed from the movementDates

const calcDatePassed = (date1, date2) => {
  console.log('this is the date1', date1);
  console.log('this is the date2 ', date2.getTime());
  return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
};

const formatDate = function (date) {
  const dateToDisplay = new Date(date);
  //console.log(dateToDisplay);
  const daysPassed = calcDatePassed(currentDateStamp, dateToDisplay);
  console.log(daysPassed);
  if (daysPassed === 0) return 'today';
  else if (daysPassed === 1) return 'yesterday';
  const year = dateToDisplay.getFullYear();
  const month = `${dateToDisplay.getMonth() + 1}`.padStart(2, 0);
  const actualDate = `${dateToDisplay.getDate()}`.padStart(2, 0);
  return `${month}/${actualDate}/${year}`;
};

/// When zero seconds are left the stop the timer and log out.

/// ---- Creating DOM ELEMENTS --- ///

const displayMovements = function (object, sort = false) {
  // getting the movmements array from the object this has been passed to the displayMovements function.
  const ObjectProperty = object.movements;
  console.log(ObjectProperty, '💥💥💥');
  containerMovements.innerHTML = '';
  const newObjectProperty = sort
    ? ObjectProperty.slice().sort((a, b) => a - b)
    : ObjectProperty;
  newObjectProperty.forEach(function (item, index) {
    /// Displaying date form the movementDates array
    const dateToDisplay = formatDate(
      object.movementsDates[index],
      ' forateDate'
    );
    // const year = dateToDisplay.getFullYear();
    // const month = `${dateToDisplay.getMonth()+1}`.padStart(2, 0);
    // const actualDate = `${dateToDisplay.getDate()}`.padStart(2, 0);
    ///
    const transactionType = item > 0 ? 'deposit' : 'withdrawal';
    const html = `
  
      <div class="movements__row">
        <div class="movements__type movements__type--${transactionType}">${
      index + 1
    } ${transactionType}</div>
        <div class="movements__date">${dateToDisplay}</div>
        <div class="movements__value">${item}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    const userName = acc.owner.toLowerCase();
    const arrName = userName.split(' ');
    const firstLetters = arrName.map(function (item) {
      return item.charAt(0);
    });
    acc.username = firstLetters.join('');
  });
};

createUsernames(accounts);
//console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//console.log(movements);
const calcDisplayBalance = function (acc) {
  // console.log(movements);
  const movements = acc.movements;
  const sum = movements.reduce((accumulator, item) => accumulator + item, 0);
  acc.balance = sum;
  labelBalance.textContent = `${sum}€`;
};

// Display the timer

const setLogoutTimer = function () {
  // set the timer

  // To start the call back function provided to the setInterval method immediately, one would need to define it outside
  /// the setInterval method and call it right before its being called by the setInterval method. Look at the "tick function" and
  // how its being called before and inside the timer function (setInterval).
  let time = 120;
  const tick = function () {
    const min = String(Math.trunc(time / 60));
    const sec = String(Math.trunc(time % 60));
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = '0';
      labelWelcome.textContent = 'Log in to get started';
    }

    time--;
    //console.log(time);
  };
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
//calcDisplayBalance(movements);

const calcDisplaySummary = function (account) {
  const movements = account.movements;
  console.log(movements);
  const summary = movements
    .filter(item => item > 0)
    .reduce((accumulator, item) => accumulator + item, 0);
  labelSumIn.textContent = `${summary.toFixed(2)}€`;

  const out = movements
    .filter(item => item < 0)
    .reduce((accumulator, item) => accumulator + item, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interst = movements
    .map(item => (item * account.interestRate) / 100)
    .filter(item => item >= 1)
    .reduce((accumulator, item) => accumulator + item);
  labelSumInterest.textContent = `${interst.toFixed(2)}€`;

  // Displaying Date Under the "Current Balance " string
  labelDate.textContent = `${month}/${actualDate}/${year}`;
};
//// -------- displaying userInterface --------////
const displayUI = function (account) {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

/////////////////---------- User Login: verifying the credentials, and displaying the correct account information--------///////
/// user input from the user name and pin input fields

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  inputUserName = inputLoginUsername.value;
  inputUserPin = inputLoginPin.value;
  inputLoginUsername.value = inputLoginPin.value = '';

  const match = accounts.find(
    item => item.username === inputUserName && item.pin === +inputUserPin
  );
  console.log(match);
  if (typeof match !== 'undefined') {
    console.log('this line runs');
    labelWelcome.textContent = `Welcome back, ${match.owner.split(' ')[0]}`;
    containerApp.style.opacity = '100';

    if (timer) clearInterval(timer);
    timer = setLogoutTimer();
    displayUI(match);
  }
  inputLoginPin.blur();
});

/// input values from the "transfer to " and "amount " fields;

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  currentUser = accounts.find(item => item.username === inputUserName);
  userTransferAcc = inputTransferTo.value;
  userTransferAmount = +inputTransferAmount.value;
  inputTransferTo.value = inputTransferAmount.value = '';

  receviver = accounts.find(item => item.username === userTransferAcc);
  if (receviver) {
    console.log('this runs');
    //console.log(userTransferAmount,currentUser.balance,userTransferAmount,receviver.username,inputUserName);
    if (
      userTransferAmount > 0 &&
      currentUser.balance >= userTransferAmount &&
      receviver.username !== inputUserName
    ) {
      currentUser.balance = currentUser.balance - userTransferAmount;
      currentUser.movementsDates.push(now);
      receviver.balance = receviver.balance + userTransferAmount;
      currentUser.movements.push(-userTransferAmount);
      receviver.movements.push(userTransferAmount);
      receviver.movementsDates.push(now);
      // Reset the timer
      clearInterval(timer);
      timer = setLogoutTimer();
      displayUI(currentUser);
    }
  }
  // inputTransferAmount.value.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  closeUser = inputCloseUsername.value;
  closePin = +inputClosePin.value;

  foundUser = accounts.find(
    item => item.username === closeUser && item.pin === closePin
  );
  if (foundUser) {
    const foundIndex = accounts.findIndex(item => item === foundUser);
    accounts.splice(foundIndex, 1);
    console.log(accounts);
    inputCloseUsername.value = inputClosePin.value = '';

    containerApp.style.opacity = '0';
  }
  inputClosePin.blur();
});

/// ----------- Request Loan --- /////

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  loanInput = Math.floor(+inputLoanAmount.value);
  currentUser = accounts.find(item => item.username === inputUserName);
  console.log(currentUser);
  canLoanBeGranted = currentUser.movements.some(
    item => item >= loanInput * 0.1
  );
  if (loanInput > 0 && canLoanBeGranted) {
    setTimeout(function () {
      // adding the current date to the movementDates array, after three seconds;
      currentUser.movementsDates.push(now);
      currentUser.movements.push(+loanInput);
      displayUI(currentUser);

      console.log('Loan can be granted.');
    }, 3000);
  }
  // Reset the timer
  clearInterval(timer);
  timer = setLogoutTimer();
  inputLoanAmount.value = '';
});

////------------- sorting ----- /////////////////////
let isSorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(accounts);
  console.log(accounts[0].username);
  console.log(inputUserName);
  currentUser = accounts.find(item => item.username === inputUserName);
  console.log(currentUser.movements);

  displayMovements(currentUser, !isSorted);
  isSorted = !isSorted;
});

// // Event handlers
// //let currentAccount, timer;

// // FAKE ALWAYS LOGGED IN
// // currentAccount = account1;
// // displayUI(currentAccount);
// // containerApp.style.opacity = 100;
// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function (dogsJulia, dogsKate){

//   let copyJulia = [...dogsJulia];
//   copyJulia.pop();
//   copyJulia.pop();
//   copyJulia = copyJulia.splice(1);
//   const data = [...copyJulia, ...dogsKate];

//   data.forEach(function(item, index){
//     const print = item > 3 ? `Dog number ${index+1} is an adult` : ` Dog number ${index+1} is puppy 🐶.`;
//     console.log(print);
//   })

// }

// //checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and
// calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
// humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const calcAverageHumanAge = function(ages){

//   // const humanAge = ages.map(function(item){
//   //   if(item <= 2){
//   //     return 2*item;
//   //   }
//   //   else if(item >2 ){
//   //     return 16 + item*4;
//   //   }
//   // });

//   // const updatedHumanAge = humanAge.filter(function(item){
//   //   return item >= 18;
//   // })

//   // const average = updatedHumanAge.reduce(function(accumulator,item){
//   //     return accumulator + item ;
//   // },0)

//   // return average/updatedHumanAge.length;

//   /// through chaining and arrow funcitons
//   const average = ages.map(item=>{
//     if(item <= 2){
//       return 2*item;
//     }
//     else if(item >2 ){
//       return 16 + item*4;
//     }

//   }).filter((item,_,arr) => item >= 18)
//   .reduce(function(accumulator,item,_,arr){   ///////// there is something wrong with this arrow function
//     /// I can not really figure out. Try this later ------------------------------------------------------------------------------------
//      return accumulator=+item
// },0) ;
// }

// //console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// //console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// //// -------------------------- Coding Challenge #4------------- /////////////

// /*
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and
// add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg).
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have
// multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of
// dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!"
// and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind
// that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10).
// Basically, the current portion should be between 90% and 110% of the recommended portion.
// GOOD LUCK 😀
// */

// // TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];

// ///  ########1 ///////////////
// dogs.forEach(function(item){
//     item.recommendedFood = (Math.trunc(item.weight ** 0.75 *28));

// });

// //dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // dogs.forEach(item =>{
// //   console.log(item);

// // })

// const sarah = dogs.find(current => current.owners.includes('Sarah'));
// console.log(sarah);

// // --- This forEach prints the results four times, to fix this error use anyother loop
// // so that the loop can be broken upon getting the first instance of the result.
// // I am allegedly leaving this, because I am kind of lazy at this moment. LOL

// ///############2
// Object.entries(sarah).forEach(function(current){
//   if(current.curFood > (current.recommendedFood * 0.90) && current.curFood < (current.recommendedFood * 1.10)){
//     console.log(`Sarah's dog is eating within the recommended range`);
//     //break;
//     return 1;
//   }
//   else if(current.curFood > (current.recommendedFood * 0.90)){
//     console.log(`Sarah's dog eating more than the recommended range.`);
//     //break;
//     return 1;
//   }
//   else {
//     console.log(`Sarah's dog eating less than the recommended range.`);
//     //break;
//     return 1;
//   }
// });

// ///###############3
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// dogs.forEach(function(current){
//   if(current.curFood > (current.recommendedFood * 0.90) && current.curFood < (current.recommendedFood * 1.10)){

//     //break;

//   }
//   else if(current.curFood > (current.recommendedFood * 0.90)){
//     ownersEatTooMuch.push(current.owners.flat());
//     //break;

//   }
//   else {
//     ownersEatTooLittle.push(current.owners.flat());
//     //break;

//   }
// });

// //###############4

// let strTooMuch = ``;
// let strTooLittle =``;

// const newOwnersEatTooMuch = ownersEatTooMuch.flat();
// const newOwnersEatTooLittle = ownersEatTooLittle.flat();

// for(let i = 0; i <newOwnersEatTooMuch.length; i++){
//   if(i<newOwnersEatTooMuch.length-1){
//     strTooMuch+=`${newOwnersEatTooMuch[i]} and `
//   }
// else if(i===newOwnersEatTooMuch.length-1) {
//   strTooMuch+=`${newOwnersEatTooMuch[i]}'s `
// }

// }

// strTooMuch+=` dogs eat too much food.`;
// console.log(strTooMuch);

// for(let i = 0; i <newOwnersEatTooLittle.length; i++){
//   if(i<newOwnersEatTooLittle.length-1){
//     strTooLittle+=`${newOwnersEatTooLittle[i]} and `
//   }
// else if(i===newOwnersEatTooLittle.length-1) {
//   strTooLittle+=`${newOwnersEatTooLittle[i]}'s `
// }

// }
// strTooLittle+=` dogs eat too little food.`;
// console.log(strTooLittle);

// /////////#############5

// const exactFood= dogs.some(current=>{
//   current.curFood === (current.recommendedFood);
// })

// console.log(`Does any dog consume the exact amount of recommended food ? : ${exactFood}`);

// /////######6
// const okayFood= dogs.some(current=>{
//   current.curFood > (current.recommendedFood * 0.90) && current.curFood < (current.recommendedFood * 1.10);
// });

// console.log(`Does any dog eats okay amount of food? : ${okayFood}`);

// ////#####8
// const okayFoodArray = dogs.filter(current=>current.curFood > (current.recommendedFood * 0.90) && current.curFood < (current.recommendedFood * 1.10));
// console.log(okayFood);

// ///#############8

// const shallowDogs = [...dogs];
// console.log(shallowDogs.sort((a,b)=>(a.recommendedFood > b.recommendedFood)?1:-1));

// ///// Remove the below lines after testing ------////
// // 5.
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6.
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay));

// ////--- Remove until this line

// /////////////////---------------------- The find method;

// const firstWithdrawal = movements.find((item)=> item < 0);
// //console.log(firstWithdrawal);

// const account = accounts.find((item)=> item.owner === 'Jessica Davis' );
// //console.log(account);

// for (const item of accounts){
//   if(item.owner === "Jessica Davis");
//  //   console.log( item);

//   // if(item.owner === "Jessica Davis"){
//   //   return item;
//   // }
//   // else{
//   //   return "not found";
//   // }
// }

// // Map Method
// const eurToUsd = 1.1;
// const movementsUSD = account1.movements.map((item,index) => {return item* eurToUsd });
// //console.log(movementsUSD);

// /// fileter method

// const deposits = account1.movements.filter(item => {
//   return item > 0;
// });

// const withdrawal = account1.movements.filter(item => {
//   return item < 0;
// });

// //console.log(deposits);
// //console.log(withdrawal);
// const array1 = [-2345, 2, -4, -123];
// const reducer2 = array1.reduce((accumulator, item) => accumulator+item,0);
// let total = [ 0, 1, 2, 3 ].reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   0
// )

// const maximum = array1.reduce(function(accumulator,item){
//   if(item >= accumulator) {
//    // console.log(accumulator,'--');
//     return item;

//   }
//   else {
//     return accumulator;
//   }
// },array1[0])
// //console.log(maximum);

// const minimum = array1.reduce(function(accumulator, item){
//   if(item < accumulator){
//     return item;
//   }
//   else{
//     return accumulator;
//   }

// },array1[0]);
// //console.log(minimum);

// //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// ///////////////////////////////////////
// // Looping Arrays: forEach
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for ( const [i,item] of movements.entries()){
// //   //console.log(`${i} ${item}`) ;

// //   if( item > 0 ){
// // //    console.log(item);
// //   }
// // }

// //console.log('---- FOREACH ----');
// // movements.forEach(function f1 (mov,i) {
// //   if (mov > 0) {
// //    // console.log(`Movement ${i + 1}: You deposited ${mov}`);
// //   } else {
// //     //console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// //   }
// // });
// // f1(200);
// // f1(450);
// // f1(400);
// // ...

// // currencies.forEach(function(value, key, map ){
// //   console.log(`${value}, ${key}, ${map}`);
// // })

// // //const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// // const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// // currenciesUnique.forEach(function(value, _, set){
// //   console.log(value, _, set);
// // })

// ///

// /////////---- Sorting array ---- ////////////
// ///////////////////////////////////////
// // Sorting Arrays

// const sort1 = [54,34,212,4,56,56,1,65];
// const sort2 = [76,34,233,64,8,12,0];

// sort1.sort((a,b)=>{
//   if(a>b){
//     return -1
//   }
//   else if(b>a){
//     return 1;
//   }
// });
// //console.log(sort1);
// sort1.sort((a,b)=>{
//   if(a>b){
//     return 1
//   }
//   else if(b>a){
//     return -1;
//   }
// });
// //console.log(sort1);

// sort1.sort((a,b)=>b-a);
// //console.log(sort1);

// ///////////////////////////////////////
// // More Ways of Creating and Filling Arrays
// // const arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // // Empty arrays + fill method
// // const x = new Array(7);
// // console.log(x);
// // // console.log(x.map(() => 5));
// // x.fill(1, 3, 5);
// // x.fill(1);
// // console.log(x);

// // arr.fill(23, 2, 6);
// // console.log(arr);

// // // Array.from
// // const y = Array.from({ length: 7 }, () => 1);
// // console.log(y);

// // const z = Array.from({ length: 7 }, (_, i) => i + 1);
// // console.log(z);
// // labelBalance.addEventListener('click', function () {
// //   const movementsUI = Array.from(
// //     document.querySelectorAll('.movements__value'),
// //     el => Number(el.textContent.replace('€', ''))
// //   );
// //   console.log(movementsUI);

// //   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// // });

// // ---- Array Methods practice ---- /////

// // 3.
// // const { deposits1, withdrawals1 } = accounts
// //   .flatMap(acc => acc.movements)
// //   .reduce(
// //     (sums, cur) => {
// //        cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
// //       //sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
// //       return sums;
// //     },
// //     { deposits: 0, withdrawals: 0 }
// //   );

// // console.log(deposits1, withdrawals1);

// //////////////---- More to fill arrays- The fill and from methods---------------- /////////////

// const arr = [1,2,3,4,5,6,7];
// //console.log(new Array(1,2,3,4,5,6,7));

// const arr2 = new Array(1,2,3);
// //console.log(arr2.map((i)=> i));
// arr2.fill(1,3,4)
// arr2.fill(3);
// //console.log(arr2);
// arr.fill(23,2,5);
// //console.log(arr);

// const y = Array.from({length:7}, ()=>1);
// //console.log(y);

// const randomArray = Array.from({length:100}, ()=> Math.ceil(Math.random()*100 ));
// //console.log(randomArray);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2);
// });

// const sum = accounts.map((item) => item.movements)
// .flat()
// .reduce((sum,cur)=>
// {
//   cur > 0 ? (sum.deposits+=cur) : (sum.withdrawal+=cur);
//   return sum;

// },{deposits:0, withdrawal:0});

// //console.log(sum);

// /////////////////////// The following entire code is from the section Section 12: Numbers, Dates, Intl and
// //Timers

// /// The Random function

// //console.clear();
// //const random = Math.trunc((Math.random())*3+1);
// //console.log(random);

// // min and max includes both
// const createRandom = function(min, max){
//   let random = Math.trunc((Math.random()*max+min));
//   return random;
// }

// ////will include both min amd max.
// //console.log(createRandom(1,3));

// // inlcude min but will not have max.
// const createRandom2 = function(min,max){
//   let random = Math.trunc(Math.random()*(max-min) + min);
//   return random;
// }

// /// will inclue min, but will not have max.
// //console.log(createRandom2(1,3));

// ////
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0...(max - min) -> min...max
// //console.log(randomInt(10, 20)); // creates a random number bewtween 10 and 20 both min and max inclusive.

// //const now = new Date();
// //console.log(now);

// //console.log(new Date('December 20, 2021'));
// //console.log(new Date(2023,11,42));
// //const n = Date.now();
// //console.log(new Date(n).toISOString());

// //// printing clock on the console
// const printClock = function(){
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }

// //setInterval(printClock,1000);
