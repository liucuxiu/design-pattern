import { Stream } from './Stream';

export class CompressCloudStream implements Stream {
  private stream: Stream

  constructor(stream: Stream) {
    this.stream = stream

  }
  write(data: string): void {
    const compressed = this.compress(data)
    this.stream.write(compressed)
  }

  private compress(data: string): string{
    return data.substring(0,4)
  }
}