let two_arr= 
[[0,0,0], 
[0,0,0], 
[0,0,0]];

for(let i=0; i<3; i++){ //row
    for(let j=0; j<3; j++){ //column
        // document.write(two_arr[i][j]+"  ");
         if(i+j<3)
         document.write(1+ "    ");
         else
         document.write(0+ "    ");
 
        //  if(i<=j)
        //  document.write(1);
        //  else
        //  document.write(0);

        // if(i==1 && j==2)
        // document.write(0);
        // if(i==2 && j==1)
        // document.write(0);
        // if(i==2 && j==2)
        // document.write(0);
    }
    document.write("<br>");
}

// 1 1 1   0,0  0,1  0,2  i<=j
// 1 1 0   1,0  1,1  1,2  i>=j 
// 1 0 0   2,0  2,1  2,2  i>j 

/* 0   1   3
0   3   9
8   6   5

0 +3 +5+3+8
if(i==j)
sum+= arr[i][j]
sum+= arr[0][arr.length-1]+arr[arr.length-1][0];

0 * 0        0,1       i=0j=1 i+j<2
* * *   1,0  1,1  1,2
0 * 0        2,1 */

