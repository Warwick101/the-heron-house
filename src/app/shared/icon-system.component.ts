import { Component, Input } from '@angular/core';

@Component ({

  selector: 'qss-icons',
  templateUrl: './icon-system.component.html',
  styleUrls: ['./icon-system.component.css']

})


export class IconSystemComponent {


  // @Input() viewNavBox = '0 0 25 25';

  @Input() viewNavBox ='0 0 25 25';

  @Input() viewLogoBox = '0 0 1600 252';
  @Input() viewLogoStackBox = '0 0 1250 830';


  @Input() pageTitle:string ='hello';
  @Input() isHover:boolean;



  // toggleHover(){
  //
  //   this.isHover = !this.isHover;
  //   console.log(this.isHover)
  //
  // }


}
