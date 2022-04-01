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

export class Positiontypes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询职位类型的接口
   *
   * @tags 工具接口
   * @name PositiontypesList
   * @summary 查询职位类型
   * @request GET:/positiontypes
   */
  positiontypesList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/positiontypes`,
      method: "GET",
      format: "json",
      ...params,
    });
}
