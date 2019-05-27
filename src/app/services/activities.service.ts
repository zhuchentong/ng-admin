import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { adminController } from 'app/config/service/admin.controller';
import { Injectable } from '@angular/core';
import { activitiesController } from 'app/config/service/activities.controller';
import { ActivityModel } from 'app/model/activity.model';

@Injectable()
export class ActivitiesService {
  constructor(private net: NetService) {}

  /**
   * 用户登陆
   */
  public getAll({ page }): Observable<ActivityModel[]> {
    return this.net.send({
      service: activitiesController.getAll,
      page,
      model: ActivityModel
    });
  }

  public getById(id): Observable<ActivityModel> {
    return this.net.send({
      service: activitiesController.getById,
      model: ActivityModel
    });
  }

  public create(params): Observable<any> {
    return this.net.send({
      service: activitiesController.create,
      params
    });
  }

  public delete(id): Observable<ActivityModel> {
    return this.net.send({
      service: activitiesController.delete,
      append: [id]
    });
  }

  public modify(params: ActivityModel): Observable<ActivityModel> {
    return this.net.send({
      service: activitiesController.modify,
      params
      // append: [params.id]
    });
  }
}
