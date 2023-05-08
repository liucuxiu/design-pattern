import { Tool } from './Tool';

export class Canvas {
  private currentTool: Tool | undefined;


  public setCurrentTool(tool: Tool) {
    this.currentTool = tool;
  }

  public getCurrentTool() {
    return this.currentTool;
  }

  public mouseUp() {
    this.currentTool?.mouseDown()
  }

  public mouseDown() {
    this.currentTool?.mouseUp()
  }
}