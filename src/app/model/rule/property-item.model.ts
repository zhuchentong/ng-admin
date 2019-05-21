import { UserProperty } from 'app/config/enum.config';
import { Type } from 'class-transformer';

export class PropertyItem {
  public propertyName: string;
  public propertyKey: UserProperty;
  public propertyType: 'string' | 'number' | 'date';
}
