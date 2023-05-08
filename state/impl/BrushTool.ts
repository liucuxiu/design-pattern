import { Tool } from '../Tool';

export class BrushTool implements Tool{
  mouseDown(): void {
    console.log('Brush Tool mouse down')
  }

  mouseUp(): void {
    console.log('Brush Tool mouse up')

  }

}