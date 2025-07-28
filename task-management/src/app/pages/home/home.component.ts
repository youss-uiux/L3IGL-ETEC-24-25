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

  tasks: { title: string; description: string; priority: string; dueDate: Date }[] = [
    { title: 'Task 1', description: 'Description for task 1', priority: 'High', dueDate: new Date('2024-01-15') },
    { title: 'Task 2', description: 'Description for task 2', priority: 'Medium', dueDate: new Date('2024-01-20') },
    { title: 'Task 3', description: 'Description for task 3', priority: 'Low', dueDate: new Date('2024-01-25') },
    { title: 'Task 4', description: 'Description for task 4', priority: 'High', dueDate: new Date('2024-01-30') },
    { title: 'Task 5', description: 'Description for task 5', priority: 'Medium', dueDate: new Date('2024-02-05') }
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
