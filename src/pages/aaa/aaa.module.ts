import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AaaPage } from './aaa';

@NgModule({
  declarations: [
    AaaPage,
  ],
  imports: [
    IonicPageModule.forChild(AaaPage),
  ],
})
export class AaaPageModule {}
