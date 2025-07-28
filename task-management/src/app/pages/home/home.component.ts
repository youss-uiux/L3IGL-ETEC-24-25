import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router=inject(Router);

  tasks: { title: string; description: string }[] = [
    { title: 'Task 1', description: 'Description for task 1' },
    { title: 'Task 2', description: 'Description for task 2' },
    { title: 'Task 3', description: 'Description for task 3' },
    { title: 'Task 4', description: 'Description for task 4' },
    { title: 'Task 5', description: 'Description for task 5' }
  ];
  createTask(): void {
    console.log('Create Task button clicked');
    this.router.navigate(['/create-task']);
  }

  detailTask():void{
    console.log('Detail Task button clicked');
    this.router.navigate(['/task-details']);
  }
}
