import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'vvform',
      type: 'toggle',
      templateOptions: {
        label: 'Field 1',
        placeholder: 'Formly is terrific!',
      },
    },
  ];
  constructor() {}
  

  submit(model) {
    console.log(model);
  }

}
