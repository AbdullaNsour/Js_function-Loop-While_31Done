//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  loop for ([1]; [2]; [3])
// [1] Initialize or Begin 
// [2] Condition
// [3] Action
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// for (let i=23; i <= 25; i ++ ){
//     console.log(i) 
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// loop while ([1]; [2]; [3])
// [1] Begin 
// [2] Condition
// [3] Action
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let products = ['a','b','c','d'];

// let index =0;
// while (index < 11){
// console.log(products [index])
// index += 1 
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                          this is just explanation
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 1
// correct the syntax error 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// [ 1, 7,  9, 45 ]

// ["Str","alex","moh"]

// ['the','fox', 'over', 'lazy', 'dog']

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 2  
// What the index of "Banana","Tomato"
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits [1],fruits[2] ) 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 3 
// Create an array represents for :
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var food=["Tomato","Banana","Watermelon","olives","Fig"]
var sport=["Football","Basketball","Table Tennis"]
var movie=["fightclup","Troy","Iron man","Avinger"]

console.log(food [4],movie[2],sport[0] ) 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 4
// Create an array as a parameter :
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// var names = [ 1, 2, 3, 4];
// function firstOfArray (k){
// k=names[0]
// }
// firstOfArray (names)



var cars=["lambo","benz","beamer","ford"]
 function firstOfArray(cars){
     return cars[0]}
      console.log(firstOfArray(cars))


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 5
// Create an array as a parameter :
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let nsour = [1,2,3,4,5]

function lastOFArray (x){
    return x[x.length-1]
}
console.log(lastOFArray(nsour) )



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 6
// using (push, unshift, shift, pop)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let num =['1',2,3,4,'5']

console.log(num.shift(), num ,num.pop())

num.unshift(-5)
num.push(9)
console.log(num)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 7
// figure out what the thing thats (push, unshift, shift, pop)
// we can use splice (start, count, add, add, ... )
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(num             +   '  '  + 'Task 7  (Array) befor'       )
console.log(num.unshift('first')   + '     ' + 'this is unshift '      )
console.log(num.push( 'last')      + '     ' + 'this is push '         )
console.log(num.pop()       + '     ' + 'this is pop remove last'         )
console.log(num.shift()     + '     ' + 'this is shift  remove first'     ) 
console.log(num             +   '  '  + 'Task 7  (Array) after'       )



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercise 1 after task 7

