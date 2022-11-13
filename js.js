// function kill() {
//   alert("Mafia killed personage");
// }
function kill() {
  let firstBlock = document.querySelector(".border-d");
  //   second = document.querySelector(".border-d");
  // second = document.querySelector( "div:nth-of-type(2)" ),
  // third = document.querySelector( "div:last-of-type" );

  firstBlock.style.display = "block";
  //   second.style.background = "red";
  // second.style.color = "green";
  // third.style.color = "blue";
}
function killBackground() {
  let firstBlock = document.querySelector(".border");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScore() {
  let firstBlock = document.querySelector(".k-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function heal() {
  let firstBlock = document.querySelector(".border-d");
  //   second = document.querySelector(".border-d");

  firstBlock.style.display = "none";
  //   second.style.background = "transparent";
}
function healBackground() {
  let firstBlock = document.querySelector(".border");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScore() {
  let firstBlock = document.querySelector(".h-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackground() {
  let firstBlock = document.querySelector(".border");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}

function inspectScore() {
  let firstBlock = document.querySelector(".i-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreBinoculars() {
  let firstBlock = document.querySelector(".found-inspect-don-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.display = "block";
}
function partyBackground() {
  let firstBlock = document.querySelector(".border");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScore() {
  let firstBlock = document.querySelector(".p-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackground() {
  let firstBlock = document.querySelector(".border");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratScore() {
  let firstBlock = document.querySelector(".i-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}

// function killMaf() {
//   let firstBlock = document.querySelector(".border-d");
//   second = document.querySelector(".border-d");
//   (second = document.querySelector("div:nth-of-type(2)")),
//     (third = document.querySelector("div:last-of-type"));

//   firstBlock.style.display = "block";
//   second.style.background = "red";
//   second.style.color = "green";
//   third.style.color = "blue";
// }

// Block for Mafia
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function killBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScoreMaf() {
  let firstBlock = document.querySelector(".k-score-m");
  //   second = document.querySelector(".k-score:nth-of-type(2)");

  firstBlock.style.background = "red";
  //   second.style.background = "green";
}
function healMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  //   second = document.querySelector(".border-d");

  firstBlock.style.display = "none";
  //   second.style.background = "transparent";
}
function healBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScoreMaf() {
  let firstBlock = document.querySelector(".h-score-m");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreMaf() {
  let firstBlock = document.querySelector(".i-score-m");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreGunMafia() {
  let firstBlock = document.querySelector(".found-kill-don-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.display = "block";
}
function inspectScoreBinocularsMafia() {
  let firstBlock = document.querySelector(".found-inspect-mafia-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.display = "block";
}
function partyBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScoreMaf() {
  let firstBlock = document.querySelector(".p-score-m");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackgroundMaf() {
  let firstBlock = document.querySelector(".border:nth-of-type(2)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratScorMaf() {
  let firstBlock = document.querySelector(".i-score-m");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}

// Block for Sherif
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killBackgroundSher() {
  let firstBlock = document.querySelector(".border:nth-of-type(3)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScoreSher() {
  let firstBlock = document.querySelector(".k-score-s");
  //   second = document.querySelector(".k-score:nth-of-type(2)");

  firstBlock.style.background = "red";
  //   second.style.background = "green";
}
// function healSher() {
//   let firstBlock = document.querySelector(".border:nth-of-type(3)");
//     second = document.querySelector(".border-d");

//   firstBlock.style.display = "none";
//     second.style.background = "transparent";
// }
function healBackgroundSher() {
  let firstBlock = document.querySelector(".border:nth-of-type(3)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScoreSher() {
  let firstBlock = document.querySelector(".h-score-s");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackgroundSher() {
  let firstBlock = document.querySelector(".border:nth-of-type(3)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreSher() {
  let firstBlock = document.querySelector(".i-score-s");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function partyBackgroundSher() {
  let firstBlock = document.querySelector(".border:nth-of-type(3)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScoreSher() {
  let firstBlock = document.querySelector(".p-score-s");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackgroundSher() {
  let firstBlock = document.querySelector(".border:nth-of-type(3)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratBackgroundSherRose() {
  let firstBlock = document.querySelector(".found-rat-score");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.display = "block";
}
function ratScoreSher() {
  let firstBlock = document.querySelector(".r-score-s");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}

// Block for doctor
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killBackgroundDoc() {
  let firstBlock = document.querySelector(".border:nth-of-type(4)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScoreDoc() {
  let firstBlock = document.querySelector(".k-score-d");
  //   second = document.querySelector(".k-score:nth-of-type(2)");

  firstBlock.style.background = "red";
  //   second.style.background = "green";
}
// function healSher() {
//   let firstBlock = document.querySelector(".border:nth-of-type(3)");
//     second = document.querySelector(".border-d");

//   firstBlock.style.display = "none";
//     second.style.background = "transparent";
// }
function healBackgroundDoc() {
  let firstBlock = document.querySelector(".border:nth-of-type(4)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScoreDoc() {
  let firstBlock = document.querySelector(".h-score-d");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackgroundDoc() {
  let firstBlock = document.querySelector(".border:nth-of-type(4)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreDoc() {
  let firstBlock = document.querySelector(".i-score-d");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function partyBackgroundDoc() {
  let firstBlock = document.querySelector(".border:nth-of-type(4)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScoreDoc() {
  let firstBlock = document.querySelector(".p-score-d");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackgroundDoc() {
  let firstBlock = document.querySelector(".border:nth-of-type(4)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratScoreDoc() {
  let firstBlock = document.querySelector(".r-score-d");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}

// Block for lady
///
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function killBackgroundLad() {
  let firstBlock = document.querySelector(".border:nth-of-type(5)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScoreLad() {
  let firstBlock = document.querySelector(".k-score-l");
  //   second = document.querySelector(".k-score:nth-of-type(2)");

  firstBlock.style.background = "red";
  //   second.style.background = "green";
}
// function healSher() {
//   let firstBlock = document.querySelector(".border:nth-of-type(3)");
//     second = document.querySelector(".border-d");

//   firstBlock.style.display = "none";
//     second.style.background = "transparent";
// }
function healBackgroundLad() {
  let firstBlock = document.querySelector(".border:nth-of-type(5)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScoreLad() {
  let firstBlock = document.querySelector(".h-score-l");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackgroundLad() {
  let firstBlock = document.querySelector(".border:nth-of-type(5)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreLad() {
  let firstBlock = document.querySelector(".i-score-l");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function partyBackgroundLad() {
  let firstBlock = document.querySelector(".border:nth-of-type(5)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScoreLad() {
  let firstBlock = document.querySelector(".p-score-l");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackgroundLad() {
  let firstBlock = document.querySelector(".border:nth-of-type(5)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratScoreLad() {
  let firstBlock = document.querySelector(".r-score-l");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}

// Block for civil
//
//

function killBackgroundCiv() {
  let firstBlock = document.querySelector(".border:nth-of-type(6)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "red";
}
function killScoreCiv() {
  let firstBlock = document.querySelector(".k-score-c");
  //   second = document.querySelector(".k-score:nth-of-type(2)");

  firstBlock.style.background = "red";
  //   second.style.background = "green";
}
// function healSher() {
//   let firstBlock = document.querySelector(".border:nth-of-type(3)");
//     second = document.querySelector(".border-d");

//   firstBlock.style.display = "none";
//     second.style.background = "transparent";
// }
function healBackgroundCiv() {
  let firstBlock = document.querySelector(".border:nth-of-type(6)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}
function healScoreCiv() {
  let firstBlock = document.querySelector(".h-score-c");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "green";
}

function inspectBackgroundCiv() {
  let firstBlock = document.querySelector(".border:nth-of-type(6)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function inspectScoreCiv() {
  let firstBlock = document.querySelector(".i-score-c");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "blue";
}
function partyBackgroundCiv() {
  let firstBlock = document.querySelector(".border:nth-of-type(6)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function partyScoreCiv() {
  let firstBlock = document.querySelector(".p-score-c");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "yellow";
}
function ratBackgroundCiv() {
  let firstBlock = document.querySelector(".border:nth-of-type(6)");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
function ratScoreCiv() {
  let firstBlock = document.querySelector(".r-score-c");
  // second = document.querySelector(".border-d");

  // firstBlock.style.display = "none";
  firstBlock.style.background = "grey";
}
