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

export class Recommendations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询推荐人才的接口
   *
   * @tags 工具接口
   * @name RecommendationsList
   * @summary 查询推荐人才
   * @request GET:/recommendations
   */
  recommendationsList = (params: RequestParams = {}) =>
    this.request<{ userInfo: any; jobExpectation: any }, any>({
      path: `/recommendations`,
      method: "GET",
      format: "json",
      ...params,
    });
}
