import { Component, Input } from '@angular/core';

@Component ({

  selector: 'hh-icons',
  templateUrl: './icon-system.component.html',
  styleUrls: ['./icon-system.component.css']

})


export class IconSystemComponent {

  @Input() viewNavBox = '0 0 25 25';
  @Input() viewLogoBox = '0 0 1600 252';
  @Input() viewLogoStackBox = '0 0 1250 830';
  @Input() isHover: boolean;
}
