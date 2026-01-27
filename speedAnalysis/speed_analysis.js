let testText = "The quick brown fox jumps over the lazy dog.";
let startTime;
let endTime;

function startTest(){
    document.getElementById('inputText').value = testText;

    //Reset user input and output
    let userInput = document.getElementById('userInput');
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById('output').innerHTML = "";

    //Start Timer
    startTime = new Date().getTime();

}

function endTest(){
    endTime = new Date().getTime();

    //Disable user input
    document.getElementById('userInput').readOnly = true;

    //Calculate time elapsed and words per minute (WPM)
    let timeElapsed = (endTime - startTime)/1000;
    // Get user typed text
    let userTypedText = document.getElementById('userInput').value;
     // Calculate total text length
    let totalTextLength = userTypedText.length;
    //Split the text using regex to cunt words correctly
    let typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    let wpm = 0; //Default Value

    if (timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>" +
    "<p>Total Length of text: " + totalTextLength + "</p>";

}