export const PAWN =  'pawn';
export const ROCK = 'rock';
export const BISHOP = 'bishop';
export const KNIGHT = 'knight';
export const QUEEN = 'queen';
export const KING = 'king';

export const ROW_SIZE = 8;
export const DESK_SIZE = 64;
export const FIRST_LINE = [ROCK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROCK ];
export const SECOND_LINE = new Array(ROW_SIZE).fill(PAWN)
export const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const CHESS_TYPES = {
  PAWN,
  ROCK,
  BISHOP,
  KNIGHT,
  QUEEN,
  KING,
}
export const COLORS = {
  BLACK:"black",
  WHITE: "white"
}

export const IMAGES = {
  [COLORS.BLACK+CHESS_TYPES.PAWN]: `images/${COLORS.BLACK}/${CHESS_TYPES.PAWN}.svg`,
  [COLORS.WHITE+CHESS_TYPES.PAWN]: `images/${COLORS.WHITE}/${CHESS_TYPES.PAWN}.svg`,
  [COLORS.BLACK+CHESS_TYPES.ROCK]: `images/${COLORS.BLACK}/${CHESS_TYPES.ROCK}.svg`,
  [COLORS.WHITE+CHESS_TYPES.ROCK]: `images/${COLORS.WHITE}/${CHESS_TYPES.ROCK}.svg`,
  [COLORS.BLACK+CHESS_TYPES.BISHOP]: `images/${COLORS.BLACK}/${CHESS_TYPES.BISHOP}.svg`,
  [COLORS.WHITE+CHESS_TYPES.BISHOP]: `images/${COLORS.WHITE}/${CHESS_TYPES.BISHOP}.svg`,
  [COLORS.BLACK+CHESS_TYPES.KNIGHT]: `images/${COLORS.BLACK}/${CHESS_TYPES.KNIGHT}.svg`,
  [COLORS.WHITE+CHESS_TYPES.KNIGHT]: `images/${COLORS.WHITE}/${CHESS_TYPES.KNIGHT}.svg`,
  [COLORS.BLACK+CHESS_TYPES.QUEEN]: `images/${COLORS.BLACK}/${CHESS_TYPES.QUEEN}.svg`,
  [COLORS.WHITE+CHESS_TYPES.QUEEN]: `images/${COLORS.WHITE}/${CHESS_TYPES.QUEEN}.svg`,
  [COLORS.BLACK+CHESS_TYPES.KING]: `images/${COLORS.BLACK}/${CHESS_TYPES.KING}.svg`,
  [COLORS.WHITE+CHESS_TYPES.KING]: `images/${COLORS.WHITE}/${CHESS_TYPES.KING}.svg`,
}

export const CELL_CLASS_NAME = 'cell';
