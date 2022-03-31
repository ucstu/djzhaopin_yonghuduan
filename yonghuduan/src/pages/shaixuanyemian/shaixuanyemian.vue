<template>
  <view class="flex-col page">
    <NavigationBar class="group" title="筛选" />
    <scroll-view class="flex-col search" :scroll-y="true" @scroll="scroll">
      <view class="flex-col segment_direct">
        <text class="direct">职位细分方向</text>
        <view class="items-center segments">
          <view
            class="segment"
            v-for="(segmentDirect, i) in segmentDirects"
            :key="i"
          >{{ segmentDirect.value }}</view>
        </view>
      </view>
      <view class="flex-col expected_salary">
        <text class="salary">期望薪资</text>
        <view class="items-center expects">
          <view
            class="expect"
            v-for="(expectedSalary, i) in expectedSalaries"
            :key="i"
          >{{ expectedSalary.value }}</view>
        </view>
      </view>
      <view class="flex-col work_experience">
        <text class="experience">工作经验</text>
        <view class="items-center works">
          <view
            class="work"
            v-for="(education, i) in workExperiences"
            :key="i"
          >{{ education.value }}</view>
        </view>
      </view>
      <view class="flex-col degree_require">
        <text class="degree">学历</text>
        <view class="items-center requires">
          <view
            class="require"
            v-for="(education, i) in degreeRequires"
            :key="i"
          >{{ education.value }}</view>
        </view>
      </view>
      <view class="flex-col job_nature">
        <text class="job">工作性质</text>
        <view class="items-center natures">
          <view class="nature" v-for="(workPlace, i) in jobNatures" :key="i">{{ workPlace.value }}</view>
        </view>
      </view>
      <view class="flex-col company_size">
        <text class="company">公司规模</text>
        <view class="items-center sizes">
          <view class="size" v-for="(workPlace, i) in companySizes" :key="i">{{ workPlace.value }}</view>
        </view>
      </view>
      <view class="flex-col finance_stage">
        <text class="finance">融资阶段</text>
        <view class="items-center stages">
          <view class="stage" v-for="(workPlace, i) in financeStages" :key="i">{{ workPlace.value }}</view>
        </view>
      </view>
      <view class="flex-col industry_sector">
        <text class="industry">行业</text>
        <view class="items-center sectors">
          <view
            class="sector"
            v-for="(workPlace, i) in industrySectors"
            :key="i"
          >{{ workPlace.value }}</view>
        </view>
      </view>
    </scroll-view>
    <view class="flex-row button">
      <view class="flex-col items-center justify-center reset">
        <text>重置</text>
      </view>
      <view class="flex-col items-center justify-center identify">
        <text>确定</text>
      </view>
    </view>
    <!-- <view class="flex-col group_2">
      <text class="text_7">期望薪资</text>
      <view class="flex-row group_3">
        <view class="text-wrapper flex-col items-center">
          <text>{{ expectedSalary }}</text>
        </view>
        <view class="flex-col items-center text-wrapper_4">
          <text>5K以下</text>
        </view>
        <view class="flex-col items-center text-wrapper_5">
          <text>5-8K</text>
        </view>
        <view class="flex-col items-center text-wrapper_6">
          <text>8-10K</text>
        </view>
        <view class="flex-col items-center text-wrapper_7">
          <text>10-15K</text>
        </view>
        <view class="flex-col items-center text-wrapper_8">
          <text>15-20K</text>
        </view>
        <view class="flex-col items-center text-wrapper_9">
          <text>20-25K</text>
        </view>
        <view class="flex-col items-center text-wrapper_10">
          <text>25-30K</text>
        </view>
        <view class="flex-col items-center text-wrapper_11">
          <text>30-35K</text>
        </view>
        <view class="flex-col items-center text-wrapper_12">
          <text>50K+</text>
        </view>
      </view>
    </view>
    <view class="group_1 flex-col">
      <text class="text_1 text_18">工作经验</text>
      <view class="bottom-group flex-row view_7">
        <view class="text-wrapper_13 flex-col items-center">
          <text>{{ workExperience }}</text>
        </view>
        <view class="text-wrapper_14 flex-col items-center">
          <text>3年及以下</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>3-5年</text>
        </view>
        <view class="text-wrapper_15 flex-col items-center">
          <text>5-10年</text>
        </view>
        <view class="text-wrapper_16 flex-col items-center">
          <text>10年以上</text>
        </view>
        <view class="text-wrapper_17 flex-col items-center">
          <text>经验不限</text>
        </view>
      </view>
    </view>
    <view class="group_1 flex-col">
      <text class="text_1 text_25">学历要求</text>
      <view class="bottom-group flex-row view_15">
        <view class="text-wrapper_13 flex-col items-center">
          <text>{{ degreeRequired }}</text>
        </view>
        <view class="text-wrapper_14 flex-col items-center">
          <text>本科</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>硕士</text>
        </view>
        <view class="text-wrapper_15 flex-col items-center">
          <text>博士</text>
        </view>
        <view class="text-wrapper_16 flex-col items-center">
          <text>不要求</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_4">
      <text class="text_31">工作性质</text>
      <view class="flex-row group_5">
        <view class="left-text-wrapper flex-col items-center view_21">
          <text>{{ jobNature }}</text>
        </view>
        <view class="left-text-wrapper flex-col items-center">
          <text>兼职</text>
        </view>
        <view class="left-text-wrapper flex-col items-center">
          <text>实习</text>
        </view>
      </view>
    </view>
    <view class="group_1 flex-col">
      <text class="text_1 text_35">公司规模</text>
      <view class="bottom-group flex-row">
        <view class="text-wrapper_13 flex-col items-center view_26">
          <text>{{ companySize }}</text>
        </view>
        <view class="flex-col items-center text-wrapper_18">
          <text>15-50人</text>
        </view>
        <view class="flex-col items-center text-wrapper_19">
          <text>50-150人</text>
        </view>
        <view class="flex-col items-center text-wrapper_20">
          <text>150-500人</text>
        </view>
        <view class="flex-col items-center text-wrapper_21">
          <text>500-2000人</text>
        </view>
        <view class="text-wrapper_17 flex-col items-center view_27">
          <text>2000人以上</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_6">
      <text class="text_42">融资阶段</text>
      <view class="flex-row group_7">
        <view class="text-wrapper_13 flex-col items-center">
          <text>{{ financeStage }}</text>
        </view>
        <view class="text-wrapper_14 flex-col items-center">
          <text>天使轮</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center">
          <text>A轮</text>
        </view>
        <view class="flex-col items-center text-wrapper_22">
          <text>B轮</text>
        </view>
        <view class="flex-col items-center text-wrapper_23">
          <text>C轮</text>
        </view>
        <view class="flex-col items-center text-wrapper_24">
          <text>D轮及以上</text>
        </view>
        <view class="text-wrapper_15 flex-col items-center">
          <text>上市公司</text>
        </view>
        <view class="text-wrapper_16 flex-col items-center">
          <text>不需要融资</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_8">
      <text class="text_51">行业领域</text>
      <view class="flex-row group_9">
        <view class="text-wrapper_13 flex-col items-center view_33">
          <text>{{ industryField }}</text>
        </view>
        <view class="text-wrapper_14 flex-col items-center view_34">
          <text>汽车交易平台</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center view_35">
          <text>游戏</text>
        </view>
        <view class="flex-col items-center text-wrapper_25">
          <text>工具类产品</text>
        </view>
        <view class="flex-col text-wrapper_26">
          <text class="text_56">软件服务 | 咨询</text>
        </view>
        <view class="flex-col text-wrapper_27">
          <text class="text_57">数据服务 | 咨询</text>
        </view>
        <view class="flex-col text-wrapper_28">
          <text class="text_58">IT技术服务 | 咨询</text>
        </view>
        <view class="flex-col text-wrapper_29">
          <text class="text_59">营销服务 | 咨询</text>
        </view>
        <view class="flex-col items-center text-wrapper_30">
          <text>人工智能服务</text>
        </view>
        <view class="flex-col items-center text-wrapper_31">
          <text>物联网</text>
        </view>
        <view class="flex-col items-center text-wrapper_32">
          <text>分类信息</text>
        </view>
        <view class="flex-col items-center text-wrapper_33">
          <text>消费生活</text>
        </view>
        <view class="flex-col items-center text-wrapper_34">
          <text>社交平台</text>
        </view>
        <view class="flex-col items-center text-wrapper_35">
          <text>内容资讯</text>
        </view>
        <view class="flex-col items-center text-wrapper_36">
          <text>内容社区</text>
        </view>
        <view class="flex-col text-wrapper_37">
          <text class="text_67">MCN | 直播平台</text>
        </view>
        <view class="flex-col items-center text-wrapper_38">
          <text>区块链</text>
        </view>
        <view class="flex-col items-center text-wrapper_39">
          <text>信息安全</text>
        </view>
        <view class="flex-col items-center text-wrapper_40">
          <text>信息检索</text>
        </view>
        <view class="flex-col items-center text-wrapper_41">
          <text>新零售</text>
        </view>
        <view class="flex-col items-center text-wrapper_42">
          <text>在线教育</text>
        </view>
        <view class="flex-col items-center text-wrapper_43">
          <text>物流平台</text>
        </view>
        <view class="flex-col items-center text-wrapper_44">
          <text>生活服务</text>
        </view>
        <view class="flex-col items-center text-wrapper_45">
          <text>影视 | 动漫</text>
        </view>
        <view class="flex-col items-center text-wrapper_46">
          <text>新媒体</text>
        </view>
        <view class="flex-col items-center text-wrapper_47">
          <text>科技金融</text>
        </view>
        <view class="flex-col items-center text-wrapper_48">
          <text>居住服务</text>
        </view>
        <view class="flex-col text-wrapper_49">
          <text class="text_79">新能源汽车制造</text>
        </view>
        <view class="flex-col items-center text-wrapper_50">
          <text>智能硬件</text>
        </view>
        <view class="flex-col items-center text-wrapper_51">
          <text>网络通信</text>
        </view>
        <view class="flex-col items-center text-wrapper_52">
          <text>在线医疗</text>
        </view>
        <view class="flex-col items-center text-wrapper_53">
          <text>旅游 | 出行</text>
        </view>
        <view class="flex-col items-center text-wrapper_54">
          <text>批发 | 零售</text>
        </view>
        <view class="flex-col items-center text-wrapper_55">
          <text>贸易 | 进出口</text>
        </view>
        <view class="flex-col items-center text-wrapper_56">
          <text>教育 | 培训</text>
        </view>
        <view class="flex-col text-wrapper_57">
          <text class="text_87">专业服务 | 咨询</text>
        </view>
        <view class="flex-col items-center text-wrapper_58">
          <text>物流 | 运输</text>
        </view>
        <view class="flex-col items-center text-wrapper_59">
          <text>文化传媒</text>
        </view>
        <view class="flex-col items-center text-wrapper_60">
          <text>金融业</text>
        </view>
        <view class="flex-col items-center section_1">
          <text>房地产 | 建筑 |</text>
          <text>物业</text>
        </view>
        <view class="flex-col items-center text-wrapper_61">
          <text>制造业</text>
        </view>
        <view class="flex-col text-wrapper_62">
          <text class="text_94">医疗 | 保健 | 美容</text>
        </view>
        <view class="flex-col items-center text-wrapper_63">
          <text>服务业</text>
        </view>
        <view class="flex-col items-center section_2">
          <text>能源 | 矿产 |</text>
          <text>环保</text>
        </view>
        <view class="flex-col items-center text-wrapper_64">
          <text>农林牧渔</text>
        </view>
        <view class="flex-col items-center text-wrapper_65">
          <text>休闲 | 娱乐</text>
        </view>
      </view>
    </view>
    <view class="flex-row group_10">
      <view class="flex-col items-center text-wrapper_66">
        <text>重置</text>
      </view>
      <view class="flex-col items-center text-wrapper_67">
        <text>确定</text>
      </view>
    </view>-->
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'

