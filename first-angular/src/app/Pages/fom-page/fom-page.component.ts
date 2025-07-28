import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fom-page',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './fom-page.component.html',
  styleUrl: './fom-page.component.sass'
})
export class FomPageComponent {

  valeurEntree: string = '';
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(7), Validators.required]),
    lastName: new FormControl('', [Validators.minLength(7)]),
    entreprise: new FormControl('', [Validators.minLength(7)]),
  });

  onSubmit(): void {
    if (this.profileForm.valid) {
      alert(`Form submitted: ${this.profileForm.value}`);
    } else {
      alert('Form is invalid');
    }
  }
  afficherValeur(): void {
    alert(`Valeur entrée : ${this.valeurEntree}`);
  }
  afficherNom(): void {
    alert(`
      Nom: ${this.profileForm.value.firstName}, 
      Prénom: ${this.profileForm.value.lastName}, 
      Entreprise: ${this.profileForm.value.entreprise}`);
    
  }
}
