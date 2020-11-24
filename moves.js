function moveLeft() {
  // compress
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] != 0) {
        let free_pos = -1;

        // find the free position if any
        for (let i = 0; i < col; i++) {
          if (grid[row][i] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos < 0) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let leftblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        ).firstChild;

        console.log(col, free_pos);

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        leftblock.textContent = curnum.toString();
        currblock.textContent = "";
        
        // update colors
        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        leftblock.style.backgroundColor = clrdict[curnum][0]
        leftblock.style.color = clrdict[curnum][1];

      }
    }
  }

  // merge
  for (let row = 0; row < 4; row++) {
    for (let col = 1; col < 4; col++) {
      if (grid[row][col] != 0) {
        if (grid[row][col - 1] == grid[row][col]) {
          let currblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col}"]`
          ).firstChild;
          let leftblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col - 1}"]`
          ).firstChild;
          let curnum = grid[row][col];
          console.log(curnum);
          curnum *= 2;
          grid[row][col - 1] = curnum;
          grid[row][col] = 0;
          leftblock.textContent = grid[row][col - 1].toString();
          currblock.textContent = "";

          // update colors
          currblock.style.backgroundColor = clrdict[NaN][0];
          currblock.style.color = clrdict[NaN][1];
          leftblock.style.backgroundColor = clrdict[curnum][0]
          leftblock.style.color = clrdict[curnum][1];
        }
      }
    }
  }

  // compress
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] != 0) {
        let free_pos = -1;

        // find the free position if any
        for (let i = 0; i < col; i++) {
          if (grid[row][i] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos < 0) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let leftblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        leftblock.textContent = curnum.toString();
        currblock.textContent = "";

        // update colors
        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        leftblock.style.backgroundColor = clrdict[curnum][0]
        leftblock.style.color = clrdict[curnum][1];
      }
    }
  }
}

function moveRight() {
  // compress
  for (let row = 0; row < 4; row++) {
    for (let col = 3; col >= 0; col--) {
      if (grid[row][col] != 0) {
        let free_pos = 4;

        // find the free position if any
        for (let i = 3; i > col; i--) {
          if (grid[row][i] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos > 3) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let rightblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        rightblock.textContent = curnum.toString();
        currblock.textContent = "";

        // update colors
        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        rightblock.style.backgroundColor = clrdict[curnum][0]
        rightblock.style.color = clrdict[curnum][1];
      }
    }
  }

  // merge
  for (let row = 0; row < 4; row++) {
    for (let col = 2; col >= 0; col--) {
      if (grid[row][col] != 0) {
        if (grid[row][col + 1] == grid[row][col]) {
          let currblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col}"]`
          ).firstChild;
          let rightblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col + 1}"]`
          ).firstChild;
          let curnum = 2 * grid[row][col];
          grid[row][col + 1] = curnum;
          grid[row][col] = 0;
          rightblock.textContent = grid[row][col + 1].toString();
          currblock.textContent = "";

          currblock.style.backgroundColor = clrdict[NaN][0];
          currblock.style.color = clrdict[NaN][1];
          rightblock.style.backgroundColor = clrdict[curnum][0]
          rightblock.style.color = clrdict[curnum][1];
        }
      }
    }
  }

  // compress
  for (let row = 0; row < 4; row++) {
    for (let col = 3; col >= 0; col--) {
      if (grid[row][col] != 0) {
        let free_pos = 4;

        // find the free position if any
        for (let i = 3; i > col; i--) {
          if (grid[row][i] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos > 3) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let rightblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        rightblock.textContent = curnum.toString();
        currblock.textContent = "";

        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        rightblock.style.backgroundColor = clrdict[curnum][0]
        rightblock.style.color = clrdict[curnum][1];
      }
    }
  }
}

