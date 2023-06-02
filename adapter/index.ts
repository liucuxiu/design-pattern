import { ImageView } from './ImageView';
import { Image } from './Image';
import { CaramelFilter } from './CaramelFilter';
import { Caramel } from './avaFilter/Caramel';

const imageView = new ImageView(new Image());
imageView.apply(new CaramelFilter(new Caramel()));