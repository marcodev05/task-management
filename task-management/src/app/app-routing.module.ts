import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './features/task/components/task-list/task-list.component';
import { HomeComponent } from './features/task/pages/home/home.component';
import { AddTaskComponent } from './features/task/pages/add-task/add-task.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "tasks", component: HomeComponent},
  {path: "add-task", component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
