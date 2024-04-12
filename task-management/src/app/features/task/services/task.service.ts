import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from 'src/app/core/models/response-api.model';
import { DataSerializerService } from 'src/app/core/services/data-serializer.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private serializer: DataSerializerService) { }

  getTasks(param?: any): Observable<ResponseApi<any>> {
    const serealizedData = this.serializer.buildRequestParameters(param);
    return this.http.get<any>(this.apiBaseUrl + "/tasks" + serealizedData);
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
