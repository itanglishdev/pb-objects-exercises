//1
const data = { a: 1 };
//write your code here 
function isPlainObject(item) {

  if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
    return true
  }
}

console.log(isPlainObject(data)); // true

//2
const data2 = { a: 1, b: 2 };

function makePairs(obj) {

  for (const key in obj) {
    const entries = Object.entries(obj)
    return entries
  }
}
//write your code here 
console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

//3
const data3 = { a: 1, b: 2 };
//write your code here 
function without(obj, eliminator) {
  for (const key in obj) {
    if (obj[key] === obj[eliminator]) {
      delete obj[key];
    }
  }
  return obj
}

console.log(without(data3, 'b')); // { a: 1 }


//4
const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
//write your code here 

function isEmpty(object) {
  for (const [key, value] of Object.entries(object)) {
    if (value !== undefined)
      return false
  } return true

  // for (const value in object) {
  //   if (object[value] !== undefined || Object.keys(object).length !== 0)
  //     return false
  // } return true
}

console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 

//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here 

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } }

function invoke(object, value, nameIt, whatToCut) {


  const newObjectArray = { object, value, nameIt, whatToCut }
  return Object.values(newObjectArray)
}
//write your code here 
console.log(invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]


//7
const data7 = { a: { b: undefined } };

function isEmptyDeep(object) {

  const insideValue = Object.values(object)
  console.log(insideValue);
  console.log(object);

}
//write your code here 
console.log("===>", isEmptyDeep(data7));


//8
const data8 = { a: 1, b: { c: 1 } };
const data81 = { a: 1, b: { c: 1 } };
const data82 = { a: 1, b: { c: 2 } };
//write your code here 

function isEqualDeep(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log(isEqualDeep(data8, data81));// true  
console.log(isEqualDeep(data8, data82)); // false  


//9
const data9 = { a: 1, b: 2 };
const data91 = { c: 1, b: 2 };
//write your code here 
console.log(intersection(data9, data91)); // { b: 2 }


//10
const data10 = { a: 1, b: { c: 3 } };
const data11 = { c: 1, b: { c: 3 } };
//write your code here 
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }