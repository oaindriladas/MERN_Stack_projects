let i_string= new String("I am a dancer");
let arr=[];
let arrary=["I", "am", "a", "dancer"];
console.log(arrary.reverse());

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const input = "Hello World";
  console.log(reverseString(input));

  function reverseWords(str){
      return str.split('').reverse().join('');
    }
    console.log(reverseWords('I am a swimmer'));

  let newS = "";
      for (let i = i_string.length - 1; i >= 0; i--) {
          newS += i_string[i];
      }
      return newS;


function sub(a,b, callback){
    let sum=a+b;
    callback(sum);
}

function display(s)
{
    console.log("result is : "+s)
}
sub(34,20, display);