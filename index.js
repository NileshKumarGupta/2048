// color dictionary
clrdict = {};
clrdict[2] = ["#ffba08", "black"];
clrdict[4] = ["#faa307", "black"];
clrdict[8] = ["#e0aaff", "black"];
clrdict[16] = ["#a2d2ff", "black"];
clrdict[32] = ["#bde0fe", "black"];
clrdict[64] = ["#ffafcc", "black"];
clrdict[128] = ["#ffc8dd", "black"];
clrdict[256] = ["#80ffdb", "black"];
clrdict[512] = ["#72efdd", "black"];
clrdict[1024] = ["#f6f4d2", "black"];
clrdict[2048] = ["#d4e098", "black"];
clrdict[NaN] = ["black", "white"];

// store the state of grid as global variable
let grid = [];

// get state of grid
for (let i = 0; i < 4; i++) {
  let row = [];
  for (let j = 0; j < 4; j++) {
    let numtext = document.querySelector(
      `[aria-rowindex="${i}"][aria-colindex="${j}"]`
    ).textContent;

    numtext = parseInt(numtext);

    document.querySelector(
      `[aria-rowindex="${i}"][aria-colindex="${j}"]`
    ).firstChild.style.backgroundColor = clrdict[numtext][0];

    document.querySelector(
      `[aria-rowindex="${i}"][aria-colindex="${j}"]`
    ).firstChild.style.color = clrdict[numtext][1];

    if (isNaN(numtext)) numtext = 0;

    row.push(numtext);
  }
  grid.push(row);
}

console.log(grid);

// check if a tile is empty
function gridEmpty() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] == 0) {
        return true;
      }
    }
  }
  return false;
}

// check current state of game
function checkState() {
  let gamewon = false;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] == 128) {
        gamewon = true;
        break;
      }
    }
  }

  if (!gamewon && gridEmpty()) return;

  let movePossible = false;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i - 1 > 0 && grid[i - 1][j] == grid[i][j]) {
        movePossible = true;
        break;
      }
      if (i + 1 < 4 && grid[i + 1][j] == grid[i][j]) {
        movePossible = true;
        break;
      }
      if (j - 1 > 0 && grid[i][j - 1] == grid[i][j]) {
        movePossible = true;
        break;
      }
      if (j + 1 < 4 && grid[i][j + 1] == grid[i][j]) {
        movePossible = true;
        break;
      }
    }
  }

  if (!gamewon && movePossible) return;

  if (gamewon) {
    document.querySelector("#gameContainer").style.display = "none";
    document.querySelector("#won").style.display = "block";
  } else if (!movePossible) {
    document.querySelector("#gameContainer").style.display = "none";
    document.querySelector("#lost").style.display = "block";
  }

  grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  document.querySelectorAll(".numberBlock").forEach((ele) => {
    ele.textContent = "";
  });
}

// event listener for key presses
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyW" || event.code == "ArrowUp") {
    moveUp();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyA" || event.code == "ArrowLeft") {
    moveLeft();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyD" || event.code == "ArrowRight") {
    moveRight();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyS" || event.code == "ArrowDown") {
    moveDown();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
});
