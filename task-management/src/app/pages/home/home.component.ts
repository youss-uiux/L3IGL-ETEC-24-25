import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router=inject(Router);

  createTask(): void {
    console.log('Create Task button clicked');
    this.router.navigate(['/create-task']);
  }

  detailTask():void{
    console.log('Detail Task button clicked');
    this.router.navigate(['/task-details']);
  }
}
