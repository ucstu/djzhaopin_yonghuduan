<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="工作经历" />
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">公司名称</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">公司行业</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">在职时间</text>
        <view class="flex-row justify-between items-center">
          <input class="text-input" type="text" placeholder="入职时间" />
          <input class="text-input" type="text" value="至今" />
        </view>
      </view>
      <view class="group-box">
        <text class="text-title">职位类型</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">所属部门</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="group-box">
        <text class="text-title">工作内容</text>
        <input class="text-input" type="text" placeholder="请填写" />
      </view>
      <view class="justify-center group-button">
        <view class="justify-center items-center button-box">
          <text>保存</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

const companyName = ref('请填写')
const department = ref('请填写')
const jobContent = ref('工作内容')
const projectIndustry = ref('请选择')
const startTime = ref('入职时间')
const overTime = ref('至今')
const positionType = ref('请选择')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  .group-all {
    width: 710rpx;
    height: auto;
    margin-left: 20rpx;
    margin-top: 120rpx;
    .group-box {
      width: 100%;
      height: 130rpx;
      margin-top: 20rpx;
      border: solid 2rpx rgb(210, 210, 210);
      border-radius: 5rpx;
      line-height: 60rpx;
      .text-title {
        font-size: 30rpx;
        padding-left: 20rpx;
      }
      .text-input {
        font-size: 28rpx;
        padding-left: 20rpx;
      }
    }
    .group-button {
      width: 100%;
      height: 80rpx;
      position: fixed;
      bottom: 40rpx;
      .button-box {
        width: 500rpx;
        background-color: rgb(35, 193, 158);
        color: #fff;
        font-size: 30rpx;
        border-radius: 10rpx;
      }
    }
  }
}
</style>
