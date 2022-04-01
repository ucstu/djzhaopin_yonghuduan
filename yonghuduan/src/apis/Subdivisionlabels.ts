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

export class Subdivisionlabels<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询细分标签的接口
   *
   * @tags 工具接口
   * @name SubdivisionlabelsList
   * @summary 查询细分标签
   * @request GET:/subdivisionlabels
   */
  subdivisionlabelsList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/subdivisionlabels`,
      method: "GET",
      format: "json",
      ...params,
    });
}
