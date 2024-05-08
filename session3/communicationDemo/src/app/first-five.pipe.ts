import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstFive',
})
export class FirstFivePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.substring(0, 5);
  }
}
