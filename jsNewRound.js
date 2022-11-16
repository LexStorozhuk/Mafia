let c = 0;
function donAvatars() {
  // const a = 1;
  // const b = 0;
  c = 0 + 1;
  console.log(c);
  return c;
}
donAvatars();
function donAvatarsZero() {
  c = 0;
  console.log(c);
}
newRounDonAvatarsZero();
function newButton() {
  if (c) {
    clearHealDon();
  }
}

function clearHealDon() {
  let firstBlock = document.querySelector(".h-score img");
  second = document.querySelector(".border");
  third = document.querySelector(".h-score");
  fourth = document.querySelector(".cross-kill");
  fifth = document.querySelector(".avatar img");

  firstBlock.style.visibility = "hidden";
  second.style.background = "black";
  third.style.background = "black";
  fourth.style.display = "none";
  fifth.style.visibility = "hidden";
}
