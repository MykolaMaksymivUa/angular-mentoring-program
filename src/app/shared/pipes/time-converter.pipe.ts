import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {
  transform(value: number, from: 'seconds' | 'minutes', to: 'minutes' | 'hours'): string {
    if (from === 'minutes' && to === 'hours') {
      const hours = Math.floor(value / 60);
      const minutes = value % 60;

      return `${hours ? hours + 'h' : ''} ${minutes ? minutes + 'min' : ''}`;
    } else if (from === to && to === 'minutes') {
      return `${value}min`;
    }
  }

}
