/*let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
*/

// Create a function that logs the current time
function logCurrentTime() {
    let d = new Date(); // Creates a new Date object
    let time = d.toLocaleTimeString(); // Gets the current time as a string
    console.log(time); // Logs the current time to the console
}

// Call logCurrentTime every 1000 milliseconds (1 second)
setInterval(logCurrentTime, 1000);
