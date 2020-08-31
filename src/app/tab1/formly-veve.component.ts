import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'formly-veve-form',
 template: `
  <div>
   <button type="button"
     [disabled]="!!formControl.value"
     (click)="formControl.setValue(true)" >
     Yes
   </button>
   <button type="button"
     [disabled]="!formControl.value"
     (click)="formControl.setValue(false)" >
     No
   </button>
  </div>
 `,
})
export class FormlyVeveForm extends FieldType implements OnInit {


    constructor() {
        super();
       
    }

    ngOnInit() {
        console.log('Objet :',this.field)

    }
}