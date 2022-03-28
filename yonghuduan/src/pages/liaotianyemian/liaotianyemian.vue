<template>
  <view class="flex-row page">
    <view class="justify-between header">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528787355078119.png"
        @click="imageOnClick"
        class="image"
      />
      <view class="flex-col group">
        <text class="text">{{ personnelName }}</text>
        <text class="text_1">{{ companyAndJob }}</text>
      </view>
    </view>
    <view class="flex-row section_1">
      <text class="text_2">当前沟通职位：</text>
      <text @click="text_7OnClick" class="text_3">{{ jobName }}</text>
    </view>
    <view class="flex-col group_1">
      <view class="flex-row">
        <view class="text-wrapper flex-col items-end view">
          <text class="text_4">阿巴阿巴阿巴</text>
        </view>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301645312796980.png"
          class="image_1 image_2"
        />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635901980128.png"
          class="image_1 image_3"
        />
        <view class="text-wrapper flex-col items-end view_1">
          <text class="text_4">阿巴阿巴阿巴</text>
        </view>
      </view>
      <view class="justify-end group_3">
        <view class="text-wrapper flex-col items-end view_2">
          <text class="text_4">阿巴阿巴阿巴</text>
        </view>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301645312796980.png"
          class="image_1"
        />
      </view>
    </view>
    <view class="flex-row section_2">
      <view class="flex-col items-center text-wrapper_1">
        <text>常用语</text>
      </view>
      <view class="flex-col items-start text-wrapper_2">
        <text class="text_9">请输入</text>
      </view>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529170532678626.png"
        class="image_5"
      />
    </view>
    <view class="justify-between menu-bar">
      <view class="group_4 flex-col items-center view_3">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301671229198562.png"
          class="image_6"
        />
        <text class="text_10">相册</text>
      </view>
      <view class="group_4 flex-col items-center view_4">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301671226994387.png"
          class="image_6"
        />
        <text class="text_11">相机</text>
      </view>
      <view class="group_4 flex-col items-center view_5">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301671239626671.png"
          class="image_6"
        />
        <text class="text_12">语音</text>
      </view>
      <view class="group_4 flex-col items-center view_6">
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301671246458917.png"
          class="image_6"
        />
        <text class="text_13">文件</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const jobName = ref('jsjsj')
const personnelName = ref('张三')
const companyAndJob = ref('字节跳动 · 人事总监')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const text_7OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    padding: 58rpx 38rpx 33rpx;
    overflow: hidden;
    height: 155rpx;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    .image {
      align-self: center;
      width: 23rpx;
      height: 35rpx;
    }
    .group {
      width: 444rpx;
      .text {
        margin-left: 80rpx;
        color: rgb(0, 0, 0);
        font-size: 30rpx;
        line-height: 27rpx;
        white-space: nowrap;
      }
      .text_1 {
        margin-top: 16rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
    }
  }
  .section_1 {
    padding: 35rpx 44rpx 35rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 155rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_2 {
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .text_3 {
      margin-left: 8rpx;
      color: rgb(35, 193, 158);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
  }
  .group_1 {
    padding-top: 10rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 26rpx;
    white-space: nowrap;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 255rpx;
    .group_3 {
      margin-top: 10rpx;
      .view_2 {
        margin: 7rpx 30rpx 8rpx 0;
      }
    }
    .view {
      margin-left: 402rpx;
      margin-top: 7rpx;
    }
    .image_2 {
      margin-left: 30rpx;
    }
    .image_3 {
      margin-left: -710rpx;
      margin-top: 85rpx;
    }
    .view_1 {
      margin-left: 30rpx;
      margin-top: 92rpx;
    }
    .text-wrapper {
      padding: 15rpx 0 19rpx;
      background-color: rgba(35, 193, 158, 0.6);
      border-radius: 10rpx;
      height: 60rpx;
      .text_4 {
        margin-right: 4rpx;
      }
    }
    .image_1 {
      border-radius: 38rpx;
      width: 75rpx;
      height: 75rpx;
    }
  }
  .section_2 {
    padding: 28rpx 26rpx 23rpx 30rpx;
    overflow: hidden;
    height: 105rpx;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 150rpx;
    border: solid 2rpx rgba(210, 210, 210, 0.5);
    .text-wrapper_1 {
      padding: 14rpx 0 17rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      background-color: rgb(35, 193, 158);
      border-radius: 5rpx;
      overflow: hidden;
      width: 120rpx;
      height: 50rpx;
    }
    .text-wrapper_2 {
      margin-left: 28rpx;
      padding: 14rpx 0 13rpx;
      flex: 1 1 auto;
      color: rgb(113, 109, 109);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      border-radius: 5rpx;
      height: 50rpx;
      border: solid 2rpx rgba(114, 110, 110, 0.5);
      .text_9 {
        margin-left: 21rpx;
      }
    }
    .image_5 {
      margin-left: 30rpx;
      width: 50rpx;
      height: 50rpx;
    }
  }
  .menu-bar {
    padding: 14rpx 67rpx 33rpx;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .group_4 {
      height: 84rpx;
      .image_6 {
        width: 54rpx;
        height: 54rpx;
      }
      .text_10 {
        margin-top: 12rpx;
      }
      .text_11 {
        margin-top: 11rpx;
      }
      .text_12 {
        margin-top: 11rpx;
      }
      .text_13 {
        margin-top: 11rpx;
      }
    }
    .view_3 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
    }
    .view_4 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
    }
    .view_5 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
    }
    .view_6 {
      margin-right: 8rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
    }
  }
}
</style>
