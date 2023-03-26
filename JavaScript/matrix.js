

 var i , j ;
 for (i=0; i<=3; i++) //rows
 {
    for (j=1; j<=4-i; j++) //columns
    {
     document.write(" "+j);
    }
    document.write("<br>");
 }
 /* i=0; j= 1 2 3 4
    i=1; j= 1 2 3
    i=2; j= 1 2 
    i=3; j=1 */


let ques=[
    {
        id:1,
        ques: "NAme the capital of Bhutan",
        op1: "Dhaka",
        op2: "Thimpu",
        op3: "Delhi"
    }
]
let score=0;
if(ques[0].op1)
score+=2;