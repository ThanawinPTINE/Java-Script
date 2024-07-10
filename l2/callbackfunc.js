function createQoute(quote,callback) {
    let myQuote = "Like I always say, " + quote;
    callback(myQuote);
}

function logQuote(qoute) {
    console.log(qoute + ' Yes..');
}
createQoute(" you will getting better!", logQuote);