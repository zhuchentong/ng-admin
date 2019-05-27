import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { appConfig } from 'app/config/app.config';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Model } from 'app/model';
import { classToPlain, plainToClass } from 'class-transformer';
import { PageService, IRequestOption } from 'app/core/http';
import * as qs from 'qs';
import request from 'request';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  // 请求头部信息
  private headers = new HttpHeaders();
  constructor(private http: HttpClient) {}

  /**
   * 发送网络通讯请求
   * @param options 请求选项
   */
  public send(options: IRequestOption): Observable<any> {
    // 生成请求URL
    const requestUrl: string = this.generateRequestUrl(options.service, options.append);
    // 生成请求METHOD
    const requestMethod: string = options.service.method;
    this.generateRequestLoading(options);
    console.log(this.generateRequestBody(options));
    // return request(requestUrl,{
    //   json: true,
    //   method:requestMethod,
    //   body: this.generateRequestBody(options),
    //   qs:
    // })
    return this.http
      .request(requestMethod, requestUrl, {
        body: this.generateRequestBody(options),
        headers: this.generateRequestHeader(options),
        observe: 'response',
        responseType: 'json',
        params: this.generateRequestParams(options)
      })
      .pipe(
        // 取body数据
        map(response => {
          const body = response.body as any;
          const { data } = body;
          // 更新分页数据
          if (options.page) {
            options.page.total = body.totalApp;
          }

          return options.model ? plainToClass(options.model, data) : data;
        }),
        finalize(() => {})
      );
  }

  /**
   * 根据服务配置生成通讯地地址
   * @param options 请求选项
   */
  private generateRequestUrl(options: any, append: string[] = []): string {
    return [appConfig.server, options.controller, options.action, ...append].filter(x => x).join('/');
  }

  /**
   * 根据服务配置返回Search参数
   * @param options 请求选项
   */
  private generateRequestParams(options): HttpParams {
    if (!['GET', 'DELETE'].includes(options.service.method)) {
      return null;
    }

    // TODO:分页处理
    let params = options.params;

    if (options.params instanceof Model) {
      params = classToPlain(params);
    }

    if (options.page) {
      params = Object.assign(params || {}, this.getPageParams(options.page));
    }

    return new HttpParams({
      fromString: qs.stringify(params)
    });
  }

  /**
   * 根据服务配置返回Body参数
   * @param options 请求选项
   */
  private generateRequestBody(options): object {
    if (!['POST', 'PUT'].includes(options.service.method)) {
      return null;
    }

    let params = options.params;

    // 如果参数继承Model
    if (params instanceof Model) {
      return classToPlain(params);
    }

    if (options.page) {
      params = Object.assign(params || {}, this.getPageParams(options.page));
    }

    return qs.stringify(params);
  }

  private getPageParams(page: PageService) {
    return page.getConfig();
  }

  /**
   * 生成头部信息
   */
  private generateRequestHeader(options): HttpHeaders {
    // TODO:自定义header
    return this.headers;
  }

  /**
   * 生成请求实的Loading
   * @param options 请求选项
   */
  private generateRequestLoading(options): any {
    if (!options || !options.loading) {
      return;
    }
  }
}
