const {map,reduce,filter}=require('@laufire/utils/collection')
const { values } = require('@laufire/utils/lib')
const Totalmarks=[]
const markSheets=[ 
        {
            student: 'Sriram',
            rollNo: 11,
        },
        {
            student: 'Ram',
            rollNo: 16,            
        },
        {
            student: 'sri',
            rollNo: 18,
        },
        {
            student: 'mani',
            rollNo: 20,
        },
        {
            student: 'Prasanna',
            rollNo: 22,
        },
        {
            student: 'balaji',
            rollNo: 24,
        },
    ]
    const studentMarks = {
        '11':{
            tamil: 80,
            english: 90,
            science: 86,
            maths: 97,
            social: 76
        },
        '16':{
            tamil: 60,
            english: 97,
            science: 100,
            maths: 34,
            social: 100
        },
        '18':{
            tamil: 60,
            english: 90,
            science: 66,
            maths: 93, 
            social: 46,
        },
        '20':{
            tamil: 40,
            english: 70,
            science: 86,
            maths: 73,
            social: 86,
        },
        '22':{
            tamil: 50,
            english: 60,
            science: 80,
            maths: 83,
            social: 96,
        },
        '24':{
            tamil: 55,
            english: 65,
            science: 70,
            maths: 80,
            social: 99,
        },
    }
const getTotal=(marks)=>reduce(values(marks),(a, b) => a + b,0);
    
const getResult=(marks)=>Math.min(...values(marks)) < 35 ?"fail":"pass";

const getRank=(studentData)=> {
      const sortedArr= studentData.sort((a,b)=>b.Totalmarks-a.Totalmarks);
      
      let Rank=0;
       return map(sortedArr,(studentDetail)=>{
        
        return {...studentDetail,rank:(studentDetail.Result==="pass")? ++Rank : "-"};
       });
}
let pass=0;
let fail=0;
// refactor
const getCount=(studentData)=> {
       map(studentData,(student)=> student.Result== "pass"? pass++ : fail++);
                 /* let pass=0;
               let fail=0; */
              /* for (let i = 0; i < results.length; i++) { 
               
               results[i].Result== "pass"? pass=pass + 1:fail= fail+ 1;
              } */ 
               return [...studentData,{Numberofpass:pass,Numberoffail:fail}];
              }
             
           
          
        
  
const getStudentDetails=(markSheets)=>map(markSheets,(stu)=> ({
    ...stu,
    Totalmarks:getTotal(studentMarks[stu.rollNo]),
     Result:getResult(studentMarks[stu.rollNo])
    }));


const main= ()=>{

const studentData=(getRank(getStudentDetails(markSheets))); 
console.table(getCount(studentData));



}
main();


    

   
    