let blockOfMaf = 0,
  blockOfCivil = 0;

let border = 0,
  borderM = 0,
  borderM2 = 0,
  borderS = 0,
  borderD = 0,
  borderL = 0,
  borderC = 0,
  borderC2 = 0,
  borderC3 = 0,
  borderC4 = 0,
  borderC5 = 0,
  borderC6 = 0;

let cKD = 0,
  cKM = 0,
  cKS = 0,
  cKDoc = 0,
  cKL = 0,
  cKC = 0,
  cHD = 0,
  cHM = 0,
  cHS = 0,
  cHDoc = 0,
  cHL = 0,
  cHC = 0,
  cID = 0,
  cIM = 0,
  cIS = 0,
  cIDoc = 0,
  cIL = 0,
  cIC = 0,
  cPD = 0,
  cPM = 0,
  cPS = 0,
  cPDoc = 0,
  cPL = 0,
  cPC = 0,
  cRS = 0,
  cRDoc = 0,
  cRL = 0,
  cRC = 0;
////////////////////////Clicks for Mafia2 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cKM2 = 0;

let cHM2 = 0;

let cIM2 = 0;

let cPM2 = 0;

let cRM2 = 0;
////////////////////////Clicks for Civil2 > Civil6////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cKC2 = 0,
  cKC3 = 0,
  cKC4 = 0,
  cKC5 = 0,
  cKC6 = 0;

let cHC2 = 0,
  cHC3 = 0,
  cHC4 = 0,
  cHC5 = 0,
  cHC6 = 0;

let cIC2 = 0,
  cIC3 = 0,
  cIC4 = 0,
  cIC5 = 0,
  cIC6 = 0;
let cPC2 = 0,
  cPC3 = 0,
  cPC4 = 0,
  cPC5 = 0,
  cPC6 = 0;

let cRC2 = 0,
  cRC3 = 0,
  cRC4 = 0,
  cRC5 = 0,
  cRC6 = 0;

