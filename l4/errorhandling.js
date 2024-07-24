function criticalcode() {
    throw "throwing an exception";
}

function logError(theExceptoion) {
    console.log(theExceptoion);
}

console.log("\n********try,,catch********\n");

try {
    criticalcode();
} catch(ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Throwing in Try...Catch**********\n");
try{
    throw"An exception that is thrown every time";
} catch(ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********Try..Catch..Finally**********\n");

try{
    criticalcode();
} catch(ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Codethat always will run");
}
function hello() {
    console.log("\n*******Throwing Exceptions*******\n")
}