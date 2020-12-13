import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleBannerComponent } from './components/title-banner/title-banner.component';
import { ShortBannerComponent } from './components/short-banner/short-banner.component';
import { CourseContentComponent } from './components/course-content/course-content.component';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { RequirementComponent } from './components/requirement/requirement.component';
import { DescriptionComponent } from './components/description/description.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TitleBannerComponent,
    ShortBannerComponent,
    CourseContentComponent,
    RequirementComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzRateModule,
    NzCollapseModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
