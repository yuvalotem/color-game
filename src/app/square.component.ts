import { SquareService } from './square.service';
import { Component } from '@angular/core';

@Component({
    selector: 'square',
    template:`<div>{{ title }} {{ colors.length }} colors:</div>
            <ol>
                <li *ngFor="let color of colors">
                    {{ color }}
                </li>
            </ol>
    `
})
export class SquareComponent{
    colors
    constructor(service: SquareService){
        this.colors = service.getColors()
    }
    title = `Welcome there are`
}