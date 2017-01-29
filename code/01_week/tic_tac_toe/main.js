var slot1 = document.getElementById("slot1");
var slot2 = document.getElementById("slot2");
var slot3 = document.getElementById("slot3");
var slot4 = document.getElementById("slot4");
var slot5 = document.getElementById("slot5");
var slot6 = document.getElementById("slot6");
var slot7 = document.getElementById("slot7");
var slot8 = document.getElementById("slot8");
var slot9 = document.getElementById("slot9");

var Oimg = document.getElementById("picO");
var Ximg = document.getElementById("picX");


//at end of game: functionCheckWin
if((slot1 === Oimg || slot1 === Ximg) && (slot2 === Oimg || slot2 === Ximg) && (slot3 === Oimg || slot3 === Ximg) && (slot4 === Oimg || slot4 === Ximg) && (slot5 === Oimg || slot5 === Ximg) && (slot6 === Oimg || slot6 === Ximg) && (slot7 === Oimg || slot7 === Ximg) && (slot8 === Oimg || slot8 === Ximg) && (slot9 === Oimg || slot9 === Ximg)) {
  functionCheckWin();
}

slot1.addEventListener('click', function() {
  slot1 === Oimg;
})

slot2.addEventListener('click', function() {
  slot2 === Oimg;
})

slot3.addEventListener('click', function() {
  slot3 === Oimg;
})

slot4.addEventListener('click', function() {
  slot4 === Oimg;
})

slot5.addEventListener('click', function() {
  slot5 === Oimg;
})

slot6.addEventListener('click', function() {
  slot6 === Oimg;
})

slot7.addEventListener('click', function() {
  slot7 === Oimg;
})

slot8.addEventListener('click', function() {
  slot8 === Oimg;
})

slot9.addEventListener('click', function() {
  slot9 === Oimg;
})


//function checkWin () {

//win condition for Player 1
if (slot1 === Oimg && slot2 === Oimg && slot3 === Oimg) {
  //win (alert("Player One Wins!"); console.log("Player One Wins!"); functionWin
} else if (slot4 === Oimg && slot5 === Oimg && slot6 === Oimg) {

} else if (slot7 === Oimg && slot8 === Oimg && slot9 === Oimg) {

} else if (slot1 === Oimg && slot4 === Oimg && slot7 === Oimg) {

} else if (slot2 === Oimg && slot5 === Oimg && slot8 === Oimg) {

} else if (slot3 === Oimg && slot6 === Oimg && slot9 === Oimg) {

} else if (slot1 === Oimg && slot5 === Oimg && slot9 === Oimg) {

} else if (slot7 === Oimg && slot5 === Oimg && slot3 === Oimg) {

} else {
  //nobody wins
}


//win condition for Player 2
if (slot1 === Ximg && slot2 === Ximg && slot3 === Ximg) {
  //win (alert("Player Two Wins!"); console.log("Player Two Wins!"); functionWin
} else if (slot4 === Ximg && slot5 === Ximg && slot6 === Ximg) {

} else if (slot7 === Ximg && slot8 === Ximg && slot9 === Ximg) {

} else if (slot1 === Ximg && slot4 === Ximg && slot7 === Ximg) {

} else if (slot2 === Ximg && slot5 === Ximg && slot8 === Ximg) {

} else if (slot3 === Ximg && slot6 === Ximg && slot9 === Ximg) {

} else if (slot1 === Ximg && slot5 === Ximg && slot9 === Ximg) {

} else if (slot7 === Ximg && slot5 === Ximg && slot3 === Ximg) {

} else {
  //nobody wins
}
