
let age = 18;
//Ternary Operator
let result = age>18 ? 'adult' :'child';
console.log(result); 

//Gauard Operator
 age = null  ;  
 let finalAge = age || 19;
 console.log(finalAge);
 

 //Default Operator

age = undefined ;
finalAge = age ?? 19;
console.log(finalAge);