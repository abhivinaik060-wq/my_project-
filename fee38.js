function createMultiplier(multiplier){
    return function(number){
        return number*multiplier;
    };
}
let double=createMultiplier(2);
let triple=createMultiplier(3);
console.log(double(5));
console.log(triple(5));