
var number=0;
var new_p = new Promise((resolve, reject) => {
    //generate a result
number=prompt("enter a value"); //code generating a value
if(number>18)
resolve('User is an adult');
else
reject('Under 18');
})

console.log(new_p);
new_p.then(()=> {console.log("Success");})
.then(()=> { console.log("Succeded again");})
.catch((error)=>{ console.log("Failed")})