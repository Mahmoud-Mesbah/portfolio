

var quotes = [
    "'It's not what happens to you, but how you react to it that matters.'",
    "'you miss 100% of the shots you don't take.'",
    "'the best revenge is massive success.'",
    "'resentment is like drinking poison and waiting for your enemies to die.'",
    "'do not take life too seriously. you will not get out alive.'"
];
var currentQuoteIndex=0;
function changeQuote(){
    if (currentQuoteIndex<quotes.length){
        document.getElementById('quote').innerText=quotes[currentQuoteIndex];
        currentQuoteIndex++
    }
    else{
        currentQuoteIndex=0;
        document.getElementById('quote').innerText=quotes[currentQuoteIndex];
    }
    var button=document.getElementById('quoteButton');
    if (button.classList.contains('green')) {
        button.classList.remove('green');
        
    }
    else{
        button.classList.add('green')

    }
}
document.getElementById('quoteButton').onclick=changeQuote;







