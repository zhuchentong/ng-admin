import { Component, OnInit, Host } from '@angular/core';
import { EventRuleItem } from 'app/model/rule/event-rule-item.model';
import { PropertyRuleItem } from 'app/model/rule/property-rule-item.model';
import { PropertyItem } from 'app/model/rule/property-item.model';
import { UserProperty, UserEvent } from 'app/config/enum.config';
import { classToPlain } from 'class-transformer';

@Component({
  selector: 'app-rule-edit',
  templateUrl: './rule-edit.component.html',
  styleUrls: ['./rule-edit.component.less']
})
export class RuleEditComponent implements OnInit {
  public ruleList: Array<Array<PropertyRuleItem | EventRuleItem>> = [];

  constructor() {}

  ngOnInit() {}

  public addPropertyRule(group?: Array<PropertyRuleItem | EventRuleItem>) {
    const ruleItem = new PropertyRuleItem();
    const propertyItem = new PropertyItem();

    propertyItem.propertyKey = UserProperty.ID;
    propertyItem.propertyName = '用户ID';
    propertyItem.propertyType = 'string';
    ruleItem.property = propertyItem;

    ruleItem.condition = '等于';
    ruleItem.value = '';

    group ? group.push(ruleItem) : this.ruleList.push([ruleItem]);
  }

  public addEventRule(group?: Array<PropertyRuleItem | EventRuleItem>) {
    console.log(JSON.stringify(classToPlain(this.ruleList)));
    const ruleItem = new EventRuleItem();
    const propertyItem = new PropertyItem();

    ruleItem.event = '启动';

    propertyItem.propertyKey = UserProperty.ID;
    propertyItem.propertyName = '总次数';
    propertyItem.propertyType = 'number';
    ruleItem.property = propertyItem;

    ruleItem.condition = '大于等于';
    ruleItem.value = 1;

    ruleItem.range = [new Date('2019-05-11'), new Date('2019-05-15')];
    ruleItem.children = [];
    group ? group.push(ruleItem) : this.ruleList.push([ruleItem]);
  }

  public getRuleType(ruleItem: EventRuleItem | PropertyRuleItem) {
    switch (true) {
      case ruleItem instanceof EventRuleItem:
        return 'event';
      case ruleItem instanceof PropertyRuleItem:
        return 'property';
    }
  }

  public onRemoveRuleItem(ruleItem, index, ruleGroup: Array<PropertyRuleItem | EventRuleItem>) {
    // remove rule item
    ruleGroup.splice(index, 1);
    // remove rule group
    if (!ruleGroup.length) {
      const groupIndex = this.ruleList.findIndex(x => x === ruleGroup);
      this.ruleList.splice(groupIndex, 1);
    }
  }
}
