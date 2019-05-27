import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingActiveListComponent } from './active-list/active-list.component';
import { MarketingActiveDetailComponent } from './active-detail/active-detail.component';
import { MarketingActiveFormComponent } from './active-form/active-form.component';

const COMPONENTS = [MarketingActiveListComponent, MarketingActiveDetailComponent, MarketingActiveFormComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, MarketingRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class MarketingModule {}
