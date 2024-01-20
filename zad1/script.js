let counterDiv = 5;
let counterRemove = 1;

function action1() {
    console.log('Clicked 1');
    var newDiv = document.createElement("div");
    newDiv.id = counterDiv.toString();
    newDiv.className = "div";
    newDiv.style.height = "20vh";
    newDiv.style.width = "20vw";
    newDiv.style.background = getRandomHexColor();
    newDiv.style.margin = "20px";
    document.body.appendChild(newDiv);
    counterDiv++;
}

function action2() {
    console.log('Clicked 2');
    document.getElementById(counterRemove.toString()).remove();
    counterRemove++;
}

function action3() {
    console.log('Clicked 3');
    document.getElementById("3").style.background = getRandomHexColor();

}

function action4() {
    console.log('Clicked 4');

}

function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF in decimal)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Ensure that the hex code has 6 digits by padding with zeros if necessary
    while (randomColor.length < 6) {
        randomColor = '0' + randomColor;
    }

    // Prepend a '#' to the hex code
    return '#' + randomColor;
}