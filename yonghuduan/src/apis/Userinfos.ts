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

export class Userinfos<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 增加工作经历的接口
   *
   * @tags 用户信息/工作经历
   * @name WorkexperiencesCreate
   * @summary 增加工作经历
   * @request POST:/userinfos/{userinfoid}/workexperiences
   */
  workexperiencesCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/workexperiences`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有工作经历的接口
   *
   * @tags 用户信息/工作经历
   * @name WorkexperiencesDetail
   * @summary 查询所有工作经历
   * @request GET:/userinfos/{userinfoid}/workexperiences
   */
  workexperiencesDetail = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/workexperiences`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 查询关注记录的接口
   *
   * @tags 用户信息/关注记录
   * @name AttentionrecordsDetail
   * @summary 查询关注记录
   * @request GET:/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}
   */
  attentionrecordsDetail = (userinfoid: string, attentionrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/attentionrecords/${attentionrecordid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 删除关注记录的接口
   *
   * @tags 用户信息/关注记录
   * @name AttentionrecordsDelete
   * @summary 删除关注记录
   * @request DELETE:/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}
   */
  attentionrecordsDelete = (userinfoid: string, attentionrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/attentionrecords/${attentionrecordid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 修改关注记录的接口
   *
   * @tags 用户信息/关注记录
   * @name AttentionrecordsUpdate
   * @summary 修改关注记录
   * @request PUT:/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}
   */
  attentionrecordsUpdate = (userinfoid: string, attentionrecordid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/attentionrecords/${attentionrecordid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 修改收藏记录的接口
   *
   * @tags 用户信息/收藏记录
   * @name GarnerrecordsUpdate
   * @summary 修改收藏记录
   * @request PUT:/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}
   */
  garnerrecordsUpdate = (userinfoid: string, garnerrecordid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/garnerrecords/${garnerrecordid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询收藏记录的接口
   *
   * @tags 用户信息/收藏记录
   * @name GarnerrecordsDetail
   * @summary 查询收藏记录
   * @request GET:/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}
   */
  garnerrecordsDetail = (userinfoid: string, garnerrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/garnerrecords/${garnerrecordid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 删除收藏记录的接口
   *
   * @tags 用户信息/收藏记录
   * @name GarnerrecordsDelete
   * @summary 删除收藏记录
   * @request DELETE:/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}
   */
  garnerrecordsDelete = (userinfoid: string, garnerrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/garnerrecords/${garnerrecordid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有项目经历的接口
   *
   * @tags 用户信息/项目经历
   * @name ProjectexperiencesDetail
   * @summary 查询所有项目经历
   * @request GET:/userinfos/{userinfoid}/projectexperiences
   */
  projectexperiencesDetail = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/projectexperiences`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加项目经历的接口
   *
   * @tags 用户信息/项目经历
   * @name ProjectexperiencesCreate
   * @summary 增加项目经历
   * @request POST:/userinfos/{userinfoid}/projectexperiences
   */
  projectexperiencesCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/projectexperiences`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 修改查看记录的接口
   *
   * @tags 用户信息/查看记录
   * @name InspectionrecordsUpdate
   * @summary 修改查看记录
   * @request PUT:/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}
   */
  inspectionrecordsUpdate = (userinfoid: string, inspectionrecordid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/inspectionrecords/${inspectionrecordid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询查看记录的接口
   *
   * @tags 用户信息/查看记录
   * @name InspectionrecordsDetail
   * @summary 查询查看记录
   * @request GET:/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}
   */
  inspectionrecordsDetail = (userinfoid: string, inspectionrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/inspectionrecords/${inspectionrecordid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 删除查看记录的接口
   *
   * @tags 用户信息/查看记录
   * @name InspectionrecordsDelete
   * @summary 删除查看记录
   * @request DELETE:/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}
   */
  inspectionrecordsDelete = (userinfoid: string, inspectionrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/inspectionrecords/${inspectionrecordid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 查询投递记录的接口
   *
   * @tags 用户信息/投递记录
   * @name DeliveryrecordsDetail
   * @summary 查询投递记录
   * @request GET:/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}
   */
  deliveryrecordsDetail = (userinfoid: string, deliveryrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/deliveryrecords/${deliveryrecordid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 修改投递记录的接口
   *
   * @tags 用户信息/投递记录
   * @name DeliveryrecordsUpdate
   * @summary 修改投递记录
   * @request PUT:/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}
   */
  deliveryrecordsUpdate = (userinfoid: string, deliveryrecordid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/deliveryrecords/${deliveryrecordid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 删除投递记录的接口
   *
   * @tags 用户信息/投递记录
   * @name DeliveryrecordsDelete
   * @summary 删除投递记录
   * @request DELETE:/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}
   */
  deliveryrecordsDelete = (userinfoid: string, deliveryrecordid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/deliveryrecords/${deliveryrecordid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 删除工作经历的接口
   *
   * @tags 用户信息/工作经历
   * @name WorkexperiencesDelete
   * @summary 删除工作经历
   * @request DELETE:/userinfos/{userinfoid}/workexperiences/{workexperienceid}
   */
  workexperiencesDelete = (userinfoid: string, workexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/workexperiences/${workexperienceid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 修改工作经历的接口
   *
   * @tags 用户信息/工作经历
   * @name WorkexperiencesUpdate
   * @summary 修改工作经历
   * @request PUT:/userinfos/{userinfoid}/workexperiences/{workexperienceid}
   */
  workexperiencesUpdate = (userinfoid: string, workexperienceid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/workexperiences/${workexperienceid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询工作经历的接口
   *
   * @tags 用户信息/工作经历
   * @name WorkexperiencesDetail2
   * @summary 查询工作经历
   * @request GET:/userinfos/{userinfoid}/workexperiences/{workexperienceid}
   * @originalName workexperiencesDetail
   * @duplicate
   */
  workexperiencesDetail2 = (userinfoid: string, workexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/workexperiences/${workexperienceid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 查询教育经历的接口
   *
   * @tags 用户信息/教育经历
   * @name EduexperiencesDetail
   * @summary 查询教育经历
   * @request GET:/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}
   */
  eduexperiencesDetail = (userinfoid: string, eduexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/eduexperiences/${eduexperienceid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 删除教育经历的接口
   *
   * @tags 用户信息/教育经历
   * @name EduexperiencesDelete
   * @summary 删除教育经历
   * @request DELETE:/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}
   */
  eduexperiencesDelete = (userinfoid: string, eduexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/eduexperiences/${eduexperienceid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 修改教育经历的接口
   *
   * @tags 用户信息/教育经历
   * @name EduexperiencesUpdate
   * @summary 修改教育经历
   * @request PUT:/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}
   */
  eduexperiencesUpdate = (userinfoid: string, eduexperienceid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/eduexperiences/${eduexperienceid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 删除求职期望的接口
   *
   * @tags 用户信息/求职期望
   * @name JobexpectationsDelete
   * @summary 删除求职期望
   * @request DELETE:/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}
   */
  jobexpectationsDelete = (userinfoid: string, jobexpectationid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/jobexpectations/${jobexpectationid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * @description 修改求职期望的接口
   *
   * @tags 用户信息/求职期望
   * @name JobexpectationsUpdate
   * @summary 修改求职期望
   * @request PUT:/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}
   */
  jobexpectationsUpdate = (userinfoid: string, jobexpectationid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/jobexpectations/${jobexpectationid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询求职期望的接口
   *
   * @tags 用户信息/求职期望
   * @name JobexpectationsDetail
   * @summary 查询求职期望
   * @request GET:/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}
   */
  jobexpectationsDetail = (userinfoid: string, jobexpectationid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/jobexpectations/${jobexpectationid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有关注记录的接口
   *
   * @tags 用户信息/关注记录
   * @name AttentionrecordsDetail2
   * @summary 查询所有关注记录
   * @request GET:/userinfos/{userinfoid}/attentionrecords
   * @originalName attentionrecordsDetail
   * @duplicate
   */
  attentionrecordsDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/attentionrecords`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加关注记录的接口
   *
   * @tags 用户信息/关注记录
   * @name AttentionrecordsCreate
   * @summary 增加关注记录
   * @request POST:/userinfos/{userinfoid}/attentionrecords
   */
  attentionrecordsCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/attentionrecords`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 增加收藏记录的接口
   *
   * @tags 用户信息/收藏记录
   * @name GarnerrecordsCreate
   * @summary 增加收藏记录
   * @request POST:/userinfos/{userinfoid}/garnerrecords
   */
  garnerrecordsCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/garnerrecords`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有收藏记录的接口
   *
   * @tags 用户信息/收藏记录
   * @name GarnerrecordsDetail2
   * @summary 查询所有收藏记录
   * @request GET:/userinfos/{userinfoid}/garnerrecords
   * @originalName garnerrecordsDetail
   * @duplicate
   */
  garnerrecordsDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/garnerrecords`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加教育经历的接口
   *
   * @tags 用户信息/教育经历
   * @name EduexperiencesCreate
   * @summary 增加教育经历
   * @request POST:/userinfos/{userinfoid}/eduexperiences
   */
  eduexperiencesCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/eduexperiences`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有教育经历的接口
   *
   * @tags 用户信息/教育经历
   * @name EduexperiencesDetail2
   * @summary 查询所有教育经历
   * @request GET:/userinfos/{userinfoid}/eduexperiences
   * @originalName eduexperiencesDetail
   * @duplicate
   */
  eduexperiencesDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/eduexperiences`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 修改项目经历的接口
   *
   * @tags 用户信息/项目经历
   * @name ProjectexperiencesUpdate
   * @summary 修改项目经历
   * @request PUT:/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}
   */
  projectexperiencesUpdate = (userinfoid: string, projectexperienceid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/projectexperiences/${projectexperienceid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询项目经历的接口
   *
   * @tags 用户信息/项目经历
   * @name ProjectexperiencesDetail2
   * @summary 查询项目经历
   * @request GET:/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}
   * @originalName projectexperiencesDetail
   * @duplicate
   */
  projectexperiencesDetail2 = (userinfoid: string, projectexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/projectexperiences/${projectexperienceid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 删除项目经历的接口
   *
   * @tags 用户信息/项目经历
   * @name ProjectexperiencesDelete
   * @summary 删除项目经历
   * @request DELETE:/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}
   */
  projectexperiencesDelete = (userinfoid: string, projectexperienceid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/projectexperiences/${projectexperienceid}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户信息
   * @name UserinfosList
   * @summary 查询所有用户信息
   * @request GET:/userinfos
   */
  userinfosList = (params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加用户信息的接口
   *
   * @tags 用户信息
   * @name UserinfosCreate
   * @summary 增加用户信息
   * @request POST:/userinfos
   */
  userinfosCreate = (data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户信息
   * @name UserinfosDetail
   * @summary 查询用户信息
   * @request GET:/userinfos/{userinfoid}
   */
  userinfosDetail = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 修改用户信息的接口
   *
   * @tags 用户信息
   * @name UserinfosUpdate
   * @summary 修改用户信息
   * @request PUT:/userinfos/{userinfoid}
   */
  userinfosUpdate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有投递记录的接口
   *
   * @tags 用户信息/投递记录
   * @name DeliveryrecordsDetail2
   * @summary 查询所有投递记录
   * @request GET:/userinfos/{userinfoid}/deliveryrecords
   * @originalName deliveryrecordsDetail
   * @duplicate
   */
  deliveryrecordsDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/deliveryrecords`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加投递记录的接口
   *
   * @tags 用户信息/投递记录
   * @name DeliveryrecordsCreate
   * @summary 增加投递记录
   * @request POST:/userinfos/{userinfoid}/deliveryrecords
   */
  deliveryrecordsCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/deliveryrecords`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 增加求职期望的接口
   *
   * @tags 用户信息/求职期望
   * @name JobexpectationsCreate
   * @summary 增加求职期望
   * @request POST:/userinfos/{userinfoid}/jobexpectations
   */
  jobexpectationsCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any[]>({
      path: `/userinfos/${userinfoid}/jobexpectations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有求职期望的接口
   *
   * @tags 用户信息/求职期望
   * @name JobexpectationsDetail2
   * @summary 查询所有求职期望
   * @request GET:/userinfos/{userinfoid}/jobexpectations
   * @originalName jobexpectationsDetail
   * @duplicate
   */
  jobexpectationsDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/jobexpectations`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description 增加查看记录的接口
   *
   * @tags 用户信息/查看记录
   * @name InspectionrecordsCreate
   * @summary 增加查看记录
   * @request POST:/userinfos/{userinfoid}/inspectionrecords
   */
  inspectionrecordsCreate = (userinfoid: string, data: any, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/userinfos/${userinfoid}/inspectionrecords`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询所有查看记录的接口
   *
   * @tags 用户信息/查看记录
   * @name InspectionrecordsDetail2
   * @summary 查询所有查看记录
   * @request GET:/userinfos/{userinfoid}/inspectionrecords
   * @originalName inspectionrecordsDetail
   * @duplicate
   */
  inspectionrecordsDetail2 = (userinfoid: string, params: RequestParams = {}) =>
    this.request<any[], any>({
      path: `/userinfos/${userinfoid}/inspectionrecords`,
      method: "GET",
      format: "json",
      ...params,
    });
}
