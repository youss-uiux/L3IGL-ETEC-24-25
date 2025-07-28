import { Component } from '@angular/core';
import { FormsModule,FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  taskForm = new FormGroup({
    title: new FormControl('', ),
    description: new FormControl('', Validators.minLength(20) ),
    priority: new FormControl('', ),
    dueDate: new FormControl('', ),
  });

  onSubmit(): void {
    if (this.taskForm.valid) {
      alert(`Task created: ${JSON.stringify(this.taskForm.value)}`);
    } else {
      alert('Form is invalid');
    }
  }
}
