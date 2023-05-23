import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class Logger extends Handler {
  constructor(next: Handler) {
    super(next);
  }

  doHandler(request: HttpRequest): boolean {
    console.log('logging');
    return false;
  }
}