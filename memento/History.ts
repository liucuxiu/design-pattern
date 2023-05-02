import { EditorState } from './EditorState';

export class History {
  private states: EditorState[] = []

  public push(state: EditorState) {
    this.states.push(state)
  }

  public pop(): EditorState {
    return this.states.pop() as EditorState
  }
}