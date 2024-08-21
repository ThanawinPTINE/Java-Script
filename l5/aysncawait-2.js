function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log('Starting server');

    await promiseTimeout(2000);
    const resoinse = await longRunningOperation();
    console.log(response);
}

console.log('Before Run');
run();
console.log('After Run');