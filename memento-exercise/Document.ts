import { DocumentState } from './DocumentState';

export class Document {
  private _content: string | undefined

  private _fontName: string | undefined

  private _fontSize: number | undefined

  get content(): string | undefined {
    return this._content;
  }

  set content(content: string | undefined) {
    this._content = content;
  }

  get fontName(): string | undefined {
    return this._fontName;
  }

  set fontName(fontName: string | undefined) {
    this._fontName = fontName;
  }

  get fontSize(): number | undefined {
    return this._fontSize;
  }

  set fontSize(fontSize: number | undefined) {
    this._fontSize = fontSize;
  }

  public toString() {
    return `Document: 
    content= ${this.content}
    fontName= ${this.fontName}
    fontSize= ${this.fontSize}`
  }

  public createState() {
    return new DocumentState(this.content, this.fontName, this.fontSize)
  }

  public restore(state: DocumentState) {
    this.content = state.content
    this.fontName = state.fontName
    this.fontSize = state.fontSize
  }
}