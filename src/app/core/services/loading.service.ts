import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {

  private counter = 0;
  private loading$ = new BehaviorSubject<boolean>(false);

  isLoading$ = this.loading$.asObservable();

  show() {
    this.counter++;
    queueMicrotask(() => {
      this.loading$.next(true);
    });
  }

  hide() {
    this.counter--;
    if (this.counter <= 0) {
      this.counter = 0;
      queueMicrotask(() => {
        this.loading$.next(false);
      });
    }
  }
}
