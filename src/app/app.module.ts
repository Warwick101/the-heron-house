import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { HouseComponent } from './house/house.component';
import { HermanusComponent } from './hermanus/hermanus.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HouseComponent,
    HermanusComponent,
    IntroComponent ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }

