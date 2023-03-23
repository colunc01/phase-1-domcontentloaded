// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    //callback function is used to target the paragraph element with id="text" and replace text with "This is really cool!"
    const element = document.getElementById("text");
    element.innerHTML = "This is really cool!";
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
