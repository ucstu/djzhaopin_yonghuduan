<template>
  <view class="flex-col page">
    <text class="text">登录/注册</text>
    <view class="flex-col items-start text-wrapper">
      <text class="text_1">{{ phoneNumbeer }}</text>
    </view>
    <view @click="view_1OnClick" class="flex-col items-center button">
      <text>下一步</text>
    </view>
    <view class="flex-row group">
      <view class="section_1"> </view>
      <view class="group_1">
        <text class="text_3">同意</text>
        <text class="text_4">《东江用户协议》</text>
        <text class="text_5">和</text>
        <text class="text_6">《东江登录政策》</text>
      </view>
    </view>
    <view class="flex-col items-center group_2">
      <text class="text_7"
        >客服（投诉）电话：4008 2082 02（工作日9：00-18：00）</text
      >
      <text class="text_8">违法和不良信息举报、未成年人投诉举报渠道同上</text>
      <text class="text_9">客服邮箱：cc@dongjiang 北京市人社局电话：12333</text>
      <text class="text_10"
        >营业执照|人力资源服务许可证|增值电信业务经营许可证</text
      >
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return { phoneNumbeer: '请输入你的手机号' }
  },
  methods: {
    view_1OnClick() {
      uni.navigateTo({ url: '/pages/shuruyanzhengma/shuruyanzhengma' })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 254rpx 100rpx 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .text {
    color: rgb(0, 0, 0);
    font-size: 45rpx;
    line-height: 42rpx;
    white-space: nowrap;
  }
  .text-wrapper {
    margin-top: 57rpx;
    padding: 36rpx 0 34rpx;
    color: rgba(0, 0, 0, 0.5);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text_1 {
      margin-left: 21rpx;
    }
  }
  .button {
    margin-top: 50rpx;
    padding: 25rpx 0 29rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    height: 80rpx;
  }
  .group {
    margin-top: 50rpx;
    padding: 5rpx 0 5rpx 24rpx;
    overflow: hidden;
    height: 40rpx;
    .section_1 {
      background-color: rgb(255, 255, 255);
      border-radius: 100rpx;
      overflow: hidden;
      width: 30rpx;
      height: 30rpx;
      border: solid 2rpx rgb(163, 154, 154);
    }
    .group_1 {
      margin: 3rpx -22rpx 5rpx 23rpx;
      line-height: 22rpx;
      white-space: nowrap;
      height: 22rpx;
      .text_3 {
        color: rgb(0, 0, 0);
        font-size: 24rpx;
        line-height: 23rpx;
      }
      .text_4 {
        color: rgb(35, 193, 158);
        font-size: 24rpx;
        line-height: 23rpx;
      }
      .text_5 {
        color: rgb(0, 0, 0);
        font-size: 24rpx;
        line-height: 23rpx;
      }
      .text_6 {
        color: rgb(35, 193, 158);
        font-size: 24rpx;
        line-height: 23rpx;
      }
    }
  }
  .group_2 {
    padding: 288rpx 0 263rpx;
    .text_7 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
    }
    .text_8 {
      margin-top: 11rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
    }
    .text_9 {
      margin-top: 11rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 21rpx;
      white-space: nowrap;
    }
    .text_10 {
      margin-top: 9rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
    }
  }
}
</style>
