import { Scheduler } from './Scheduler';
import { ArabicCalendar } from './ArabicCalendar';

export class ArabicScheduler extends Scheduler {
  protected createCalendar() {
    return new ArabicCalendar()
  }
}