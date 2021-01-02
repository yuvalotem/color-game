import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  colors
  constructor(service: GameService) {
    this.colors = service.getColors()
  }

  ngOnInit(): void {
  }

}
