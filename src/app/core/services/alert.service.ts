import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertMode = 'success' | 'error' | 'info' | 'warning';

export interface AlertState {
  text: string | null;
  mode: AlertMode;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<AlertState>({
    text: null,
    mode: 'info'
  });

  alert$ = this.alertSubject.asObservable();

  show(text: string, mode: AlertMode = 'info') {
    this.alertSubject.next({ text, mode });
  }

  hide() {
    this.alertSubject.next({ text: null, mode: 'info' });
  }
}
