import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class WebServer {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  public handle(request: HttpRequest) {
    this.handler.handle(request);
  }
}