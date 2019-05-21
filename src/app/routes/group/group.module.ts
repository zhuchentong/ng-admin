import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { GroupRoutingModule } from './group-routing.module';
import { GroupGroupManageComponent } from './group-manage/group-manage.component';
import { GroupGroupDetailComponent } from './group-detail/group-detail.component';
import { GroupUserDetailComponent } from './user-detail/user-detail.component';

const COMPONENTS = [GroupGroupManageComponent, GroupGroupDetailComponent, GroupUserDetailComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, GroupRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class GroupModule {}
