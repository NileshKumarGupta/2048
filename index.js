const simulateButton = document.querySelector("#simulateGame");
const moveDisplay = document.querySelector("#nextMove");
const sumDisplay = document.querySelector("#curSum");
// color dictionary
let clrdict = {};
clrdict[0] = ["black", "white"];
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

// initialize grid
// store the state of grid as global variable
let grid = [];
let backup = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

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

addTile();
addTile();

// somehow show the moves taken

simulateButton.addEventListener("click", () => {
  if(sumTiles() > 8){
    sumDisplay.style.display = "block";
    sumDisplay.textContent = "Disabled since current sum: " + sumTiles() + " is greater than 8";
    setTimeout(() => {
      sumDisplay.style.display = "none";
    }, 1500)
    return;
  }

  const leftkey = new KeyboardEvent('keydown', {code: "KeyA"});
  const rightkey = new KeyboardEvent('keydown', {code: "KeyD"});
  const upkey = new KeyboardEvent('keydown', {code: "KeyW"});
  const downkey = new KeyboardEvent('keydown', {code: "KeyS"});
  const undokey = new KeyboardEvent('keydown', {code: "KeyU"});

  moveDisplay.style.display = "block";
  sumDisplay.style.display = "block";
  sumDisplay.textContent = "Current Sum: " + sumTiles();

  let move = parseInt(Math.random() * 4);
  switch(move){
    case 0:
      moveDisplay.textContent = "Current Move: Left"
      break;
    case 1:
      moveDisplay.textContent = "Current Move: Right"
      break;
    case 2:
      moveDisplay.textContent = "Current Move: Up"
      break;
    case 3:
      moveDisplay.textContent = "Current Move: Down"
      break;
  }

  const simulate = setInterval(() => {
    // make a move

    let sum = sumTiles();
    if(sum > 8){
      moveDisplay.textContent = "Current Move: Undo"
      document.dispatchEvent(undokey);
      sumDisplay.textContent = "Current Sum: " + sumTiles();
      return;
    }
    else if(sum == 8){
      clearInterval(simulate);
      document.querySelector("#gameContainer").style.display = "none";
      document.querySelector("#won").style.display = "block";
      simulateButton.textContent = "Restart"
      simulateButton.addEventListener("click", () => location.reload())
      return;
    }

    console.log(move)
    switch (move) {
      case 0:
        document.dispatchEvent(leftkey);
        break;
      case 1:
        document.dispatchEvent(rightkey);
        break;
      case 2:
        document.dispatchEvent(upkey);
        break;
      case 3:
        document.dispatchEvent(downkey);
        break;
    }


    sumDisplay.textContent = "Current Sum: " + sumTiles();

    move = parseInt(Math.random() * 4);
    switch(move){
      case 0:
        moveDisplay.textContent = "Current Move: Left"
        break;
      case 1:
        moveDisplay.textContent = "Current Move: Right"
        break;
      case 2:
        moveDisplay.textContent = "Current Move: Up"
        break;
      case 3:
        moveDisplay.textContent = "Current Move: Down"
        break;
    }

  }, 1500);

})

// event listener for key presses
document.addEventListener("keydown", (event) => {
  if (event.code == "KeyW" || event.code == "ArrowUp") {
    backupGrid();
    moveUp();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyA" || event.code == "ArrowLeft") {
    backupGrid();
    moveLeft();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyD" || event.code == "ArrowRight") {
    backupGrid();
    moveRight();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyS" || event.code == "ArrowDown") {
    backupGrid();
    moveDown();
    if (!gridEmpty()) return;
    addTile();
    checkState();
  }
  if (event.code == "KeyU"){
    for(let r = 0; r < 4; r++){
      for(let c = 0; c < 4; c++){

        let temp = grid[r][c];
        grid[r][c] = backup[r][c];
        backup[r][c] = temp;

      }
    }
    for(let r = 0;  r < 4; r++){
      for(let c = 0; c < 4; c++){
        let numtext = grid[r][c];
        let block = document.querySelector(
          `[aria-rowindex="${r}"][aria-colindex="${c}"]`
        ).firstChild

        block.style.backgroundColor = clrdict[numtext][0];
        block.style.color = clrdict[numtext][1];
        if(numtext != 0)
          block.textContent = numtext.toString();
        else
          block.textContent = ""
      }
    }
  }

});
