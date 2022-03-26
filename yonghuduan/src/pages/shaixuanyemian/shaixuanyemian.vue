<template>
  <view class="flex-col page">
    <NavigationBar class="group" />
    <view class="group_1 flex-col view_1">
      <text class="text_1 text_2">职位细分方向</text>
      <view class="bottom-group flex-row">
        <view class="text-wrapper flex-col items-center">
          <text>{{ jobSubdivisionDirection }}</text>
        </view>
        <view class="flex-col items-center text-wrapper_1">
          <text>Vue</text>
        </view>
        <view class="text-wrapper_2 flex-col items-center view_4">
          <text>Web前端开发</text>
        </view>
        <view class="flex-col items-center text-wrapper_3">
          <text>JavaScript</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_2">
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
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'


const jobSubdivisionDirection = ref('不限')
const expectedSalary = ref('不限')
const workExperience = ref('在校/应届')
const degreeRequired = ref('大专')
const jobNature = ref('全职')
const companySize = ref('少于15人')
const financeStage = ref('未融资')
const industryField = ref('电商平台')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .group {
    position: relative;
  }
  .group_1 {
    margin: 10rpx 30rpx 0;
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 215rpx;
    .text_1 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .text_2 {
      margin-left: 21rpx;
    }
    .bottom-group {
      margin-top: 21rpx;
      height: 135rpx;
      position: relative;
      .text-wrapper_1 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .view_4 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text-wrapper_3 {
        padding: 21rpx 0 17rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .text-wrapper_17 {
        padding: 18rpx 0 20rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .view_26 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text-wrapper_18 {
        padding: 19rpx 0 19rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 22rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_19 {
        padding: 19rpx 0 19rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 22rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 0;
      }
      .text-wrapper_20 {
        padding: 19rpx 0 19rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 22rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .text-wrapper_21 {
        padding: 19rpx 0 19rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 22rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .view_27 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
    }
    .text_18 {
      margin-left: 22rpx;
    }
    .view_7 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_25 {
      margin-left: 22rpx;
    }
    .view_15 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .text_35 {
      margin-left: 21rpx;
    }
  }
  .view_1 {
    margin: 0 30rpx;
  }
  .group_2 {
    margin: 10rpx 30rpx 0;
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 365rpx;
    .text_7 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 21rpx;
      height: 285rpx;
      position: relative;
      .text-wrapper_4 {
        padding: 19rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 22rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_5 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 0;
      }
      .text-wrapper_6 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 75rpx;
      }
      .text-wrapper_7 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 75rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_8 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 75rpx;
      }
      .text-wrapper_9 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 75rpx;
      }
      .text-wrapper_10 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 75rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_11 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 75rpx;
      }
      .text-wrapper_12 {
        padding: 21rpx 0 21rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .group_4 {
    margin: 10rpx 30rpx 0;
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 140rpx;
    .text_31 {
      margin-left: 22rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_5 {
      margin-top: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .left-text-wrapper {
        margin-left: 30rpx;
        flex: 1 1 210rpx;
        padding: 18rpx 0 20rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
      }
      .view_21 {
        margin-left: 0;
      }
    }
  }
  .group_6 {
    margin: 10rpx 30rpx 0;
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 290rpx;
    .text_42 {
      margin-left: 22rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_7 {
      margin-top: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      height: 210rpx;
      position: relative;
      .text-wrapper_22 {
        padding: 18rpx 0 20rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .text-wrapper_23 {
        padding: 18rpx 0 20rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .text-wrapper_24 {
        padding: 18rpx 0 20rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .group_8 {
    margin: 10rpx 30rpx 0;
    padding: 18rpx 0 15rpx;
    overflow: hidden;
    height: 1265rpx;
    .text_51 {
      margin-left: 21rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_9 {
      margin-top: 21rpx;
      height: 1185rpx;
      position: relative;
      .view_33 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .view_34 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .view_35 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
      .text-wrapper_25 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 75rpx;
      }
      .text-wrapper_26 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        top: 75rpx;
        left: 50%;
        transform: translateX(-50%);
        .text_56 {
          margin-left: 21rpx;
          margin-right: 14rpx;
        }
      }
      .text-wrapper_27 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 75rpx;
        .text_57 {
          margin-left: 21rpx;
          margin-right: 14rpx;
        }
      }
      .text-wrapper_28 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 150rpx;
        .text_58 {
          margin-left: 12rpx;
        }
      }
      .text-wrapper_29 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        top: 150rpx;
        left: 50%;
        transform: translateX(-50%);
        .text_59 {
          margin-left: 22rpx;
          margin-right: 14rpx;
        }
      }
      .text-wrapper_30 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 150rpx;
      }
      .text-wrapper_31 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 225rpx;
      }
      .text-wrapper_32 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 225rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_33 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 225rpx;
      }
      .text-wrapper_34 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 300rpx;
      }
      .text-wrapper_35 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 300rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_36 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 300rpx;
      }
      .text-wrapper_37 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 375rpx;
        .text_67 {
          margin-left: 19rpx;
          margin-right: 11rpx;
        }
      }
      .text-wrapper_38 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 375rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_39 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 375rpx;
      }
      .text-wrapper_40 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 450rpx;
      }
      .text-wrapper_41 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 450rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_42 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 450rpx;
      }
      .text-wrapper_43 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        top: 525rpx;
      }
      .text-wrapper_44 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        top: 525rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_45 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        top: 525rpx;
      }
      .text-wrapper_46 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 525rpx;
      }
      .text-wrapper_47 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 525rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_48 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 525rpx;
      }
      .text-wrapper_49 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 450rpx;
        .text_79 {
          margin-left: 18rpx;
          margin-right: 9rpx;
        }
      }
      .text-wrapper_50 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 450rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_51 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 450rpx;
      }
      .text-wrapper_52 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 375rpx;
      }
      .text-wrapper_53 {
        padding: 18rpx 0;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 375rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_54 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 375rpx;
      }
      .text-wrapper_55 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 300rpx;
      }
      .text-wrapper_56 {
        padding: 18rpx 0;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 300rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_57 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 300rpx;
        .text_87 {
          margin-left: 22rpx;
          margin-right: 14rpx;
        }
      }
      .text-wrapper_58 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 225rpx;
      }
      .text-wrapper_59 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 225rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_60 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 225rpx;
      }
      .section_1 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 30rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 150rpx;
      }
      .text-wrapper_61 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 150rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_62 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 150rpx;
        .text_94 {
          margin-left: 14rpx;
          margin-right: 2rpx;
        }
      }
      .text-wrapper_63 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 75rpx;
      }
      .section_2 {
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 30rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        bottom: 75rpx;
        left: 50%;
        transform: translateX(-50%);
      }
      .text-wrapper_64 {
        padding: 18rpx 0 20rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        right: 0;
        bottom: 75rpx;
      }
      .text-wrapper_65 {
        padding: 18rpx 0 18rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 24rpx;
        white-space: nowrap;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 210rpx;
        height: 60rpx;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .group_10 {
    padding: 40rpx 20rpx 20rpx;
    .text-wrapper_66 {
      padding: 16rpx 0 18rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 27rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 250rpx;
      height: 60rpx;
    }
    .text-wrapper_67 {
      margin-left: 20rpx;
      padding: 16rpx 0 18rpx;
      flex: 1 1 auto;
      color: rgb(255, 255, 255);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
      background-color: rgb(35, 193, 158);
      border-radius: 5rpx;
      overflow: hidden;
      height: 60rpx;
    }
  }
  .text-wrapper {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 22rpx;
    white-space: nowrap;
    padding: 19rpx 0 19rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    left: 0;
    top: 0;
  }
  .text-wrapper_15 {
    padding: 18rpx 0 20rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .text-wrapper_16 {
    padding: 18rpx 0 20rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-wrapper_13 {
    padding: 18rpx 0 20rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    left: 0;
    top: 0;
  }
  .text-wrapper_14 {
    padding: 18rpx 0 20rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .text-wrapper_2 {
    padding: 18rpx 0 20rpx;
    background-color: rgb(229, 229, 229);
    border-radius: 5rpx;
    overflow: hidden;
    width: 210rpx;
    height: 60rpx;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
