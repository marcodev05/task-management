import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks().subscribe({
      next: (response: any) => {
        this.tasks = response.data.content;
      },
      error: (error) => {
        alert("server error : " + error.error);
      }
    })
  }

}
