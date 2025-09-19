
console.log("Welcome to learning of Condional Statementes");

// 1. if/else if / else statment

let marks = 90;
if(marks>=90){
    console.log("your grade is A");
}else if(marks >= 80){
    console.log("your grade is B")
}else if(marks>=55){
    console.log("your grade is C")
}else{
    console.log("Your failed");
}

//2. Ternary opretor
let temp = 10;
let weather = temp <15 ? "weathar is cold" : "weathar is normal";
console.log(weather);

//3. Switch Statement

let day = 4;
switch(day){
    case 1 : console.log("Today is moday"); break;

    case 2 : console.log("Today is Tuesday"); break;

    case 3 : console.log("Today is Wednesday"); break;

    case 4 : console.log("Today is Thursday"); break;

    case 5 : console.log("Today is Friday"); break;

    case 6 : console.log("Today is Satuday"); break;

    case 7 : console.log("Today is Sunday"); break;

    default: console.log("Enter a valid day") ;
}