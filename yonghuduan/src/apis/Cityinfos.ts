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

export class Cityinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询城市信息的接口
   *
   * @tags 工具接口
   * @name CityinfosList
   * @summary 查询城市信息
   * @request GET:/cityinfos
   */
  cityinfosList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/cityinfos`,
      method: "GET",
      format: "json",
      ...params,
    });
}
