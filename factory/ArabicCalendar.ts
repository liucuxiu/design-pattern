import { Calendar } from './Calendar';

export class ArabicCalendar implements Calendar {
  constructor() {
    console.log('Arabic Calendar');
  }

  addEvent(event: Event, date: Date): void {
    console.log('Event added to Arabic calendar');
  }
}