import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

Injectable();
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      value = value.toUpperCase();
    } else if (metadata.type === 'param') {
      const idLength = parseInt(value, 10);
      if (!isNaN(idLength) && idLength > 0) {
        const randomId = Math.floor(Math.random() * Math.pow(10, idLength));
        value = randomId;
      }
    }
    return value;
  }
}
