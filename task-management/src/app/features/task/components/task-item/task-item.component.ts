import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task
  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.deleteTask.emit(id);
  }
  

}
