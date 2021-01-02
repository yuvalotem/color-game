import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  colors = ['red', 'yellow', 'green', 'blue', 'brown', 'grey', 'black', 'purple', 'pink']
  constructor() { }
  getColors(){
      return this.colors
  }
}
