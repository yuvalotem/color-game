import { GameService } from './../game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  createColor
  colors: string[];
  @Input() color: string;
  @Input() id: string;
  constructor(private service : GameService) {
    this.color = ''
    this.id = ''
    this.colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6']
    this.createColor = service.createColor
   }
   ngOnInit(): void {
  }
  changeColor(e:Event){
    this.createColor((<HTMLTextAreaElement>e.target).id, this.colors[Math.floor(Math.random() * 10)])
  }

}
