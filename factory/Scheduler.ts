import { Calendar } from './Calendar';
import { Event } from './Event';

export abstract class Scheduler {
  private calendar = this.createCalendar()

  abstract createCalendar(): Calendar

  schedule(event: Event, date: Date) {
    this.calendar.addEvent(event, date)
  }
}
