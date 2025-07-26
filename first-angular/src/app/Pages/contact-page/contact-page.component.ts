import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.sass'
})
export class ContactPageComponent {

  router=inject(Router);

  navigatToHome(): void {
    // Logic to navigate to the home page
    console.log("Navigating to home page...");
    this.router.navigate(['home']);
    // This would typically use a router service, e.g., this.router.navigate(['home']);
  }

  showValue():void{
    alert(`Name: ${this.name.value}`);
  }

  name = new FormControl('');

}
export default ContactPageComponent;
