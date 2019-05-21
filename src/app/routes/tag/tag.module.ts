import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TagRoutingModule } from './tag-routing.module';
import { TagTagManageComponent } from './tag-manage/tag-manage.component';
import { TagTagListComponent } from './tag-list/tag-list.component';
import { TagTagRecordComponent } from './tag-record/tag-record.component';
import { TagTagDetailComponent } from './tag-detail/tag-detail.component';
import { TagGroupRecordComponent } from './group-record/group-record.component';

const COMPONENTS = [TagTagManageComponent, TagTagDetailComponent];
const COMPONENTS_NOROUNT = [TagTagListComponent, TagTagRecordComponent, TagGroupRecordComponent];

@NgModule({
  imports: [SharedModule, TagRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class TagModule {}
