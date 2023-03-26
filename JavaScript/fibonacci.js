//const number=parseInt(prompt('Enter the numbe of terms: '));
number =10;
let n1 = 0,n2 = 1, nextTerm, sum=0;
console.log('Fibonacci Series: ');
for(let i = 1;i<=number;i++){
    console.log(n1);
    sum+=n1;
    nextTerm=n1+n2;  //1+1
    n1=n2; 
    n2=nextTerm; //5 *number
}
console.log("Sum is: "+sum);
//Assignment : display first n fibonacci numbers & sum of those numbers.
//using a for loop & recursion
/*
o(n)
5n ~~ n ~~ o(n) linear time
*/
