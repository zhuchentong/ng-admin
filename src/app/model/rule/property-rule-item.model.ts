import { PropertyItem } from './property-item.model';
import { Type } from 'class-transformer';

export class PropertyRuleItem {
  @Type(() => PropertyItem)
  public property: PropertyItem;
  public condition: string;
  public value: string | number | Array<number>;
}
