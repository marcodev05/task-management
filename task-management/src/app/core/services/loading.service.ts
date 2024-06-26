import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor() { }

  setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  isLoading(): Observable<boolean> {
    return this.loading$;
  }
}