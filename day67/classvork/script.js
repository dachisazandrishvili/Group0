let seconds = 0;

let minuts = 0;

let hours =1;


const timer = setInterval(function(){
  seconds++
  if(seconds % 60 === 0){
    minuts ++;
    seconds = 0;
  }
  if(minuts % 60 === 0){
    hours ++;
    minuts = 0;
  }
  if(hours % 24 === 0){
    hours = 0;
    clearInterval(timer);
  }

  console.log(seconds,minuts,hours)



},1000);
