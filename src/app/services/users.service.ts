import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { adminController } from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';
import { groupController } from 'app/config/service/group.controller';
import { usersController } from 'app/config/service/users.controller';
import { UserModel } from 'app/model/user.model';
import { EventModel } from 'app/model/event.model';
import { TagModel } from 'app/model/tag.model';

@Injectable()
export class UsersService {
  constructor(private net: NetService) {}

  /**
   * 获取分组状态列表
   */
  public getAllGroupRecords(): Observable<any> {
    return this.net.send({
      service: usersController.getAllGroupRecords
    });
  }

  /**
   * 获取分组状态列表
   */
  public getUser(id): Observable<UserModel> {
    return this.net.send({
      service: usersController.getUser,
      append: [id],
      model: UserModel
    });
  }

  /**
   * 获取分组状态列表
   */
  public getAction(id): Observable<EventModel[]> {
    return this.net.send({
      service: usersController.getAction,
      append: [id],
      model: EventModel
    });
  }

  /**
   * 获取分组状态列表
   */
  public getTagByUserId(id): Observable<TagModel[]> {
    return this.net.send({
      service: usersController.getTagByUserId,
      params: {
        userId: id
      },
      model: TagModel
    });
  }
}
