import { UIControl } from './UIControl';

export abstract class DialogBox {
  abstract changed(control: UIControl): void
}