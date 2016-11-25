import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import DonationService from '../../services/donation-service';
import {LoginStatus} from '../../services/messages';

@inject(EventAggregator, DonationService)
export class Signup {

  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';

  constructor(ea, ds) {
    this.ea = ea;
    this.donationService = ds;
  }

  register(e) {
    this.showSignup = false;
    this.donationService.register(this.firstName, this.lastName, this.email, this.password);
    const status = this.donationService.login(this.email, this.password);
    this.ea.publish(new LoginStatus(status));
  }
}
