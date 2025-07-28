import { Component, inject } from '@angular/core';
import { FormsModule,FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  taskService=inject(TaskService);
  taskForm = new FormGroup({
    title: new FormControl('', ),
    description: new FormControl('',  ),
    priority: new FormControl('', ),
    dueDate: new FormControl('', ),
    completed: new FormControl(false, ),
  });
  
  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value as unknown as Omit<Task, 'id' | 'createdAt'>).subscribe({
        next: (response) => {
          console.log('Task created successfully:', response);
          alert('Task created successfully');
        },
        error: (error) => {
          console.error('Error creating task:', error);
          alert('Error creating task');
        }
      });
      alert(`Task created: ${JSON.stringify(this.taskForm.value)}`);
    } else {
      alert('Form is invalid');
    }
  }
}
