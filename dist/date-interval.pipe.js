var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @ts-ignore
import { Pipe } from '@angular/core';
import 'date_format';
var DateIntervalPipe = /** @class */ (function () {
    function DateIntervalPipe() {
    }
    DateIntervalPipe.prototype.transform = function (timestamp) {
        date_format.days = ['Lundi', 'Mardi', 'Mecredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        date_format.months = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
            'Novembre', 'Décembre'
        ];
        var compareDate = new Date(timestamp), currentDate = new Date();
        var compare = date_format(compareDate, 'D d F Y');
        var current = date_format(currentDate, 'D d F Y');
        var compareTime = date_format(compareDate, 'H:i');
        var previousDays = function (int) {
            return date_format(new Date(currentDate.getTime() - (int * 86400000)), 'D d F Y');
        };
        if (compare === current) {
            var diff = currentDate.getTime() - compareDate.getTime();
            if (diff < 5000) {
                return 'à l\'instant';
            }
            else if (diff < 60000) {
                return "Il y a " + Math.floor(diff / 1000) + " secondes";
            }
            else if (diff < 3600000) {
                return "Il y a " + Math.floor(diff / 60000) + " minutes";
            }
            else if (diff < 10800000) {
                return "Il y a " + Math.floor(diff / 3600000) + " heures";
            }
            else {
                return "Aujourd'hui \u00E0 " + compareTime;
            }
        }
        else if (compare === previousDays(1)) {
            return "Hier \u00E0 " + compareTime;
        }
        else if (compare === previousDays(2)) {
            return "Il y \u00E0 2 jours \u00E0 " + compareTime;
        }
        else if (compare === previousDays(3)) {
            return "Il y \u00E0 3 jours \u00E0 " + compareTime;
        }
        else if (compare === previousDays(4)) {
            return "Il y \u00E0 4 jours \u00E0 " + compareTime;
        }
        else if (compare === previousDays(5)) {
            return "Il y \u00E0 5 jours \u00E0 " + compareTime;
        }
        else if (compare === previousDays(6)) {
            return "Il y \u00E0 6 jours \u00E0 " + compareTime;
        }
        else if (compare === previousDays(7)) {
            return "Il y \u00E0 1 semaine \u00E0 " + compareTime;
        }
        else {
            return compare + " \u00E0 " + compareTime;
        }
    };
    DateIntervalPipe = __decorate([
        Pipe({ name: 'dateInterval' })
    ], DateIntervalPipe);
    return DateIntervalPipe;
}());
export { DateIntervalPipe };
//# sourceMappingURL=date-interval.pipe.js.map