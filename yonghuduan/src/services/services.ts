/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  GetCompanyinfosCompanyinfoidPositioninfosQueryParams,
  HR信息,
  公司信息,
  关注记录,
  地区信息,
  城市信息,
  工作经历,
  投递记录,
  收藏记录,
  教育经历,
  查看记录,
  求职期望,
  消息记录,
  用户信息,
  筛选信息,
  细分标签,
  职位信息,
  职位类型,
  账号信息,
  项目经历,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

/**
 *
 * 注销账号
 */
export const deleteAccountsAccountid = (
  /**
   *
   * 账号ID
   */
  accountid: string,
  requestBody: {
    /**
     *
     * 手机号
     *
     */
    phoneNumber: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<账号信息>> => {
  return Http.deleteRequest(
    template(deleteAccountsAccountid.key, { accountid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAccountsAccountid.key = "/accounts/{accountid}";

/**
 *
 * 删除职位信息
 */
export const deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位信息>> => {
  return Http.deleteRequest(
    template(deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 删除关注记录
 */
export const deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<关注记录>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 删除投递记录
 */
export const deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<投递记录>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 删除教育经历
 */
export const deleteUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<教育经历>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 删除收藏记录
 */
export const deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<收藏记录>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 删除查看记录
 */
export const deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 查看记录ID
   */
  inspectionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<查看记录>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid.key, {
      userinfoid,
      inspectionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidInspectionrecordsInspectionrecordid.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 删除求职期望
 */
export const deleteUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<求职期望>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 删除项目经历
 */
export const deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<项目经历>> => {
  return Http.deleteRequest(
    template(
      deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid.key,
      { userinfoid, projectexperienceid }
    ),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 删除工作经历
 */
export const deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<工作经历>> => {
  return Http.deleteRequest(
    template(deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";

/**
 *
 * 查询城市信息
 */
export const getCityinfos = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<城市信息>> => {
  return Http.getRequest(
    getCityinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCityinfos.key = "/cityinfos";

/**
 *
 * 查询所有公司信息
 */
export const getCompanyinfos = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<公司信息[]>> => {
  return Http.getRequest(
    getCompanyinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfos.key = "/companyinfos";

/**
 *
 * 查询公司信息
 */
export const getCompanyinfosCompanyinfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<公司信息>> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoid.key, { companyinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoid.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 查询所有职位信息
 */
export const getCompanyinfosCompanyinfoidPositioninfos = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  queryParams: GetCompanyinfosCompanyinfoidPositioninfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位信息[]>> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoidPositioninfos.key, { companyinfoid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoidPositioninfos.key =
  "/companyinfos/{companyinfoid}/positioninfos";

/**
 *
 * 查询职位信息
 */
export const getCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位信息>> => {
  return Http.getRequest(
    template(getCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 查询筛选信息
 */
export const getFilterinfos = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<筛选信息>> => {
  return Http.getRequest(
    getFilterinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFilterinfos.key = "/filterinfos";

/**
 *
 * 查询HR信息
 */
export const getHrinfosHrinfoid = (
  /**
   *
   * 公司信息ID
   */
  hrinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<HR信息>> => {
  return Http.getRequest(
    template(getHrinfosHrinfoid.key, { hrinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrinfosHrinfoid.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 查询所有消息
 */
export const getMessages = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<消息记录[]>> => {
  return Http.getRequest(
    getMessages.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getMessages.key = "/messages";

/**
 *
 * 查询新版本
 */
export const getNewversion = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 新版本
     *
     */
    newVersion: string;
  }>
> => {
  return Http.getRequest(
    getNewversion.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNewversion.key = "/newversion";

/**
 *
 * 查询职位类型
 */
export const getPositiontypes = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位类型>> => {
  return Http.getRequest(
    getPositiontypes.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositiontypes.key = "/positiontypes";

/**
 *
 * 查询推荐人才
 */
export const getRecommendations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{ jobExpectation: 求职期望; userInfo: 用户信息 }>
> => {
  return Http.getRequest(
    getRecommendations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRecommendations.key = "/recommendations";

/**
 *
 * 查询地区信息
 */
export const getRegionalinfos = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<地区信息>> => {
  return Http.getRequest(
    getRegionalinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRegionalinfos.key = "/regionalinfos";

/**
 *
 * 查询细分标签
 */
export const getSubdivisionlabels = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<细分标签>> => {
  return Http.getRequest(
    getSubdivisionlabels.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getSubdivisionlabels.key = "/subdivisionlabels";

/**
 *
 * 查询所有用户信息
 */
export const getUserinfos = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<用户信息[]>> => {
  return Http.getRequest(
    getUserinfos.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfos.key = "/userinfos";

/**
 *
 * 查询用户信息
 */
export const getUserinfosUserinfoid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<用户信息>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoid.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoid.key = "/userinfos/{userinfoid}";

/**
 *
 * 查询所有关注记录
 */
export const getUserinfosUserinfoidAttentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<关注记录[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidAttentionrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidAttentionrecords.key =
  "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 查询关注记录
 */
export const getUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<关注记录>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 查询所有投递记录
 */
export const getUserinfosUserinfoidDeliveryrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<投递记录[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidDeliveryrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidDeliveryrecords.key =
  "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 查询投递记录
 */
export const getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<投递记录>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 查询所有教育经历
 */
export const getUserinfosUserinfoidEduexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<教育经历[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidEduexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidEduexperiences.key =
  "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 查询教育经历
 */
export const getUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<教育经历>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 查询所有收藏记录
 */
export const getUserinfosUserinfoidGarnerrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<收藏记录[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidGarnerrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidGarnerrecords.key =
  "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 查询收藏记录
 */
export const getUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<收藏记录>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 查询所有查看记录
 */
export const getUserinfosUserinfoidInspectionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<查看记录[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidInspectionrecords.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidInspectionrecords.key =
  "/userinfos/{userinfoid}/inspectionrecords";

/**
 *
 * 查询查看记录
 */
export const getUserinfosUserinfoidInspectionrecordsInspectionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 查看记录ID
   */
  inspectionrecordid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<查看记录>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidInspectionrecordsInspectionrecordid.key, {
      userinfoid,
      inspectionrecordid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidInspectionrecordsInspectionrecordid.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 查询所有求职期望
 */
export const getUserinfosUserinfoidJobexpectations = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<求职期望[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidJobexpectations.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidJobexpectations.key =
  "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 查询求职期望
 */
export const getUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<求职期望>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 查询所有项目经历
 */
export const getUserinfosUserinfoidProjectexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<项目经历[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidProjectexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidProjectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 查询项目经历
 */
export const getUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<项目经历>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidProjectexperiencesProjectexperienceid.key, {
      userinfoid,
      projectexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 查询所有工作经历
 */
export const getUserinfosUserinfoidWorkexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<工作经历[]>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidWorkexperiences.key, { userinfoid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidWorkexperiences.key =
  "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 查询工作经历
 */
export const getUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<工作经历>> => {
  return Http.getRequest(
    template(getUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";

/**
 *
 * 注册账号
 */
export const postAccounts = (
  requestBody: {
    /**
     *
     * 账号类型
     *
     * {1:用户,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * 手机号码
     *
     */
    phoneNumber: string;
    /**
     *
     * 短信验证码
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccounts.key = "/accounts";

/**
 *
 * 上传头像
 */
export const postAvatars = (
  requestBody: {
    /**
     *
     * 头像
     * - Format: binary
     */
    avatar?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 头像地址
     *
     */
    url: string;
  }>
> => {
  return Http.postRequest(
    postAvatars.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postAvatars.key = "/avatars";

/**
 *
 * 增加公司信息
 */
export const postCompanyinfos = (
  requestBody: 公司信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<公司信息>> => {
  return Http.postRequest(
    postCompanyinfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyinfos.key = "/companyinfos";

/**
 *
 * 增加职位信息
 */
export const postCompanyinfosCompanyinfoidPositioninfos = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  requestBody: 职位信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位信息>> => {
  return Http.postRequest(
    template(postCompanyinfosCompanyinfoidPositioninfos.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyinfosCompanyinfoidPositioninfos.key =
  "/companyinfos/{companyinfoid}/positioninfos";

/**
 *
 * 上传文件
 */
export const postFiles = (
  requestBody: {
    /**
     *
     * 文件
     * - Format: binary
     */
    file?: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * 文件ID
     *
     */
    fileId: string;
  }>
> => {
  return Http.postRequest(
    postFiles.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postFiles.key = "/files";

/**
 *
 * 增加关注记录
 */
export const postUserinfosUserinfoidAttentionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 关注记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<关注记录>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidAttentionrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidAttentionrecords.key =
  "/userinfos/{userinfoid}/attentionrecords";

/**
 *
 * 增加投递记录
 */
export const postUserinfosUserinfoidDeliveryrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 投递记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<投递记录>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidDeliveryrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidDeliveryrecords.key =
  "/userinfos/{userinfoid}/deliveryrecords";

/**
 *
 * 增加教育经历
 */
export const postUserinfosUserinfoidEduexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 教育经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<教育经历>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidEduexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidEduexperiences.key =
  "/userinfos/{userinfoid}/eduexperiences";

/**
 *
 * 增加收藏记录
 */
export const postUserinfosUserinfoidGarnerrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 收藏记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<收藏记录>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidGarnerrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidGarnerrecords.key =
  "/userinfos/{userinfoid}/garnerrecords";

/**
 *
 * 增加查看记录
 */
export const postUserinfosUserinfoidInspectionrecords = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 查看记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<查看记录>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidInspectionrecords.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidInspectionrecords.key =
  "/userinfos/{userinfoid}/inspectionrecords";

/**
 *
 * 增加求职期望
 */
export const postUserinfosUserinfoidJobexpectations = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 求职期望,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<求职期望>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidJobexpectations.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidJobexpectations.key =
  "/userinfos/{userinfoid}/jobexpectations";

/**
 *
 * 增加项目经历
 */
export const postUserinfosUserinfoidProjectexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 项目经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<项目经历>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidProjectexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidProjectexperiences.key =
  "/userinfos/{userinfoid}/projectexperiences";

/**
 *
 * 增加工作经历
 */
export const postUserinfosUserinfoidWorkexperiences = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 工作经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<工作经历>> => {
  return Http.postRequest(
    template(postUserinfosUserinfoidWorkexperiences.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserinfosUserinfoidWorkexperiences.key =
  "/userinfos/{userinfoid}/workexperiences";

/**
 *
 * 登录账号
 */
export const putAccounts = (
  requestBody: {
    /**
     *
     * 手机号码
     *
     */
    phoneNumber: string;
    /**
     *
     * 验证码
     *
     * 短信验证码
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    accountInfo: 账号信息;
    /**
     *
     * TOKEN
     *
     */
    token: string;
  }>
> => {
  return Http.putRequest(
    putAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccounts.key = "/accounts";

/**
 *
 * 设置密码
 */
export const putAcocuntsAccountid = (
  accountid: string,
  requestBody: {
    /**
     *
     * 密码
     *
     */
    password: string;
    /**
     *
     * 验证码
     *
     */
    verificationCode: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<账号信息>> => {
  return Http.putRequest(
    template(putAcocuntsAccountid.key, { accountid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAcocuntsAccountid.key = "/acocunts/{accountid}";

/**
 *
 * 修改公司信息
 */
export const putCompanyinfosCompanyinfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  requestBody: 公司信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<公司信息>> => {
  return Http.putRequest(
    template(putCompanyinfosCompanyinfoid.key, { companyinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyinfosCompanyinfoid.key = "/companyinfos/{companyinfoid}";

/**
 *
 * 修改职位信息
 */
export const putCompanyinfosCompanyinfoidPositioninfosPositioninfoid = (
  /**
   *
   * 公司信息ID
   */
  companyinfoid: string,
  /**
   *
   * 职位信息ID
   */
  positioninfoid: string,
  requestBody: 职位信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<职位信息>> => {
  return Http.putRequest(
    template(putCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key, {
      companyinfoid,
      positioninfoid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyinfosCompanyinfoidPositioninfosPositioninfoid.key =
  "/companyinfos/{companyinfoid}/positioninfos/{positioninfoid}";

/**
 *
 * 修改HR信息
 */
export const putHrinfosHrinfoid = (
  /**
   *
   * HR信息ID
   */
  hrinfoid: string,
  requestBody: HR信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<HR信息>> => {
  return Http.putRequest(
    template(putHrinfosHrinfoid.key, { hrinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putHrinfosHrinfoid.key = "/hrinfos/{hrinfoid}";

/**
 *
 * 修改用户信息
 */
export const putUserinfosUserinfoid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  requestBody: 用户信息,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<用户信息>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoid.key, { userinfoid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoid.key = "/userinfos/{userinfoid}";

/**
 *
 * 修改关注记录
 */
export const putUserinfosUserinfoidAttentionrecordsAttentionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 关注记录ID
   */
  attentionrecordid: string,
  requestBody: 关注记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<关注记录>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidAttentionrecordsAttentionrecordid.key, {
      userinfoid,
      attentionrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidAttentionrecordsAttentionrecordid.key =
  "/userinfos/{userinfoid}/attentionrecords/{attentionrecordid}";

/**
 *
 * 修改投递记录
 */
export const putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 投递记录ID
   */
  deliveryrecordid: string,
  requestBody: 投递记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<投递记录>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key, {
      userinfoid,
      deliveryrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidDeliveryrecordsDeliveryrecordid.key =
  "/userinfos/{userinfoid}/deliveryrecords/{deliveryrecordid}";

/**
 *
 * 修改教育经历
 */
export const putUserinfosUserinfoidEduexperiencesEduexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 教育经历ID
   */
  eduexperienceid: string,
  requestBody: 教育经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<教育经历>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidEduexperiencesEduexperienceid.key, {
      userinfoid,
      eduexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidEduexperiencesEduexperienceid.key =
  "/userinfos/{userinfoid}/eduexperiences/{eduexperienceid}";

/**
 *
 * 修改收藏记录
 */
export const putUserinfosUserinfoidGarnerrecordsGarnerrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 收藏记录ID
   */
  garnerrecordid: string,
  requestBody: 收藏记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<收藏记录>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidGarnerrecordsGarnerrecordid.key, {
      userinfoid,
      garnerrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidGarnerrecordsGarnerrecordid.key =
  "/userinfos/{userinfoid}/garnerrecords/{garnerrecordid}";

/**
 *
 * 修改查看记录
 */
export const putUserinfosUserinfoidInspectionrecordsInspectionrecordid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 查看记录ID
   */
  inspectionrecordid: string,
  requestBody: 查看记录,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<查看记录>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidInspectionrecordsInspectionrecordid.key, {
      userinfoid,
      inspectionrecordid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidInspectionrecordsInspectionrecordid.key =
  "/userinfos/{userinfoid}/inspectionrecords/{inspectionrecordid}";

/**
 *
 * 修改求职期望
 */
export const putUserinfosUserinfoidJobexpectationsJobexpectationid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 求职期望ID
   */
  jobexpectationid: string,
  requestBody: 求职期望,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<求职期望>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidJobexpectationsJobexpectationid.key, {
      userinfoid,
      jobexpectationid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidJobexpectationsJobexpectationid.key =
  "/userinfos/{userinfoid}/jobexpectations/{jobexpectationid}";

/**
 *
 * 修改项目经历
 */
export const putUserinfosUserinfoidProjectexperiencesProjectexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 项目经历ID
   */
  projectexperienceid: string,
  requestBody: 项目经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<项目经历>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidProjectexperiencesProjectexperienceid.key, {
      userinfoid,
      projectexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidProjectexperiencesProjectexperienceid.key =
  "/userinfos/{userinfoid}/projectexperiences/{projectexperienceid}";

/**
 *
 * 修改工作经历
 */
export const putUserinfosUserinfoidWorkexperiencesWorkexperienceid = (
  /**
   *
   * 用户信息ID
   */
  userinfoid: string,
  /**
   *
   * 工作经历ID
   */
  workexperienceid: string,
  requestBody: 工作经历,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<工作经历>> => {
  return Http.putRequest(
    template(putUserinfosUserinfoidWorkexperiencesWorkexperienceid.key, {
      userinfoid,
      workexperienceid,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserinfosUserinfoidWorkexperiencesWorkexperienceid.key =
  "/userinfos/{userinfoid}/workexperiences/{workexperienceid}";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};
