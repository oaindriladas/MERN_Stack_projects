let arr= [10, 50, 30, 70, 80, 60, 20, 90, 40];
function linearsearch(search_term){
for(let i=0; i< arr.length; i++)
{
   // console.log("inside for loop");
    flag = false;
    if(search_term== arr[i])
    {
        console.log("Search term found at "+i);
        flag=true;
        break;
    }
} //for loop complete
if(flag == false)
{ console.log("Search term not found!"); }
}
linearsearch(40);
sorted_arr=arr.sort();
console.log(sorted_arr);
arr.reverse();