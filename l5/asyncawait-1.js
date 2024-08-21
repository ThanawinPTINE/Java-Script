function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log('Starting server');

    await promiseTimeout(2000);
    console.log("Stop");
}

console.log('Before Run');
run();
console.log('After Run');