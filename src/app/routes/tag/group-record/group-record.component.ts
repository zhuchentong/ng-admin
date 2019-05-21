import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-tag-group-record',
  templateUrl: './group-record.component.html',
  styleUrls: ['./group-record.component.less'],
  providers: [UsersService]
})
export class TagGroupRecordComponent implements OnInit {
  public recordDataSet = [];
  public columns: STColumn[] = [
    {
      title: '状态',
      index: 'status',
      format: x => (x.status === 'active' ? '正常' : '暂停')
    },
    {
      title: '分群名称',
      index: 'groupName'
    },
    {
      title: '分群类型',
      index: 'topic'
    },
    {
      title: '分群人数',
      index: 'resCount'
    },
    {
      title: '覆盖比例',
      index: 'totalCount',
      format: x => `${((x.resCount / x.totalCount) * 100).toFixed(2)}%`
    },
    {
      title: '最后计算状态',
      index: 'lastStatus',
      format: x => (x.lastStatus === 'success' ? '成功' : '失败')
    },
    {
      title: '最后计算时间',
      index: 'lastTime'
    },
    {
      title: '更新方式',
      index: 'type',
      format: x => (x.type === 'auto' ? '自动' : '手动')
    },
    {
      title: '更新时间',
      index: 'time',
      format: x => (x.type === 'auto' ? `每天 ${x.time}` : '-')
    },
    {
      title: '创建人',
      index: 'createUser'
    }
  ];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getDivideRecordList();
  }

  private getDivideRecordList() {
    this.usersService.getAllGroupRecords().subscribe(data => {
      this.recordDataSet = data;
    });
  }

  public getDivideStateCount() {
    return {
      success: this.recordDataSet.filter(x => x.status === 'active').length,
      failure: this.recordDataSet.filter(x => x.status !== 'active').length
    };
  }
}
