export class Donate {

  amount = 5;
  methods = ['Cash', 'PayPal'];
  selectedMethod = 'Cash';

  candidates = [
    {
      firstName: 'Lisa',
      lastName: 'Simpson'
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson'
    }
  ];
  selectedCandidate = this.candidates[0];

  makeDonation() {
    console.log(`Amount = ${this.amount}`);
    console.log(`Method = ${this.selectedMethod}`);
  }
}
