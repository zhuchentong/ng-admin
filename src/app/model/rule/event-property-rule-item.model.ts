import { UserEvent } from 'app/config/enum.config';
import { PropertyItem } from './property-item.model';
import { PropertyRuleItem } from './property-rule-item.model';
import { Type } from 'class-transformer';

export class EventPropertyRuleItem {
  @Type(() => PropertyItem)
  public property: PropertyItem;
  public condition: string;
  public value: string | number | Array<number>;
}
