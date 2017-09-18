/*Write four functions that return the sum of the numbers
in a given list using a for-loop, a while-loop, recursion, and underscore.
    Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.*/

let data =[1,2,3,4,5]; // 15

//sumFor
function sumFor(data){
  let i;
  let sum = 0;

  for(i = 0; i < data.length; i++){
    sum += data[i];
  }

  return sum;
}

console.log(sumFor(data));
//sumWhile

function sumWhile(data){
  let i = 0;
  let sum = 0;

  while(i < data.length){
    sum += data[i];
    i++;
  }

  return sum;
}

console.log(sumWhile(data));

//sumRecursion

function sumRecursion(data, i){
  return (i >= 0)? data[i] + sumRecursion(data, i - 1) : 0;
}

console.log(sumRecursion(data, data.length - 1));

//sumTheSimpleWay
function sumTheSimpleWay(data){
  return _.reduce(data, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(data));