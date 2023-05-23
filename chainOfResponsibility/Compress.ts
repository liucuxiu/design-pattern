import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class Compress extends Handler {
  constructor(next: Handler | null) {
    super(next);
  }

  doHandler(request: HttpRequest): boolean {
    console.log('Compress')
    return false;
  }
}