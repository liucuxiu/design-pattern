import { TravelMode } from '../TravelMode';

export class DrivingMode implements TravelMode {
  calculateDirection(): void {
    console.log("Calculating Direction (driving)")
  }

  calculateETA(): void {
    console.log("Calculating ETA (driving)")

  }

}