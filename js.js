// function kill() {
//   alert("Mafia killed personage");
// }
function killDonImg() {
  let firstBlock = document.querySelector(".k-score img");
  second = document.querySelector(".k-score ");
  third = document.querySelector(".border");
  fourth = document.querySelector(".cross-kill");
  fifth = document.querySelector(".avatar img");
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}
function healDonImg() {
  let firstBlock = document.querySelector(".h-score img");
  second = document.querySelector(".border");
  third = document.querySelector(".h-score");
  fourth = document.querySelector(".cross-kill");
  fifth = document.querySelector(".avatar img");

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
}

function inspectDonImg() {
  let firstBlock = document.querySelector(".i-score img");
  second = document.querySelector(".i-score");
  third = document.querySelector(".border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partyDonImg() {
  let firstBlock = document.querySelector(".p-score img");
  second = document.querySelector(".p-score");
  third = document.querySelector(".border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratBackground() {
  let firstBlock = document.querySelector(".border");

  firstBlock.style.background = "grey";
}
function ratScore() {
  let firstBlock = document.querySelector(".i-score");

  firstBlock.style.background = "grey";
}

// Block for Mafia
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function killMafiaImg() {
  let firstBlock = document.querySelector(".k-score-m img");
  second = document.querySelector(".k-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  fourth = document.querySelector(".cross-mafia-kill");
  fifth = document.querySelector(".avatar:nth-of-type(2) img");

  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}

function healMafiaImg() {
  let firstBlock = document.querySelector(".h-score-m img");
  second = document.querySelector(".h-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  fourth = document.querySelector(".cross-mafia-kill");
  fifth = document.querySelector(".avatar:nth-of-type(2) img");

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
}

function inspectMafiaImg() {
  let firstBlock = document.querySelector(".i-score-m img");
  second = document.querySelector(".i-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}

function partyMafiaImg() {
  let firstBlock = document.querySelector(".p-score-m img");
  second = document.querySelector(".p-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratBackgroundMaf() {
  let firstBlock = document.querySelector(
    ".navbarleft .background-border-m .border"
  );

  firstBlock.style.background = "grey";
}
function ratScorMaf() {
  let firstBlock = document.querySelector(".i-score-m");

  firstBlock.style.background = "grey";
}

// Block for Sherif
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killSherifImg() {
  let firstBlock = document.querySelector(".k-score-s img");
  second = document.querySelector(".k-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sherif-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}
function healSherifImg() {
  let firstBlock = document.querySelector(".h-score-s img");
  second = document.querySelector(".h-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sherif-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
}
function inspectSherifImg() {
  let firstBlock = document.querySelector(".i-score-s img");
  second = document.querySelector(".i-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partySherifImg() {
  let firstBlock = document.querySelector(".p-score-s img");
  second = document.querySelector(".p-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratSherifImg() {
  let firstBlock = document.querySelector(".r-score-s img");
  second = document.querySelector(".r-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sherif-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}

// Block for doctor
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function crossKillDoctor() {
  let firstBlock = document.querySelector(".cross-don-kill");

  firstBlock.style.display = "block";
}
function killDoctorImg() {
  let firstBlock = document.querySelector(".k-score-d img");
  second = document.querySelector(".k-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(".cross-doctor-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar img");
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}
function healDoctorImg() {
  let firstBlock = document.querySelector(".h-score-d img");
  second = document.querySelector(".h-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(".cross-doctor-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar img");

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
}
function inspectDoctorImg() {
  let firstBlock = document.querySelector(".i-score-d img");
  second = document.querySelector(".i-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partyDoctorImg() {
  let firstBlock = document.querySelector(".p-score-d img");
  second = document.querySelector(".p-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratDoctorImg() {
  let firstBlock = document.querySelector(".r-score-d img");
  second = document.querySelector(".r-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
}

// Block for lady
///
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killLadyImg() {
  let firstBlock = document.querySelector(".k-score-l img");
  second = document.querySelector(".k-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".cross-lady-kill");
  fifth = document.querySelector(
    ".blockof-avatars1 .avatar:nth-of-type(2) img"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}
function healLadyImg() {
  let firstBlock = document.querySelector(".h-score-l img");
  second = document.querySelector(".h-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".cross-lady-kill");
  fifth = document.querySelector(
    ".blockof-avatars1 .avatar:nth-of-type(2) img"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
}
function inspectLadyImg() {
  let firstBlock = document.querySelector(".i-score-l img");
  second = document.querySelector(".i-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}

function partyLadyImg() {
  let firstBlock = document.querySelector(".p-score-l img");
  second = document.querySelector(".p-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratLadyImg() {
  let firstBlock = document.querySelector(".r-score-l img");
  second = document.querySelector(".r-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
}
// Block for civil
//
///////////////////////////////////////////////////////////////////////////////////////////
function crossKillCivil() {
  let firstBlock = document.querySelector(".cross-don-kill");

  firstBlock.style.display = "block";
}
function killCivilImg() {
  let firstBlock = document.querySelector(".k-score-c img");
  second = document.querySelector(".k-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fourth = document.querySelector(".cross-civil-kill");
  fifth = document.querySelector(
    ".blockof-avatars1 .avatar:nth-of-type(3) img"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
}
function healCivilImg() {
  let firstBlock = document.querySelector(".h-score-c img");
  second = document.querySelector(".h-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fifth = document.querySelector(
    ".blockof-avatars1 .avatar:nth-of-type(3) img"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
  fifth.style.visibility = "visible";
}
function inspectCivilImg() {
  let firstBlock = document.querySelector(".i-score-c img");
  second = document.querySelector(".i-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partyCivilImg() {
  let firstBlock = document.querySelector(".p-score-c img");
  second = document.querySelector(".p-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratCivilImg() {
  let firstBlock = document.querySelector(".r-score-c img");
  second = document.querySelector(".r-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
}
// New Buttom ////////////////////////////////////////////////////////////////////////////////////////////
let c = 0;
function donAvatars() {
  c = 0 + 1;
  console.log(c);
  return c;
}
donAvatars();

function donAvatarsZero() {
  c = 0;
  console.log(c);
}
// donAvatarsZero();

function newButton() {
  if (c) {
    clearHealDon();
  }
}
second = document.querySelector(".border");
second.style.background = "green";
third.style.background = "green";
third = document.querySelector(".k-score");
fifth = document.querySelector(".avatar img");
fifth.style.visibility = "visible";
second = document.querySelector(".cross-kill");
second.style.display = "none";

function clearHealDon() {
  let k1 = document.querySelector(".k-score img");
  k2 = document.querySelector(".k-score-m img");
  k3 = document.querySelector(".k-score-s img");
  k4 = document.querySelector(".k-score-d img");
  k5 = document.querySelector(".k-score-l img");
  k6 = document.querySelector(".k-score-c img");

  h1 = document.querySelector(".h-score img");
  h2 = document.querySelector(".h-score-m img");
  h3 = document.querySelector(".h-score-s img");
  h4 = document.querySelector(".h-score-d img");
  h5 = document.querySelector(".h-score-l img");
  h6 = document.querySelector(".h-score-c img");

  i1 = document.querySelector(".i-score img");
  i2 = document.querySelector(".i-score-m img");
  i3 = document.querySelector(".i-score-s img");
  i4 = document.querySelector(".i-score-d img");
  i5 = document.querySelector(".i-score-l img");
  i6 = document.querySelector(".i-score-c img");

  p1 = document.querySelector(".p-score img");
  p2 = document.querySelector(".p-score-m img");
  p3 = document.querySelector(".p-score-s img");
  p4 = document.querySelector(".p-score-d img");
  p5 = document.querySelector(".p-score-l img");
  p6 = document.querySelector(".p-score-c img");

  r1 = document.querySelector(".r-score-s img");
  r2 = document.querySelector(".r-score-d img");
  r3 = document.querySelector(".r-score-l img");
  r4 = document.querySelector(".r-score-c img");

  /// Score background//////////////////////////////////////////////////////////////////////////

  ki1 = document.querySelector(".k-score");
  ki2 = document.querySelector(".k-score-m");
  ki3 = document.querySelector(".k-score-s");
  ki4 = document.querySelector(".k-score-d");
  ki5 = document.querySelector(".k-score-l");
  ki6 = document.querySelector(".k-score-c");

  he1 = document.querySelector(".h-score");
  he2 = document.querySelector(".h-score-m");
  he3 = document.querySelector(".h-score-s");
  he4 = document.querySelector(".h-score-d");
  he5 = document.querySelector(".h-score-l");
  he6 = document.querySelector(".h-score-c");

  in1 = document.querySelector(".i-score");
  in2 = document.querySelector(".i-score-m");
  in3 = document.querySelector(".i-score-s");
  in4 = document.querySelector(".i-score-d");
  in5 = document.querySelector(".i-score-l");
  in6 = document.querySelector(".i-score-c");

  pa1 = document.querySelector(".p-score");
  pa2 = document.querySelector(".p-score-m");
  pa3 = document.querySelector(".p-score-s");
  pa4 = document.querySelector(".p-score-d");
  pa5 = document.querySelector(".p-score-l");
  pa6 = document.querySelector(".p-score-c");

  ra1 = document.querySelector(".r-score-s");
  ra2 = document.querySelector(".r-score-d");
  ra3 = document.querySelector(".r-score-l");
  ra4 = document.querySelector(".r-score-c");

  ra1.style.background = "black";
  ra2.style.background = "black";
  ra3.style.background = "black";
  ra4.style.background = "black";

  pa1.style.background = "black";
  pa2.style.background = "black";
  pa3.style.background = "black";
  pa4.style.background = "black";
  pa5.style.background = "black";
  pa6.style.background = "black";

  in1.style.background = "black";
  in2.style.background = "black";
  in3.style.background = "black";
  in4.style.background = "black";
  in5.style.background = "black";
  in6.style.background = "black";

  he1.style.background = "black";
  he2.style.background = "black";
  he3.style.background = "black";
  he4.style.background = "black";
  he5.style.background = "black";
  he6.style.background = "black";

  ki1.style.background = "black";
  ki2.style.background = "black";
  ki3.style.background = "black";
  ki4.style.background = "black";
  ki5.style.background = "black";
  ki6.style.background = "black";

  k1.style.visibility = "hidden";
  k2.style.visibility = "hidden";
  k3.style.visibility = "hidden";
  k4.style.visibility = "hidden";
  k5.style.visibility = "hidden";
  k6.style.visibility = "hidden";

  h1.style.visibility = "hidden";
  h2.style.visibility = "hidden";
  h3.style.visibility = "hidden";
  h4.style.visibility = "hidden";
  h5.style.visibility = "hidden";
  h6.style.visibility = "hidden";

  i1.style.visibility = "hidden";
  i2.style.visibility = "hidden";
  i3.style.visibility = "hidden";
  i4.style.visibility = "hidden";
  i5.style.visibility = "hidden";
  i6.style.visibility = "hidden";

  p1.style.visibility = "hidden";
  p2.style.visibility = "hidden";
  p3.style.visibility = "hidden";
  p4.style.visibility = "hidden";
  p5.style.visibility = "hidden";
  p6.style.visibility = "hidden";

  r1.style.visibility = "hidden";
  r2.style.visibility = "hidden";
  r3.style.visibility = "hidden";
  r4.style.visibility = "hidden";

  ///Border background//////////////////////////////////////////////////////////////////////////////////////

  b1 = document.querySelector(".border");
  b2 = document.querySelector(".navbarleft .background-border-m .border");
  b3 = document.querySelector(".navbarleft .background-border-s .border");
  b4 = document.querySelector(".navbarleft .background-border-doc .border");
  b5 = document.querySelector(".navbarleft .background-border-l .border");
  b6 = document.querySelector(".navbarleft .background-border-c .border");

  b1.style.background = "black";
  b2.style.background = "black";
  b3.style.background = "black";
  b4.style.background = "black";
  b5.style.background = "black";
  b6.style.background = "black";
  ///Cross kill /////////////////////////////////////////////////////////////////////////////////////////////
  c1 = document.querySelector(".cross-kill");
  c2 = document.querySelector(".cross-mafia-kill");
  c3 = document.querySelector(".cross-sherif-kill");
  c4 = document.querySelector(".cross-doctor-kill");
  c5 = document.querySelector(".cross-lady-kill");
  c6 = document.querySelector(".cross-civil-kill");

  c1.style.display = "none";
  c2.style.display = "none";
  c3.style.display = "none";
  c4.style.display = "none";
  c5.style.display = "none";
  c6.style.display = "none";
}
