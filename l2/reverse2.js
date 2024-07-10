function reverseString(value) {

    const reveredValue = value.split('').reverse().join('')
    return reveredValue;
}

console.log(reverseString("Hello JavaScript"));