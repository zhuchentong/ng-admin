import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingActiveListComponent } from './active-list/active-list.component';
import { MarketingActiveDetailComponent } from './active-detail/active-detail.component';
import { MarketingActiveFormComponent } from './active-form/active-form.component';

const routes: Routes = [
  { path: 'list', component: MarketingActiveListComponent },
  { path: 'detail', component: MarketingActiveDetailComponent },
  { path: 'form', component: MarketingActiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule {}
