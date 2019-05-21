import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { TagsService } from 'app/services/tags.service';

@Component({
  selector: 'app-tag-tag-record',
  templateUrl: './tag-record.component.html',
  styleUrls: ['./tag-record.component.less'],
  providers: [TagsService]
})
export class TagTagRecordComponent implements OnInit {
  public recordDateSet = [];
  public columns: STColumn[] = [
    {
      title: '状态',
      index: 'status',
      format: x => (x.status === 'active' ? '正常' : '暂停')
    },
    {
      title: '标签名称',
      index: 'tagName'
    },
    {
      title: '标签类型',
      index: 'topic'
    },
    {
      title: '标签人数',
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
      index: 'lastTime',
      type: 'date'
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
  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.getTagRecordList();
  }

  /**
   * 获取标签记录列表
   */
  private getTagRecordList() {
    this.tagsService.getAllTagRecords().subscribe(data => {
      this.recordDateSet = data;
    });
  }

  private getTagStateCount() {
    return {
      success: this.recordDateSet.filter(x => x.status === 'active').length,
      failure: this.recordDateSet.filter(x => x.status !== 'active').length
    };
  }
}
