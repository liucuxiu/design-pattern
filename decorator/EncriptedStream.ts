import { Stream } from './Stream';

export class EncriptedStream implements Stream{
  private stream: Stream

  constructor(stream: Stream) {
    this.stream = stream
  }

  write(data: string): void {
    const encrypted = this.encript(data)
    this.stream.write(encrypted)
  }

  private encript(data: string): string{
    return '$%#@!#@#'
  }
}