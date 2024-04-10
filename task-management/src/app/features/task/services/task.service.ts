import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaskSearchRequest } from '../models/task-search-request';
import { ResponseApi } from 'src/app/core/models/response-api.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getTasks(param?: any): Observable<ResponseApi<any>> {
    console.log("param " , param);
    let params;
    if(param){
      params = new HttpParams()
      .set('pagination.page', param?.pagination ? param.pagination?.page : '1')
      .set('pagination.size', param?.pagination ? param.pagination.size : '10')
      .set('keyword', param.keyword)
    }
    
    return this.http.get<any>(this.apiBaseUrl + "/tasks", { params });
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
