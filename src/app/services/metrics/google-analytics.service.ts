import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

/**
 * Google Analytics Global Tag (gtag) is a variable that provides access to Google Analytics
 * functionality for tracking and reporting.
 *
 * @type {any}
 */
declare let gtag: any;

@Injectable({
  providedIn: 'root',
})

/**
 * GoogleAnalyticsService
 *
 * component that handle custom Google Analytics 4 metrics.
 */
export class GoogleAnalyticsService {
  /**
   * Constructor
   *
   * initializes the method setUpAnalytics
   */
  constructor() {
    this.setUpAnalytics();
  }

  /**
   * setUpAnalytics
   *
   * initializes Google Analytics 4 service
   */
  private setUpAnalytics() {
    // Initialize Google Analytics
    gtag('config', `${environment.GA4_id}`);
  }

  /**
   * trackEvent
   *
   * creates and handles a custom metric of google analytics
   *
   * @param eventName name of the event
   * @param eventCategory name for the event's category
   * @param eventLabel name for the event's label
   * @param eventValue add a value for the event
   */
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
