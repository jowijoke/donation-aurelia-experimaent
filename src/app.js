export class App {
  email = 'marge@simpson.com';
  password = 'secret';

  loggedIn = false;

  login() {
    console.log(`Logging in ${this.email}`);
    this.loggedIn = true;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }
}
