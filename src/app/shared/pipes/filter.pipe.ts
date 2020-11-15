import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], field: string, term: string): any[] {
    if (term.trim()) {
      return array.filter(element => { return field in element && element[field].toLowerCase().includes(term) });
    }

    return array;
  }
}
