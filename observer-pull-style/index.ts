import { Stock } from './Stock';
import { StatusBar } from './StatusBar';
import { StockListView } from './StockListView';

const stock = new Stock()
const statusBar = new StatusBar(stock)
const stockListView = new StockListView(stock)
stock.addObserver(statusBar)
stock.addObserver(stockListView)

stock.setValue(2)
stock.setPrice(3)