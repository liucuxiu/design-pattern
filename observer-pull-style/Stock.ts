import { Subject } from './Subject';

export class Stock extends Subject {
  private value: number = 0
  private price: number = 0

  public getValue() {
    return this.value
  }

  public setValue(value: number) {
    this.value = value
    this.notifyObservers()
  }

  public getPrice() {
    return this.price
  }

  public setPrice(price: number) {
    this.price = price
    this.notifyObservers()
  }
}