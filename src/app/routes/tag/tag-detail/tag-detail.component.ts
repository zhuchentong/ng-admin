import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ActivatedRoute } from '@angular/router';
import { List } from 'linqts';
import { TagsService } from 'app/services/tags.service';
import { TagModel } from 'app/model/tag.model';
import { UserModel } from 'app/model/user.model';

@Component({
  selector: 'app-tag-tag-detail',
  templateUrl: './tag-detail.component.html',
  providers: [TagsService]
})
export class TagTagDetailComponent implements OnInit {
  public tagTypeDict = {
    0: '数据分类',
    1: '数据统计'
  };
  @ViewChild('st') st: STComponent;

  public userColumns: STColumn[] = [
    {
      title: '姓名',
      render: 'name'
    },
    { title: '性别', index: 'gender' },
    { title: '邮箱', index: 'email' },
    { title: '学历', index: 'education' },
    { title: '城市', index: 'city' }
  ];
  public tagInfo: TagModel;
  public tagRecord;
  public tagUserList: UserModel[] = [];

  constructor(private tagsService: TagsService, private route: ActivatedRoute) {}

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTagInfo(id);
    this.getTagRecord(id);
    this.getUserList(id);
  }

  /**
   * 获取标签信息
   */
  private getTagInfo(id) {
    this.tagsService.getTagByTagId(id).subscribe(data => {
      this.tagInfo = data;
      console.log(data);
    });
  }

  /**
   * 获取标签记录
   */
  private getTagRecord(id) {
    this.tagsService.getTagRecordByTagId(id).subscribe(data => {
      if (data.length) {
        const [record] = data;
        this.tagRecord = record;
      }
    });
  }

  private getUserList(id) {
    this.tagsService.getUserInfoByTagId(id).subscribe(data => {
      this.tagUserList = data;
    });
  }
}
