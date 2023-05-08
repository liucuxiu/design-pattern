import { DirectionService } from './DirectionService';
import { BicycleMode } from './impl/BicycleMode';
import { DrivingMode } from './impl/DrivingMode';

const directionService = new DirectionService()

directionService.setTravelMode(new BicycleMode())

directionService.getDirection()
directionService.getEta()


directionService.setTravelMode(new DrivingMode())

directionService.getDirection()
directionService.getEta()