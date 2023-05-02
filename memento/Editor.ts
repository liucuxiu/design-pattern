import { EditorState } from './EditorState';

export class Editor {
  private _content: string | undefined

  get content(): string | undefined{
    return this._content;
  }

  set content(content: string | undefined) {
    this._content = content;
  }

  public createState() {
    return new EditorState(this._content)
  }

  public restore(state: EditorState) {
    this._content = state.content
  }

}