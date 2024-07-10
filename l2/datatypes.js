const people = ["Aaron", "David", "John"];
const one = 1;
const str = "Hello World!";
const b = true;
const employee = {
    firstName: "Thanawin",
    lastName: "Phetthae",
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(typeof employee instanceof Array);
sayHello(employee);