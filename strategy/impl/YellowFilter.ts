import { Filter } from '../Filter';

export class YellowFilter implements Filter {
  apply(): void {
    console.log('filter apply yellow')
  }

}