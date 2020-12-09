import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TitleBannerComponent } from './components/title-banner/title-banner.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TemplateComponent } from './components/courseContent/template/template.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleBannerComponent,
    ShortBannerComponent,
    CourseContentComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    NzLayoutModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzRateModule,
    NzCollapseModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
