// function greet(name){
//     console.log("Hello",name);
// }

// greet("Abhinandan")
// greet()


// function student(details){
//     console.log("Name",details.roll);
//     console.log("Roll no.",details.name);
//     console.log("Course",details.course);
// }
// student({
//     name:"Abhi",
//     roll:69,
//     course:"B.Tech"
// });


// function greet(name,msg="Good Morning"){
//     console.log(msg+" "+name);
// }
// greet("Abhinandan");
// greet("Abhinandan","Welcome");




// function add(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     return sum;
// }
// console.log(add(10,20,30));


// function  add(...numbers){
//     let sum=0;
//     for(let n of numbers){
//         sum+=n;
//     }
//     return sum;
// }
// console.log(add(5,10,15,20));


// function update(val){
//     val=50;
// }
// let x=10;
// update(x);
// console.log(x);



// function updateArray(arr){
//     arr.push(4);
// }
// let nums=[1,2,3];
// updateArray(nums);
// console.log(nums);




// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));
 


function fib(n){
    if(n<=1) return n;
    return fib(n-1)+fib(n-1);
}

