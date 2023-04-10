import { UIControl } from './UIControl';

export class TextBox extends UIControl {
  private content: string | undefined

  public getContent() {
    return this.content
  }

  public setContent(content: string | undefined) {
    this.content = content
    this.owner.changed(this)
  }
}