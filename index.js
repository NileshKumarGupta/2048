// color dictionary
clrdict = {};
clrdict[2] = ["#00ffff", "black"];
clrdict[4] = ["#099fff", "black"];
clrdict[8] = ["#0062ff", "black"];
clrdict[16] = ["#cc00ff", "black"];
clrdict[32] = ["#0033ff", "white"];
clrdict[64] = ["#9d00ff", "white"];
clrdict[128] = ["#9900ff", "white"];
clrdict[256] = ["#fe0dd0", "white"];
clrdict[512] = ["#ff3300", "white"];
clrdict[1024] = ["#ed1c03", "white"];
clrdict[2048] = ["#ff2281", "white"];
clrdict[NaN] = ["black", "black"];

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
      if (grid[i][j] == 32) {
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
    console.log("Win");
  } else if (!movePossible) {
    console.log("Lost");
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
