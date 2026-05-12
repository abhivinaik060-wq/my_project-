// let numbers=[1,2,3,4,5];
// let evenNumbers=numbers.filter(num=>num%2==0);
// console.log(evenNumbers);


// let marks=[22,56,76,4,332,22,34,900];
// let highmarks=marks.filter(marks=>marks>=40);
// console.log(highmarks);


// let students = [
//     { name: "Abhi", Marks: 85 },
//     { name: "Vinaik", Marks: 90 },
//     { name: "Angel", Marks: 78 },
//     { name: "John", Marks: 35 },
//     { name: "Doe", Marks: 45 }
// ];
// let final = students.filter(student => student.Marks > 70);
// console.log(final);



// setTimeout(
//     function(){
//         console.log("Hello");
//     },2000)




// for (let i = 0; i <= 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }



let timer=setTimeout(()=>{
    console.log("This will not run");
},5000);

