import { UserEvent } from 'app/config/enum.config';
import { PropertyItem } from './property-item.model';
import { PropertyRuleItem } from './property-rule-item.model';
import { EventPropertyRuleItem } from './event-property-rule-item.model';
import { Type } from 'class-transformer';

export class EventRuleItem {
  public event: string;
  @Type(() => PropertyItem)
  public property: PropertyItem;
  public condition: string;
  public value: string | number | Array<number>;
  @Type(() => Date)
  public range: Date[];
  @Type(() => EventPropertyRuleItem)
  public children?: EventPropertyRuleItem[];
}
