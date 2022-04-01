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

export class Files<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 上传文件的接口
   *
   * @tags 工具接口
   * @name FilesUpdate
   * @summary 上传文件
   * @request PUT:/files
   */
  filesUpdate = (data: { file?: File }, params: RequestParams = {}) =>
    this.request<{ fileId: string }, any>({
      path: `/files`,
      method: "PUT",
      body: data,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
