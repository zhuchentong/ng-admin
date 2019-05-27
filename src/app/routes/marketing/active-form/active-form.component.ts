import { Component, OnInit } from '@angular/core';
import { _HttpClient, DatePipe } from '@delon/theme';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivitiesService } from 'app/services/activities.service';

@Component({
  selector: 'app-marketing-active-form',
  templateUrl: './active-form.component.html',
  providers: [ActivitiesService, DatePipe]
})
export class MarketingActiveFormComponent implements OnInit {
  public activeForm: FormGroup;
  public isCreate;
  constructor(
    private activitiesService: ActivitiesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService: NzMessageService,
    private datePipe: DatePipe
  ) {}

  public userGroup = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.isCreate = !id;

    this.activeForm = this.fb.group({
      activityName: ['', [Validators.required]],
      keyword: ['', [Validators.required]],
      activityType: ['', [Validators.required]],
      target: ['', [Validators.required]],
      model: ['', [Validators.required]],
      groupType: ['客户-产品适配模型'],
      productGroup: ['', [Validators.required]],
      dataRange: [[]],
      prodName: ['', [Validators.required]],
      prodName1: ['', [Validators.required]],
      prodType: ['', [Validators.required]],
      prodType1: ['', [Validators.required]],
      userGroup: [
        [
          { label: '理财偏好型', value: '理财偏好型' },
          { label: '勤俭节约型', value: '勤俭节约型' },
          { label: '月光族', value: '月光族' },
          { label: '优惠敏感型', value: '优惠敏感型' },
          { label: '网购一族', value: '网购一族' }
        ]
      ]
    });
  }

  public onCreate() {
    const data = Object.assign({}, this.activeForm.value);
    const [start, end] = data.dataRange;
    data.userGroup = data.userGroup.map(x => x.value);
    data.startDate = start && this.datePipe.transform(start, 'YYYY-MM-DD');
    data.endDate = end && this.datePipe.transform(end, 'YYYY-MM-DD');
    this.activitiesService
      .create({
        activityName: data.activityName,
        keyword: data.keyword,
        activityType: data.activityType,
        target: data.target,
        model: data.model,
        groupType: data.groupType,
        productGroup: data.productGroup,
        userGroup: JSON.stringify(data.userGroup),
        startDate: data.startDate,
        endDate: data.endDate,
        prodName: data.prodName,
        prodName1: data.prodName1,
        prodType: data.prodType,
        prodType1: data.prodType1
      })
      .subscribe(() => {});
  }
}
