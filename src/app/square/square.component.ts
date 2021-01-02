import { GameService } from './../game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() color: string;
  @Input() colors: string[];
  constructor(service : GameService) {
    this.color = ''
    this.colors = []
   }
   changeColor(){
     this.color = this.colors[Math.floor(Math.random() * 10)]
   }
  ngOnInit(): void {
  }

}
