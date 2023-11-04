import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

declare let gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor() {
    this.setUpAnalytics();
  }

  private setUpAnalytics() {
    // Initialize Google Analytics
    gtag('config', `${environment.GA4_id}`);
  }

  trackPageView(url: string) {
    gtag('config', `${environment.GA4_id}`, {
      page_path: url,
    });
  }

  trackEvent(
    eventName: string,
    eventCategory: string,
    eventLabel: string,
    eventValue: number
  ) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
}
