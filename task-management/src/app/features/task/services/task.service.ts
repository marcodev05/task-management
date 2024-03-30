import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';
import { Sorting } from 'src/app/core/models/sorting';
import { TaskSearchRequest } from '../models/taskSearchRequest';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getTasks(param?: TaskSearchRequest): Observable<any> {
    let params = new HttpParams();
   // params.set('pagination.page', param.pagination?.page.toString );
    return this.http.get<any>(this.apiBaseUrl + "/tasks", { params: params });
  }

  addTask(task: FormData): Observable<Task> {
    return this.http.post<Task>(this.apiBaseUrl, task);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiBaseUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }

}
