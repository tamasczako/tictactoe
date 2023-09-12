import { Injectable } from '@angular/core';
import { CellState } from 'src/enums/CellState.enum';
import { Player } from 'src/enums/Player.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public readonly BOARD_SIZE = 3;
  public board!: CellState[];
  activePlayer!: Player;
  winnerPlayer: Player | null = null;
  isTheGameOver = false;

  constructor() {
    this.startGame();
  }

  public startGame() {
    this.initBoard();
    this.activePlayer = Player.X;
    this.isTheGameOver = false;
  }

  private initBoard() {
    this.board = [];

    for (var i: number = 0; i < (this.BOARD_SIZE * this.BOARD_SIZE); i++) {
      this.board[i] = CellState.EMPTY;
    }
  }

  public updateBoard(cellIndex: number) {
    this.board[cellIndex] = this.activePlayer === Player.X ? CellState.X : CellState.O;

    const hasWinner = this.checkWinner();

    if (hasWinner) {
      this.winnerPlayer = this.activePlayer;
      this.isTheGameOver = true;
    } else {
      this.activePlayer = this.activePlayer === Player.X ? Player.O : Player.X;
      this.isTheGameOver = this.board.findIndex((item: CellState) => item === CellState.EMPTY) === -1;
    }
  }

  private checkWinner() {
    return this.checkRows() || this.checkColumns() || this.checkDiagonals();
  }

  private checkColumns(): boolean {
    const resultArray: number[] = [0, 0, 0];

    for (let i = 0; i < this.board.length; i++) {
      if (i % this.BOARD_SIZE === 0) {
        resultArray[0] += this.board[i];
      }
      if (i % this.BOARD_SIZE === 1) {
        resultArray[1] += this.board[i];
      }
      if (i % this.BOARD_SIZE === 2) {
        resultArray[2] += this.board[i];
      }
    }

    return resultArray.some((item: number) => item === 3 || item === 30);
  }

  private checkRows(): boolean {
    const resultArray: number[] = [0, 0, 0];

    for (let i = 0; i < this.board.length; i++) {
      if (i < this.BOARD_SIZE) {
        resultArray[0] += this.board[i];
      }
      if (i >= this.BOARD_SIZE && i < this.BOARD_SIZE * 2) {
        resultArray[1] += this.board[i];
      }
      if (i >= this.BOARD_SIZE * 2 && i < this.BOARD_SIZE * 3) {
        resultArray[2] += this.board[i];
      }
    }

    return resultArray.some((item: number) => item === 3 || item === 30);
  }

  private checkDiagonals(): boolean {
    const resultArray: number[] = [0, 0];

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      resultArray[0] += this.board[i * (this.BOARD_SIZE + 1)];
    }

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      resultArray[1] += this.board[2 + (i * (this.BOARD_SIZE - 1))];
    }

    return resultArray.some((item: number) => item === 3 || item === 30);
  }
}
