let currentPlayer = 'X';
let cells = Array.from(document.querySelectorAll('.cell'));
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(cellIndex) {
  if (gameActive && !cells[cellIndex].textContent) {
    cells[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      gameActive = false;
      document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
    } else if (checkDraw()) {
      gameActive = false;
      document.getElementById('result').textContent = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return cells.every(cell => {
    return cell.textContent !== '';
  });
}

function resetGame() {
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
  });
  gameActive = true;
  document.getElementById('result').textContent = '';
}
