import { Expose, Type } from 'class-transformer';

import { Model } from '.';

export class ActivityModel extends Model {
  public activityChannel: string;
  public activityCode: string;
  public activityName: string;
  public activityType: string;
  public dateRange: string;
  @Type(() => Date)
  public endDate: Date;
  public groupType: string;
  public keyword: string;
  public model: string;
  public prodCode: string;
  public prodCode1: string;
  public prodName: string;
  public prodName1: string;
  public prodType: string;
  public prodType1: string;
  public productGroup: string;
  @Type(() => Date)
  public startDate: Date;
  public target: string;
  public userGroup;
}
