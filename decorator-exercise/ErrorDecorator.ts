import { AbstractArtefact } from './AbstractArtefact';

export class ErrorDecorator implements AbstractArtefact{
  private artefact: AbstractArtefact

  constructor(artefact: AbstractArtefact) {
    this.artefact = artefact
  }

  public render(): string {
    return this.artefact.render() + '[Error]'
  }
}