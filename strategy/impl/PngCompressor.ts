import { Compressor } from '../Compressor';

export class PngCompressor implements Compressor {
  compress(): void {
    console.log("compress PNG")
  }

}