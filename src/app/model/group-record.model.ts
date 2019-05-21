import { Type } from 'class-transformer';
import { Model } from '.';

export class GroupRecordModel extends Model {
  public createUser: string;

  public frequencyUnit: string;

  public id: number;

  public lastStatus: string;

  @Type(() => Date)
  public lastTime: Date;

  public resCount: number;

  public status: string;

  public groupId: string;

  public groupName: string;

  public time: string;

  public topic: string;

  public totalCount: number;

  public type: string;
}
