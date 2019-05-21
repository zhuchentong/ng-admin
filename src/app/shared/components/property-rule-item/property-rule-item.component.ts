import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventRuleItem } from 'app/model/rule/event-rule-item.model';
import { PropertyRuleItem } from 'app/model/rule/property-rule-item.model';
import { PropertyItem } from 'app/model/rule/property-item.model';
import { UserProperty } from 'app/config/enum.config';

@Component({
  selector: 'app-property-rule-item',
  templateUrl: './property-rule-item.component.html',
  styleUrls: ['./property-rule-item.component.less']
})
export class PropertyRuleItemComponent implements OnInit {
  @Input()
  rule: PropertyRuleItem;
  @Output()
  remove = new EventEmitter();

  public propertyContentVisible = false;
  public conditionContentVisible = false;
  public propertyList = [
    {
      key: UserProperty.ID,
      label: '用户ID',
      type: 'string'
    },
    {
      key: UserProperty.AGE,
      label: '年龄',
      type: 'number'
    },
    {
      key: UserProperty.EMAIL,
      label: '邮箱',
      type: 'string'
    }
  ];

  public conditionList = [
    {
      key: '等于',
      label: '等于'
    },
    {
      key: '大于',
      label: '大于'
    },
    {
      key: '小于',
      label: '小于'
    }
  ];

  constructor() {}

  ngOnInit() {}

  geetPropertyDict() {}

  onSelectCondition(item) {
    this.rule.condition = item;
    this.conditionContentVisible = false;
  }

  onSelectProperty(item) {
    const propertyItem = new PropertyItem();
    propertyItem.propertyKey = item.key;
    propertyItem.propertyName = item.label;
    propertyItem.propertyType = item.type;
    this.rule.property = propertyItem;
    this.propertyContentVisible = false;
  }

  onRemoveRuleItem() {
    this.remove.emit(this.rule);
  }
}
