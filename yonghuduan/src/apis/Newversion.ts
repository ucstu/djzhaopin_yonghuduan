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

export class Newversion<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询最新版本的接口
   *
   * @tags 工具接口
   * @name NewversionList
   * @summary 查询新版本
   * @request GET:/newversion
   */
  newversionList = (params: RequestParams = {}) =>
    this.request<{ newVersion: string }, any>({
      path: `/newversion`,
      method: "GET",
      format: "json",
      ...params,
    });
}
