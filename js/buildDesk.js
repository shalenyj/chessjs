import { ROW_SIZE, LETTERS, CELL_CLASS_NAME, COLORS,
  FIRST_LINE,SECOND_LINE, IMAGES } from "./cons.js";

const ACTIVE_CELL_CLASS_NAME = 'with-chess';

const isOdd = index => index % 2 === 0;

const getCellColor = (row, col) => {
  const isOddRow = isOdd(row);
  const isOddCol = isOdd(col);

  if(isOddCol){
    return isOddRow ? COLORS.BLACK : COLORS.WHITE
  }
  return isOddRow ? COLORS.WHITE : COLORS.BLACK
}

const buildCellIndex = (id) => {
  const cellIndex = document.createElement('span')
  cellIndex.innerText = id;
  cellIndex.classList.add('cell-index');
  return cellIndex
}

const buildCell = (row, col) => {
  const cell = document.createElement('div')
  const letter = LETTERS[col];
  const color = getCellColor(row, col)
  
  cell.id = `${letter}${row+1}`
  cell.classList.add(CELL_CLASS_NAME)
  cell.classList.add(color)
  cell.title = cell.id

  cell.append(buildCellIndex(cell.id))

  return cell
}

const getChessForRow = row => {
  switch(row){
    case 0:
      return { color: COLORS.WHITE, line: FIRST_LINE};
    case 1:
      return { color: COLORS.WHITE, line: SECOND_LINE};
    case 6:
      return { color: COLORS.BLACK, line: SECOND_LINE};
    case 7:
      return { color: COLORS.BLACK, line: FIRST_LINE};
    default: 
      return {}
  }
  
}

const buildImage = (type, color) => {
  const image = document.createElement('img');
  image.src = IMAGES[color+type]
  return image;
}

const fillCell = (cell, index, { line, color }) => {
  const type = line[index];
  const image = buildImage(type, color)
  cell.append(image)
  cell.classList.add(ACTIVE_CELL_CLASS_NAME)
}

export default () => {
  const desk = document.getElementById('desk');
  for(let row = 0; row < ROW_SIZE; row++){
    const rowChess = getChessForRow(row)
    
    for (let col = 0; col < ROW_SIZE; col++){
      const cell = buildCell(row, col)
      if(rowChess.color){
        fillCell(cell, col, rowChess)
      }
      desk.append(cell)
    }
  }

}


