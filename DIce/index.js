document.querySelector("button").addEventListener("click", myfun);
function myfun() {
  var one = Math.floor(Math.random() * 6) + 1;
  var two = Math.floor(Math.random() * 6) + 1;
  var three = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".one").innerHTML = one;
  document.querySelector(".two").innerHTML = two;
  document.querySelector(".three").innerHTML = three;
  // for winners
  if (one > two && one > three) {
    document.querySelector("#name").innerHTML = "Member 1 is the winner";
    document.querySelector("#member-1").style.background = "green";
  } else if (two > one && two > three) {
    document.querySelector("#name").innerHTML = "Member 2 is the winner";
    document.querySelector("#member-2").style.background = "green";
  } else {
    document.querySelector("#name").innerHTML = "Member 3 is the winner";
    document.querySelector("#member-3").style.background = "green";
  }
  //yellow
  if (two > three && two < one) {
    document.querySelector("#member-2").style.background = "yellow";
  } else if (two > one && two < three) {
    document.querySelector("#member-2").style.background = "yellow";
  } else if (one > three && one < two) {
    document.querySelector("#member-1").style.background = "yellow";
  } else if (one > two && one < three) {
    document.querySelector("#member-1").style.background = "yellow";
  } else if (three > one && three < two) {
    document.querySelector("#member-3").style.background = "yellow";
  } else if (three > two && three < one) {
    document.querySelector("#member-3").style.background = "yellow";
  }

  if (one < two && one < three) {
    document.querySelector("#member-1").style.background = "red";
  } else if (two < one && two < three) {
    document.querySelector("#member-2").style.background = "red";
  } else {
    document.querySelector("#member-3").style.background = "red";
  }
  if (one === two) {
    document.querySelector("#member-1").style.background = "blue";
    document.querySelector("#member-2").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 1 and 2";
  } else if (one === three) {
    document.querySelector("#member-1").style.background = "blue";
    document.querySelector("#member-3").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 1 and 3";
  } else if (two === one) {
    document.querySelector("#member-2").style.background = "blue";
    document.querySelector("#member-1").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 2 and 1";
  } else if (two === three) {
    document.querySelector("#member-2").style.background = "blue";
    document.querySelector("#member-3").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 2 and 3";
  } else if (three === one) {
    document.querySelector("#member-3").style.background = "blue";
    document.querySelector("#member-1").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 3 and 1";
  } else if (three === two) {
    document.querySelector("#member-3").style.background = "blue";
    document.querySelector("#member-2").style.background = "blue";
    document.querySelector("#name").innerHTML = "Tie between 3 and 2";
  } else if ((one === two) === three) {
    document.querySelector("#member-3").style.background = "blue";
    document.querySelector("#member-2").style.background = "blue";
    document.querySelector("#member-1").style.background = "blue";
    document.querySelector("#name").innerHTML = "All Tie";
  }
}
