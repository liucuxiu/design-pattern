import { Observer } from './Observer';

export class StatusBar implements Observer {
  update(value: number): void {
    console.log("StatusBar updated" + value)
  }
}