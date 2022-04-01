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

export class Regionalinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询地区信息的接口
   *
   * @tags 工具接口
   * @name RegionalinfosList
   * @summary 查询地区信息
   * @request GET:/regionalinfos
   */
  regionalinfosList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/regionalinfos`,
      method: "GET",
      format: "json",
      ...params,
    });
}
