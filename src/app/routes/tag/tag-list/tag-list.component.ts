import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { STColumn } from '@delon/abc';
import { TagsService } from 'app/services/tags.service';
import { List } from 'linqts';
@Component({
  selector: 'app-tag-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tar-list.component.less'],
  providers: [TagsService]
})
export class TagTagListComponent implements OnInit {
  public tagTreeData = [];
  public searchValue;
  public currentCatalog;
  public tagColumns: STColumn[] = [
    {
      title: '标签名称',
      render: 'name'
    },
    { title: '标签属性', index: 'tagType', format: x => this.tagTypeDict[x.tagType] },
    { title: '创建时间', type: 'date', index: 'createTime' },
    { title: '更新时间', type: 'date', index: 'updateTime' }
  ];

  private tagTypeDict = {
    0: '数据分类',
    1: '数据统计'
  };

  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.getTagTree();
  }

  /**
   * 获取tag树形结构
   */
  getTagTree() {
    this.tagsService.getAllTags().subscribe(tags => {
      // 获取一级组
      const generateGroup = (list, groupKey) =>
        Object.entries(new List([...list]).GroupBy(x => x[groupKey], x => x)).map(([key, value]: [string, any[]]) => ({
          key,
          title: key,
          tags: value,
          isLeaf: true
        }));

      // 获取二级组
      const grouper = generateGroup(tags, 'tagTopic').map((item: any) => {
        const children = generateGroup(item.tags, 'level1Tag');
        item.children = children;
        item.isLeaf = !(item.children && item.children.length);
        return item;
      });

      this.tagTreeData = grouper;
    });
  }

  public onGetTagList({ node }) {
    const data = node.origin;
    if (data.isLeaf) {
      this.currentCatalog = data;
    }
  }
}
