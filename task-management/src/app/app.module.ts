import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskItemComponent } from './features/task/components/task-item/task-item.component';
import { TaskListComponent } from './features/task/components/task-list/task-list.component';
import { HomeComponent } from './features/task/pages/home/home.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { AddTaskComponent } from './features/task/pages/add-task/add-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    HomeComponent,
    NavbarComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
