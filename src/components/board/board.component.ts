import { Component, OnInit } from '@angular/core';
import { CellState } from 'src/enums/CellState.enum';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.startGame();
  }

  updateBoard(cellIndex: number) {
    if (this.gameService.winnerPlayer === null && this.gameService.board[cellIndex] === 0) {
      this.gameService.updateBoard(cellIndex);
    }
  }

  getIcon(cell: CellState): string {
    let cellSymbol = '';
    if (CellState.X === cell) cellSymbol = 'X';
    if (CellState.O === cell) cellSymbol = 'O';

    return cellSymbol;
  }

  getEndLabel() {
    let endLabel = `Draw`;

    if (this.gameService.winnerPlayer) {
      endLabel = `The winner is ${this.gameService.winnerPlayer}`;
    }

    return endLabel;
  }
}
