import { Observer } from './Observer';

export abstract class Subject {
  private observerList: Observer[]= []

  public addObserver(observer: Observer) {
    this.observerList.push(observer)
  }

  public notifyObservers() {
    for (let observer of this.observerList) {
      observer.update()
    }
  }
}