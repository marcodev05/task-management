import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskSearchRequest } from '../models/taskSearchRequest';
import { ResponseApi } from 'src/app/core/models/response-api.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getTasks(param?: TaskSearchRequest): Observable<ResponseApi<any>> {
    let params = new HttpParams();
    params.set('pagination.page', param?.pagination ? param.pagination?.page.toString() : '');
    params.set('pagination.size', param?.pagination ? param.pagination?.size.toString() : '');
    return this.http.get<any>(this.apiBaseUrl + "/tasks", { params: params });
  }

  addTask(task: any): Observable<ResponseApi<any>> {
    return this.http.post<ResponseApi<any>>(this.apiBaseUrl + "/tasks", task);
  }

  fetchTaskById(taskId: number): Observable<ResponseApi<any>> {
    return this.http.get<ResponseApi<any>>(this.apiBaseUrl + "/tasks/" + taskId);
  }

  deleteTask(taskId: number): Observable<ResponseApi<any>> {
    return this.http.delete<ResponseApi<any>>(this.apiBaseUrl + "/tasks/" + taskId);
  }
}
