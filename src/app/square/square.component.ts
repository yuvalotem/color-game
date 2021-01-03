import { GameService } from './../game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  createColor
  @Input() color: string;
  // @Input() colors: string[];
  colors: string[];
  @Input() id: string;
  constructor(private service : GameService) {
    this.color = ''
    this.id = ''
    this.colors = ['yellow', 'blue', 'pink', 'brown', 'black', 'red', 'grey', 'purple', 'orange']
    this.createColor = service.createColor
   }
   ngOnInit(): void {
  }
  changeColor(e:Event){
    // console.log(e.target.id);
    // this.color = this.colors[Math.floor(Math.random() * 10)]
    this.createColor((<HTMLTextAreaElement>e.target).id, this.colors[Math.floor(Math.random() * 10)])
    // this.service.createColor(this.color)
  }

}
