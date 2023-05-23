import { Artefact } from './Artefact';
import { ErrorDecorator } from './ErrorDecorator';
import { MainDecorator } from './MainDecorator';

export class Editor {

  public openProject(filePath: string): void {
    const artefacts = [
      new Artefact('huhu'),
      new Artefact('Demo')
    ]

    // @ts-ignore
    artefacts[0] = new ErrorDecorator(new MainDecorator(artefacts[0]))
    // @ts-ignore
    artefacts[1] = new MainDecorator(artefacts[1])

    for (let artefact of artefacts) {
      console.log(artefact.render())
    }
  }
}