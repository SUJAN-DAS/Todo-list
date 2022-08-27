import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from '../model/task';
// import { Label } from '../model/label';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  serviceURL: string;
  // contentURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks";
    // this.contentURL = "http://localhost:3000/label";
  }
  addTask(task:Task): Observable<Task> {
    return this.http.post<Task>(this.serviceURL, task);

  }
  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL);

  }
  deleteTask(task:Task): Observable<Task> {
    return this.http.delete<Task>(this.serviceURL + '/' + task.id);

  }
  editTask(task:Task): Observable<Task> {
    return this.http.put<Task>(this.serviceURL + '/' + task.id , task);

  }

  // addContent(content:Task): Observable<Task> {
  //   return this.http.post<Task>(this.serviceURL, content);

  // }
  // getAllContent(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.serviceURL);

  // }
  // deleteContent(content:Task): Observable<Task> {
  //   return this.http.delete<Task>(this.serviceURL + '/' + content.id);

  // }
  // editContent(content:Task): Observable<Task> {
  //   return this.http.put<Task>(this.serviceURL + '/' + content.id, content);

  // }
}
