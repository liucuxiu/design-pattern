import { AbstractArtefact } from './AbstractArtefact';

export class MainDecorator implements AbstractArtefact {
  private artefact: AbstractArtefact

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact
  }

  render(): string {
    return this.artefact.render() + ' [Main]';
  }

}