import { NetService } from '@core/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tagsController } from 'app/config/service/tags.controller';
import { TagModel } from 'app/model/tag.model';
import { TagRecordModel } from 'app/model/tag-record.model';
import { UserModel } from 'app/model/user.model';

@Injectable()
export class TagsService {
  constructor(private net: NetService) {}

  /**
   * 用户登陆
   */
  public getAllTags(): Observable<TagModel[]> {
    return this.net.send({
      service: tagsController.getAllTags,
      model: TagModel
    });
  }

  public getAllTagRecords(): Observable<TagRecordModel[]> {
    return this.net.send({
      service: tagsController.getAllTagRecords,
      model: TagRecordModel
    });
  }

  public getTagByTagId(id): Observable<TagModel> {
    return this.net.send({
      service: tagsController.getTagByTagId,
      model: TagModel,
      params: {
        tagId: id
      }
    });
  }

  public getTagRecordByTagId(id): Observable<TagRecordModel[]> {
    return this.net.send({
      service: tagsController.getTagRecordByTagId,
      model: TagRecordModel,
      params: {
        tagId: id
      }
    });
  }

  public getUserInfoByTagId(id): Observable<UserModel[]> {
    return this.net.send({
      service: tagsController.getUserInfoByTagId,
      model: UserModel,
      params: {
        tagId: id
      }
    });
  }
}
