let count=0;


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

  //function on right/wrong click to make the next div appear
let showNext = (i) => {
    let arr = document.getElementsByClassName('container');
    arr[i].nextElementSibling.style.display = "block";
    if (i == 9) {
        document.getElementById('count').innerHTML = count;
        let outcome = document.getElementById('outcome');
        if (count < 6) {
            outcome.innerHTML = "";
        }
        if (count == 1) {
            document.getElementById('plural').innerHTML="";
        }
    }
}