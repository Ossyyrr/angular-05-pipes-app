import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

// IDIOMAS PARA FECHAS

import { registerLocaleData } from '@angular/common';
import localeEsHN from '@angular/common/locales/es-HN';

registerLocaleData(localeEsHN);
@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-HN' }], // IDIOMA EN TODA LA APP
  bootstrap: [AppComponent],
})
export class AppModule {}
