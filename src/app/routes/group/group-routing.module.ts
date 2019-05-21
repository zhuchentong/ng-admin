import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupGroupManageComponent } from './group-manage/group-manage.component';
import { GroupGroupDetailComponent } from './group-detail/group-detail.component';
import { GroupUserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'group-manage', component: GroupGroupManageComponent, pathMatch: 'full' },
  { path: 'group-detail', component: GroupGroupDetailComponent },
  { path: 'user-detail', component: GroupUserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
