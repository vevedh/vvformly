import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyVeveForm } from './formly-veve.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyIonicModule,
    FormlyModule.forRoot({
      types: [
        { name: 'vvform', component: FormlyVeveForm }
      ],
    }),
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,FormlyVeveForm]
})
export class Tab1PageModule {}
