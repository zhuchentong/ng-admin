import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'app/services/group.service';
import { PageService } from '@core/http';

@Component({
  selector: 'app-group-group-detail',
  templateUrl: './group-detail.component.html',
  providers: [GroupService, PageService]
})
export class GroupGroupDetailComponent implements OnInit {
  public groupName: string;
  public group;
  public isCreate: boolean;

  public userList: any[] = [];

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
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

  constructor(
    private groupService: GroupService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private modal: ModalHelper
  ) {}

  public ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.isCreate = !name;
    // this.groupName = name || '新建';
    this.isCreate || this.getUserList(id);
    // this.isCreate || this.getgroupRule(id);
  }

  /**
   * 获取用户列表
   */
  public getUserList(id) {
    this.groupService
      .getUserList(id, {
        page: this.pageService
      })
      .subscribe(data => {
        this.userList = data;
      });
  }

  public getgroupRule(id) {
    // this.http.get(`/api/group/${id}`).subscribe(data => {
    //   this.group = data;
    // });
  }

  public onSave() {}
}
