import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getTasks(page: number, pageSize: number): Observable<Task[]> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get<Task[]>(this.apiBaseUrl + "/tasks", { params });
  }

  addTask(task: FormData): Observable<Task> {
    return this.http.post<Task>(this.apiBaseUrl, task);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiBaseUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }

}
