import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-first-component',
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.sass'
})
export class FirstComponentComponent {

  stringProperty: string = "Hello, Angular!";
  numberProperty: number = 42;
}
