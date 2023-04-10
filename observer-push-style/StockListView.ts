import { Observer } from './Observer';

export class StockListView implements Observer {
  update(): void {
    console.log("StockListView updated")
  }

}