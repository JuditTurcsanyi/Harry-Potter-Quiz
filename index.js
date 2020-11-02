let count=0;

//function on right/wrong click to make the next div appear
let showNext = (i) => {
    document.getElementsByClassName('container')[i].nextElementSibling.style.display = "block";
}

//function thad adds red/green background on clicking wrong/right answer
window.onload = (event) => {
let wronganswers = document.getElementsByClassName("wrong");
let rightanswers = document.getElementsByClassName("right");
for (let i = 0; i < wronganswers.length; i++) {
        wronganswers[i].addEventListener('click', getRed = () => {
        wronganswers[i].style.backgroundColor = "rgb(255, 73, 59)";
        $(wronganswers[i]).siblings("div.right").css({"background-color": "rgb(0, 198, 95)"});
        $(wronganswers[i]).siblings().css({"pointer-events": "none"});
        $(wronganswers[i]).css({"pointer-events": "none"});
        window.scrollBy(0, 350);
        }
    )}

for (let j = 0; j < rightanswers.length; j++) {
        rightanswers[j].addEventListener('click', getGreen = () => {
        rightanswers[j].style.backgroundColor = "rgb(0, 198, 95)";
        $(rightanswers[j]).siblings().css({"pointer-events": "none"});
        $(rightanswers[j]).css({"pointer-events": "none"});
        window.scrollBy(0, 350);
        count++;
            }
        )}
}

//onsubmit function: count++ and make result visible
let submit = () => {
    document.getElementById('result').style.visibility="visible";
    document.getElementById('count').innerHTML = count;
    let outcome = document.getElementById('outcome');
    if (count < 6) {
        outcome.innerHTML = ""
    }
    window.scrollBy(0, 450);
}