var stack=[1, 2, 4];
var top;
top=stack.length-1;
document.write("top is: "+top);
var num= prompt("Enter a number");
stack.push(num);
top=top+1;
console.log("value of top: "+top);
console.log("topmost element is: "+stack);
var deleted = stack.pop();
console.log("Element popped out: "+deleted);
top=top-1;
console.log("Stack after pop "+stack);

