import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import DonationService from './services/donation-service';
import {LoginStatus} from './services/messages';

@inject(EventAggregator, DonationService)
export class App {

  loggedIn = false;
  showSignup = false;

  constructor(ea, ds) {
    this.donationService = ds;
    ea.subscribe(LoginStatus, msg => {
      this.loggedIn = msg.status;
    });
  }

  signup() {
    this.showSignup = true;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }
}