function moveUp() {
  // compress
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (grid[row][col] != 0) {
        let free_pos = -1;

        // find the free position if any
        for (let i = 0; i < row; i++) {
          if (grid[i][col] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos < 0) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let upblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        upblock.textContent = curnum.toString();
        currblock.textContent = "";

        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        upblock.style.backgroundColor = clrdict[curnum][0]
        upblock.style.color = clrdict[curnum][1];
      }
    }
  }

  // merge
  for (let col = 0; col < 4; col++) {
    for (let row = 1; row < 4; row++) {
      if (grid[row][col] != 0) {
        if (grid[row - 1][col] == grid[row][col]) {
          let currblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col}"]`
          ).firstChild;
          let upblock = document.querySelector(
            `[aria-rowindex="${row - 1}"][aria-colindex="${col}"]`
          ).firstChild;
          let curnum = 2 * grid[row][col];
          grid[row - 1][col] = curnum;
          grid[row][col] = 0;
          upblock.textContent = grid[row - 1][col].toString();
          currblock.textContent = "";

          currblock.style.backgroundColor = clrdict[NaN][0];
          currblock.style.color = clrdict[NaN][1];
          upblock.style.backgroundColor = clrdict[curnum][0]
          upblock.style.color = clrdict[curnum][1];
        }
      }
    }
  }

  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (grid[row][col] != 0) {
        let free_pos = -1;

        // find the free position if any
        for (let i = 0; i < row; i++) {
          if (grid[i][col] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos < 0) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let upblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        upblock.textContent = curnum.toString();
        currblock.textContent = "";

        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        upblock.style.backgroundColor = clrdict[curnum][0]
        upblock.style.color = clrdict[curnum][1];

      }
    }
  }
}

function moveDown() {
  // compress
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (grid[row][col] != 0) {
        let free_pos = 4;

        // find the free position if any
        for (let i = 3; i > row; i--) {
          if (grid[i][col] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos > 3) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let downblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        downblock.textContent = curnum.toString();
        currblock.textContent = "";

        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        downblock.style.backgroundColor = clrdict[curnum][0]
        downblock.style.color = clrdict[curnum][1];
      }
    }
  }

  // merge
  for (let col = 0; col < 4; col++) {
    for (let row = 2; row >= 0; row--) {
      if (grid[row][col] != 0) {
        if (grid[row + 1][col] == grid[row][col]) {
          let currblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col}"]`
          ).firstChild;
          let downblock = document.querySelector(
            `[aria-rowindex="${row + 1}"][aria-colindex="${col}"]`
          ).firstChild;
          let curnum = 2 * grid[row][col];
          grid[row + 1][col] = curnum;
          grid[row][col] = 0;
          downblock.textContent = grid[row + 1][col].toString();
          currblock.textContent = "";

          currblock.style.backgroundColor = clrdict[NaN][0];
          currblock.style.color = clrdict[NaN][1];
          downblock.style.backgroundColor = clrdict[curnum][0]
          downblock.style.color = clrdict[curnum][1];
        }
      }
    }
  }

  // compress
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row >= 0; row--) {
      if (grid[row][col] != 0) {
        let free_pos = 4;

        // find the free position if any
        for (let i = 3; i > row; i--) {
          if (grid[i][col] == 0) {
            free_pos = i;
            break;
          }
        }

        if (free_pos > 3) continue;

        // swap contents of block and grid

        let currblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${col}"]`
        ).firstChild;
        let downblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        ).firstChild;

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        downblock.textContent = curnum.toString();
        currblock.textContent = "";

        currblock.style.backgroundColor = clrdict[NaN][0];
        currblock.style.color = clrdict[NaN][1];
        downblock.style.backgroundColor = clrdict[curnum][0]
        downblock.style.color = clrdict[curnum][1];
      }
    }
  }
}

function addTile() {
  // pick a value between 2 and 4
  let insertVal = Math.random();
  if (insertVal < 0.8) insertVal = 2;
  else insertVal = 4;

  // pick a random row and col
  let prod = parseInt(Math.random() * 16);
  let row = prod % 4;
  let col = Math.floor(prod / 4);
  let direction = Math.random();


  if (direction < 0.5) {
    while (grid[row][col] != 0) {
      prod = (prod + 1) % 16;
      row = prod % 4;
      col = Math.floor(prod / 4);
    }
  }
  else{
    while (grid[row][col] != 0) {
      prod = (prod - 1) % 16;
      if(prod < 0)
        prod += 16;
      row = prod % 4;
      col = Math.floor(prod / 4);
    }
  }


  grid[row][col] = insertVal;
  let emptyblock = document.querySelector(
    `[aria-rowindex="${row}"][aria-colindex="${col}"]`
  ).firstChild
  emptyblock.textContent = insertVal.toString();
  emptyblock.style.backgroundColor = clrdict[insertVal][0];
  emptyblock.style.color = clrdict[insertVal][1];

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
      if (grid[i][j] == 2048) {
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
