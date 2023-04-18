import { Compressor } from '../Compressor';

export class JpgCompressor implements Compressor {
  compress(): void {
    console.log('Compress JPG')
  }

}