import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconSystemComponent} from './icon-system.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGService} from 'ng-inline-svg/lib/inline-svg.service';



@NgModule({

  declarations: [
    IconSystemComponent
  ],

  imports: [
    HttpClientModule,
    CommonModule,
    InlineSVGModule.forRoot({ baseUrl: '/home' }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8Mr0cVXggyOMqRSVlUkkeVK7xz21ePXk'
    })
  ],

  exports: [
    HttpClientModule,
    CommonModule,
    IconSystemComponent,
    InlineSVGModule,
    AgmCoreModule
  ],

  providers: [InlineSVGService],

})


export class SharedModule {
}




