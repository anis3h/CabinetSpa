import { DatePipe } from '@angular/common';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'testDate'
})
export class ExtendDatePipe extends DatePipe implements PipeTransform {
  readonly customFormats = {
    medium: 'xxx',
    short: 'short',
    // ...
  };

  constructor() {
    super('fr');
  }

  transform(value: any, format = 'yMdjm', timezone?: string, locale?: string): string {
    format = this.customFormats[format] || format;

    return super.transform(value, format, timezone, locale);
  }
}
