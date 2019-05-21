import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { adminController } from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';
import { groupController } from 'app/config/service/group.controller';
import { usersController } from 'app/config/service/users.controller';

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
}
