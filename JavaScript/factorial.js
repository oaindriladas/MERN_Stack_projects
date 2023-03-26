function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    else
    {
        return n* factorial(n-1); 
    }
}
console.log(factorial(10));

/* fibonacci series
0 1 1 2 3 5 8 13 21 34
return fibonacci(n)
0+1
   1+1
        1+2
           2+3 

           if(n==0) 
           return 0;  // first term

           else
           {
            return fibonacci(n)+fibonacci(n+1);
           }
*/

