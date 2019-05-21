import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PropertyRuleItem } from 'app/model/rule/property-rule-item.model';
import { EventRuleItem } from 'app/model/rule/event-rule-item.model';
import { UserEvent, UserProperty } from 'app/config/enum.config';
import { PropertyItem } from 'app/model/rule/property-item.model';
import { EventPropertyRuleItem } from 'app/model/rule/event-property-rule-item.model';

@Component({
  selector: 'app-event-rule-item',
  templateUrl: './event-rule-item.component.html',
  styleUrls: ['./event-rule-item.component.less']
})
export class EventRuleItemComponent implements OnInit {
  @Input()
  rule: EventRuleItem;
  @Output()
  remove = new EventEmitter();

  public propertyContentVisible = false;
  public conditionContentVisible = false;
  public eventContentVisible = false;
  public eventList = [
    {
      key: UserEvent.LAUNCH,
      label: '启动',
      type: 'string'
    },
    {
      key: UserEvent.CLOSE,
      label: '关闭',
      type: 'number'
    },
    {
      key: UserEvent.LOGIN,
      label: '登录',
      type: 'string'
    }
  ];

  public propertyList = [
    {
      key: 'count',
      label: '总次数',
      type: 'string'
    },
    {
      key: 'savecount',
      label: '存款利率去重数',
      type: 'number'
    },
    {
      key: 'productcount',
      label: '理财产品去重数',
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

  onSelectEvent(e) {
    this.rule.event = e.label;
    this.eventContentVisible = false;
  }

  onRemoveRuleItem() {
    this.remove.emit(this.rule);
  }

  onRangeChange(e) {
    console.log(e);
  }

  onAddRuleItem() {
    const ruleItem = new PropertyRuleItem();
    const propertyItem = new PropertyItem();
    propertyItem.propertyKey = UserProperty.ID;
    propertyItem.propertyName = '总次数';
    propertyItem.propertyType = 'number';
    ruleItem.property = propertyItem;
    ruleItem.condition = '包含';
    ruleItem.value = '';
    this.rule.children.push(ruleItem);
  }

  onRemoveEventRuleItem(item, index, ruleGroup) {
    ruleGroup.splice(index, 1);
  }
}
