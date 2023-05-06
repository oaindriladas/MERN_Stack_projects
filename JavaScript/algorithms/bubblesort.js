let input_arr = [90, 12, 20, 34, 200, 45, 70];
//ouput = [12 20 34 45 70 90 200]
function bubblesort(input_arr)
{
    let i,j,n, temp;
    n= input_arr.length;
    console.log("length of array"+n);
    for(i=1; i<n ;i++)
    {
        for(j=0; j<n-1; j++){
            //swapping elements
            if(input_arr[j]> input_arr[j+1])
            {
                temp= input_arr[j];
                input_arr[j]= input_arr[j+1];
                input_arr[j+1]= temp;
            }
        } }
    console.log(input_arr);
}
bubblesort(input_arr);