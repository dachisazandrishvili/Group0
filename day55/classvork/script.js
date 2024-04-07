// classwork 1 
for (let i = 0; i <= 5; i++){
  console.log("hi", i)
}

// classwork 2
for (let i = 100; i >= 1; i --){
  console.log("hi", i)
}

// classwork 3

for (let i = 0; i<=20; i++){
  if (i % 2 == 0){
    console.log(i,"is even");
  }
  else{
    console.log(i, "is odd");
  }
};

// classwork 4
let form = document.getElementById("form");
let namee = form.elements.nmn.value
if (namee === "Nick" || namee === "Ann"){
  console.log("hello my friend")
}else{
  console.log("you are not my friend")
};