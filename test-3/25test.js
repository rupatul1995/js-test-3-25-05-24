// Q. 1 Write a JavaScript for loop that iterates from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Input:
// None
// Output:
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", ..., 100

// solve:=

// for( var i=1; i<100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i+"FizzBuzz");
//     }else if ( i%5===0){
//         console.log(i+"Buzz");
//     }else if(i% 3===0 ){
//         console.log(i+",Fizz");;
//     }
//   console.log(i);
// }


// Q. 3Create a JavaScript function that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (intersection).
// Input:
// [1, 2, 3, 4]
// [2, 4, 6, 8]
// Output:
// [2, 4]

// solve:=


// array1=[1,2,3,4];
// array2=[2,4,6,8];
// array3=[];
// function mydata(array1,array2){
//     for(var i=0; i<array1.length; i++){
//         for(var j=0; j<array2.length; j++){
//             if( array1[i]===array2[j]){
//                 array3.push(array1[i])
//             }
//         }
//     }
// return array3
// }
//  const array4 =mydata(array1,array2);
//  console.log(array4);



// Question 5:
// Create a JavaScript function that takes an array of numbers and returns a new array with all the duplicate elements removed.
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]


// array1=[1, 2, 2, 3, 4, 4, 5];
// array2=[];
// function mydata(array1){
 
//     for (i = 0; i < array1.length; i++) {
//         if (array2.indexOf(array1[i]) === -1) {
//             array2.push(array1[i]);
//         }
//     }
//  return array2
// }  
//  const array3=mydata(array1);
//  console.log(array3);