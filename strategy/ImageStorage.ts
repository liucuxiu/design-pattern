import { Compressor } from './Compressor';
import { Filter } from './Filter';

export class ImageStorage {
  public store(fileName: string, compress: Compressor, filter: Filter) {
    compress.compress()
    filter.apply()
  }
}