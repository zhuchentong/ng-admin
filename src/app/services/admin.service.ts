import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { adminController } from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  constructor(private net: NetService) {}

  /**
   * 用户登陆
   */
  public login(params): Observable<any> {
    return this.net.send({
      service: adminController.login,
      params
    });
  }
}