/* Write a function called doubleValues which accepts an array and returns 
* a new array with all the  values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(value) {
        newArr.push(value * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));


// var doub = [1,3,5];

// function doubleValues(doub){
// for(let i=0; i<doub.length; i++){
// console.log(doub[i]*2)
//     }}
// console.log(doubleValues(doub))




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercise 2 after task 7
// * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// *
// * Test Cases:
// *   onlyEvenValues([1,2,3]) 
// *   onlyEvenValues([5,1,2,3,10]) 
// * 
// * Result:
// *  Test Case 1:  [2]
// *  Test Case 2: [2,10]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var names = [1,2,3,4,5];
// function OnlyEvenValues(names){
// for(let i=0; i<names.length; i++){
// if (names[i] % 2 ==0){ console.log(names[i])
    
// }        
//     }}
// console.log(OnlyEvenValues(names))

function onlyEvenValues(arrayAny) {
    var arrayOnlyEven = [];
    for (i = 0; i < arrayAny.length; i++) {
      if (arrayAny[i] % 2 == 0) {
        arrayOnlyEven.push(arrayAny[i]);
      }
    }
    console.log( arrayOnlyEven +'                   '+ 'Task 7' );
  }
  onlyEvenValues([1, 2, 3]);
  onlyEvenValues([5, 1, 2, 3, 10]);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 8  middleOfArray
// 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var numbers =[ 1,2,3,4,5]
var mid=numbers.length/2

function middleOfArray(numbers){
if (numbers.length %2 ==0){ console.log(numbers[mid]) }
else {return numbers[(numbers.length-1)/2]}}
console.log(middleOfArray(numbers ) +'                   '+ 'Task 8')


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 9  operator (=)
// 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var animals = ['cat', 'ele', 'bird']
animals[0]='zebra'
animals[1]='elephant'
animals.pop()
console.log(animals                       +'      '+ 'Task 9')



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 10  indexOfArray
// 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var x=[1,2,3,4,5,6,7]
function indexOfArray(x,y){
    return x[y]
}
console.log(indexOfArray(x,3) +'                   '+ 'Task 10')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 11  // 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var nums = [1, 2, 3, 8, 9];

function arrayExceptLast(nums) {
console.log(nums.slice(0, nums.length - 1 )  +'             '+ 'Task 11');
}
Ex: arrayExceptLast(nums);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 12  // 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let arr=[1,2,3,4,5] //error
// var x=6
// function addToend(x){ 
//     var popped = arr.push(x)
//     console.log(arr)}
//     console.log(addToend(x))

    var nums = [1, 2, 3, 8, 9];
function addToEnd(nums, valueToAdd) {
  nums.push(valueToAdd);
  console.log(nums        +'        '+ 'Task 12');
}
addToEnd(nums, 55);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 13
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
sum ([1,2,3,8,9])

function sum (arr){
var all = 0;
for (var i=0; i<arr.length; i++){
    all = all+arr[i]
}
console.log(all  +'                  '+ 'Task 13')
}



// while 
// var nums=[1,2,3,4,5,6]
// let sums = 0
// function sumArray(){let i=0 ;  ;
//     while ( i<nums.length){ sums+=i ;i++
//         console.log(sums)
//     }
// }
// console.log(sumArray())

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 14
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var are = [4,3,9,5];
var smallest = are[0];

function minInArray(){
        for(var i=0; i<are.length; i++){
            if(are[i] < smallest){
                smallest = are[i];
            }
           return smallest
        }}
        console.log(minInArray());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 15
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let rem =[1,2,3,8,9]

function removeFromArray(a, remove){
for (var i = 0; i < a.length ; i++) {
    if (a[i] == remove) {a.splice(i,1)}
    
}
return a
}
console.log(removeFromArray (rem, 8))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 16
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function sumArray(nums) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    console.log(sum);
  }
  var nums = [1, 2, 3, 8, 9];
  
  sumArray(nums);
  

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 17
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function aveArray(){
//     for (let i=0 ; i<=nums.length ; i++){ sum+=i ;
//         let ave = sum/nums.length
//         console.log(sum)
//         console.log(ave)
//     }
// }
// console.log(aveArray())


function aveArray(nums){
    let sum=0;
    let avarage=0;
    for(i=0;i<nums.length;i++){
    sum +=nums[i];
    avarage=sum/(nums.length)
    }
console.log(avarage)
}

var nums= [1,2,3,8,9]
aveArray(nums) 

var nums= [1,2,3,8,9,77]
aveArray(nums) 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 18
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]

function shorterInArray (short){
    x=short[0]
    for (var i = 0; i < short.length ; i++) 
    if (short[i].length < x.length){
        x=short[i]
    } 
    return x
}

console.log(shorterInArray (strings))


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 19
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var string= "alex mercer madrasa rashed2 emad hala"
let num_string =0

function repeatChar (string, x){
    for (let i=0 ; i < string.length; i++ ){
    if (string[i]===x){ 
    
        num_string +=1
    }
    }console.log(num_string)
}
repeatChar(string, 'h')





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 20
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var words= ["alex","mercer","madrasa","rashed","emayd","hala"]
let indexs = [] 

function evenIndexOddLength (words){
for (let i=0; i < words.length; i++){
    if ([i] %2 == 0  && (words[i].length) % 2 !== 0 ){
        indexs.push (words[i])
    }
}console.log(indexs);

}
evenIndexOddLength (words)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 21
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function powerElementIndex(nums){
    let prIndex=[];
    for(i=0;i<nums.length;i++){
      prIndex.push((nums[i])**i);
    };
    console.log(prIndex);
  }
  var nums= [44, 5, 4, 3, 2, 10]
  powerElementIndex(nums) //=> [1, 5, 16, 27, 16, 100000]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Task 22 even number in even index
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function evenNumberEvenIndex(nums){
    let prIndex=[];
    for(i=0;i<nums.length;i++){
      if(i%2==0 && nums[i]%2==0){
        prIndex.push(nums[i]);
      }
    }
    console.log(prIndex);
  }
  var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
  evenNumberEvenIndex(nums) //=> [2,8,34]


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// While Exercises 
// Exercises 1
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function subtract(x){
//     var countdown = x;
//     while (countdown > 0){
//         countdown--;
//         console.log(countdown);
//     }} 
//     console.log(subtract(25))  //error

    
// function subtract(n){
//     let sub=0;let i=0;
//   while(i<n){
//     sub -=(i-1);
//     i++;
//   }
//   console.log("  ( "+n+" ) to 0 = "+sub)
//   }
  
//   Ex: subtract(4);



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 2
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function factorial(n){
//     let number = n;
//     let numberFactorial = number;
//         while(number > 1){
//             numberFactorial = numberFactorial * (number-1);
//             number--;
//         }
//     console.log(numberFactorial);}
//     factorial(5)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 3
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // function repeatStr(x, y) {
//     var clone = "";
//     while (y > 0) {
//       clone += x;
//       y--;
//     }
//     return clone;
//   }
// // console.log(repeatStr("rewind ", 15));

// function repeatStr(r,n){
//     let repeatedNow="";
//     while(n>0){
//       repeatedNow +=r+" ";
//       n--;
//     }
//     console.log(repeatedNow);
//   }
  
  
//   Ex: repeatStr("to",2);
//   Ex: repeatStr("to",4); 



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 4
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function sum2(num1,num2){
//     var sum2=0;
//   while(num1<=num2){
//   sum2 +=num1;
//   num1++;
//   }
//   console.log(sum2)
//   }
//    sum2(8, 9);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 5
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function multiOf(num1,num2,num3){
//     mult = num1 * Math.pow(num2,num3);
//     console.log(mult)
//     }
//      multiOf(4,10,3); 
//      multiOf(6,3,2); 
//      multiOf(6,2,3); 


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 6
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function muti2(num1,num2){
//     let multy=1;
//     while(num1<=num2){
//         multy *=num1;
//         num1++;
//     }
//     console.log(multy)
// }

// Ex: muti2(4, 5);
// Ex: muti2(3, 6);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Exercises 7
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function numberBetweenUs(x, y) {
//     var str="" ; 
//     var top=x+1
//     while (top < y-1) {
    
//     str+=`${top}, ` ;
// top++;  } str+=`${top}`
    
// return str
// }
// console.log(numberBetweenUs(2, 6));


