import { Type } from 'class-transformer';
import { Model } from '.';

export class TagRecordModel extends Model {
  public createUser: string;

  public frequencyUnit: string;

  public id: 11123;

  public lastStatus: string;

  @Type(() => Date)
  public lastTime: Date;

  public resCount: number;

  public status: string;

  public tagId: string;

  public tagName: string;

  public time: string;

  public topic: string;

  public totalCount: number;

  public type: string;
}
