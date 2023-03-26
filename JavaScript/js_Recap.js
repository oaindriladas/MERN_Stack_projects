/* var d;
d=90;
var d=9;
let b;
b=90;
//let b =100; //redelcration is not possible
const c=8; //always initialise a const

//global or local declaration
function display(){
    const key=90;
    console.log(key);
    document.write("var is :"+d);
}
display();
//document.write("value of key: "+key);
if(d>90)
{
   document.write("if block"); 
}
else{
    document.write("else block");
}
let i;
for(i=1;i<=5; i++)
{
    display();
}
//value of i=6
while(i<10)
{
    document.write("<br>value of i: "+i);
    i++;
}
function add(num1, num2){
return (num1+num2);
}
document.write(add(9,5));
class Person{
    constructor(name, age, nationality){
        this.name=name;
        this.age=age;
        this.nationality=nationality;
    }
   display()
   {
    console.log("name is: "+this.name+" age: "+this.age);
   }
}
let boy = new Person('Rahul', 20, 'Indian');
boy.display();
class Woman extends Person{
    constructor( name, age, nationality,salary)
    {
        super(name, age, nationality);
        this.salary=salary;
    }
    display(){
        super.display();
        console.log("salary is : "+this.salary);
    }
}
let w= new Woman('Rins',30, 'Swiss',10000);
w.display();
//callback
function print(val){
    document.write("<h1>the output is: "+val+"</h1>")
}
function divide(num1, num2, callback)
{
    let q= num1/num2;
    callback(q);
}
divide(10,2, print);
let new_promise = new Promise((resolve, reject)=>{
//fetch a value from server
var age= prompt("enter your age");
if(age>18)
resolve("you are allowed!");
else
reject("you are under 18");
})
console.log(new_promise);
 new_promise.then(()=> {console.log("success")})
 .then(() => { console.log("success again")})
 .catch((error)=> { console.log(error)}) */

 var od_key='641d8a6132c2f05d70e36e04bdf9f063';
 fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai'+'&appid='+od_key+'&units=metric')
 .then(response => response.json())
 .then(data => {
    console.log(data);
    document.write("Temperature: "+data.main.temp);
 })

 let arr=[1,2,3,4,5];
 let sq_arr = arr.map((n)=>{
    return(n*n);
 })
 console.log("Original array: "+arr);
 console.log(sq_arr);
 
