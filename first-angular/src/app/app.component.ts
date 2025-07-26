import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./Components/first-component/first-component.component";
import { HomePageComponent } from './Pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponentComponent,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'first-angular';
}
