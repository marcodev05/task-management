import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  get name(){
    return this.taskForm.get('name');
  }

  get description(){
    return this.taskForm.get('description');
  }

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const formData = this.taskForm.value;
    this.taskService.addTask(formData).subscribe({
      next: (response) => {
        console.log('success');
        console.log(response);
        this.router.navigate(['/tasks']);
        
        
      },
      error: (error) => {
        console.log("Error: ");
        console.log(error.error);
      }
    })
  }

}
