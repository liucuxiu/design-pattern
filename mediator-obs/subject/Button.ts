import { UIControl } from './UIControl';

export class Button extends UIControl {
  private _isEnabled: boolean = false;

  public isEnabled() {
    return this._isEnabled;
  }

  public setEnabled(isEnabled: boolean) {
    this._isEnabled = isEnabled;
    this.notifyObservers()
  }


}