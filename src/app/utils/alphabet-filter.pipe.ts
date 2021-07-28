import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/IContact';

@Pipe({
  name: 'alphabetFilter',
  pure: false
})

export class AlphabetFilterPipe implements PipeTransform {
  transform(items: IContact[], filter: string): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.name.startsWith(filter));
  }
}
