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

export interface Type教育经历 {
  /**
   * 教育经历ID
   * 增加可以留“”
   */
  educationExperienceId: string;

  /** 学校名称 */
  schoolName: string;

  /**
   * 学历层次
   * {1:大专,2:本科,3:硕士,4:博士}
   */
  education: 1 | 2 | 3 | 4;

  /** 专业 */
  major: string;

  /** 入学时间 */
  admissionTime: string;

  /** 毕业时间 */
  araduationTime: string;
}

export type Type职位类型 = { fieldName: string; directions: { directionName: string; postitions: string[] }[] }[];

export interface Type求职期望 {
  /**
   * 求职期望ID
   * 增加可以留“”
   */
  jobExpectationId: string;

  /**
   * 职位类型
   * {1:全职,2:兼职,3:实习}
   */
  positionType: 1 | 2 | 3;

  /** 细分标签 */
  directionTags: string[];

  /**
   * 起始薪资
   * 单位K
   */
  startingSalary: number;

  /**
   * 上限薪资
   * 单位K
   */
  ceilingSalary: number;

  /** 期望城市 */
  city: string;
}

export interface Type错误信息 {
  /**
   * 错误代码
   * {1001:请求有误,1002:没有权限,1003:禁止访问,2001:验证码错误}
   */
  eno: 1001 | 1002 | 1003 | 2001;

  /** 错误消息 */
  msg: string;

  /** 错误内容 */
  err?: { name: string; msg: string }[];
}

export interface Type城市信息 {
  /** 城市 */
  citys: string[];

  /** 省份名 */
  provinceName: string;
}

export interface Type消息记录 {
  /**
   * 消息记录ID
   * 增加可以留“”
   */
  messageRecordId: string;

  /** 来源用户ID */
  field4: string;

  /** 去向用户ID */
  to: string;

  /**
   * 消息类型
   * {1:文字,2:图片,3:语音,4:文件}
   */
  type: 1 | 2 | 3 | 4;

  /** 消息内容 */
  content: string;
}

export interface Type查看记录 {
  /**
   * 查看记录ID
   * 增加可以留“”
   */
  inspectionId: string;

  /** 从ID */
  from: string;

  /** 到ID */
  to: string;
}

export interface Type公司信息 {
  /**
   * 公司ID
   * 增加可以留“”
   */
  companyId: string;

  /** HRID */
  hrId: string;

  /** LOGO */
  logo: string;

  /** 名称 */
  name: string;

  /** 在招职位 */
  recruitmentPosition: number;

  /** 所在城市 */
  city: string;

  /**
   * 融资阶段
   * {1:未融资,2:天使轮,3:A轮,4:B轮,5:C轮,6:D轮及以上,7:上市公司,8:不需要融资}
   */
  financingStage: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  /**
   * 规模
   * {1:少于15人,2:15-50人,3:50-150人,4:150-500人,5:500-2000人,6:2000以上}
   */
  scale: 1 | 2 | 3 | 4 | 5 | 6;

  /** 领域 */
  comprehension: string;

  /** 详细地址 */
  address: string;

  /** 信息 */
  about: string;

  /** 全称 */
  fullName: string;

  /** 法定代表人 */
  legalRepresentative: string;

  /** 注册资本 */
  registeredCapital: string;

  /** 机构类型 */
  organizatioType: string;

  /** 成立时间 */
  establishmentTime: string;

  /** 福利 */
  benefits: string[];
}

export interface Type收藏记录 {
  /**
   * 收藏记录ID
   * 增加可以留“”
   */
  garnerRecordId: string;

  /** 用户ID */
  userId: string;

  /** 职位信息ID */
  jobInformationId: string;
}

export interface Type账号信息 {
  /** 账号ID */
  accountId: string;

  /** 信息ID */
  infoId: string;

  /**
   * 账号类型
   * {1:用户,2:HR}
   */
  accountType: 1 | 2;

  /** 手机号码 */
  phoneNumber: string;

  /** 验证码 */
  verificationCode: string;
}

export interface Type用户信息 {
  /**
   * 用户ID
   * 增加可以留“”
   */
  userId: string;

  /** 头像 */
  avatar: string | null;

  /** 姓 */
  firstName: string;

  /** 名 */
  lastName: string;

  /** 生日 */
  dateOfBirth: string;

  /** 性别 */
  sex: string;

  /** 年龄 */
  age: number;

  /** 所在城市 */
  city: string;

  /** 电话号码 */
  phoneNumber: string;

  /** 邮箱 */
  email: string;

  /** 工作年限 */
  workingYears: number | null;

  /**
   * 学历
   * {1:大专,2:本科,3:硕士,4:博士}
   */
  education: "1" | "2" | "3" | "4" | null;

