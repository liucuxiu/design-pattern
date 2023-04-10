import { UIControl } from './UIControl';

export class Button extends UIControl{
  private _isEnable: boolean = false


  get isEnable(): boolean {
    return this._isEnable;
  }

  set isEnable(value: boolean) {
    this._isEnable = value;
    this.owner.change(this);
  }
}