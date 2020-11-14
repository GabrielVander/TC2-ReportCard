import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {ReportTableComponent} from './components/report-table/report-table.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {ClassEditionDrawerComponent} from './components/class-edition-drawer/class-edition-drawer.component';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ReportTableComponent,
    ClassEditionDrawerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    NzDrawerModule,
    NzDescriptionsModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
