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

export class Companyinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询职位信息使用的接口
   *
   * @tags 公司信息/职位信息
   * @name PositioninfosDetail
   * @summary 查询所有职位信息
   * @request GET:/companyinfos/{companyinfoid}/positioninfos
   */
  positioninfosDetail = (
    companyinfoid: string,
    query?: {
      name?: string;
      salary?: string;
      workingyears?: string;
      education?: string;
      directiontags?: string;
      workarea?: string;
      positiontype?: string;
      scale?: string;
      financingstage?: string;
      comprehension?: string;
      order?: string;
      workingplace?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<any[], any>({
      path: `/companyinfos/${companyinfoid}/positioninfos`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description 增加职位信息的接口
   *
   * @tags 公司信息/职位信息
   * @name PositioninfosCreate
   * @summary 增加职位信息
   * @request POST:/companyinfos/{companyinfoid}/positioninfos
   */
  positioninfosCreate = (companyinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}/positioninfos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 删除职位信息使用的接口
   *
   * @tags 公司信息/职位信息
   * @name PositioninfosDelete
   * @summary 删除职位信息
   * @request DELETE:/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}
   */
  positioninfosDelete = (companyinfoid: string, positioninfoid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}/positioninfos/${positioninfoid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 修改职位信息使用的接口
   *
   * @tags 公司信息/职位信息
   * @name PositioninfosUpdate
   * @summary 修改职位信息
   * @request PUT:/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}
   */
  positioninfosUpdate = (companyinfoid: string, positioninfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}/positioninfos/${positioninfoid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询职位信息使用的接口
   *
   * @tags 公司信息/职位信息
   * @name PositioninfosDetail2
   * @summary 查询职位信息
   * @request GET:/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}
   * @originalName positioninfosDetail
   * @duplicate
   */
  positioninfosDetail2 = (companyinfoid: string, positioninfoid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}/positioninfos/${positioninfoid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 查询公司信息的接口
   *
   * @tags 公司信息
   * @name CompanyinfosDetail
   * @summary 查询公司信息
   * @request GET:/companyinfos/{companyinfoid}
   */
  companyinfosDetail = (companyinfoid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 修改公司信息使用的接口
   *
   * @tags 公司信息
   * @name CompanyinfosUpdate
   * @summary 修改公司信息
   * @request PUT:/companyinfos/{companyinfoid}
   */
  companyinfosUpdate = (companyinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos/${companyinfoid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 增加公司使用的接口
   *
   * @tags 公司信息
   * @name CompanyinfosCreate
   * @summary 增加公司信息
   * @request POST:/companyinfos
   */
  companyinfosCreate = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/companyinfos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询公司信息使用的接口
   *
   * @tags 公司信息
   * @name CompanyinfosList
   * @summary 查询所有公司信息
   * @request GET:/companyinfos
   */
  companyinfosList = (params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/companyinfos`,
      method: "GET",
      format: "json",
      ...params,
    });
}
