let red = false;
let green = false;
let blue = false;
let id;
let margin = [-50, -50, -50];
let height = [100, 100, 100];

function Red() {
  red = !red;
  green = false;
  blue = false;
  console.log(id);

  document.getElementById("green").style.backgroundColor = "white";
  document.getElementById("blue").style.backgroundColor = "white";
  stop();

  if (red) {
    document.getElementById("red").style.backgroundColor = "red";
    console.log(document.getElementById("red").style.backgroundColor);
    start("red_vessel", 0,'red');
  } else {
    clearInterval(id);
    document.getElementById("red").style.backgroundColor = "white";
  }
}

function Green() {
  red = false;
  green = !green;
  blue = false;
  stop();

  document.getElementById("red").style.backgroundColor = "white";
  document.getElementById("blue").style.backgroundColor = "white";

  if (green) {
    document.getElementById("green").style.backgroundColor = "green";
    start("green_vessel", 1,'green');
  } else {
    clearInterval(id);
    document.getElementById("green").style.backgroundColor = "white";
  }
}

function Blue() {
  red = false;
  green = false;
  blue = !blue;
  stop();

  document.getElementById("green").style.backgroundColor = "white";
  document.getElementById("red").style.backgroundColor = "white";

  if (blue) {
    document.getElementById("blue").style.backgroundColor = "blue";
    start("blue_vessel", 2,'blue');
  } else {
    clearInterval(id);
    document.getElementById("blue").style.backgroundColor = "white";
  }
}

function start(key, i,color) {
  id = setInterval(frame, 100);
  document.getElementById('mix').style.backgroundColor = color;
  console.log(id);
  function frame() {
    if (0 == height[i]) {
      console.log(key + " " + i);
      stop();
      clearInterval(id);
    } else {
      document.getElementById("" + key).style.margin = margin[i]++ + "% -50%";
      document.getElementById("" + key).style.height = height[i]-- + "%";
    }
  }
}

function stop() {
  document.getElementById("red").style.backgroundColor = "white";
  document.getElementById("green").style.backgroundColor = "white";
  document.getElementById("blue").style.backgroundColor = "white";

  document.getElementById("red_vessel").style.margin = margin[0] + "% -50%";
  document.getElementById("green_vessel").style.margin = margin[1] + "% -50%";
  document.getElementById("blue_vessel").style.margin = margin[2] + "% -50%";

  document.getElementById("red_vessel").style.height = height[0] + "%";
  document.getElementById("green_vessel").style.height = height[1] + "%";
  document.getElementById("blue_vessel").style.height = height[2] + "%";
}
