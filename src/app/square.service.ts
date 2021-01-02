import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SquareService {
  colors = ['red', 'yellow', 'green']
  constructor() { }
  changeColor(){
      return this.colors
  }
}
