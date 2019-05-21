import { Type } from 'class-transformer';
import { Model } from '.';

export class TagModel extends Model {
  public frequency: 0;

  public frequencyUnit: string;

  public id: string;

  public isExclusive: boolean;

  public level1Tag: string;

  public level1TagId: number;

  public no: number;

  public tagDevMethod: number;

  public tagName: string;

  public tagNameCh: string;

  public tagTopic: string;

  public tagType: string;

  @Type(() => Date)
  public createTime: Date;

  @Type(() => Date)
  public updateTime: Date;
}
