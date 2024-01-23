import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';




@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
   
})
export class SharedModule { }
