import {inject} from 'aurelia-framework';
import DonationService from '../services/donation-service';

@inject(DonationService)
export class Stats {

  total = 0;

  constructor(ds) {
    this.donationService = ds;
    this.total = ds.total;
  }
}
