const array0Numbes = [1,2,3,4];

const sum = array0Numbes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);