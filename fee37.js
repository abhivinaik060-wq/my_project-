function greetFactory(greeting){
    return function(name){
        console.log(greeting+","+name);
    };
}
let sayHello=greetFactory("Hello");
let sayHi=greetFactory("Hi");
sayHello("Abhi");
sayHi("Aryan");