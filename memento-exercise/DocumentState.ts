//memento
export class DocumentState {
  private readonly _content: string | undefined

  private readonly _fontName: string | undefined

  private readonly _fontSize: number | undefined

  constructor(content: string | undefined, fontName: string | undefined, fontSize: number | undefined) {
    this._content = content
    this._fontName = fontName
    this._fontSize = fontSize
  }

  get content(): string | undefined {
    return this._content;
  }

  get fontName(): string | undefined {
    return this._fontName;
  }


  get fontSize(): number | undefined {
    return this._fontSize;
  }


}