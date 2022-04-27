<template>
  <view class="page">
    <view
      class="flex-row justify-between items-center group-top"
      :style="
        'width: ' +
        navigationBarWidth +
        'px; margin-top: ' +
        navigationBarTop +
        'px'
      "
    >
      <image
        class="image-left"
        src="@/static/icons/arrow-left-bold.png"
        @click="goBack"
      />
      <view class="flex-col top-title">
        <text class="justify-center text-top">{{ personnelName }}</text>
        <text class="text-bottom">{{ companyAndJob }}</text>
      </view>
    </view>
    <scroll-view class="group-info" :scroll-y="true"> </scroll-view>
    <view class="flex-col group-end justify-center">
      <view class="flex-row justify-between input-box">
        <view class="text-input">
          <editor class="input"></editor>
        </view>
        <text class="items-center text-send">发送</text>
      </view>
      <view class="justify-between function-box">
        <image class="image" src="@/static/icons/ic_voice.png" />
        <image class="image" src="@/static/icons/picture1.png" />
        <image class="image" src="@/static/icons/camera.png" />
        <image class="image" src="@/static/icons/express.png" />
        <image class="image" src="@/static/icons/add-circle.png" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarTop = store.state.menuButtonInfo?.top;

const navigationBarWidth = store.state.menuButtonInfo!.left - uni.upx2px(30);

/* #endif */

const personnelName = ref("张三");
const companyAndJob = ref("字节跳动 · 人事总监");

const goBack = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.page {
  height: 1334rpx;
  overflow: hidden;
  background-color: rgb(235 235 235);

  .group-top {
    .image-left {
      width: 60rpx;
      height: 35rpx;
      padding-left: 25rpx;
    }

    .top-title {
      padding-right: 100rpx;

      .text-top {
        font-size: 30rpx;
      }

      .text-bottom {
        font-size: 25rpx;
      }
    }
  }

  .group-info {
    width: 100%;
    height: 1040rpx;
    margin-top: 30rpx;
  }

  .group-end {
    width: 100%;
    height: auto;

    .input-box {
      width: 95%;
      height: 60rpx;
      margin-left: 20rpx;

      .text-input {
        width: 600rpx;
        height: 60rpx;
        padding-left: 10rpx;
        background-color: #fff;
        border-radius: 30rpx;

        .input {
          width: 580rpx;
          height: 60rpx;
          padding-left: 10rpx;
          overflow: hidden;
        }
      }

      .text-send {
        padding: 3rpx 25rpx;
        font-size: 30rpx;
        color: #fff;
        background-color: rgb(9 164 225);
        border-radius: 30rpx;
      }
    }

    .function-box {
      width: 100%;
      height: 60rpx;
      margin-top: 10rpx;

      .image {
        width: 60rpx;
        height: 60rpx;
      }
    }
  }
}
</style>
