import { HttpRequest } from './HttpRequest';
import { Handler } from './Handler';

export class Authenticator extends Handler {

  constructor(next: Handler) {
    super(next);
  }

  doHandler(httpRequest: HttpRequest): boolean {
    console.log('authentication');
    return !(httpRequest.getUsername() == 'admin' && httpRequest.getPassword() == '1234');
  }

}