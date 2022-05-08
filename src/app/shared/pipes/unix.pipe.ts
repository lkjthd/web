import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixpipe'
})
export class UnixPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    return new Date(value as number).toDateString();
  }
}
