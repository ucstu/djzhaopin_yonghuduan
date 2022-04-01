<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="编辑项目经历" />
    <view class="flex-col section_1">
      <text class="text_1">项目名称</text>
      <text class="text_2">{{ projectName }}</text>
    </view>
    <view class="flex-col section_2">
      <text class="text_3">是否关联工作经历</text>
      <view class="justify-between group_1">
        <text>{{ workExperience }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_3">
      <text class="text_5">项目描述</text>
      <text class="text_6">{{ projectDescribe }}</text>
    </view>
    <view class="flex-col section_4">
      <text class="text_7">你的成就</text>
      <view class="justify-between group_2">
        <text>{{ achievement }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-col section_5">
      <text class="text_9">项目时间</text>
      <view class="justify-between group_3">
        <text>{{ startTime }}</text>
        <text class="text_11">{{ overTime }}</text>
      </view>
    </view>
    <view class="flex-col section_6">
      <text class="text_12">{{ projectUrl }}</text>
      <text class="text_13">请填写（选填）</text>
    </view>
    <view class="flex-col items-center button">
      <text>保存</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
const projectName = ref('请填写')
const projectDescribe = ref('请填写')
const projectUrl = ref('项目链接')
const workExperience = ref('不关联任何工作经历')
const achievement = ref('请选择')
const startTime = ref('开始时间')
const overTime = ref('结束时间')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .section_1 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_2 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_2 {
    padding: 23rpx 0 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 275rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_3 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_1 {
      margin-top: 24rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_3 {
    padding: 23rpx 21rpx 22rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 420rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_5 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_6 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_4 {
    padding: 23rpx 0 21rpx 20rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 565rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_7 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .section_5 {
    padding: 23rpx 0 14rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 499rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_9 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 27rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 32rpx;
      padding: 0 89rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
      .text_11 {
        margin-right: 11rpx;
      }
    }
  }
  .section_6 {
    padding: 23rpx 21rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 125rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 354rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_12 {
      color: rgba(0, 0, 0, 0.6);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .text_13 {
      margin-top: 24rpx;
      color: rgba(0, 0, 0, 0.25);
      font-size: 30rpx;
      line-height: 29rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
  }
  .button {
    padding: 25rpx 0 29rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    width: 550rpx;
    height: 80rpx;
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
  }
  .image_1 {
    margin-right: 16rpx;
    margin-top: 3rpx;
    width: 15rpx;
    height: 24rpx;
  }
}
</style>
