// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { DateIntervalPipe } from './date-interval.pipe';

@NgModule({
  declarations: [DateIntervalPipe],
  imports: [
    CommonModule
  ],
  exports: [DateIntervalPipe]
})
export class DateIntervalModule { }
