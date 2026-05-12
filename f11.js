// Function to check even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Arrow function example
const addNumbers = (a, b) => {
  return a + b;
};

// Loop example
for (let i = 1; i <= 5; i++) {
 document.write(`Number ${i} is ${checkEvenOdd(i)}`);
}

// Object & array example
const student = {
  name: "Abhi",
  course: "B.Tech CSE",
  marks: [85, 90, 88],
};

document.write("Sum:", addNumbers(10, 20));
document.write("Student:", student);
