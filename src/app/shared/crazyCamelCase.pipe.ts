import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'crazycamelcase' })
export class CrazyCamelCasePipe implements PipeTransform {
  transform(value: string): string {
    let newValue = value;
    if (value) {
      newValue = '';
      for (let i = 0; i < value.length; i++) {
        if (i % 2 === 0) {
          newValue += value.charAt(i).toLowerCase();
        } else {
          newValue += value.charAt(i).toUpperCase();
        }
      }
    }
    return newValue;
  }
}
