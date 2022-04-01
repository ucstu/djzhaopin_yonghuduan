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

export class Messages<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询所有消息的接口
   *
   * @tags 工具接口
   * @name MessagesList
   * @summary 查询所有消息
   * @request GET:/messages
   */
  messagesList = (params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/messages`,
      method: "GET",
      format: "json",
      ...params,
    });
}
