import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ 
    TaskItemComponent,
    TaskListComponent,
    HomeComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TaskModule { }
