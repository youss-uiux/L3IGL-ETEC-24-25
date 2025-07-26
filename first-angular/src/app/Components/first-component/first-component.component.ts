import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  imports: [
    MatIconModule, 
    MatDividerModule, 
    MatButtonModule,
    CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.sass'
})
export class FirstComponentComponent {

  stringProperty: string = "Hello, Angular!";
  numberProperty: number = 12;

  tableau: string[] = ["Angular", "React", "Vue", "Svelte", "Ember"];

  affiche():void{
    alert(`String: ${this.stringProperty}, Number: ${this.numberProperty}`);
  }
}
