me = {
  name:"Dachi",
  surname:"sazandrishvili",
  age:15,
}

you = {
  name:"luka",
  surname:"tskhvaradze",
  age:17,
}

const administrator = {
  changeMyName: function(name,neww){
    me.name = neww;
  },
  changeMySurname: function(surname,neww){
    me.surname = neww;
  },
  changeMyage: function(age,neww){
    me.age = neww;
  },
  changeYourName: function(name,neww){
    you.name = neww;
  },
  changeYourSurname: function(surname,neww){
    you.surname = neww;
  },
  changeYourage: function(age,neww){
    you.age = neww;
  },
}

administrator.changeMyName(me.name,"nika")

console.log(me)