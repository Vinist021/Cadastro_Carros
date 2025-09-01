import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import locale_PT from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

import { App } from './app';
import { CarroComponent } from './components/carro/carro';
import { HeaderComponent } from './components/header/header';
import { CarrosComponent } from './components/carros/carros';

registerLocaleData(locale_PT, 'pt');

@NgModule({
  declarations: [
    App,
    CarroComponent,
    HeaderComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [App]
})
export class AppModule { }
