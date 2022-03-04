function play() {
    document.getElementById("form").style.display = "none";
    document.getElementById("playGround").style.display = "block";
    var p1 = document.getElementById("nameOfP1").value;
    var p2 = document.getElementById("nameOfP2").value;

    document.getElementById("setName1").innerHTML = p1;
    document.getElementById("setName2").innerHTML = p2;

    var noOfPlayer1 = Math.floor(Math.random() * 6) + 1;
    var noOfPlayer2 = Math.floor(Math.random() * 6) + 1;

    var diceImage1 = "images/dice" + noOfPlayer1 + ".png";
    var diceImage2 = "images/dice" + noOfPlayer2 + ".png";

    document.getElementById("p1").setAttribute("src", diceImage1);
    document.getElementById("p2").setAttribute("src", diceImage2);

    if (noOfPlayer1 > noOfPlayer2) {
        document.getElementById("result").innerHTML = "🚩🚩 " + p1 + " Won!";
    } else if (noOfPlayer1 < noOfPlayer2) {
        document.getElementById("result").innerHTML = p2 + " Won! 🚩🚩";
    } else {
        document.getElementById("result").innerHTML = "Draw!!!";
    }
}

function reset() {
    window.location.reload();
}

// document.getElementById("form").onsubmit = start();