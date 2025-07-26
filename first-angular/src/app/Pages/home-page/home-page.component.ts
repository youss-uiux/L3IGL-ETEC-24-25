import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
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

}
export default HomePageComponent;
