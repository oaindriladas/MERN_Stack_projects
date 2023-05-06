/*   
    *
    * *
    * * *
*/
//1 dimensional array
const arr= [23, 34, 12, 10, 90];
let sum=0;  //global scope
//           0   1   2  3    4
//calculate the sum, average, count
console.log("count of numbers in array"+arr.length);

let i=0;
while(i<arr.length)
{
    sum+=arr[i];
    i++;
}
console.log("Sum of array elements: "+sum);
let product= arr.reduce((initial, current)=> {
    return initial*current;
})
console.log("product is: "+product);
//2 dimensional array
const twod_arr= [[0,0,0],[0,0,0],[0,0,0]];
/*
* * *    * 0 0       0,0  0,1  0,2   
0 * *    * * 0         1,1  1,2
0 0 *    * * *              2,2   */
for(let i=0; i< twod_arr.length; i++)
{
    for(let j=0; j<twod_arr.length; j++)
    {
        if(i<=j) 
        document.write(" *");
        else
        document.write(" 0");
    }
    document.write("<br>")
}


for(let row=0; row<twod_arr.length; row++)
{
    for(let column=0; column<twod_arr.length; column++)
    {
        document.write(" "+twod_arr[row][column]);
    }
    document.write("<br>");
}