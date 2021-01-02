import { GameService } from './game.service';
import { SquareService } from './square.service';
import { SquareComponent } from './square/square.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SquareService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
