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

export class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 这是注册账号使用的接口
   *
   * @tags 账号接口
   * @name AccountsCreate
   * @summary 注册账号
   * @request POST:/accounts
   */
  accountsCreate = (
    data: { phoneNumber: string; verificationCode: string; accountType: 1 | 2 },
    params: RequestParams = {},
  ) =>
    this.request<any, any>({
      path: `/accounts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 这是一个用来登录的接口
   *
   * @tags 账号接口
   * @name AccountsUpdate
   * @summary 登录账号
   * @request PUT:/accounts
   */
  accountsUpdate = (data: { phoneNumber: string; verificationCode: string }, params: RequestParams = {}) =>
    this.request<{ token: string; accountInfo: any }, any>({
      path: `/accounts`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有消息的接口
   *
   * @tags 账号接口
   * @name AccountsDelete
   * @summary 注销账号
   * @request DELETE:/accounts/{accountid}
   */
  accountsDelete = (
    accountid: string,
    data: { phoneNumber: string; verificationCode: string },
    params: RequestParams = {},
  ) =>
    this.request<any, any>({
      path: `/accounts/${accountid}`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
