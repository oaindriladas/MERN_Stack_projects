// var age= prompt("enter your age");
// if(age>18) 
// document.write("<b>You are an adult</b>");
//     else
// document.write("<b>You are a kid</b>");
function display_age()
{
var age= prompt("enter your age");
if(age>=18) 
document.write("<b>You are an adult</b>");
    else
document.write("<b>You are a kid</b>");
}  //function declaration
  //function call/ invoking the function

function add(a,b)
{
    return(a+b);
}
// var a= parseInt(prompt("enter number 1"));
// var b= parseInt(prompt("enter number 2"));
// document.write("addition is"+add(a,b));  //parameters
// display_age();

let names =['Nikita', 'Aparna', 'Rahul', 'Satish']; //index
console.log(names);
document.write("names"+names);
console.log(names[3]);
document.write("4th element: "+names[90]);
let nums=['Agarwal', 'Sharma',90, 100, 1000];
console.log(names.concat(nums));
console.log(names); //immutable
//assignment -2 create a JS file , implement all in-built functions inside array class
nums.fill(10, 1,3);
document.write("<br>"+nums);
document.write("1st "+names[0]);
document.write("2nd "+names[1]);
document.write("2nd "+names[2]);
document.write("2nd "+names[3]);
//loops for while do-while
for(let i=0; i < 3; i++)
{
document.write("<br>element "+i+" is "+nums[i]);
}
nums.forEach(function display(e){
document.write("<br>"+e)
});

//callback is a function passed as a parameter to another function
var output = (a,b)=> {
return(a+b);
}
document.write(output(4,5));

document.write("reversed "+nums.reverse());
document.write(nums);
nums.filter((f) => {
if(f>=100)
document.write(f);
})

let double_num= nums.map((n)=>{
return 2*n;
})
document.write("Double"+double_num);

var arr= [12, 23, 34, 45, 56];
document.write("shift method "+arr.shift());
arr.push(900);
document.write("after push<br> "+arr);
document.write("<br>after pop"+arr.pop());


