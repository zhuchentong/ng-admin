import { Type, Transform } from 'class-transformer';
import { Model } from '.';

export class EventModel extends Model {
  public appVersion: string;
  public brand: string;
  public carrierName: string;
  public channel: string;
  @Type(() => Date)
  public createTime: Date;
  public deviceId: string;
  @Transform(value => JSON.parse(value), { toClassOnly: true })
  public eventMsg: any;
  public eventName: string;
  @Type(() => Date)
  public eventTime: Date;
  public id: number;
  public ip: string;
  public model: string;
  public network: string;
  public os: string;
  public osVersion: string;
  public platform: string;
  public screenHeight: number;
  public screenWidth: number;
  @Type(() => Date)
  public updateTime: Date;
  public userId: string;
}
