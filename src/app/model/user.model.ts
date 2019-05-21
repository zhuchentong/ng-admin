import { Type } from 'class-transformer';
import { Model } from '.';

export class UserModel extends Model {
  public accountManager: string;
  public age: number;
  @Type(() => Date)
  public birthYear: Date;
  public channel: string;
  public city: string;
  public country: string;
  @Type(() => Date)
  public createTime: Date;
  public education: string;
  public email: string;
  @Type(() => Date)
  public firstVisitTime: Date;
  public gender: string;

  public id: string;
  public idfa: string;
  public idfv: string;
  public imei: string;
  public isFirstOac: boolean;
  @Type(() => Date)
  public lastVisitTime: Date;
  public mac: string;
  public name: string;
  public occupation: string;
  public phone: string;
  public platform: string;
  public province: string;
  @Type(() => Date)
  public signupTime: Date;
  public sumVisitDay: number;
  @Type(() => Date)
  public updateTime: Date;
  public userName: string;
  public utmCampaign: string;
  public utmContent: string;
  public utmMedium: string;
  public utmSource: string;
  public utmTerm: string;
  public xwho: string;
}
