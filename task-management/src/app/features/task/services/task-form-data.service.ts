import { Injectable } from '@angular/core';
import { AddTaskPayload } from '../models/add-task-payload';

@Injectable({
  providedIn: 'root'
})
export class TaskFormDataService {

  constructor() { }

  transformAddTaskData(data: AddTaskPayload): FormData {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('status', data.status || '');
    return formData;
  }
}
