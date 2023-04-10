import { Observer } from './Observer';
import { Stock } from './Stock';

export class StatusBar implements Observer {
  private stock: Stock

  constructor(stock: Stock) {
    this.stock = stock
  }

  update(): void {
    console.log("StatusBar updated value " + this.stock.getValue())
    console.log("StatusBar updated price " + this.stock.getPrice())

  }
}