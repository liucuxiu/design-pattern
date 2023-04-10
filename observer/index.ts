import { Stock } from './subject/Stock';
import { StatusBar } from './observer/StatusBar';
import { StockListView } from './observer/StockListView';

const stock = new Stock()
const statusBar = new StatusBar()
const stockListView = new StockListView()
stock.addObserver(statusBar)
stock.addObserver(stockListView)

stock.setValue(1)
