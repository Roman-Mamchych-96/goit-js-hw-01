function makeTransaction(quantity, pricePerDroid) {
    
    const allPrice = quantity * pricePerDroid;
    return `"You ordered ${quantity} droids worth ${allPrice} credits!"`

}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 
