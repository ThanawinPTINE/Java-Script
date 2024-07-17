let values1 = ['Apple', 1, false];
let values2 = ['Fires', 2, true];
let values3 = ['Mars', 9, 'Apple'];

let samewords = values1.filter(value => 
    values2.includes(value) && values3.includes(value)
);

console.log(samewords);

// for (let i of values1) {
//     if (values2 === values1[0]){
//         console.log(values2.includes(values1));
//     }
// }
