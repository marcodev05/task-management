import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
//  @Output() tasks: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  loading$!: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.loading$ = this.loadingService.loading$;
  }
  
  onDelete(task: Task): void {
    
    this.deleteTask.emit(task);
  }

  // onDelete(task: Task): void {
  //   this.taskService.deleteTask(task.id).subscribe({
  //     next: (response) => {
  //       this.tasks = this.tasks.filter(t => t != task);
  //     },
  //     error: (error) => {
  //       console.log(error.error);
  //     }
  //   });
  // }

}
