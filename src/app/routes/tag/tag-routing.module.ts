import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagTagManageComponent } from './tag-manage/tag-manage.component';
import { TagTagListComponent } from './tag-list/tag-list.component';
import { TagTagRecordComponent } from './tag-record/tag-record.component';
import { TagTagDetailComponent } from './tag-detail/tag-detail.component';
import { TagGroupRecordComponent } from './group-record/group-record.component';

const routes: Routes = [
  { path: 'tag-manage', component: TagTagManageComponent },
  { path: 'tag-detail', component: TagTagDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule {}
