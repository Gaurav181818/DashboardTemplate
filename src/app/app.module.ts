import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './layouts/main-nav/main-nav.component';
import { HeaderComponent } from './layouts/main-nav/header/header.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './layouts/main-nav/sidebar/sidebar.component';



@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        HeaderComponent,
        SpinnerComponent,
        SidebarComponent
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class AppModule {

 }
