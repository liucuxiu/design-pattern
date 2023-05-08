import { Canvas } from './Canvas';
import { SelectionTool } from './impl/SelectionTool';
import { BrushTool } from './impl/BrushTool';

const canvas = new Canvas()
canvas.setCurrentTool(new SelectionTool())
canvas.mouseDown()
canvas.mouseUp()

canvas.setCurrentTool(new BrushTool())

canvas.mouseDown()
canvas.mouseUp()
