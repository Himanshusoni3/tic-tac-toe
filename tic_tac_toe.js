const g_container = document.querySelector(".game--container");
const g_restart = document.querySelector(".game--restart");
const g_status = document.querySelector(".game--status");

let if_draw = 0;
let turn = 0;
const player1 = [];
const player2 = [];
let win = false;
const winn = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
console.log(winn.includes([1, 2, 3]));
function check(player) {
  for (let i of winn) {
    let count = 0;
    for (let j of i) {
      if (player.includes(j)) {
        count++;
        if (count == 3) {
          return true;
        }
      }
    }
  }
  return false;
}
g_container.addEventListener("click", function (e) {
  if (!win) {
    const tar = e.target;
    const val = tar.dataset.cell_index;
    if (tar.textContent != "") {
      return;
    }
    if_draw++;
    if (turn === 0) {
      player1.push(Number(val));
      tar.textContent = "0";
      if (player1.length >= 3) {
        const res = check(player1);
        if (res) {
          g_status.textContent = "player 1 wins and player 2 loses";
          win = true;
        }
      }
      turn = 1;
    } else {
      player2.push(Number(val));
      tar.textContent = "x";
      if (player2.length >= 3) {
        const res = check(player2);
        if (res) {
          g_status.textContent = "player 2 wins and player 1 loses";
          win = true;
        }
      }
      turn = 0;
    }
  }
  if (if_draw === 9) {
    g_status.textContent = "Draw";
  }
});

g_restart.addEventListener("click", function (e) {
  player1.splice(0, player1.length);
  player2.splice(0, player2.length);
  turn = 0;
  win=false;
  if_draw = 0;
  let all_cell = document.querySelectorAll(".cell");
  all_cell.forEach((e) => (e.textContent = ""));
  g_status.textContent = "";
});
