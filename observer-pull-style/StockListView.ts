import { Observer } from './Observer';
import { Stock } from './Stock';

export class StockListView implements Observer {
  private stock: Stock

  constructor(stock: Stock) {
    this.stock = stock
  }

  update(): void {
    console.log("StockListView updated value " + this.stock.getValue())
    console.log("StockListView updated price " + this.stock.getPrice())
  }
}