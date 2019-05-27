import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import {} from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';
import { dashBoardController } from 'app/config/service/dashboard.controller';

@Injectable()
export class DashboardService {
  constructor(private net: NetService) {}

  /**
   * 标签统计
   */
  public tag(page): Observable<any> {
    return this.net.send({
      service: dashBoardController.tag,
      page
    });
  }

  /**
   * 事件统计
   */
  public event(page): Observable<any> {
    return this.net.send({
      service: dashBoardController.event,
      page
    });
  }
}