const segmentDirects = reactive([
  { value: '不限' },
  { value: 'Vue' },
  { value: 'Web前端开发' },
  { value: 'JavaScript' }
])
const expectedSalaries = reactive([
  { value: '不限' },
  { value: '5k以下' },
  { value: '5-8k' },
  { value: '8-10k' },
  { value: '10-15k' },
  { value: '15-20k' },
  { value: '20-25k' },
  { value: '25-30k' },
  { value: '30-35k' },
  { value: '50k以上' }
])
const workExperiences = reactive([
  { value: '不限' },
  { value: '在校/应届' },
  { value: '1年以下' },
  { value: '1-3年' },
  { value: '3-5年' },
  { value: '5-10年' },
  { value: '10年以上' }
])
const degreeRequires = reactive([
  { value: '不限' },
  { value: '大专' },
  { value: '本科' },
  { value: '硕士' },
  { value: '博士' }
])
const jobNatures = reactive([
  { value: '不限' },
  { value: '全职' },
  { value: '兼职' },
  { value: '实习' }
])
const companySizes = reactive([
  { value: '不限' },
  { value: '少于15人' },
  { value: '15-50人' },
  { value: '50-150人' },
  { value: '150-500人' },
  { value: '500-2000人' },
  { value: '2000人以上' }
])
const financeStages = reactive([
  { value: '不限' },
  { value: '未融资' },
  { value: '天使轮' },
  { value: 'A轮' },
  { value: 'B轮' },
  { value: 'C轮' },
  { value: 'D轮及以上' },
  { value: '上市公司' },
  { value: '不需要融资' }
])
const industrySectors = reactive([
  { value: '电商平台' },
  { value: '汽车交易平台' },
  { value: '游戏' },
  { value: '工具类产品' },
  { value: '软件服务' },
  { value: '数据服务' },
  { value: 'IT技术服务' },
  { value: '营销服务' },
  { value: '人工智能服务' },
  { value: '物联网' },
  { value: '分类信息' },
  { value: '消费生活' },
  { value: '社交平台' },
  { value: '内容咨询' },
  { value: '物流平台' },
  { value: '科技金融' },
  { value: '新能源汽车制造' },
])

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  .group {
    position: relative;
  }
  .search {
    width: 710rpx;
    margin-left: 20rpx;
    margin-right: 20rpx;
    margin-top: 20rpx;
    height: 1120rpx;
    overflow: hidden;
    .segment_direct {
      .direct {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .segments {
        flex-wrap: wrap;
        .segment {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .expected_salary {
      margin-top: 20rpx;
      .salary {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .expects {
        flex-wrap: wrap;
        .expect {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .work_experience {
      margin-top: 20rpx;
      .experience {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .works {
        flex-wrap: wrap;
        .work {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .degree_require {
      margin-top: 20rpx;
      .degree {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .requires {
        flex-wrap: wrap;
        .require {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .job_nature {
      margin-top: 20rpx;
      .job {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .natures {
        flex-wrap: wrap;
        .nature {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .company_size {
      margin-top: 20rpx;
      .company {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .sizes {
        flex-wrap: wrap;
        .size {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .finance_stage {
      margin-top: 20rpx;
      .finance {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .stages {
        flex-wrap: wrap;
        .stage {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          line-height: 70rpx;
          text-align: center;
        }
      }
    }
    .industry_sector {
      margin-top: 20rpx;
      .industry {
        margin-left: 25rpx;
        font-size: 35rpx;
      }
      .sectors {
        flex-wrap: wrap;
        .sector {
          margin: 10rpx 10rpx;
          width: 216rpx;
          height: 70rpx;
          line-height: 70rpx;
          font-size: 30rpx;
          background-color: rgb(229, 229, 229);
          border-radius: 5rpx;
          text-align: center;
        }
      }
    }
  }
  .button {
    width: 100%;
    position: fixed;
    bottom: 20rpx;
    background-color: rgb(255, 255, 255);

    .reset {
      margin-left: 20rpx;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      width: 230rpx;
      height: 60rpx;
      font-size: 30rpx;
    }
    .identify {
      margin-right: 20rpx;
      margin-left: 20rpx;
      background-color: rgb(84, 188, 163);
      border-radius: 5rpx;
      font-size: 30rpx;
      width: 460rpx;
    }
  }
}
</style>
