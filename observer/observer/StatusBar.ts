import { Observer } from './Observer';

export class StatusBar implements Observer {
  update(): void {
    console.log("StatusBar updated")
  }
}