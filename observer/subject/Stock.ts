import { Subject } from './Subject';

export class Stock extends Subject {
  private value: number = 0

  public getValue() {
    return this.value
  }

  public setValue(value: number) {
    this.value = value
    this.notifyObservers()
  }
}