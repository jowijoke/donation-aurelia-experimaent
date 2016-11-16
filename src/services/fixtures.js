export default class Fixtures {

  methods = ['Cash', 'PayPal'];

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

  donations = [
    {
      amount: 23,
      method: 'cash',
      candidate: this.candidates[0]
    },
    {
      amount: 212,
      method: 'paypal',
      candidate: this.candidates[1]
    }
  ];
}
