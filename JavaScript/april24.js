class Animal{
    constructor(habitat, lifespan, sound){
        this.habitat=habitat; this.lifespan=lifespan; this.sound=sound;
    }
    makeSound(){
        return this.sound;
    }
}
class Bird extends Animal{
    constructor(habitat, lifespan, sound, flight){
        super(habitat, lifespan, sound);
        this.flight=flight;
    }
    display(){

    }
    //customise makeSound() { return the cry of the bird}
    // display(){ diplays all the properties}
}
emu = new Bird('land', 13, 'scream', false);

console.log(emu.makeSound());
emu.display();
/*                   */
let arr= [13, 15, 17, 18, 90, 91];
//filter out the odd & even numbers
// output : 13 15 17 91 & 18 90

demo = new String("encyclopedia");
//filter out the vowels & consonants
//output : e o e i a & ncyclpd
// vowel = ['a','e','i','o','u'];

arr =[9,10, 12, 13, 14 ]
//output = [81, 100, 144, 169, 196]
arr= [
0 1 3 4 1 0
1 2 3 1 0 9
0 1 2 4 5 6
1 4 5 6 7 8
]
0 1 3
1 2 3
0 1 2 = 8 
1 3 4
2 3 1
1 2 4 = 11
sub-array =[0 1 3 1 2 3 0 1 2]
// let highest; highest =8; if (11>8) highest =11; (12>11)  highest =12
// print the highest sum of the middle row & middle column of all
// the sub-matrices of the order 3*3


