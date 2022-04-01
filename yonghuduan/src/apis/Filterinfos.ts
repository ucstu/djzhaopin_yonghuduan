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

import { HttpClient, RequestParams } from "./http-client";

export class Filterinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询筛选信息的接口
   *
   * @tags 工具接口
   * @name FilterinfosList
   * @summary 查询筛选信息
   * @request GET:/filterinfos
   */
  filterinfosList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/filterinfos`,
      method: "GET",
      format: "json",
      ...params,
    });
}
