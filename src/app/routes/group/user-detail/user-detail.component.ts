import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-group-user-detail',
  templateUrl: './user-detail.component.html'
})
export class GroupUserDetailComponent implements OnInit {
  public uniqueId: string;
  public user: any;
  public events: any[] = [];
  public eventStatistic = [];
  public userTags = [];
  constructor(private route: ActivatedRoute, private http: _HttpClient) {}

  ngOnInit() {
    this.uniqueId = this.route.snapshot.paramMap.get('uniqueId');
    this.getUserData();
    this.getUserEvent();
    this.getUserTag();
  }

  getUserData() {
    // this.http.get(`/api/user/${this.uniqueId}`).subscribe(data => {
    //   this.user = data;
    // });
  }

  getUserEvent() {
    // this.http.get(`/api/event/${this.uniqueId}`).subscribe(data => {
    //   this.events = data;
    //   this.getEventStatistic();
    // });
  }

  getUserTag() {
    // this.http.get(`/api/tag/user/${this.uniqueId}`).subscribe(data => {
    //   console.log(data);
    //   this.userTags = data.map(x => ({
    //     x: x.tag,
    //     value: x.value
    //   }));
    // });
  }

  getEventStatistic() {
    const statistic = {};
    this.events.forEach(({ contextDate }) => {
      const date = contextDate.split(' ')[0];
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
