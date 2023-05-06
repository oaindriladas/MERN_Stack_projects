/* let mypromise = new Promise((resolve, reject)=>{
    var age=prompt("enter your age");
    if(age>18)
    resolve( console.log("Adult"))
    else
    reject( console.log("you are under 18" ))
})

mypromise.then(resolve)
.catch(reject) */

async function response(){
    let mypromise = new Promise((resolve, reject)=>{
        var age=prompt("enter your age");
        if(age>18)
        resolve( console.log("Adult"))
        else
        reject( console.log("you are under 18" ))
    })

    console.log = await mypromise;
    // mypromise.then(resolve)
    // .catch(reject)
}
response();


