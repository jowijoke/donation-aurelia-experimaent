import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import DonationService from '../../services/donation-service';
import {LoginStatus} from '../../services/messages';

@inject(EventAggregator, DonationService)
export class Login {

  email = 'marge@simpson.com';
  password = 'secret';

  constructor(ea, ds) {
    this.ea = ea;
    this.donationService = ds;
    this.prompt = '';
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    const status = this.donationService.login(this.email, this.password);
    this.ea.publish(new LoginStatus(status));
  }
}
