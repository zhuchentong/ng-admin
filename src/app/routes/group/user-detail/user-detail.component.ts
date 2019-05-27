import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'app/services/users.service';
import { DatePipe } from '@angular/common';
import { G2TagCloudData } from '@delon/chart';
import { TagsOutline } from '@ant-design/icons-angular/icons/public_api';

@Component({
  selector: 'app-group-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [UsersService]
})
export class GroupUserDetailComponent implements OnInit {
  public userId: string;
  public user: any;
  public events: any[] = [];
  public eventStatistic = [];
  public userTags: G2TagCloudData[] = [];
  constructor(private route: ActivatedRoute, private usersService: UsersService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserData();
    this.getUserEvent();
    this.getUserTag();
  }

  getUserData() {
    this.usersService.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
  }

  getUserEvent() {
    this.usersService.getAction(this.userId).subscribe(data => {
      this.events = data;
      if (data) {
        this.getEventStatistic();
      }
    });
  }

  getUserTag() {
    this.usersService.getTagByUserId(this.userId).subscribe(data => {
      if (!data) {
        return;
      }

      const tags = data.map(tag => ({
        x: tag.level1Tag,
        value: Math.floor(Math.random() * 100),
        category: tag.tagTopic
      }));

      this.userTags = tags;
    });
  }

  getEventStatistic() {
    const statistic = {};

    this.events.forEach(({ eventTime }: { eventTime: Date }) => {
      const date = this.datePipe.transform(eventTime, 'yyyy-MM-dd');
      statistic[date] = (statistic[date] || 0) + 1;
    });

    this.eventStatistic = Object.entries(statistic)
      .map(([key, value]) => ({
        x: key,
        y: value
      }))
      .sort((x, y) => (x > y ? 1 : -1));
  }
}
