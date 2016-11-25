export default class Fixtures {

  methods = ['Cash', 'PayPal'];

  users = [
    {
      firstName: 'Homer',
      lastName: 'Simpson',
      email: 'homer@simpson.com',
      password: 'secret'
    },
    {
      firstName: 'Marge',
      lastName: 'Simpson',
      email: 'marge@simpson.com',
      password: 'secret'
    }
  ];

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
