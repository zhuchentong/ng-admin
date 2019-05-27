import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ActivitiesService } from 'app/services/activities.service';
import { PageService } from '@core/http';
import { ActivityModel } from 'app/model/activity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-active-list',
  templateUrl: './active-list.component.html',
  providers: [ActivitiesService, PageService]
})
export class MarketingActiveListComponent implements OnInit {
  public dataSet: ActivityModel[] = [];

  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '活动名称', index: 'activityName', render: 'activityName' },
    { title: '活动类型', index: 'activityType' },
    { title: '分群类型', index: 'groupType' },
    { title: '关键字', index: 'keyword' },
    { title: '营销模型', index: 'model' },
    { title: '营销渠道', index: 'activityChannel' },
    { title: '营销模型', index: 'model' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(
    private activitiesService: ActivitiesService,
    private modal: ModalHelper,
    private pageService: PageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.query();
  }

  add() {
    this.router.navigate(['marketing/form']);
  }

  query() {
    this.activitiesService.getAll({ page: this.pageService }).subscribe(data => {
      this.dataSet = data;
    });
  }
}
