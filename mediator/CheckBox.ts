import { UIControl } from './UIControl';

export class CheckBox extends UIControl {
  private _isChecked: boolean = false;

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(value: boolean) {
    this._isChecked = value;
    this.owner.change(this);
  }
}