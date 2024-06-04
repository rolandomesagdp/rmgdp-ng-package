import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgRmgdpService {

  constructor() { }

  logMessage(message: string): void {
    console.log(message);
  }
}
