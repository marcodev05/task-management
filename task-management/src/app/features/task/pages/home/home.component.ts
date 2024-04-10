import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Observable } from 'rxjs';
import { TaskSearchRequest } from '../../models/task-search-request';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  get visibleTasks(): Task[] {
    return this.tasks;
  }

  searchForm = this.fb.group({
    keyword: [''],
    status: ['0'],
    pagination: this.fb.group({
      page: [1],
      size: [10]
    })
  })

  constructor(
    private taskService: TaskService,
    private loadingService: LoadingService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(param?: any) {
    this.taskService.getTasks(param).subscribe({
      next: (response) => {
        this.tasks = response.data.content;
        console.log("content length:", response.data.content.length);

      },
      error: (error) => {
        console.log(error.error);
      }
    })
  }

  onDelete(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe({
      next: (response) => {
        this.tasks = this.tasks.filter(t => t != task);
      },
      error: (error) => {
        console.log(error.error);
      }
    });
  }


  onSubmit() {
    const params = this.searchForm.value;
    this.loadTasks(params);
  }

}
