console.log("hey this tutorial of js")

var a = 5; // var is a global variable
let b = 3; // let is local variable
var c = "jatin";
var _a = "Thakur";
// var 55a = "Rohan" Its invalid
const a1 = 3; // not allowed to change its value

console.log(a+b+8)
console.log(typeof a , typeof b , typeof c)
{
    let a = 5 ;
    console.log(a);
}
let o = {
    "name": "jatin",
    "job code": 5600,
    "batch" : "Cs"
}
console.log(o);
o.salary = "100 crores";
o.add = "Malti Road";
console.log(o);

if(a<=5){
    let b = 10;
    console.log(b);
}
console.log(b);

// let d = 5;
// let e = 5;
// if(d===e){
//     console.log("success");
// }else{
//     console.log("not success");
// }
//     console.log(eval('45+9+90'));

//     let p = "Hello World!";
//     let n = p.substring(0, p.length - 1);

//     console.log(n);
//     p = n;
//     console.log(p)
//     for(let i = 0 ; i< 10 ; i++){

//          let ran = Math.random() *10;
//         let computer = "";
//         if(ran >= 0 && ran <= 3 ){
//             computer = "rock";
//         }else if(ran >3 && ran <7 ){
//             computer = "paper";
//         }else{
//             computer = "scisser";
//         }
//         console.log(computer)
//     }


let bo = 3;
function test(){
    bo = 5;
}    
test();
console.log(bo);