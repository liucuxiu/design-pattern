import { AbstractArtefact } from './AbstractArtefact';

export class Artefact implements AbstractArtefact {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  render(): string {
    return this.name;
  }

}