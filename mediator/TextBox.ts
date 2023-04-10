import { UIControl } from './UIControl';

export class TextBox extends UIControl {
  private _content: string | null = null;

  get content(): string | null {
    return this._content;
  }

  set content(value: string | null) {
    this._content = value;
    this.owner.change(this);

  }
}