  /**
   * 求职状态
   * {1:随时入职,2:2周内入职,3:1月内入职}
   */
  jobStatus: 1 | 2 | 3;

  /** 个人优势 */
  personalAdvantage: string | null;

  /** 社交主页 */
  socialHomepage: string | null;

  /** 图片作品 */
  pictureWorks: string[] | null;

  /**
   * 隐私设置
   * {1:实名,2:匿名}
   */
  privacySettings: 1 | 2;
}

export type Type地区信息 = { areas: string[]; countyName: string }[];

export interface Type投递记录 {
  /**
   * 投递记录ID
   * 增加可以留“”
   */
  deliveryRecordId: string;

  /** 用户ID */
  userId: string;

  /**
   * 投递状态
   * {1:待查看,2:已查看,3:通过筛选,4:约面试,5:不合适}
   */
  state: 1 | 2 | 3 | 4 | 5;

  /** 面试时间 */
  interviewTime: string;

  /** 职位信息ID */
  jobInformationId: string;
}

export interface Type职位信息 {
  /**
   * 职位信息ID
   * 增加可以留“”
   */
  jobInformationId: string;

  /** 职位名称 */
  name: string;

  /**
   * 工作年限
   * {0:经验不限,1:在校/应届,2:3年及以下,3:3-5年,4:5-10年,5:10年以上}
   */
  workingYears: 0 | 1 | 2 | 3 | 4 | 5;

  /**
   * 学历
   * {0:不要求,1:大专,2:本科,3:硕士,4:博士}
   */
  education: 0 | 1 | 2 | 3 | 4;

  /** 细化标签 */
  directionTags: string[];

  /**
   * 起始薪资
   * 单位K
   */
  startingSalary: number;

  /**
   * 上限薪资
   * 单位K
   */
  ceilingSalary: number;

  /** 工作地区 */
  workArea: string;

  /** 发布日期 */
  releaseDate: string;

  /** 公司ID */
  companyId: string;

  /** HRID */
  hrId: string;

  /**
   * 职位类型
   * {1:全职,2:兼职,3:实习}
   */
  positionType: 1 | 2 | 3;

  /** 所属部门 */
  department: string;

  /** 职位亮点 */
  jobHighlights: string[];

  /** 职位描述 */
  jobDescription: string;

  /** 工作地点 */
  workingPlace: { longitude: number; latitude: number };
}

export interface Type工作经历 {
  /**
   * 工作经历ID
   * 增加可以留“”
   */
  workExperienceId: string;

  /** 公司名称 */
  corporateName: string;

  /** 公司领域 */
  companyIndustry: string;

  /** 就职时间 */
  startTime: string;

  /** 离职时间 */
  endTime: string;

  /**
   * 职位类型
   * {1:全职,2:兼职,3:实习}
   */
  positionType: 1 | 2 | 3;

  /** 所属部门 */
  Department: string;

  /** 工作内容 */
  jobContent: string;
}

export interface Type筛选信息 {
  /** 细分方向 */
  occupationalBreakdown: string[];

  /** 期望薪资 */
  expectedSalary: string[];

  /** 工作经历 */
  workExperience: string[];

  /** 学历 */
  education: string[];

  /** 工作性质 */
  NatureWork: string[];

  /** 公司规模 */
  companySize: string[];

  /** 融资阶段 */
  financingStage: string[];

  /** 行业领域 */
  IndustryField: string;
}

export interface Type项目经历 {
  /**
   * 项目经历ID
   * 增加可以留“”
   */
  projectExperienceId: string;

  /** 项目名称 */
  projectName: string;

  /** 工作经历ID */
  workExperienceId: string;

  /** 项目描述 */
  projectDescription: string;

  /** 我的成就 */
  achievement: string;

  /** 开始时间 */
  startTime: string;

  /** 结束时间 */
  endTime: string;

  /** 项目链接 */
  projectLink: string | null;
}

export interface HR信息 {
  /**
   * HRID
   * 增加可以留“”
   */
  hrId: string;

  /** 头像 */
  avatar: string;

  /** 姓名 */
  name: string;

  /** 职位 */
  post: string;

  /**
   * 邮箱
   * 接受简历的邮箱
   */
  acceptEmail: string;

  /** 手机号码 */
  phoneNumber: string;
}

export interface Type关注记录 {
  /**
   * 关注记录ID
   * 增加可以留“”
   */
  attentionRecordId: string;

  /** 用户ID */
  userId: string;

  /** 公司ID */
  companyId: string;
}

export interface Type细分标签 {
  labelClassifications: { classificationName: string; " subdivisionLabels": string[] }[];
}
