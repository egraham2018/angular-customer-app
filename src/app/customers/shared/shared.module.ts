import { NgModule } from '@angular/core';
import { CrazyCamelCasePipe } from './crazyCamelCase.pipe';

@NgModule({
  declarations: [ CrazyCamelCasePipe ],
  exports: [ CrazyCamelCasePipe ]
})
export class SharedModule { }
