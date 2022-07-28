import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  sendFont$ = new BehaviorSubject<number>(0);

  constructor() { }

  get size(): Observable<number>{
   return this.sendFont$.asObservable()
  }

  sendSize(n: number){
    this.sendFont$.next(n)
  }


}
