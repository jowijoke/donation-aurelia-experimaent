import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';

@inject(Fixtures)
export default class DonationService {

  donations = [];
  methods = [];
  candidates = [];

  constructor(data) {
    this.donations = data.donations;
    this.candidates = data.candidates;
    this.methods = data.methods;
  }

  donate(amount, method, candidate) {
    const donation = {
      amount: amount,
      method: method,
      candidate: candidate
    };
    this.donations.push(donation);
    console.log(amount + ' donated to ' + candidate.firstName + ' ' + candidate.lastName + ': ' + method);
  }
}
