import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {
  router=inject(Router);

  navigateToContact(): void {
    // Logic to navigate to the contact page
    console.log("Navigating to contact page...");
    this.router.navigate(['contact']);
  }

  goToFormPage():void {
    // Logic to navigate to the form page
    console.log("Navigating to form page...");
    this.router.navigate(['form']);
  }

}
export default HomePageComponent;
