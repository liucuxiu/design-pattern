import { Observer } from '../observer/Observer';

export abstract class UIControl {
  public observerList: Observer[] = []

  public addObserver(observer: any) {
    this.observerList.push(observer)
  }

  protected notifyObservers() {
    for (let observer of this.observerList) {
      observer.update()
    }
  }
}