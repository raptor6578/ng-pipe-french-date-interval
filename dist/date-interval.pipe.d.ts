import { PipeTransform } from '@angular/core';
import 'date_format';
export declare class DateIntervalPipe implements PipeTransform {
    transform(timestamp: number): string;
}
