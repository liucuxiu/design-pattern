import { TravelMode } from './TravelMode';

export class DirectionService {
  private travelMode!: TravelMode

  public setTravelMode(travelMode: TravelMode) {
    this.travelMode = travelMode
  }

  public getTravelMode() {
    return this.travelMode
  }

  public getEta() {
    this.travelMode.calculateETA()
  }

  public getDirection() {
    this.travelMode.calculateDirection()
  }
}