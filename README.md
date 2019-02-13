# Display example
à l'instant  
il y à X secondes  
il y à X minutes  
il y à X heures  
Aujourd'hui à X heures  
Hier à X heures  
il y à X jours à X heures  
il y à 1 semaine à X heures  
Day XX month year à X heures  

# Installation

```
npm install ng-pipe-french-date-interval  
```

Add DateIntervalModule to your @NgModule :  

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DateIntervalModule} from 'ng-pipe-french-date-interval';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateIntervalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```  

# How to use  

component example :

```js

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    date = new Date();
    oldDate = new Date(1550059828);
}
```

Html:
```html
{{ date | dateInterval }}  
{{ oldDate | dateInterval }}
```

