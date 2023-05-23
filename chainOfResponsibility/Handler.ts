import { HttpRequest } from './HttpRequest';

export abstract class Handler {
  private readonly next: Handler | null

  protected constructor(next: Handler| null) {
    this.next = next
  }

  public handle(request: HttpRequest): void {
    if (this.doHandler(request)) {
      return
    }
    if (this.next != null) {
      this.next.handle(request)
    }
  }

  public abstract doHandler(request: HttpRequest): boolean
}