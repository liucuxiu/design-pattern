import { Stock } from './Stock';
import { StatusBar } from './StatusBar';
import { StockListView } from './StockListView';

const stock = new Stock()
const statusBar = new StatusBar()
const stockListView = new StockListView()
stock.addObserver(statusBar)
stock.addObserver(stockListView)

stock.setValue(1)
