import { Image } from './Image';
import { Filter } from './Filter';
import { Caramel } from './avaFilter/Caramel';

export class CaramelFilter implements Filter {
  private caramel: Caramel;

  constructor(caramel: Caramel) {
    this.caramel = caramel;
  }

  public apply(image: Image): void {
    this.caramel.init();
    this.caramel.render(image);
  }
}
