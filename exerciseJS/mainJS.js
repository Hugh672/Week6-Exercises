function square() {
    var num = prompt("Enter number to be Squared");
    var output1 = num * num;
    //return console.log(output1);
    return window.alert(output1);
}

function buttonTest(number) {
    var num1 = prompt("Enter 1st No.");
    var num2 = prompt("Enter 2nd No.");
    var num3 = prompt("Enter 3rd No.");
    var output = Number(num1) + Number(num2) + Number(num3);
    return window.alert(output);
}

function person () {
    console.log(person.name, person.age, person.occupation);
    person.name = "Hugh",
    person.age = 27,
    person.occupation = "Trainee"
};


var person2 = {
    name: "Bob",
    age: 30,
    occupation: "Grad"
};
console.log(person.name, person.age, person.occupation);

function increaseAge() {
    if(person.age == person.age)
        person.age ++
    return window.alert(person.age)
}

function updateName(){
    console.log("TestTestTest");
    person2.name = document.getElementById('textbox1').value
}

function updateAge(){
    person2.age = document.getElementById('textbox2').value
}
function updateJob(){
    person2.job = document.getElementById('textbox3').value
}
function showPerson(){
    console.log(person2.name, person2.age, person2.job);
}

var myString = " He said “My name is Elliott” ";
console.log(myString)
var myString = myString.toUpperCase();
console.log(myString)

var myString2 = "Izikiel"
var myInt = 35;
console.log(myString2+myInt);

var myArray = ["Smith", "Bob", "Alex"];
console.log(myArray);
myArray.push("Terry");
console.log(myArray);
myArray.splice(3, 1);
console.log(myArray);

function conditionals() {
    if (person2.age >= 20 && person2.age <= 40) { ;
    console.log(true);
    }else{
        console.log(false);
    }
}

//iteration 1
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//iteration2
for (i = 1; i <= 10; i++) {
    if(i%2==0){
        console.log(i);
    }
}

function fizzbuzz(){
    for (i = 1; i <= 100; i++) {
        if(i%5==0 && i%3==0){
            console.log("Fizz" + "Buzz");
        } else if(i%3==0){
            console.log("Fizz");
        } else if(i%5==0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


function route(){
    var input = prompt("Enter Number")
    var count = 0;
    console.log("Initial input: " + input)
    while(input > 1){
        if(input % 3 == 0){
            console.log("dived by three")
            input /= 3;
        } else {
            console.log("subtracted by 1")
            input--;
            //input /= 3;
        }
        count++;
        console.log("current input: " + input)
        //console.log("current count: " + count)
    }
    console.log("Final Count: " + count);
}

function tripleLetters(){
    var input = prompt("Please enter a string of letters")
    count = 0;
    for (i = 0; i <= input.length-3; i++){
        if (input.charAt(i)==input.charAt(i+1)&&input.charAt(i)==input.charAt(i+2)){
            count++;
        }
    }
    console.log("Triple Count: "+count);
    return window.alert("Triple Count: "+count);
}