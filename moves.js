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

        console.log(currblock, leftblock);

        /*
        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        leftblock.textContent = curnum.toString();
        currblock.textContent = "";

        console.log(leftblock.textContent, curblock.textContent);
        */
      }
    }
  }

  /*
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
          grid[row][col - 1] = 2 * grid[row][col];
          grid[row][col] = 0;
          leftblock.textContent = grid[row][col - 1].toString();
          currblock.textContent = "";
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
      }
    }
  }
  */
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
        );
        let rightblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        );

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        rightblock.textContent = curnum.toString();
        currblock.textContent = "";
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
          );
          let leftblock = document.querySelector(
            `[aria-rowindex="${row}"][aria-colindex="${col + 1}"]`
          );
          grid[row][col + 1] = 2 * grid[row][col];
          grid[row][col] = 0;
          leftblock.textContent = grid[row][col + 1].toString();
          currblock.textContent = "";
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
        );
        let rightblock = document.querySelector(
          `[aria-rowindex="${row}"][aria-colindex="${free_pos}"]`
        );

        let curnum = grid[row][col];
        grid[row][free_pos] = curnum;
        grid[row][col] = 0;
        rightblock.textContent = curnum.toString();
        currblock.textContent = "";
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
        );
        let upblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        );

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        upblock.textContent = curnum.toString();
        currblock.textContent = "";
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
          );
          let upblock = document.querySelector(
            `[aria-rowindex="${row - 1}"][aria-colindex="${col}"]`
          );
          grid[row - 1][col] = 2 * grid[row][col];
          grid[row][col] = 0;
          upblock.textContent = grid[row - 1][col].toString();
          currblock.textContent = "";
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
        );
        let upblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        );

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        upblock.textContent = curnum.toString();
        currblock.textContent = "";
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
        );
        let downblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        );

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        downblock.textContent = curnum.toString();
        currblock.textContent = "";
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
          );
          let upblock = document.querySelector(
            `[aria-rowindex="${row + 1}"][aria-colindex="${col}"]`
          );
          grid[row + 1][col] = 2 * grid[row][col];
          grid[row][col] = 0;
          upblock.textContent = grid[row + 1][col].toString();
          currblock.textContent = "";
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
        );
        let downblock = document.querySelector(
          `[aria-rowindex="${free_pos}"][aria-colindex="${col}"]`
        );

        let curnum = grid[row][col];
        grid[free_pos][col] = curnum;
        grid[row][col] = 0;
        downblock.textContent = curnum.toString();
        currblock.textContent = "";
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
  document.querySelector(
    `[aria-rowindex="${row}"][aria-colindex="${col}"]`
  ).textContent = insertVal.toString();
}
