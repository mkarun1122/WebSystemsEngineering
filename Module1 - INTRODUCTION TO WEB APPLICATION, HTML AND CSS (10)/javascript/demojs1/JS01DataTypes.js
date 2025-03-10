// Array

var cities= ["Hyderabad", "NewYork", "Calgary"];// here all the 3 values are strings
console.log(cities);

// typeof operator:
// The typeof operator can be applied to any value, and it returns a string
// indicating the data type of the value.

console.log(typeof 19); //number
console.log(typeof "JavaScript"); //string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined

// JavaScript Data Type conversion:
console.log(String(false))
console.log(Date())
console.log((489).toString())

// let num1=10, num2=5;
// if(num1>num2)
//     return num1; // this will be executed if num1 is
// // greater than num2
// else
//     return num2; // this will be executed if num2 is
// // greater than num1
// let fruit = 'apple';
let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('This is a banana.');
    break;
  case 'apple':
    console.log('This is an apple.');
    break;
  case 'orange':
    console.log('This is an orange.');
    break;
  default:
    console.log('Fruit not recognized.');
}

let day = 2;

console.log(typeof day);

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    // No break here, so it will fall through to the next case
  case 3:
    console.log('Wednesday');
    break;
  default:
    console.log('Invalid day');
}


// simple explicit function can be defined is shown as follows:
function calculateDistanceTravelled( startPos, currentPos ) {
var distance = Math.sqrt( Math.pow(currentPos.xPos -
startPos.xPos, 2) + Math.pow(currentPos.yPos - startPos.yPos,
2));
return Math.ceil(distance);
}
var startPos = { xPos : 20, yPos : 20 };
var currentPos = { xPos : 40, yPos : 40 };

var dist1 = calculateDistanceTravelled(startPos,currentPos);
console.log(dist1);

// Function example 2 
/* var startPos = { xPos : 20, yPos : 20 };
var currentPos = { xPos : 40, yPos : 40 };
document.write("You have travelled : " +
calculateDistanceTravelled(startPos, currentPos) + " KM");
function calculateDistanceTravelled(startPos, currentPos) {
var distance = Math.sqrt( square(currentPos.xPos -
startPos.xPos) + square(currentPos.yPos - startPos.yPos));
return Math.ceil(distance);}
var square = function(x) {
return x * x;
};
*/
// Uncaught TypeError: square is not a function

        function outer () {
        const outerVar ='The outer variable!';
        function inner() {
        console.log(outerVar);
        }
        return inner();
        }
        outer();

        let names=['JS','HTML','CSS'];
        console.log(typeof names);
        console.log(names instanceof Array)

        // Looping Array 
        array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
console.log(array[index]);
}

// forEach call functions 
array.forEach(function(element) {
        console.log("Array Elment "+element);
        });
/*
// Using the map method:
let num=[10,20,30];
square= num.map((n,index)=> {
return n*n;
});
console.log(square);//[100,400,900]

// . Using reduce method:
let num1=[10,20,30];
square= num1.reduce((sum,n)=> {
return sum + n*n;
});
console.log(square);// 1310


// Using filter method:
let num2=[10,20,30, 40,50,60];
filtered= num2.filter((num)=> {
return num>=30;// true or false depending on the
element value
});
console.log(filtered);//[30, 40,50,60]

Adding element using push:
num=[1,2,3,4,5];
x= num.push(6,7,8);
console.log(num); //[1,2,3,4,5,6,7,8]
console.log(x);// 8

//  Adding/joining arrays using concat:
arr1=[1,2,3]
arr2=[4,5];
arr3=[6,7,8];
arr= arr1.concat(arr2,arr3);
console.log(arr); //[1,2,3,4,5,6,7,8]

// Removing last element using pop:

num=[1,2,3,4,5];
x= num.pop();
console.log(num); //[1,2,3,4]
console.log(x);// 5

//  Removing first element using shift
num=[1,2,3,4,5];
x= num.shift(a);
console.log(num); //[2,3,4,5]
console.log(x);// 1


*/