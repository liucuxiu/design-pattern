export class EditorState {
  private readonly _content: string | undefined = undefined

  constructor(content: string | undefined) {
    this._content = content
  }

  get content(): string | undefined {
    return this._content;
  }
}