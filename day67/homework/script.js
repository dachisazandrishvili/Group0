//Create a digital clock that displays the current time, updating every second using setInterval.
// const display = function inter(){

//   setInterval(function(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minuts = date.getMinutes();
//     let seconds = date.getSeconds();
//     console.log(hours,":",minuts,":",seconds)
//   },1000)
// }

// display()


// Write a function that calculates the area of a circle given its radius.

const pi = 3.14159;

function circle(R){
  console.log(pi * R**2);
}

circle(5)


//Convert String to Kebab Case:
function kebabCase(str){
  for(let i = 0; i < str.length; i++){
    if(str[i]=== str[i].toUpperCase()){
      str.replace(str[i],  "-")
      
    }
  }
  console.log(str)
  
}

kebabCase("nameDachi")


//Write a function that returns the current date in three different formats:

const dis = function(){
  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(hours, "/",minuts, "/",seconds)
  console.log( seconds,"/",minuts ,"/",hours)
  console.log(seconds,"/", hours,"/",minuts)
}

dis()


// Check if a Given Date Falls on a Leap Year:

let year = Number(prompt("enter num: "))
 let month = Number(prompt("enter month"))

function leap(yr,mnth){
  date = new Date(yr,mnth);
  let yearr = date.getYear();
  if(yr % 4 === 0){
    console.log("this is a leap year")
  }else{
    console.log("this is not a leap year")
  }


}

leap(year,month)


//Calculate Difference in Days Between Two Dates

function difference(date1,date2){
  let year1 = date1.getYear();
  let year2 = date2.getYear();
  let yeardef = year1 - year2;
  let mnth1 = date1.getMonth();
  let mnth2 = date2.getMonth();
  let monthdef = mnth1 - mnth2
  console.log(yeardef,monthdef)

}

let date = new Date(2020,15)

let datee = new Date(2010,15)

difference(date,datee)