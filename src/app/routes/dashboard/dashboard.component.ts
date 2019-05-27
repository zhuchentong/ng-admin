import { Component, OnInit, ElementRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { DashboardService } from 'app/services/dashboard.service';
import { PageService } from '@core/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DashboardService, PageService]
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService, private pageService: PageService) {}
  chartData: any[] = [];

  public eventPieData = [
    {
      x: '用户启用',
      y: 1301
    },
    {
      x: '进入页面',
      y: 3232
    },
    {
      x: '用户存款',
      y: 2123
    },
    {
      x: '用户取款',
      y: 3232
    },
    {
      x: '购买理财',
      y: 423
    },
    {
      x: '购买保险',
      y: 1232
    },
    {
      x: '企业转账',
      y: 11114
    },
    {
      x: '工资转账',
      y: 12343
    }
  ];

  public tagPieData = [
    {
      x: '消费类',
      y: 22
    },
    {
      x: '用户类',
      y: 35
    },
    {
      x: '地点类',
      y: 22
    },
    {
      x: '产品类',
      y: 31
    },
    {
      x: '生活服务',
      y: 42
    },
    {
      x: '人身安全',
      y: 13
    },
    {
      x: '金融产品',
      y: 15
    },
    {
      x: '客户保险',
      y: 19
    }
  ];
  public total: string;

  ngOnInit() {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10
      });
    }
  }

  private getTagData() {
    return this.dashboardService.tag(this.pageService).toPromise();
  }

  private getEventData() {
    return this.dashboardService.event(this.pageService).toPromise();
  }

  private async tagRender(el: ElementRef) {
    const data = [
      {
        type: '高消费',
        value: 130021
      },
      {
        type: '北上广',
        value: 33323
      },
      {
        type: '上班族',
        value: 65656
      },
      {
        type: '家庭用户',
        value: 43434
      },
      {
        type: '月光族',
        value: 22323
      },
      {
        type: '80后',
        value: 123434
      },
      {
        type: '00后',
        value: 434341
      }
    ].sort((x, y) => x.value - y.value);
    const chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 0, 50, 80]
    });
    chart.source(data, {
      value: {
        max: 500000,
        min: 10000,
        nice: false,
        alias: '人'
      }
    });
    chart.axis('type', {
      label: {
        textStyle: {
          fill: '#8d8d8d',
          fontSize: 12
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      },
      line: {
        lineWidth: 0
      }
    });
    chart.axis('value', {
      label: null,
      title: {
        offset: 30,
        textStyle: {
          fontSize: 12,
          fontWeight: 300
        }
      }
    });
    chart.legend(false);
    chart.coord().transpose();
    chart
      .interval()
      .position('type*value')
      .size(26)
      .opacity(1)
      .label('value', {
        textStyle: {
          fill: '#8d8d8d'
        },
        offset: 10
      });
    chart.render();
  }

  public async userRender(el: ElementRef) {
    const data = await this.getEventData();
    const chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 0, 50, 80]
    });
    chart.source(
      data
        .map(x => ({
          type: x.userName,
          value: x.count
        }))
        .sort((x, y) => x.value - y.value),
      {
        value: {
          max: 4000,
          min: 1000,
          nice: false,
          alias: '次'
        }
      }
    );
    chart.axis('type', {
      label: {
        textStyle: {
          fill: '#8d8d8d',
          fontSize: 12
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      },
      line: {
        lineWidth: 0
      }
    });
    chart.axis('value', {
      label: null,
      title: {
        offset: 30,
        textStyle: {
          fontSize: 12,
          fontWeight: 300
        }
      }
    });
    chart.legend(false);
    chart.coord().transpose();
    chart
      .interval()
      .position('type*value')
      .size(26)
      .opacity(1)
      .label('value', {
        textStyle: {
          fill: '#8d8d8d'
        },
        offset: 10
      });
    chart.render();
  }

  public convertRender(el: ElementRef) {
    const { DataView } = DataSet;
    let data = [
      {
        action: '浏览网站',
        pv: 50000
      },
      {
        action: '放入购物车',
        pv: 35000
      },
      {
        action: '生成订单',
        pv: 25000
      },
      {
        action: '支付订单',
        pv: 15000
      },
      {
        action: '完成交易',
        pv: 8000
      }
    ];

    const dv = new DataView().source(data);
    dv.transform({
      type: 'percent',
      field: 'pv',
      dimension: 'action',
      as: 'percent'
    });
    data = dv.rows;
    const chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 120, 95]
    });
    chart.source(data, {
      percent: {
        nice: false
      }
    });
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li data-index={index} style="margin-bottom:4px;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>' +
        '<span style="padding-left: 16px">占比：{percent}</span><br/>' +
        '</li>'
    });
    chart
      .coord('rect')
      .transpose()
      .scale(1, -1);
    chart
      .intervalSymmetric()
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        (action, pv) => {
          return action + ' ' + pv;
        },
        {
          offset: 35,
          labelLine: {
            lineWidth: 1,
            stroke: 'rgba(0, 0, 0, 0.15)'
          }
        }
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: (percent * 100).toFixed(2) + '%',
          pv
        };
      });
    data.forEach((obj: any) => {
      // 中间标签文本
      chart.guide().text({
        top: true,
        position: {
          action: obj.action,
          percent: 'median'
        },
        content: (obj.percent * 100).toFixed(2) + '%', // 显示的文本内容
        style: {
          fill: '#fff',
          fontSize: '12',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      });
    });
    chart.render();
  }
}
