import { Image } from './Image';
import { Filter } from './Filter';

export class ImageView {
  private image: Image;

  constructor(image: Image) {
    this.image = image;
  }

  public apply(filter: Filter) {
    filter.apply(this.image);
  }

}