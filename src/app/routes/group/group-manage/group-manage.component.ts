import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema, SFComponent } from '@delon/form';
import { GroupService } from 'app/services/group.service';
import { PageService } from '@core/http';

@Component({
  selector: 'app-group-group-manage',
  templateUrl: './group-manage.component.html',
  providers: [GroupService, PageService]
})
export class GroupGroupManageComponent implements OnInit {
  @ViewChild('st')
  st: STComponent;
  @ViewChild('sf')
  sf: SFComponent;
  public groupDataSet = [];

  searchSchema: SFSchema = {
    properties: {
      createMethod: {
        type: 'string',
        title: '创建方式',
        enum: [{ label: '所有分群', value: '' }, { label: '自定义分群', value: '自定义分群' }],
        default: '',
        ui: {
          widget: 'select'
        }
      },
      name: {
        type: 'string',
        title: '分群名称'
      }
    }
  };

  columns: STColumn[] = [
    {
      title: '分群名称',
      render: 'name'
    },
    { title: '用户数', type: 'number', index: 'count' },
    { title: '创建方法', index: 'createMethod' },
    { title: '创建人', index: 'createUser' },
    { title: '分群计算类型', index: 'computeType' },
    { title: '最近计算时间', type: 'date', index: 'updateTime' }
  ];

  constructor(private groupService: GroupService, private pageService: PageService) {}

  ngOnInit() {
    this.getGroupList();
  }

  /**
   * 获取群组列表
   */
  getGroupList() {
    this.groupService.getGroupList(this.sf.value, { page: this.pageService }).subscribe(data => {
      this.groupDataSet = data || [];
    });
  }
}
