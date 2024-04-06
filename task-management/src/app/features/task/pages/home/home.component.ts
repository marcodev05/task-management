import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading$!: Observable<boolean>;
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.setLoading();
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (response) => {
        this.tasks = response.data.content;
      },
      error: (error) => {
        console.log(error.error);
      }
    })
  }


  onDelete(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: (response) => {
        this.loadTasks();
      },
      error: (error) => {
        console.log(error.error);
      }
    });
  }

  setLoading(){
    this.loadingService.setLoading(true);
    this.loading$ = this.loadingService.loading$; 
  }

}
