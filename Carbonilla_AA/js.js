var num1 = (Math.floor(Math.random() * 20 + 1));
document.getElementById("result1").innerHTML = num1

var num2 = (Math.floor(Math.random() * 20 + 1));
document.getElementById("result2").innerHTML = num2

var num3 = (Math.floor(Math.random() * 20 + 1));
document.getElementById("result3").innerHTML = num3

var y = "abcdefghijklmnopqrstuvwxyz"
var x = y.charAt((Math.floor(Math.random() * 26 + 1)));

var min = (Math.floor(Math.random() * 120 + 1));
var hour = min/60


if (num1 > num2 && num1 > num3) {
document.getElementById("most").innerHTML = ("The colour of star that has passed by the most is " +"green(" + num1 + ")" );
}
else if (num2 > num1 && num2 > num3) {
    document.getElementById("most").innerHTML = ("The colour of star that has passed by the most is blue(" + num2 + ")"); 
        }
    else {
        document.getElementById("most").innerHTML = ("The colour of star that has passed by the most is white(" + num3 + ")");
    }

document.getElementById("Nth").innerHTML = ("One of the stars i named started with a letter " + x)

document.getElementById("time").innerHTML = ("one star took " + hour + " hours until it disappeared.(" + min + "minutes)")
