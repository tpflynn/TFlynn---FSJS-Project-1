// script.js program
// FSJS Project 1 - Random Quote Generator
// Tom Flynn
// 12/15/2017
////////

function printQuote() {
  var returnedQuote = getRandomQuote();
  // move the fields from the returned quote object
  var quotePrint = returnedQuote.quote;
  var sourcePrint = returnedQuote.source;
  var citationPrint = returnedQuote.citation;
  var yearPrint = returnedQuote.year;
  var categoryPrint = returnedQuote.category;
  var formatPrint = returnedQuote.format;
  // build the display message using the returned quote object
  var message = '<p class="quote">' + quotePrint + '</p>';
  message += '<p class="source">' +  sourcePrint;
  // print the following fields if not blank
  if (citationPrint.length > 0) {
    message += '<span class="citation">' + citationPrint + '</span>';
  };
  if (yearPrint.length > 0) {
    message += '<span class="year">' + yearPrint + '</span>';
  }
  if (categoryPrint.length > 0) {
    message += '<span class="category">' +  categoryPrint;
  }
  if (formatPrint.length > 0) {
    message += '<span class="format">' + returnedQuote.format + '</span>';
  }
  message += '</p>';
  // get random background color
  var returnedColor = getBackgroundColor();
  // display the completed message
  document.getElementById('quote-box').innerHTML = message;
  // display the random body background color
  document.getElementById('bodyId').style.backgroundColor = returnedColor;
  // change button background color
  document.getElementById('loadQuote').style.backgroundColor = returnedColor;
}

function getRandomQuote() {
  // get random quote index based on number of quotes
  var randomNumberIndex = Math.floor(Math.random() * quotes.length);
  // return the quote object based on random index
  return quotes[randomNumberIndex];
}

function getRandomColor() {
  // get random color values
  return Math.floor(Math.random() * 256);
}

function getBackgroundColor() {
  // get backgroung color
  var color = 'rgb(';
  color += getRandomColor() + ',';
  color += getRandomColor() + ',';
  color += getRandomColor() + ')';
  // return color values
  return color;
}

// display 1st quote upon page load
printQuote();

// get a new quote automatically every 20 seconds
setInterval(printQuote,20000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
