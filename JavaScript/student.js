class desktop{
    constructor(brand){
            this.brand='Samsung';
        }
        display(){
            console.log("Desktop Brand is "+this.brand);
        }

}
class laptop extends desktop{
    constructor(color){
        super();
        this.color="Black"
    }
    display(){
        super.display()
        console.log("Laptop color is "+this.color);
}   }

class mobile extends laptop{
    constructor(camera){
        super();
        this.camera="50mpx"
    }
    display(){
        super.display()
        console.log("camera quality is "+this.camera);
} }
let value= new mobile();
value.display()