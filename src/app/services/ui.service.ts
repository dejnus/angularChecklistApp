import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private showAddDetail: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleAddDetail(): void{
    this.showAddDetail = !this.showAddDetail;
    this.subject.next(this.showAddDetail);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
