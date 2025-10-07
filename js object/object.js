let product = {
    name : 'iphone',
    company : 'Apple',
    model : 17,
    price : '$15000',
    
    displayDetails : function(){
        console.log(`Name of product : ${this.name}\nModel of product : ${this.company}\nPrice of Product : ${this.price}`)
    }
}

console.log(product);
product.displayDetails();

let product2 = product;
console.log(product2);

product.price = '$16000';

console.log(product2);
if(product === product2) console.log('isEqual');