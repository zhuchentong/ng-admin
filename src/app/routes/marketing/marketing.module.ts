import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MarketingRoutingModule } from './marketing-routing.module';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, MarketingRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class MarketingModule {}
