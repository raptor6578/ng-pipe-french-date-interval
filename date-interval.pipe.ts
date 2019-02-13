// @ts-ignore
import { Pipe, PipeTransform } from '@angular/core';
import 'date_format';
declare const date_format: any;

@Pipe({name: 'dateInterval'})

export class DateIntervalPipe implements PipeTransform {
  transform(timestamp: number): string {
    date_format.days = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    date_format.months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
      'Novembre', 'Décembre'
    ];

    const compareDate = new Date(timestamp), currentDate = new Date();
    const compare = date_format(compareDate, 'D d F Y');
    const current = date_format(currentDate, 'D d F Y');
    const compareTime = date_format(compareDate, 'H:i');

    const previousDays = (int: number) => {
      return date_format(new Date(currentDate.getTime() - (int * 86400000)), 'D d F Y');
    };

    if (compare === current) {
      const diff = currentDate.getTime() - compareDate.getTime();

      if (diff < 5000) {
        return 'à l\'instant';

      } else if (diff < 60000) {
        return `Il y a ${Math.floor(diff / 1000)} secondes`;

      } else if (diff < 3600000) {
        return `Il y a ${Math.floor(diff / 60000)} minutes`;

      } else if (diff < 10800000) {
        return `Il y a ${Math.floor(diff / 3600000)} heures`;

      } else {
        return `Aujourd\'hui à ${compareTime}`;
      }

    } else if (compare === previousDays(1)) {
      return `Hier à ${compareTime}`;

    } else if (compare === previousDays(2)) {
      return `Il y à 2 jours à ${compareTime}`;

    } else if (compare === previousDays(3)) {
      return `Il y à 3 jours à ${compareTime}`;

    } else if (compare === previousDays(4)) {
      return `Il y à 4 jours à ${compareTime}`;

    } else if (compare === previousDays(5)) {
      return `Il y à 5 jours à ${compareTime}`;

    } else if (compare === previousDays(6)) {
      return `Il y à 6 jours à ${compareTime}`;

    } else if (compare === previousDays(7)) {
      return `Il y à 1 semaine à ${compareTime}`;

    } else {
      return `${compare} à ${compareTime}`;
    }
  }
}
