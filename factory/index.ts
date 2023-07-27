import { ArabicScheduler } from './ArabicScheduler';
import { Event } from './Event';


const arabScheduler = new ArabicScheduler();
arabScheduler.schedule(new Event(), new Date())