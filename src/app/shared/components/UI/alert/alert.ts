import { Component } from '@angular/core';
import { AlertService, AlertState } from '../../../../core/services/alert.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class AlertComponent {
  alert: AlertState | null = null;
  sub!: Subscription;
  timerSub!: Subscription;

  modeStyles: Record<string, string> = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.sub = this.alertService.alert$.subscribe((alert) => {
      this.alert = alert;

      if (alert.text) {
        if (this.timerSub) this.timerSub.unsubscribe();
        this.timerSub = timer(5000).subscribe(() => this.alertService.hide());
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.timerSub?.unsubscribe();
  }

  close() {
    this.alertService.hide();
  }
}
