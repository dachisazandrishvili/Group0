// classwork 1
function evenOdd(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      console.log(`${arr[i]} is even`);
    }else{
      console.log(`${arr[i]} is odd`);
    }
  }
}

let testCase = [1,2,4,5,6,7,4];

evenOdd(testCase);

// classwork 2
function lPush(lst){
  const newList = [];
  for(let i = 0; i < lst.length; i++){
    if(lst[i] % 2 === 0){
      newList.push(lst[i])
    }
  }
  console.log(newList)
}

lPush(testCase)


// classwork 3

function five(list){
  const result = [];
  for(let i = 0; i <= 100; i++){
    if(list[i] % 5 == 0){
      result.push(list[1])
    }
  
  }
  console.log(result)
}
five(testCase)


// classwork 4
let sum = 0
const arrr = [];
for(let i = 0; i < 10; 1 ++){
  let num = Number(prompt("enter number: "))
  arrr.push(num)
} 

for(let m = 0; am < arrr.length; i++){
  sum += arrr[m];
}
console.log(sum)
