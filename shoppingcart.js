
const {map,reduce,filter}=require('@laufire/utils/collection')
const rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };
  
  const discounts = {
    // values are in percentages.
    Apple: 10,
  };
  
  const taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
  };
  
  const purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  }
]; 
/* Functions */
const getDiscountPercent = (productName) => (discounts[productName] || 0)/100;

const getTaxPercent = (productName) => (taxes[productName] || 0)/100;
    
const getRate = (itemName) => rates[itemName];

const getSum = (purchase) =>  {

const discount=(getDiscountPercent(purchase.item)*getRate(purchase.item));
const tax=(getTaxPercent(purchase.item)*getRate(purchase.item));

    return ((getRate(purchase.item) * purchase.units)- discount*purchase.units + tax*purchase.units);;
};

// Do not change below this line.
/* Main Function */
var main = function main() {
  const total =map(purchases,(getSum)).reduce((a,b)=>a+b,0);
  console.log(total);
}

main();