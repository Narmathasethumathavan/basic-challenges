const {map,reduce,filter}=require('@laufire/utils/collection')
const accounts = [
    {
      name: 'Babu',
      accountNo: 2,
    },
    {
      name: 'Chandra',
      accountNo: 3,
    },
    {
      name: 'Arun',
      accountNo: 1,
    },
  ];
  const balances = {
    //accountNo: balance
    '1': 5000,
    '2': 2000,
    '3': 0,
  };
const transactions = [
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 1,
      type: 'deposit',
      amount: 500,
    },
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 2,
      type: 'deposit',
      amount: 300,
    },
    {
      accountNo: 2,
      type: 'withdrawal',
      amount: 200,
    },
    {
      accountNo:3,
      type: 'deposit',
      amount: 200,
    },
  ];

//const getBalance,const displayBalance,const updateBalance

const getBalance=(item)=>balances[item];

const displayBalance=(accounts)=> map(accounts,(acc)=> ({...acc,balance:balances[acc.accountNo]}));

const updateBalance=(trans)=>{
for(i=0;i<trans.length;i++)
{
    trans[i].type === 'deposit' ? balances[trans[i].accountNo] = getBalance(trans[i].accountNo) + trans[i].amount 
    :  balances[trans[i].accountNo]= getBalance(trans[i].accountNo) - trans[i].amount

 }
return balances;
}
const main = function main() {
    console.log('BeforeTransaction' )
    console.table( displayBalance(accounts));
updateBalance(transactions);
    console.log('AfterTransaction')
    console.table( displayBalance(accounts));
  }
  
  main();