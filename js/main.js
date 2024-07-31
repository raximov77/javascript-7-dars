

/* 1-masala */

/* 1 */
/* let person = {
    name: "Abdulloh",
    age: 19,
    job: "Logistic company",
    hobby: "sleep",
    interest: "game",
    number: "+998944683325",
    username: "AU",
};
  
  for (let key in person) {
    console.log(`${key} - ${person[key]}`);
} */

/* 2 */
/* const person1 = {
    name: "Abdulloh",
    age: 19
};

const person2 = {
    hobby: "Volleybol",
    interest: "Sleep"
};
  
  const totalPerson = Object.assign({}, person1, person2);
  console.log(totalPerson); */

/* 3 */
/* let numbers = [1,5,7,8,9];
let lastNumber = numbers[numbers.length - 1];
let changeNumber = lastNumber + 1;

numbers.push(changeNumber);
console.log(numbers); */

/* 4 */
/* let numbers = [10, 15, 50, 70];

function changeNumber(array) {   
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    let firstNumber = array[0];
  
    if (firstNumber % 2 === 0) {
      array.unshift(sum);
    } 
    else {
      array.push(sum);
    }
    return array;
  }
  let changed = changeNumber(numbers);
  console.log(changed);
 */
/* 5 */
/*   let array1 = [1,5,10,15,17,19,20];    
 
  function changeNumber(numbers) {
    if (numbers.length <= 1) {
      return numbers;
    }
  
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];
  
    numbers[0] = lastNumber;
    numbers[numbers.length - 1] = firstNumber;
    return numbers;
}

console.log(changeNumber(array1)); */

/* 6 */
/* function totalWords() {
    const wordsArray = [];
  
    for (let i = 0; i < 6; i++) {
      const word = prompt('Soz kiriting:');
      wordsArray.push(word);
    }
  
    return wordsArray;
  }
  
  const resultArray = totalWords();
  console.log(resultArray); */


  /* 2-masala */

/* 1 */
/* function addArray() {
    const array = [1,2,3,77]; 
  
    for (let i = 0; i < 1; i++) {
      const userInput = prompt('Ixtiyoriy string kiriting:');
      array.push(userInput);
    }
    return array;
  }
  
  const resultArray = addArray();
  console.log(resultArray); */

  /* 2 */
  /* let array1 = [1, 5, 10, 24, 45];
  let array2 = [4, 10, 24, 19, 8];
  let result = addToFirst(array1, array2);  

  function addToFirst(array1, array2) {

    let commonElements = [];
    for (let value of array1) {
      if (array2.includes(value) && !commonElements.includes(value)) {
        commonElements.push(value);
      }
    }
    array1 = [...commonElements, ...array1];
    array2 = [...commonElements, ...array2];
    return { array1, array2 };
  }
  
  console.log(result.array1); 
  console.log(result.array2);  */

  /* 3 */
/*   let obj = {
    name: "John",
    age: "30",
    jop: "Mehanic",
    study: "none",
    travel: "US"
};
  
  const toArray = Object.keys(obj);
  const length = toArray.length;
  
  console.log(toArray); 
  console.log(length);  */   
  
  /* 4 */
 /*  function calculateNumbers() {
    const numbers = [];
  
    for (let i = 0; i < 4; i++) {
      const number = prompt('Son kiriting:');
      numbers.push(number);
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += +numbers[i];
    }
    console.log(sum);
  }
  calculateNumbers(); */
  
  
  /* 5 */
  /* let obj1 = {
    name: "Abdulloh"
  };
  let obj2 = {
    age: 19
  };
  
  let totalObject = Object.assign({}, obj1, obj2);
  
  for (let key in totalObject) {
    console.log(totalObject[key]);
  } */
  
  

  

  