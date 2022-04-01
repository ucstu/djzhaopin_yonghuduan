/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Hrinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 修改HR信息使用的接口
   *
   * @tags HR信息
   * @name HrinfosUpdate
   * @summary 修改HR信息
   * @request PUT:/hrinfos/{hrinfoid}
   */
  hrinfosUpdate = (hrinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/hrinfos/${hrinfoid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询HR信息使用的接口
   *
   * @tags HR信息
   * @name HrinfosDetail
   * @summary 查询HR信息
   * @request GET:/hrinfos/{hrinfoid}
   */
  hrinfosDetail = (hrinfoid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/hrinfos/${hrinfoid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加HR信息使用的接口
   *
   * @tags HR信息
   * @name HrinfosCreate
   * @summary 增加HR信息
   * @request POST:/hrinfos
   */
  hrinfosCreate = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/hrinfos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
