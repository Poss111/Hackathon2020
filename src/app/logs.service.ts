import { Injectable } from '@angular/core';
import {concat, interval, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  array: string[] = [];

  constructor() {
    for (let i = 0; i < 26; i++) {
      this.array.push("value " + i);
    }
  }

  getLogs(): Observable<string> {
    let interval = 100;
    let startValue: number = -interval;
    return new Observable<string>(subscriber => {
      this.array.forEach((value) => {
        setTimeout(() => {
          console.log("Created for " + value);
          subscriber.next(value);
        }, startValue += interval);
      })
    });
  }

}
