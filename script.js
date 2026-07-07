// Main JavaScript file for the Midterm Lab project
console.log("Git Workflow Midterm Lab project loaded.");

function greet(name) {
    return "Hello, " + name + "!";
}

document.addEventListener("DOMContentLoaded", function () {
    var heading = document.querySelector("h1");
    if (heading) {
        heading.addEventListener("click", function () {
            alert(greet("Developer"));
        });
    }
});
