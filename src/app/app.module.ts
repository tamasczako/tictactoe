import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedGameListComponent } from '../pages/saved-game-list/saved-game-list.component';
import { GameComponent } from '../pages/game/game.component';
import { BoardComponent } from '../components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SavedGameListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
