import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { MainComponent } from './main/main.component';
import { HermanusComponent } from './hermanus/hermanus.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'home', component: MainComponent },
      { path: 'house', component: HouseComponent },
      { path: 'hermanus', component: HermanusComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],

  exports: [ RouterModule ]
})


export class AppRoutingModule {}


