import { DocumentState } from './DocumentState';

export class History {
  private states: DocumentState[] = []

  public push(state: DocumentState) {
    this.states.push(state)
  }

  public pop(): DocumentState {
    return this.states.pop() as DocumentState
  }
}