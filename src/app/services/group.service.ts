import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { adminController } from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';
import { groupController } from 'app/config/service/group.controller';
import { GroupModel } from 'app/model/group.model';
import { UserModel } from 'app/model/user.model';

@Injectable()
export class GroupService {
  constructor(private net: NetService) {}

  /**
   * 获取分组状态列表
   */
  public getGroupList(params, { page }): Observable<GroupModel[]> {
    return this.net.send({
      service: groupController.getGroupList,
      params,
      page,
      model: GroupModel
    });
  }

  public getUserList(id, { page }): Observable<UserModel[]> {
    return this.net.send({
      service: groupController.getUserList,
      page,
      model: UserModel,
      append: [id]
    });
  }
}
