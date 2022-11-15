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

function heal() {
  let firstBlock = document.querySelector(".h-score img");

  firstBlock.style.visibility = "visible";
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
  third = document.querySelector(".border:nth-of-type(2)");
  fourth = document.querySelector(".cross-mafia-kill");
  fifth = document.querySelector(".avatar:nth-of-type(2) img");

  firstBlock.style.visibility = "visible";
  fourth.style.display = "block";
  second.style.background = "red";
  third.style.background = "red";
  fifth.style.visibility = "hidden";
}

function healMafiaImg() {
  let firstBlock = document.querySelector(".h-score-m img");
  second = document.querySelector(".h-score-m");
  third = document.querySelector(".border:nth-of-type(2)");
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
  third = document.querySelector(".border:nth-of-type(2)");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}

function partyMafiaImg() {
  let firstBlock = document.querySelector(".p-score-m img");
  second = document.querySelector(".p-score-m");
  third = document.querySelector(".border:nth-of-type(2)");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");

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
  third = document.querySelector(".border:nth-of-type(3)");
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
  third = document.querySelector(".border:nth-of-type(3)");
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
  third = document.querySelector(".border:nth-of-type(3)");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partySherifImg() {
  let firstBlock = document.querySelector(".p-score-s img");
  second = document.querySelector(".p-score-s");
  third = document.querySelector(".border:nth-of-type(3)");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratSherifImg() {
  let firstBlock = document.querySelector(".r-score-s img");
  second = document.querySelector(".r-score-s");
  third = document.querySelector(".border:nth-of-type(3)");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
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
  third = document.querySelector(".border:nth-of-type(4)");
  fourth = document.querySelector(".cross-doctor-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar img");
  fifth.style.visibility = "hidden";
  firstBlock.style.visibility = "visible";
  second.style.background = "red";
  third.style.background = "red";
  fourth.style.display = "block";
}
function healDoctorImg() {
  let firstBlock = document.querySelector(".h-score-d img");
  second = document.querySelector(".h-score-d");
  third = document.querySelector(".border:nth-of-type(4)");
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
  third = document.querySelector(".border:nth-of-type(4)");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partyDoctorImg() {
  let firstBlock = document.querySelector(".p-score-d img");
  second = document.querySelector(".p-score-d");
  third = document.querySelector(".border:nth-of-type(4)");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratDoctorImg() {
  let firstBlock = document.querySelector(".r-score-d img");
  second = document.querySelector(".r-score-d");
  third = document.querySelector(".border:nth-of-type(4)");
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
  third = document.querySelector(".border:nth-of-type(5)");
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
  third = document.querySelector(".border:nth-of-type(5)");
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
  third = document.querySelector(".border:nth-of-type(5)");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}

function partyLadyImg() {
  let firstBlock = document.querySelector(".p-score-l img");
  second = document.querySelector(".p-score-l");
  third = document.querySelector(".border:nth-of-type(5)");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratLadyImg() {
  let firstBlock = document.querySelector(".r-score-l img");
  second = document.querySelector(".r-score-l");
  third = document.querySelector(".border:nth-of-type(5)");
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
  third = document.querySelector(".border:nth-of-type(6)");
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
  third = document.querySelector(".border:nth-of-type(6)");

  firstBlock.style.visibility = "visible";
  second.style.background = "green";
  third.style.background = "green";
}
function inspectCivilImg() {
  let firstBlock = document.querySelector(".i-score-c img");
  second = document.querySelector(".i-score-c");
  third = document.querySelector(".border:nth-of-type(6)");
  firstBlock.style.visibility = "visible";
  second.style.background = "blue";
  third.style.background = "blue";
}
function partyCivilImg() {
  let firstBlock = document.querySelector(".p-score-c img");
  second = document.querySelector(".p-score-c");
  third = document.querySelector(".border:nth-of-type(6)");
  firstBlock.style.visibility = "visible";
  second.style.background = "yellow";
  third.style.background = "yellow";
}
function ratCivilImg() {
  let firstBlock = document.querySelector(".r-score-c img");
  second = document.querySelector(".r-score-c");
  third = document.querySelector(".border:nth-of-type(6)");
  firstBlock.style.visibility = "visible";
  second.style.background = "grey";
  third.style.background = "grey";
}
