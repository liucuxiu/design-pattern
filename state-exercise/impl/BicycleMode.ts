import { TravelMode } from '../TravelMode';

export class BicycleMode implements TravelMode {
  calculateDirection(): void {
    console.log("Calculating Direction (bicycle)")
  }

  calculateETA(): void {
    console.log("Calculating ETA (bicycle)")

  }

}