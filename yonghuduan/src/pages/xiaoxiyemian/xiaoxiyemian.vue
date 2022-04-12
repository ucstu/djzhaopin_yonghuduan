<template>
  <view class="flex-col page">
    <view class="group-top">
      <vew class="justify-between items-center top-box">
        <text class="info-title">消息</text>
        <text class="items-center info-del">一键已读</text>
      </vew>
    </view>
    <view class="justify-center group-cent">
      <view class="flex-row justify-between group-button">
        <view class="flex-col items-center button-box" @click="toMyDelivery">
          <image style="width: 45rpx; height: 45rpx;" src="@/static/icons/deliver.png" />
          <text class="text-1">我的投递</text>
        </view>
        <view class="flex-col items-center button-box" @click="toBeViewed">
          <image style="width: 60rpx; height: 45rpx;" src="@/static/icons/eye_color.png" />
          <text class="text-1">谁看过我</text>
        </view>
        <view class="flex-col items-center button-box" @click="toFootprint">
          <image style="width: 45rpx; height: 45rpx;" src="@/static/icons/footprint.png" />
          <text class="text-1">我的查看</text>
        </view>
      </view>
    </view>
    <view class="group-end">
      <view class="flex-row items-center info">
        <text>消息沟通</text>
        <image class="image-down" src="@/static/icons/arrow-down-filling.png" />
      </view>
      <scroll-view class="group-infos" :scroll-y="true" @scroll="scroll">
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
        <MailBar />
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MailBar from '@/components/MailBar/MailBar.vue'

const toMyDelivery = () => {
  uni.navigateTo({ url: '/pages/toudijilu/toudijilu' })
}
const toBeViewed = () => {
  uni.navigateTo({ url: '/pages/shuikanguowo/shuikanguowo' })
}
const toFootprint = () => {
  uni.navigateTo({ url: '/pages/wodechakan/wodechakan' })
}
const toChatPage = () => {
  uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
}
</script>

<style lang="scss" scoped>
.page {
  .group-top {
    width: 100%;
    height: 230rpx;
    background-color: rgb(35, 193, 158);

    .top-box {
      width: 100%;
      height: auto;
      position: relative;
      top: 170rpx;

      .info-title {
        font-size: 40rpx;
        color: #fff;
        padding-left: 30rpx;
      }

      .info-del {
        font-size: 25rpx;
        color: #fff;
        border: 2rpx solid #fff;
        padding: 2rpx 15rpx;
        border-radius: 20rpx;
        margin-right: 20rpx;
      }
    }
  }

  .group-cent {
    width: 100%;
    height: 100rpx;
    margin-top: 30rpx;

    .group-button {
      width: 70%;

      .button-box {

        .text-1 {
          font-size: 28rpx;
        }
      }
    }
  }

  .group-end {
    margin-top: 20rpx;

    .info {
      font-size: 25rpx;
      font-weight: 600;
      margin-left: 30rpx;

      .image-down {
        width: 25rpx;
        height: 25rpx;
        margin-left: 10rpx;
      }
    }

    .group-infos {
      height: 800rpx;
      overflow: hidden;

      .info-box {
        width: 690rpx;
        height: 130rpx;
        margin-left: 30rpx;

        .image-heard {
          width: 100rpx;
          height: 100rpx;
          border-radius: 100%;
        }

        .infos {
          width: 590rpx;
          height: auto;
          padding-left: 20rpx;
          line-height: 40rpx;

          .name-time {
            width: 100%;
            height: auto;
            font-size: 30rpx;
          }

          .message {
            width: 550rpx;
            font-size: 25rpx;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
