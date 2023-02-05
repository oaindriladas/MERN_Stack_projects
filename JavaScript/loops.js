// let i=0; //global variable, scope

// for (i=0; i<5; i++)
// {
//     document.write("<br>value of i : "+i);
//     if(i==2)
//     break;
// }
// i=0;
// while(i<5)
// {
// document.write("<br><b>i is: "+i+"</b>");
// i++;
// }  //value of i is 5
// while(i<5)
// {
// document.write("<br>while again: i is: "+i);
// i++;
// }

// do{
// document.write("inside do-while");
// i++;
// }
// while(i<5)
class vehicle{
    constructor(){
        this.wheel=2;
        this.brand='honda';
        this.mileage=40;
        this.color='blue';
    }
    display(){
        document.write("<br>brand is : "+this.brand+" color is : "+this.color);
    } //member function
}
let scooter= new vehicle(2, 'bajaj', '30kmpl', 'black');
scooter.display();
let maruti= new vehicle(4, 'maruti alto', '40kmpl', 'red');
maruti.display();
let bike=new vehicle();
bike.display();
console.log(bike.wheel);
let fname = new String('Oaindrila');
console.log(fname);

class jeep extends vehicle{
    constructor(speed)
    {
        super(); //constructor of parent
        this.speed=speed;
    }
    display()
    {
        super.display();//refer to the parent
        document.write("speed is : "+this.speed);
    }
}
try{
    let bmw = new jeep('150kmph' , 'red');
    bmw.disp();
}
catch(error)
{
    document.write(error);
}

let thar = new jeep('120kmph');
thar.display();

var Person= { name:'Oaindrila', age: 16, nation:'India'}; //JSON
console.log(Person);
console.log(Person.name);
document.write("<br>"+Person);
document.write("age is "+Person.age);
document.write(JSON.stringify(Person));

