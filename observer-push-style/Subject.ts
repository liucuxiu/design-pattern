import { Observer } from './Observer';

export abstract class Subject {
  private observerList: Observer[]= []

  public addObserver(observer: Observer) {
    this.observerList.push(observer)
  }

  public notifyObservers(value: any) {
    for (let observer of this.observerList) {
      observer.update(value)
    }
  }
}