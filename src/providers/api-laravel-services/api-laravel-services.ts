import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../models/path'; 
import { Task } from '../../models/task'


/*
  Generated class for the ApiLaravelServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiLaravelServicesProvider {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = Global.url;
  }
  
  getAllTasks():Observable<any>{
    return this.http.get<Task[]>(this.url);
  }

  getTask(id):Observable<any>{
    return this.http.get<Task>(this.url+id);
  }

  deleteTask(id):Observable<any>{
    return this.http.delete(this.url+id);
  }

  create(task:Task):Observable<any>{
    return this.http.post(this.url, task);
  }

  update(id, task:Task):Observable<any>{
    return this.http.put<Task>(this.url+id, task);
  }

}