function hidepick() {
  let first = document.querySelector(".pop");
  second = document.querySelector(".close-pick-btn");
  third = document.querySelector(".navbar-right-migrate");
  fourth = document.querySelector(".position-pick");
  
  first.style.display = "none";
  second.style.display = "none";
  third.style.visibility = "hidden";
  fourth.style.display = "block";

  if (blockOfCivil >= 1) {
    let first = document.querySelector(
      ".navbar-right-migrate .background-border-c2"
    );
    second = document.querySelector(
      ".navbar-right-migrate .background-border-m3"
    );
    third = document.querySelector(
      ".navbar-right-migrate .background-border-c3"
    );
    fourth = document.querySelector(
      ".navbar-right-migrate .background-border-c4"
    );
    five = document.querySelector(
      ".navbar-right-migrate .background-border-c5"
    );
    sixth = document.querySelector(
      ".navbar-right-migrate .background-border-c6"
    );

    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    five.style.display = "none";
    sixth.style.display = "none";
  }
  if (blockOfCivil === 1) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    first.style.display = "block";
  }

  if (blockOfCivil === 2) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    second = document.querySelector(".navbar-right .background-border-c3");
    first.style.display = "block";
    second.style.display = "block";
  }

  if (blockOfCivil === 3) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    second = document.querySelector(".navbar-right .background-border-c3");
    third = document.querySelector(".navbar-right .background-border-c4");
    first.style.display = "block";
    second.style.display = "block";
    third.style.display = "block";
  }
  if (blockOfCivil === 4) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    second = document.querySelector(".navbar-right .background-border-c3");
    third = document.querySelector(".navbar-right .background-border-c4");
    fourth = document.querySelector(".navbar-right .background-border-c5");
    first.style.display = "block";
    second.style.display = "block";
    third.style.display = "block";
    fourth.style.display = "block";
  }
  if (blockOfCivil === 5) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    second = document.querySelector(".navbar-right .background-border-c3");
    third = document.querySelector(".navbar-right .background-border-c4");
    fourth = document.querySelector(".navbar-right .background-border-c5");
    fifth = document.querySelector(".navbar-right .background-border-c6");
    first.style.display = "block";
    second.style.display = "block";
    third.style.display = "block";
    fourth.style.display = "block";
    fifth.style.display = "block";
  }
  if (blockOfCivil === 6) {
    let first = document.querySelector(".navbar-right .background-border-c2");
    third = document.querySelector(".navbar-right .background-border-c3");
    fourth = document.querySelector(".navbar-right .background-border-c4");
    fifth = document.querySelector(".navbar-right .background-border-c5");
    sixth = document.querySelector(".navbar-right .background-border-c6");

    first.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";

    blockOfCivil = 0;
  }
  if (blockOfMaf >= 1) {
    let first = document.querySelector(
      ".navbar-right-migrate .background-border-m3"
    );
    second = document.querySelector(".navbar-right .background-border-m2");

    first.style.display = "none";
    second.style.display = "block";
  }
  if (blockOfMaf >= 2) {
    blockOfMaf = 0;
  }
  // if(blockOfMaf )
}
function pick() {
  let first = document.querySelector(".pop");
  second = document.querySelector(".close-pick-btn");
  third = document.querySelector(".avatars-of-mafia");
  fourth = document.querySelector(".avatars-of-civil");
  fifth = document.querySelector(".navbar-right-migrate");
  sixth = document.querySelector(".position-pick");

  first.style.display = "block";
  second.style.display = "block";
  third.style.display = "block";
  fourth.style.display = "block";
  fifth.style.visibility = "visible";
  sixth.style.display = "none";

}
function addDon() {
  let first = document.querySelector(".background-border-d");
  first.style.display = "block";
}
function addMafia() {
  blockOfMaf++;

  if (blockOfMaf === 1) {
    let first = document.querySelector(
      ".navbar-right-migrate .background-border-m3"
    );
    second = document.querySelector(".avatar-round-table-m");

    first.style.display = "block";
    second.style.display = "block";
  }

  if (blockOfMaf === 2) {
    let first = document.querySelector(".background-border-m3");
    second = document.querySelector(".avatar-round-table-m");

    first.style.display = "none";
    second.style.display = "none";

    blockOfMaf = 0;
  }
}
function addCivil() {
  blockOfCivil++;

  if (blockOfCivil === 1) {
    let first = document.querySelector(
      ".navbar-right-migrate .background-border-c2"
    );
    second = document.querySelector(".avatar-round-table-c2");

    first.style.display = "block";
    second.style.display = "block";
  }
  if (blockOfCivil === 2) {
    let third = document.querySelector(
      ".navbar-right-migrate .background-border-c3"
    );
    fourth = document.querySelector(".avatar-round-table-c3");

    third.style.display = "block";
    fourth.style.display = "block";
  }
  if (blockOfCivil === 3) {
    let fourth = document.querySelector(
      " .navbar-right-migrate .background-border-c4"
    );
    fifth = document.querySelector(".avatar-round-table-c4");
    fourth.style.display = "block";
    fifth.style.display = "block";
  }
  if (blockOfCivil === 4) {
    let fifth = document.querySelector(
      ".navbar-right-migrate .background-border-c5"
    );
    sixth = document.querySelector(".avatar-round-table-c5");

    fifth.style.display = "block";
    sixth.style.display = "block";
  }
  if (blockOfCivil === 5) {
    let sixth = document.querySelector(
      ".navbar-right-migrate .background-border-c6"
    );
    seventh = document.querySelector(".avatar-round-table-c6");
    sixth.style.display = "block";
    seventh.style.display = "block";
  }
  if (blockOfCivil === 6) {
    let first = document.querySelector(
      ".navbar-right-migrate .background-border-c2"
    );
    // second = document.querySelector(
    //   ".navbar-right-migrate .background-border-c"
    // );
    third = document.querySelector(
      ".navbar-right-migrate .background-border-c3"
    );
    fourth = document.querySelector(
      ".navbar-right-migrate .background-border-c4"
    );
    fifth = document.querySelector(
      ".navbar-right-migrate .background-border-c5"
    );
    sixth = document.querySelector(
      ".navbar-right-migrate .background-border-c6"
    );
    n8 = document.querySelector(".avatar-round-table-c2");
    n9 = document.querySelector(".avatar-round-table-c3");
    n10 = document.querySelector(".avatar-round-table-c4");
    n11 = document.querySelector(".avatar-round-table-c5");
    n12 = document.querySelector(".avatar-round-table-c6");

    first.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
    sixth.style.display = "none";

    n8.style.display = "none";
    n9.style.display = "none";
    n10.style.display = "none";
    n11.style.display = "none";
    n12.style.display = "none";

    blockOfCivil = 0;
  }
}
// function addMafia2() {
//   let first = document.querySelector(".background-border-m:nth-of-type(3)");
//   first.style.display = "block";
// }
// function addMafia3() {
//   let first = document.querySelector(".background-border-m:nth-of-type(3)");
//   first.style.display = "block";
// }
// function addSheriff() {
//   let first = document.querySelector(".background-border-s");
//   first.style.display = "block";
// }
// function addDoctor() {
//   let first = document.querySelector(".background-border-doc");
//   first.style.display = "block";
// }
// function addLady() {
//   let first = document.querySelector(".background-border-l");
//   first.style.display = "block";
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countKillD() {
  cKD++;
}
function countKillM() {
  cKM++;
}
function countKillS() {
  cKS++;
}
function countKillDoc() {
  cKDoc++;
}
function countKillL() {
  cKL++;
}
function countKillC() {
  cKC++;
}
/////////////////////////////////////////////////////////////////
function countHealD() {
  cHD++;
}
function countHealM() {
  cHM++;
}
function countHealS() {
  cHS++;
}
function countHealDoc() {
  cHDoc++;
}
function countHealL() {
  cHL++;
}
function countHealC() {
  cHC++;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function countInspectD() {
  cID++;
}
function countInspectM() {
  cIM++;
}
function countInspectS() {
  cIS++;
}
function countInspectDoc() {
  cIDoc++;
}
function countInspectL() {
  cIL++;
}
function countInspectC() {
  cIC++;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function countPartyD() {
  cPD++;
}
function countPartyM() {
  cPM++;
}
function countPartyS() {
  cPS++;
}
function countPartyDoc() {
  cPDoc++;
}
function countPartyL() {
  cPL++;
}
function countPartyC() {
  cPC++;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function countRatS() {
  cRS++;
}
function countRatDoc() {
  cRDoc++;
}
function countRatL() {
  cRL++;
}
function countRatC() {
  cRC++;
}
////////////////////////Count kills for Mafia2////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countKillM2() {
  cKM2++;
}
function countHealM2() {
  cHM2++;
}
function countInspectM2() {
  cIM++;
}
function countPartyM2() {
  cPM2++;
}
////////////////////////Count for civil2 > civil6////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countKillC2() {
  cKC2++;
}
function countKillC3() {
  cKC3++;
}
function countKillC4() {
  cKC4++;
}
function countKillC5() {
  cKC5++;
}
function countKillC6() {
  cKC6++;
}

function countHealC2() {
  cHC2++;
}
function countHealC3() {
  cHC3++;
}
function countHealC4() {
  cHC4++;
}
function countHealC5() {
  cHC5++;
}
function countHealC6() {
  cHC6++;
}

function countInspectC2() {
  cIC2++;
}
function countInspectC3() {
  cIC3++;
}
function countInspectC4() {
  cIC4++;
}
function countInspectC5() {
  cIC5++;
}
function countInspectC6() {
  cIC6++;
}

function countPartyC2() {
  cPC2++;
}
function countPartyC3() {
  cPC3++;
}
function countPartyC4() {
  cPC4++;
}
function countPartyC5() {
  cPC5++;
}
function countPartyC6() {
  cPC6++;
}

function countRatC2() {
  cRC2++;
}
function countRatC3() {
  cRC3++;
}
function countRatC4() {
  cRC4++;
}
function countRatC5() {
  cRC5++;
}
function countRatC6() {
  cRC6++;
}

function killD() {
  let first = document.querySelector(
    ".background-border-d .btn-flex .btn-kill"
  );
  first.style.background = "#ffff";
}
function killDon() {
  if (cKD > 1) {
    let firstBlock = document.querySelector(".k-score img");
    second = document.querySelector(".k-score ");
    third = document.querySelector(".border");
    fourth = document.querySelector(".cross-kill");
    fifth = document.querySelector(".avatar img");
    sixth = document.querySelector(".background-border-d .btn-flex .btn-kill");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    sixth.style.background = "black";
    cKD = 0;
    border = 0;
  }
}
function killMafia() {
  if (cKM > 1) {
    let firstBlock = document.querySelector(".k-score-m img");
    second = document.querySelector(".k-score-m");
    third = document.querySelector(".navbarleft .background-border-m .border");
    fourth = document.querySelector(".cross-mafia-kill");
    fifth = document.querySelector(".blockof-avatars .avatar-midle-mafia");
    sixth = document.querySelector(".background-border-m .btn-flex .btn-kill");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    sixth.style.background = "black";
    cKM = 0;
    borderM = 0;
  }
}
function killSheriff() {
  if (cKS > 1) {
    let firstBlock = document.querySelector(".k-score-s img");
    second = document.querySelector(".k-score-s");
    third = document.querySelector(".navbarleft .background-border-s .border");
    fourth = document.querySelector(".cross-sheriff-kill");
    fifth = document.querySelector(".avatar:nth-of-type(3) img");
    sixth = document.querySelector(".background-border-s .btn-flex .btn-kill");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    sixth.style.background = "black";
    cKS = 0;
    borderS = 0;
  }
}
function killDoctor() {
  if (cKDoc > 1) {
    let firstBlock = document.querySelector(".k-score-d img");
    second = document.querySelector(".k-score-d");
    third = document.querySelector(
      ".navbarleft .background-border-doc .border"
    );
    fourth = document.querySelector(".cross-doctor-kill");
    fifth = document.querySelector(".blockof-avatars1 .avatar img");
    sixth = document.querySelector(
      ".background-border-doc .btn-flex .btn-kill"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    sixth.style.background = "black";
    cKDoc = 0;
    borderD = 0;
  }
}
function killLady() {
  if (cKL > 1) {
    let first = document.querySelector(
      ".background-border-l .btn-flex .btn-kill"
    );
    second = document.querySelector(".k-score-l img");
    third = document.querySelector(".k-score-l ");
    fourth = document.querySelector(".navbarleft .background-border-l .border");
    fifth = document.querySelector(".blockof-avatars1 .avatar-midle-lady img ");
    sixth = document.querySelector(".cross-lady-kill");

    first.style.background = "black";
    second.style.visibility = "hidden";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.visibility = "visible";
    sixth.style.display = "none";

    cKL = 0;
    borderL = 0;
  }
}
function KillCivil() {
  if (cKC > 1) {
    let back = document.querySelector(
      ".background-border-c .btn-flex .btn-kill"
    );
    let firstBlock = document.querySelector(".k-score-c img");
    second = document.querySelector(".k-score-c ");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(".cross-civil-kill");
    fifth = document.querySelector(
      ".blockof-avatars1 .avatar:nth-of-type(3) img"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    back.style.background = "black";
    cKS = 0;
    borderC = 0;
  }

  if (cKC > 1) {
    let back = document.querySelector(
      ".background-border-c .btn-flex .btn-kill"
    );
    let firstBlock = document.querySelector(".k-score-c img");
    second = document.querySelector(".k-score-c ");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(".cross-civil-kill");
    fifth = document.querySelector(
      ".blockof-avatars1 .avatar:nth-of-type(3) img"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    back.style.background = "black";
    cKC = 0;
  }

  if (cKC3 > 1) {
    let back = document.querySelector(
      ".background-border-c .btn-flex .btn-kill"
    );
    let firstBlock = document.querySelector(".k-score-c img");
    second = document.querySelector(".k-score-c ");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(".cross-civil-kill");
    fifth = document.querySelector(
      ".blockof-avatars1 .avatar:nth-of-type(3) img"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    back.style.background = "black";
    cKC3 = 0;
  }
  if (cKC4 > 1) {
    let back = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex .btn-kill"
    );
    firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c .k-score-c"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .border"
    );
    fourth = document.querySelector(".cross-civil-kill:nth-child(2)");
    fifth = document.querySelector(".avatar-round-table-c4");

    back.style.background = "black";
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    cKC4 = 0;
  }
  if (cKC5 > 1) {
    let back = document.querySelector(
      ".background-border-c .btn-flex .btn-kill"
    );
    let firstBlock = document.querySelector(".k-score-c img");
    second = document.querySelector(".k-score-c ");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(".cross-civil-kill");
    fifth = document.querySelector(
      ".blockof-avatars1 .avatar:nth-of-type(3) img"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
    back.style.background = "black";
    cKC5 = 0;
  }
  if (cKC6 > 1) {
    cKC6 = 0;
    let back = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex .btn-kill"
    );
    firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c .k-score-c"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .border"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .cross-civil-kill"
    );
    fifth = document.querySelector(".avatar-round-table-c6");

    back.style.background = "black";
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.visibility = "visible";
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function healDon() {
  if (cHD > 1) {
    let firstBlock = document.querySelector(".h-score img");
    second = document.querySelector(".border");
    third = document.querySelector(".h-score");
    sixth = document.querySelector(".background-border-d .btn-flex .btn-heal");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHD = 0;
  }
}
function healMafia() {
  if (cHM > 1) {
    let firstBlock = document.querySelector(".h-score-m img");
    second = document.querySelector(".h-score-m");
    third = document.querySelector(".navbarleft .background-border-m .border");
    sixth = document.querySelector(".background-border-m .btn-flex .btn-heal");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHM = 0;
  }
}

function healSheriff() {
  if (cHS > 1) {
    let firstBlock = document.querySelector(".h-score-s img");
    second = document.querySelector(".h-score-s");
    third = document.querySelector(".navbarleft .background-border-s .border");
    sixth = document.querySelector(".background-border-s .btn-flex .btn-heal");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHS = 0;
  }
}
function healDoctor() {
  if (cHDoc > 1) {
    let firstBlock = document.querySelector(".h-score-d img");
    second = document.querySelector(".h-score-d");
    third = document.querySelector(
      ".navbarleft .background-border-doc .border"
    );
    sixth = document.querySelector(
      ".background-border-doc .btn-flex .btn-heal"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHDoc = 0;
  }
}
function healLady() {
  if (cHL > 1) {
    let firstBlock = document.querySelector(".h-score-l img");
    second = document.querySelector(".h-score-l");
    third = document.querySelector(".navbarleft .background-border-l .border");
    sixth = document.querySelector(".background-border-l .btn-flex .btn-heal");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHL = 0;
  }
}
function healCivil() {
  if (cHC > 1) {
    let firstBlock = document.querySelector(".h-score-c img");
    second = document.querySelector(".h-score-c");
    third = document.querySelector(".navbarleft .background-border-c .border");
    sixth = document.querySelector(".background-border-c .btn-flex .btn-heal");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    sixth.style.background = "black";
    cHC = 0;
  }
}
function inspectDon() {
  if (cID > 1) {
    let firstBlock = document.querySelector(".i-score img");
    second = document.querySelector(".i-score");
    third = document.querySelector(".background-border-d .border");
    fourth = document.querySelector(
      ".background-border-d .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cID = 0;
  }
}
function inspectMafia() {
  if (cIM > 1) {
    let firstBlock = document.querySelector(".i-score-m img");
    second = document.querySelector(".i-score-m");
    third = document.querySelector(".background-border-m .border");
    fourth = document.querySelector(
      ".background-border-m .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIM = 0;
  }
}
function inspectSheriff() {
  if (cIS > 1) {
    let firstBlock = document.querySelector(".i-score-s img");
    second = document.querySelector(".i-score-s");
    third = document.querySelector(".background-border-s .border");
    fourth = document.querySelector(
      ".background-border-s .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIS = 0;
  }
}
function inspectDoc() {
  if (cIDoc > 1) {
    let firstBlock = document.querySelector(".i-score-d img");
    second = document.querySelector(".i-score-d");
    third = document.querySelector(".background-border-doc .border");
    fourth = document.querySelector(
      ".background-border-doc .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIDoc = 0;
  }
}
function inspectLady() {
  if (cIL > 1) {
    let firstBlock = document.querySelector(".i-score-l img");
    second = document.querySelector(".i-score-l");
    third = document.querySelector(".background-border-l .border");
    fourth = document.querySelector(
      ".background-border-l .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIL = 0;
  }
}
function inspectCivil() {
  if (cIC > 1) {
    let firstBlock = document.querySelector(".i-score-c img");
    second = document.querySelector(".i-score-c");
    third = document.querySelector(".background-border-c .border");
    fourth = document.querySelector(
      ".background-border-c .btn-flex .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC = 0;
  }
}
//////////////////////////////////////////////////////////////////////////////////////
function partyDon() {
  if (cPD > 1) {
    let firstBlock = document.querySelector(".p-score img");
    second = document.querySelector(".p-score");
    third = document.querySelector(".navbarleft .background-border-d .border");
    fourth = document.querySelector(
      ".background-border-d .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPD = 0;
  }
}
function partyMafia() {
  if (cPM > 1) {
    let firstBlock = document.querySelector(".p-score-m img");
    second = document.querySelector(".p-score-m");
    third = document.querySelector(".navbarleft .background-border-m .border");
    fourth = document.querySelector(
      ".background-border-m .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPM = 0;
  }
}
function partySheriff() {
  if (cPS > 1) {
    let firstBlock = document.querySelector(".p-score-s img");
    second = document.querySelector(".p-score-s");
    third = document.querySelector(".navbarleft .background-border-s .border");
    fourth = document.querySelector(
      ".background-border-s .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPS = 0;
  }
}
function partyDoctor() {
  if (cPDoc > 1) {
    let firstBlock = document.querySelector(".p-score-d img");
    second = document.querySelector(".p-score-d");
    third = document.querySelector(
      ".navbarleft .background-border-doc .border"
    );
    fourth = document.querySelector(
      ".background-border-doc .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPDoc = 0;
  }
}
function partyLady() {
  if (cPL > 1) {
    let firstBlock = document.querySelector(".p-score-l img");
    second = document.querySelector(".p-score-l");
    third = document.querySelector(".navbarleft .background-border-l .border");
    fourth = document.querySelector(
      ".background-border-l .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPL = 0;
  }
}
function partyCivil() {
  if (cPC > 1) {
    let firstBlock = document.querySelector(".p-score-c img");
    second = document.querySelector(".p-score-c");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(
      ".background-border-c .btn-flex .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC = 0;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////
function ratSheriff() {
  if (cRS > 1) {
    let firstBlock = document.querySelector(".r-score-s img");
    second = document.querySelector(".r-score-s");
    third = document.querySelector(".navbarleft .background-border-s .border");
    fourth = document.querySelector(".background-border-s .btn-flex .btn-rat");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRS = 0;
  }
}
function ratDoctor() {
  if (cRDoc > 1) {
    let firstBlock = document.querySelector(".r-score-d img");
    second = document.querySelector(".r-score-d");
    third = document.querySelector(
      ".navbarleft .background-border-doc .border"
    );
    fourth = document.querySelector(
      ".background-border-doc .btn-flex .btn-rat"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRDoc = 0;
  }
}
function ratLady() {
  if (cRL > 1) {
    let firstBlock = document.querySelector(".r-score-l img");
    second = document.querySelector(".r-score-l");
    third = document.querySelector(".navbarleft .background-border-l .border");
    fourth = document.querySelector(".background-border-l .btn-flex .btn-rat");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC = 0;
    cRL = 0;
  }
}
function ratCivil() {
  if (cRC > 1) {
    let firstBlock = document.querySelector(".r-score-c img");
    second = document.querySelector(".r-score-c");
    third = document.querySelector(".navbarleft .background-border-c .border");
    fourth = document.querySelector(".background-border-c .btn-flex .btn-rat");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC = 0;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function kill() {
  let firstBlock = document.querySelector(".background-border-d ");
  firstBlock.style.display = "none";
}
function killDonImg() {
  let firstBlock = document.querySelector(".k-score img");
  second = document.querySelector(".k-score ");
  third = document.querySelector(".border");
  fourth = document.querySelector(".cross-kill");
  fifth = document.querySelector(".avatar img");
  sixth = document.querySelector(".background-border-d .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}
function healDonImg() {
  let firstBlock = document.querySelector(".h-score img");
  second = document.querySelector(".border");
  third = document.querySelector(".h-score");
  fourth = document.querySelector(".cross-kill");
  fifth = document.querySelector(".avatar img");
  sixth = document.querySelector(".background-border-d .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
  sixth.style.background = "#286214";
}

function inspectDonImg() {
  let firstBlock = document.querySelector(".i-score img");
  second = document.querySelector(".i-score");
  third = document.querySelector(".border");
  fourth = document.querySelector(
    ".background-border-d .btn-flex .btn-inspect"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}
function partyDonImg() {
  let firstBlock = document.querySelector(".p-score img");
  second = document.querySelector(".p-score");
  third = document.querySelector(".border");
  fourth = document.querySelector(".background-border-d .btn-flex .btn-party");
  firstBlock.style.visibility = "visible";
  second.style.background = "#2B1534";
  third.style.background = "#2B1534";
  fourth.style.background = "#2B1534";
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
  fifth = document.querySelector(".blockof-avatars .avatar-midle-mafia");
  sixth = document.querySelector(".background-border-m .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}

function healMafiaImg() {
  let firstBlock = document.querySelector(".h-score-m img");
  second = document.querySelector(".h-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  fourth = document.querySelector(".cross-mafia-kill");
  fifth = document.querySelector(".blockof-avatars .avatar-midle-mafia ");
  sixth = document.querySelector(".background-border-m .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
  sixth.style.background = "#286214";
}

function inspectMafiaImg() {
  let firstBlock = document.querySelector(".i-score-m img");
  second = document.querySelector(".i-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  fourth = document.querySelector(
    ".background-border-m .btn-flex .btn-inspect"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}

function partyMafiaImg() {
  let firstBlock = document.querySelector(".p-score-m img");
  second = document.querySelector(".p-score-m");
  third = document.querySelector(".navbarleft .background-border-m .border");
  fourth = document.querySelector(".background-border-m .btn-flex .btn-party");

  firstBlock.style.visibility = "visible";
  second.style.background = "#2B1534";
  third.style.background = "#2B1534";
  fourth.style.background = "#2B1534";
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

// Block for Sherif//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killSheriffImg() {
  let firstBlock = document.querySelector(".k-score-s img");
  second = document.querySelector(".k-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sheriff-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");
  sixth = document.querySelector(".background-border-s .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}
function healSheriffImg() {
  let firstBlock = document.querySelector(".h-score-s img");
  second = document.querySelector(".h-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sheriff-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");
  sixth = document.querySelector(".background-border-s .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
  sixth.style.background = "#286214";
}
function inspectSheriffImg() {
  let firstBlock = document.querySelector(".i-score-s img");
  second = document.querySelector(".i-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(
    ".background-border-s .btn-flex .btn-inspect"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}
function partySheriffImg() {
  let firstBlock = document.querySelector(".p-score-s img");
  second = document.querySelector(".p-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".background-border-s .btn-flex .btn-party");

  firstBlock.style.visibility = "visible";
  second.style.background = "#2B1534";
  third.style.background = "#2B1534";
  fourth.style.background = "#2F1637";
}
function ratSheriffImg() {
  let firstBlock = document.querySelector(".r-score-s img");
  second = document.querySelector(".r-score-s");
  third = document.querySelector(".navbarleft .background-border-s .border");
  fourth = document.querySelector(".cross-sheriff-kill");
  fifth = document.querySelector(".avatar:nth-of-type(3) img");
  fourth = document.querySelector(".background-border-s .btn-flex .btn-rat");

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  fourth.style.background = "#4a4a4a";
}

// Block for doctor
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function killDoctorImg() {
  let firstBlock = document.querySelector(".k-score-d img");
  second = document.querySelector(".k-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(".cross-doctor-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar img");
  sixth = document.querySelector(".background-border-doc .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}
function healDoctorImg() {
  let firstBlock = document.querySelector(".h-score-d img");
  second = document.querySelector(".h-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(".cross-doctor-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar img");
  sixth = document.querySelector(".background-border-doc .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
  sixth.style.background = "#286214";
}
function inspectDoctorImg() {
  let firstBlock = document.querySelector(".i-score-d img");
  second = document.querySelector(".i-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  firstBlock.style.visibility = "visible";
  fourth = document.querySelector(
    ".background-border-doc .btn-flex .btn-inspect"
  );

  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}
function partyDoctorImg() {
  let firstBlock = document.querySelector(".p-score-d img");
  second = document.querySelector(".p-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(
    ".background-border-doc .btn-flex .btn-party"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
}
function ratDoctorImg() {
  let firstBlock = document.querySelector(".r-score-d img");
  second = document.querySelector(".r-score-d");
  third = document.querySelector(".navbarleft .background-border-doc .border");
  fourth = document.querySelector(".background-border-doc .btn-flex .btn-rat");

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
}

// Block for lady
///
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killLadyImg() {
  let firstBlock = document.querySelector(".k-score-l img");
  second = document.querySelector(".k-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".cross-lady-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar-midle-lady img");
  sixth = document.querySelector(".background-border-l .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}
function healLadyImg() {
  let firstBlock = document.querySelector(".h-score-l img");
  second = document.querySelector(".h-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".cross-lady-kill");
  fifth = document.querySelector(".blockof-avatars1 .avatar-midle-lady");
  sixth = document.querySelector(".background-border-l .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.visibility = "visible";
  sixth.style.background = "#286214";
}
function inspectLadyImg() {
  let firstBlock = document.querySelector(".i-score-l img");
  second = document.querySelector(".i-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(
    ".background-border-l .btn-flex .btn-inspect"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}

function partyLadyImg() {
  let firstBlock = document.querySelector(".p-score-l img");
  second = document.querySelector(".p-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".background-border-l .btn-flex .btn-party");

  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
}
function ratLadyImg() {
  let firstBlock = document.querySelector(".r-score-l img");
  second = document.querySelector(".r-score-l");
  third = document.querySelector(".navbarleft .background-border-l .border");
  fourth = document.querySelector(".background-border-l .btn-flex .btn-rat");

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
}
// Block for civil///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  sixth = document.querySelector(".background-border-c .btn-flex .btn-kill");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.visibility = "hidden";
  sixth.style.background = "#AF2222";
}
function healCivilImg() {
  let firstBlock = document.querySelector(".h-score-c img");
  second = document.querySelector(".h-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fourth = document.querySelector(".cross-civil-kill");

  sixth = document.querySelector(".background-border-c .btn-flex .btn-heal");

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  sixth.style.background = "#286214";
  if (cKC >= 1) {
    let fifth = document.querySelector(
      ".blockof-avatars1 .avatar:nth-of-type(3) img"
    );

    fifth.style.visibility = "visible";
  }
}
function inspectCivilImg() {
  let firstBlock = document.querySelector(".i-score-c img");
  second = document.querySelector(".i-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fourth = document.querySelector(
    ".background-border-c .btn-flex .btn-inspect"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
}
function partyCivilImg() {
  let firstBlock = document.querySelector(".p-score-c img");
  second = document.querySelector(".p-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fourth = document.querySelector(".background-border-c .btn-flex .btn-party");

  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
}
function ratCivilImg() {
  let firstBlock = document.querySelector(".r-score-c img");
  second = document.querySelector(".r-score-c");
  third = document.querySelector(".navbarleft .background-border-c .border");
  fourth = document.querySelector(".background-border-c .btn-flex .btn-rat");

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
}
////Block for Mafia2 in right-navbar//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function killMafiaImg2() {
  cKM2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .k-score-m img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .k-score-m"
  );
  third = document.querySelector(
    ".navbar-right .background-border-m2 .border3"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-m2 .cross-mafia-kill2"
  );
  fifth = document.querySelector(".blockof-avatars .avatar-midle-mafia");
  sixth = document.querySelector(
    ".navbar-right .background-border-m2 .btn-flex2 .btn-kill"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.display = "block";
  fifth.style.display = "none";
  sixth.style.background = "#AF2222";
  if (cKM2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .k-score-m img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .k-score-m"
    );
    third = document.querySelector(
      ".navbar-right .background-border-m2 .border3"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-m2 .cross-mafia-kill2"
    );
    fifth = document.querySelector(".avatar-round-table-m");
    sixth = document.querySelector(
      ".navbar-right .background-border-m2 .btn-flex2 .btn-kill"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.display = "none";
    fifth.style.display = "block";
    sixth.style.background = "black";
    cKM2 = 0;
  }
}

function healMafiaImg2() {
  cHM2++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .h-score-m img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .h-score-m"
  );
  third = document.querySelector(
    ".navbar-right .background-border-m2 .border3"
  );
  fourth = document.querySelector(".cross-mafia-kill2");
  fifth = document.querySelector(".avatar-round-table-m ");
  sixth = document.querySelector(
    ".navbar-right .background-border-m2 .btn-flex2 .btn-heal"
  );
  seventh = document.querySelector(
    ".navbar-right .background-border-m2 .cross-mafia-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.display = "none";
  fifth.style.display = "block";
  sixth.style.background = "#286214";
  seventh.style.display = "none";
  if (cKM2 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-m");

    fifth.style.display = "block";
  }
  if (cHM2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .h-score-m img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .h-score-m"
    );
    third = document.querySelector(
      ".navbar-right .background-border-m2 .border3"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-m2 .btn-flex2 .btn-heal"
    );
    seventh = document.querySelector(
      ".navbar-right .background-border-m2 .cross-mafia-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";

    sixth.style.background = "black";
    seventh.style.display = "none";
    cHM2 = 0;
  }
  borderM2 = 0;
}

function inspectMafiaImg2() {
  cIM2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .i-score-m img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .i-score-m"
  );
  third = document.querySelector(
    ".navbar-right .background-border-m2 .border3"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-m2 .btn-flex2 .btn-inspect"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIM2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .i-score-m img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .i-score-m"
    );
    third = document.querySelector(
      ".navbar-right .background-border-m2 .border3"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-m2 .btn-flex2 .btn-inspect"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIM2 = 0;
  }
}
function partyMafiaImg2() {
  cPM2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .p-score-m img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-m2 .border-score-m2 .p-score-m"
  );
  third = document.querySelector(
    ".navbar-right .background-border-m2 .border3"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-m2 .btn-flex2 .btn-party"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#2B1534";
  third.style.background = "#2B1534";
  fourth.style.background = "#2B1534";
  if (cPM2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .p-score-m img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-m2 .border-score-m2 .p-score-m"
    );
    third = document.querySelector(
      ".navbar-right .background-border-m2 .border3"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-m2 .btn-flex2 .btn-party"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPM2 = 0;
  }
}
function ratBackgroundMaf2() {
  let firstBlock = document.querySelector(
    ".navbarleft .background-border-m .border3"
  );

  firstBlock.style.background = "grey";
}
function ratScorMaf2() {
  let firstBlock = document.querySelector(".i-score-m");

  firstBlock.style.background = "grey";
}

////Block for Civil in right-navbar//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function crossKillCivil2() {
  let firstBlock = document.querySelector("");

  firstBlock.style.display = "block";
}
function killCivilImg2() {
  cKC2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .k-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c2 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c2 .btn-flex2 .btn-kill"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .k-score-c"
  );
  fifth = document.querySelector(
    ".navbar-right .background-border-c2 .cross-civil-kill2"
  );
  // sixth = document.querySelector(".avatar-round-table-c2");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.background = "#AF2222";
  fifth.style.display = "block";
  // sixth.style.display = "none";

  if (cKC2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c2 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c2 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .btn-flex2 .btn-kill"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .k-score-c"
    );
    fifth = document.querySelector(
      ".navbar-right .background-border-c2 .cross-civil-kill2"
    );
    sixth = document.querySelector(".avatar-round-table-c2");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.display = "none";
    sixth.style.display = "block";
    cKC2 = 0;
  }
}
function healCivilImg2() {
  cHC2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c2 .h-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c2 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c2 .btn-flex2 .btn-heal"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .h-score-c"
  );
  sixth = document.querySelector(
    ".navbar-right .background-border-c2 .cross-civil-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.background = "#286214";
  sixth.style.display = "none";

  if (cKC2 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-c2");

    fifth.style.display = "block";
  }
  if (cHC2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c2 .h-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c2 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .btn-flex2 .btn-heal"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .h-score-c"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-c2 .cross-civil-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    sixth.style.display = "none";
    cHC2 = 0;
  }
  borderC2 = 0;
}
function inspectCivilImg2() {
  cIC2++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .i-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c2 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c2 .btn-flex2 .btn-inspect"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .i-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIC2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .i-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c2 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .btn-flex2 .btn-inspect"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .i-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC2 = 0;
  }
}
function partyCivilImg2() {
  cPC2++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .p-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c2 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c2 .btn-flex2 .btn-party"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .p-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
  if (cPC2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .p-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c2 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .btn-flex2 .btn-party"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .p-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC2 = 0;
  }
}
function ratCivilImg2() {
  cRC2++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .r-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c2 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c2 .btn-flex2 .btn-rat"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c2 .border-score-c2 .r-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
  if (cRC2 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .r-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c2 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c2 .btn-flex2 .btn-rat"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c2 .border-score-c2 .r-score-c"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC2 = 0;
  }
}
///////////////civil3///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function crossKillCivil3() {
  let firstBlock = document.querySelector("");

  firstBlock.style.display = "block";
}
function killCivilImg3() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .k-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c3 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c3 .btn-flex2 .btn-kill"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .k-score-c"
  );
  fifth = document.querySelector(
    ".navbar-right .background-border-c3 .cross-civil-kill2"
  );
  sixth = document.querySelector(".avatar-round-table-c3");
  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.background = "#AF2222";
  fifth.style.display = "block";
  sixth.style.display = "none";
  if (cKC3 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c3 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c3 .btn-flex2 .btn-kill"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .k-score-c"
    );
    fifth = document.querySelector(
      ".navbar-right .background-border-c3 .cross-civil-kill2"
    );
    sixth = document.querySelector(".avatar-round-table-c2");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.display = "none";
    sixth.style.display = "block";
    cKC3 = 0;
  }
}
function healCivilImg3() {
  cHC3++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .h-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c3 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c3 .btn-flex2 .btn-heal"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .h-score-c"
  );
  sixth = document.querySelector(
    ".navbar-right .background-border-c3 .cross-civil-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.background = "#286214";
  sixth.style.display = "none";

  if (cKC3 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-c3");

    fifth.style.display = "block";
  }
  if (cHC3 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .h-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c3 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c3 .btn-flex2 .btn-heal"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .h-score-c"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-c3 .cross-civil-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    sixth.style.display = "none";
    cHC3 = 0;
  }
  borderC3 = 0;
}
function inspectCivilImg3() {
  cIC3++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .i-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c3 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c3 .btn-flex2 .btn-inspect"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .i-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIC3 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .i-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c3 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c3 .btn-flex2 .btn-inspect"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .i-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC3 = 0;
  }
}
function partyCivilImg3() {
  cPC3++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .p-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c3 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c3 .btn-flex2 .btn-party"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .p-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
  if (cPC3 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .p-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c3 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c3 .btn-flex2 .btn-party"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .p-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC3 = 0;
  }
}
function ratCivilImg3() {
  cRC3++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .r-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c3 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c3 .btn-flex2 .btn-rat"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c3 .border-score-c2 .r-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
  if (cRC3 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .r-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c3 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c3 .btn-flex2 .btn-rat"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c3 .border-score-c2 .r-score-c"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC3 = 0;
  }
} ///////////////civil4///////////////////////////////////////////////////////////////////////////////////////////////////////////
function crossKillCivil4() {
  let firstBlock = document.querySelector("");

  firstBlock.style.display = "block";
}
function killCivilImg4() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .k-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c4 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c4 .btn-flex2 .btn-kill"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .k-score-c"
  );
  fifth = document.querySelector(
    ".navbar-right .background-border-c4 .cross-civil-kill2"
  );
  sixth = document.querySelector(".avatar-round-table-c4");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.background = "#AF2222";
  fifth.style.display = "block";
  sixth.style.display = "none";
  if (cKC4 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex2 .btn-kill"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .k-score-c"
    );
    fifth = document.querySelector(
      ".navbar-right .background-border-c4 .cross-civil-kill2"
    );
    sixth = document.querySelector(".avatar-round-table-c4");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.display = "none";
    sixth.style.display = "block";
    cKC4 = 0;
  }
}
function healCivilImg4() {
  cHC4++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .h-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c4 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c4 .btn-flex2 .btn-heal"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .h-score-c"
  );
  sixth = document.querySelector(
    ".navbar-right .background-border-c4 .cross-civil-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.background = "#286214";
  sixth.style.display = "none";

  if (cKC4 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-c4");

    fifth.style.display = "block";
  }
  if (cHC4 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .h-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex2 .btn-heal"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .h-score-c"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-c4 .cross-civil-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    sixth.style.display = "none";
    cHC4 = 0;
  }
  borderC4 = 0;
}
function inspectCivilImg4() {
  cIC4++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .i-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c4 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c4 .btn-flex2 .btn-inspect"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .i-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIC4 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .i-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex2 .btn-inspect"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .i-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC4 = 0;
  }
}
function partyCivilImg4() {
  cPC4++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .p-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c4 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c4 .btn-flex2 .btn-party"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .p-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";

  if (cPC4 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .p-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex2 .btn-party"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .p-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC4 = 0;
  }
}
function ratCivilImg4() {
  cRC4++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .r-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c4 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c4 .btn-flex2 .btn-rat"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c4 .border-score-c2 .r-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
  if (cRC4 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .r-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c4 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c4 .btn-flex2 .btn-rat"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c4 .border-score-c2 .r-score-c"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC4 = 0;
  }
} ///////////////civil5////////////////////////////////////////////////////////////////////////
function crossKillCivil5() {
  let firstBlock = document.querySelector("");

  firstBlock.style.display = "block";
}
function killCivilImg5() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .k-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c5 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c5 .btn-flex2 .btn-kill"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .k-score-c"
  );
  fifth = document.querySelector(
    ".navbar-right .background-border-c5 .cross-civil-kill2"
  );
  sixth = document.querySelector(".avatar-round-table-c5");
  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.background = "#AF2222";
  fifth.style.display = "block";
  sixth.style.display = "none";
  if (cKC5 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c5 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c5 .btn-flex2 .btn-kill"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .k-score-c"
    );
    fifth = document.querySelector(
      ".navbar-right .background-border-c5 .cross-civil-kill2"
    );
    sixth = document.querySelector(".avatar-round-table-c5");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.display = "none";
    sixth.style.display = "block";
    cKC5 = 0;
  }
}
function healCivilImg5() {
  cHC5++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .h-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c5 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c5 .btn-flex2 .btn-heal"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .h-score-c"
  );
  sixth = document.querySelector(
    ".navbar-right .background-border-c5 .cross-civil-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.background = "#286214";
  sixth.style.display = "none";

  if (cKC5 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-c5");

    fifth.style.display = "block";
  }
  if (cHC5 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .h-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c5 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c5 .btn-flex2 .btn-heal"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .h-score-c"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-c5 .cross-civil-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    sixth.style.display = "none";
    cHC5 = 0;
  }
  borderC5 = 0;
}
function inspectCivilImg5() {
  cIC5++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .i-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c5 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c5 .btn-flex2 .btn-inspect"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .i-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIC5 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .i-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c5 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c5 .btn-flex2 .btn-inspect"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .i-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC5 = 0;
  }
}
function partyCivilImg5() {
  cPC5++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .p-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c5 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c5 .btn-flex2 .btn-party"
  );
  2;
  fourth = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .p-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
  if (cPC5 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .p-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c5 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c5 .btn-flex2 .btn-party"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .p-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC5 = 0;
  }
}
function ratCivilImg5() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .r-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c5 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c5 .btn-flex2 .btn-rat"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c5 .border-score-c2 .r-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
  cRC5++;
  if (cRC5 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .r-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c5 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c5 .btn-flex2 .btn-rat"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c5 .border-score-c2 .r-score-c"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC5 = 0;
  }
} ///////////////civil6////////////////////////////////////////////////////////////////////////
function crossKillCivil6() {
  let firstBlock = document.querySelector("");

  firstBlock.style.display = "block";
}
function killCivilImg6() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .k-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c6 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c6 .btn-flex2 .btn-kill"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .k-score-c"
  );
  fifth = document.querySelector(
    ".navbar-right .background-border-c6 .cross-civil-kill2"
  );
  sixth = document.querySelector(".avatar-round-table-c6");

  firstBlock.style.visibility = "visible";
  second.style.background = "#AF2222";
  third.style.background = "#AF2222";
  fourth.style.background = "#AF2222";
  fifth.style.display = "block";
  sixth.style.display = "none";
  if (cKC6 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .k-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex2 .btn-kill"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .k-score-c"
    );
    fifth = document.querySelector(
      ".navbar-right .background-border-c6 .cross-civil-kill2"
    );
    sixth = document.querySelector(".avatar-round-table-c6");

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    fifth.style.display = "none";
    sixth.style.display = "block";
    cKC6 = 0;
  }
}
function healCivilImg6() {
  cHC6++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .h-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c6 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c6 .btn-flex2 .btn-heal"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .h-score-c"
  );
  sixth = document.querySelector(
    ".navbar-right .background-border-c6 .cross-civil-kill2"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#286214";
  third.style.background = "#286214";
  fourth.style.background = "#286214";
  sixth.style.display = "none";

  if (cKC6 >= 1) {
    let fifth = document.querySelector(".avatar-round-table-c6");

    fifth.style.display = "block";
  }
  if (cHC6 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .h-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex2 .btn-heal"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .h-score-c"
    );
    sixth = document.querySelector(
      ".navbar-right .background-border-c6 .cross-civil-kill2"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    sixth.style.display = "none";
    cHC6 = 0;
  }
  borderC6 = 0;
}
function inspectCivilImg6() {
  cIC6++;

  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .i-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c6 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c6 .btn-flex2 .btn-inspect"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .i-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#00103D";
  third.style.background = "#00103D";
  fourth.style.background = "#00103D";
  if (cIC6 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .i-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex2 .btn-inspect"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .i-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cIC6 = 0;
  }
}
function partyCivilImg6() {
  cPC6++;
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .p-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c6 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c6 .btn-flex2 .btn-party"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .p-score-c"
  );
  firstBlock.style.visibility = "visible";
  second.style.background = "#2F1637";
  third.style.background = "#2F1637";
  fourth.style.background = "#2F1637";
  if (cPC6 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .p-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex2 .btn-party"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .p-score-c"
    );
    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cPC6 = 0;
  }
}
function ratCivilImg6() {
  let firstBlock = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .r-score-c img"
  );
  second = document.querySelector(
    ".navbar-right .background-border-c6 .border3"
  );
  third = document.querySelector(
    ".navbar-right .background-border-c6 .btn-flex2 .btn-rat"
  );
  fourth = document.querySelector(
    ".navbar-right .background-border-c6 .border-score-c2 .r-score-c"
  );

  firstBlock.style.visibility = "visible";
  second.style.background = "#4a4a4a";
  third.style.background = "#4a4a4a";
  fourth.style.background = "#4a4a4a";
  cRC6++;
  if (cRC6 > 1) {
    let firstBlock = document.querySelector(
      ".navbar-right .background-border-c6 .r-score-c img"
    );
    second = document.querySelector(
      ".navbar-right .background-border-c6 .border3"
    );
    third = document.querySelector(
      ".navbar-right .background-border-c6 .btn-flex2 .btn-rat"
    );
    fourth = document.querySelector(
      ".navbar-right .background-border-c6 .border-score-c2 .r-score-c"
    );

    firstBlock.style.visibility = "hidden";
    second.style.background = "black";
    third.style.background = "black";
    fourth.style.background = "black";
    cRC6 = 0;
  }
}

///Block number/////////////////////////////////////////////////////////////////////////////

function border1() {
  border = 1;
}
function borderM1() {
  borderM = 1;
}
function border2M() {
  borderM2 = 1;
}
function borderS1() {
  borderS = 1;
}
function borderD1() {
  borderD = 1;
}
function borderL1() {
  borderL = 1;
}
function borderC1() {
  borderC = 1;
}
function border2C() {
  borderC2 = 1;
}
function border3C() {
  borderC3 = 1;
}
function border4C() {
  borderC4 = 1;
}
function border5C() {
  borderC5 = 1;
}
function border6C() {
  borderC6 = 1;
}
//////Zero for border sector///////////////////////////////////////////////////////////////////////////
function border0() {
  border = 0;
}
function borderM0() {
  borderM = 0;
}
function borderS0() {
  borderS = 0;
}
function borderD0() {
  borderD = 0;
}
function borderL0() {
  borderL = 0;
}
function borderC0() {
  borderC = 0;
}
///Delite Blocks////////////////////////////////////////////////////////////////////////////
function kill() {
  let firstBlock = document.querySelector(".background-border-d ");
  firstBlock.style.display = "none";
}
function deliteBackgroundD() {
  let first = document.querySelector(".background-border-d");

  first.style.display = "none";
}
function deliteBackgroundM() {
  let first = document.querySelector(".background-border-m");

  first.style.display = "none";
}
function deliteBackgroundM2() {
  let first = document.querySelector(".background-border-m2");

  first.style.display = "none";
}
function deliteBackgroundS() {
  let first = document.querySelector(".background-border-s");

  first.style.display = "none";
}
function deliteBackgroundDoc() {
  let first = document.querySelector(".background-border-doc");

  first.style.display = "none";
}
function deliteBackgroundL() {
  let first = document.querySelector(".background-border-l");

  first.style.display = "none";
}
function deliteBackgroundC() {
  let first = document.querySelector(".background-border-c");

  first.style.display = "none";
}
function deliteBackgroundC2() {
  let first = document.querySelector(".navbar-right .background-border-c2");

  first.style.display = "none";
}
function deliteBackgroundC3() {
  let first = document.querySelector(".navbar-right .background-border-c3");

  first.style.display = "none";
}
function deliteBackgroundC4() {
  let first = document.querySelector(".navbar-right .background-border-c4");

  first.style.display = "none";
}
function deliteBackgroundC5() {
  let first = document.querySelector(".navbar-right .background-border-c5");

  first.style.display = "none";
}
function deliteBackgroundC6() {
  let first = document.querySelector(".navbar-right .background-border-c6");

  first.style.display = "none";
}
function deliteBlocks() {
  if (border) {
    deliteBackgroundD();
  }
  if (borderM) {
    deliteBackgroundM();
  }
  if (borderM2) {
    deliteBackgroundM2();
  }
  if (borderS) {
    deliteBackgroundS();
  }
  if (borderD) {
    deliteBackgroundDoc();
  }
  if (borderL) {
    deliteBackgroundL();
  }
  if (cKC2) {
    deliteBackgroundC2();
  }
  if (cKC3) {
    deliteBackgroundC3();
  }
  if (cKC4) {
    deliteBackgroundC4();
  }
  if (cKC5) {
    deliteBackgroundC5();
  }
  if (cKC6) {
    deliteBackgroundC6();
  }
}
///Blocks Sizing/////////////////////////////////////////////////////////////////////////////////
function sizing() {
  let firstBlock = document.querySelector(".navbarleft");

  firstBlock.style.height = "590px";
}
function blocksSizing() {
  if (border) {
    sizing();
  }
  if (borderM) {
    sizing();
  }
  if (borderS) {
    sizing();
  }
  if (borderD) {
    sizing();
  }
  if (borderL) {
    sizing();
  }
  if (borderC) {
    sizing();
  }
}
// if (borderM)
//   if (borderS)
//     if (borderD)
//       if (borderL)
//         if (borderC)

function clearScore() {
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

  ////Buttom Background////////////////////////////////////////////////////////////////////////

  bKilllDon = document.querySelector(
    ".background-border-d .btn-flex .btn-kill"
  );
  bKilllMafia = document.querySelector(
    ".background-border-m .btn-flex .btn-kill"
  );
  bKilllSheriff = document.querySelector(
    ".background-border-s .btn-flex .btn-kill"
  );
  bKilllDoctor = document.querySelector(
    ".background-border-doc .btn-flex .btn-kill"
  );
  bKilllLady = document.querySelector(
    ".background-border-l .btn-flex .btn-kill"
  );
  bKilllCivil = document.querySelector(
    ".background-border-c .btn-flex .btn-kill"
  );

  bHeallDon = document.querySelector(
    ".background-border-d .btn-flex .btn-heal"
  );
  bHeallMafia = document.querySelector(
    ".background-border-m .btn-flex .btn-heal"
  );
  bHeallSheriff = document.querySelector(
    ".background-border-s .btn-flex .btn-heal"
  );
  bHeallDoctor = document.querySelector(
    ".background-border-doc .btn-flex .btn-heal"
  );
  bHeallLady = document.querySelector(
    ".background-border-l .btn-flex .btn-heal"
  );
  bHeallCivil = document.querySelector(
    ".background-border-c .btn-flex .btn-heal"
  );

  bInspectDon = document.querySelector(
    ".background-border-d .btn-flex .btn-inspect"
  );
  bInspectMafia = document.querySelector(
    ".background-border-m .btn-flex .btn-inspect"
  );
  bInspectSheriff = document.querySelector(
    ".background-border-s .btn-flex .btn-inspect"
  );
  bInspectDoctor = document.querySelector(
    ".background-border-doc .btn-flex .btn-inspect"
  );
  bInspectLady = document.querySelector(
    ".background-border-l .btn-flex .btn-inspect"
  );
  bInspectCivil = document.querySelector(
    ".background-border-c .btn-flex .btn-inspect"
  );
  bPartyDon = document.querySelector(
    ".background-border-d .btn-flex .btn-party"
  );
  bPartyMafia = document.querySelector(
    ".background-border-m .btn-flex .btn-party"
  );
  bPartySheriff = document.querySelector(
    ".background-border-s .btn-flex .btn-party"
  );
  bPartyDoctor = document.querySelector(
    ".background-border-doc .btn-flex .btn-party"
  );
  bPartyLady = document.querySelector(
    ".background-border-l .btn-flex .btn-party"
  );
  bPartyCivil = document.querySelector(
    ".background-border-c .btn-flex .btn-party"
  );

  bPartyCivil.style.background = "black";
  bPartyLady.style.background = "black";
  bPartyDoctor.style.background = "black";
  bPartySheriff.style.background = "black";
  bPartyMafia.style.background = "black";
  bPartyDon.style.background = "black";

  bRatSheriff = document.querySelector(
    ".background-border-s .btn-flex .btn-rat"
  );
  bRatDoctor = document.querySelector(
    ".background-border-doc .btn-flex .btn-rat"
  );
  bRatLady = document.querySelector(".background-border-l .btn-flex .btn-rat");
  bRatCivil = document.querySelector(".background-border-c .btn-flex .btn-rat");

  bRatCivil.style.background = "black";
  bRatLady.style.background = "black";
  bRatDoctor.style.background = "black";
  bRatSheriff.style.background = "black";

  bInspectLady.style.background = "black";
  bInspectDoctor.style.background = "black";
  bInspectSheriff.style.background = "black";
  bInspectMafia.style.background = "black";
  bInspectDon.style.background = "black";
  bInspectCivil.style.background = "black";

  bHeallCivil.style.background = "black";
  bHeallLady.style.background = "black";
  bHeallDoctor.style.background = "black";
  bHeallSheriff.style.background = "black";
  bHeallMafia.style.background = "black";
  bHeallDon.style.background = "black";

  bKilllDon.style.background = "black";
  bKilllMafia.style.background = "black";
  bKilllSheriff.style.background = "black";
  bKilllDoctor.style.background = "black";
  bKilllLady.style.background = "black";
  bKilllCivil.style.background = "black";

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
  c3 = document.querySelector(".cross-sheriff-kill");
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
