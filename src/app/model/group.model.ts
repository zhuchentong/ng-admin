import { Type } from 'class-transformer';
import { Model } from '.';

export class GroupModel extends Model {
  public id: number;
  public name: string;
  public count: number;
  public createMethod: string;
  public createUser: string;
  public computeType: string;

  public script: string;
  @Type(() => Date)
  public createTime: Date;
  @Type(() => Date)
  public updateTime: Date;
}
