<template>
  <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
  <view
    :style="'height: ' + (navigationBarHeight + navigationBarTop) + 'px'"
  ></view>
  <view
    class="header items-center component"
    :style="
      'padding-top: ' +
      navigationBarTop +
      'px; height: ' +
      (navigationBarHeight + navigationBarTop) +
      'px'
    "
  >
    <view
      class="justify-between items-center"
      :style="'width: ' + navigationBarWidth + 'px'"
    >
      <image class="image" :src="leftUrl" @click="imageOnClick" />
      <text class="text">{{ title }}</text>
      <text class="text-1">{{ right }}</text>
    </view>
  </view>
  <!-- #endif -->
  <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
  <view style="height: 136rpx"></view>
  <view class="header justify-center component">
    <image class="image" :src="leftUrl" @click="imageOnClick" />
    <text class="text">{{ title }}</text>
    <text class="text-1">{{ right }}</text>
  </view>
  <!-- #endif -->
</template>

<script lang="ts" setup>
import { key } from "@/stores";
import { computed, defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarHeight = store.state.menuButtonInfo.height;

const navigationBarTop = store.state.menuButtonInfo.top;

const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(30);

/* #endif */

const props = defineProps({
  left: {
    type: String,
    default: "return",
  },
  title: {
    type: String,
    default: "",
  },
  right: {
    type: String,
    default: "",
  },
});

const leftUrl = computed(() => {
  return props.left === "return"
    ? "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716988161723.png"
    : "";
});

const imageOnClick = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed !important;
  top: 0rpx;
  z-index: 10;
  width: 750rpx;
  background-color: rgb(255 255 255);

  .image {
    position: absolute;
    bottom: 23rpx;
    left: 40rpx;
    width: 25rpx;
    height: 35rpx;

    /* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
    margin-left: 30rpx;

    /* #endif */
  }

  .text {
    font-size: 30rpx;
    line-height: 28rpx;
    color: rgb(0 0 0);
    white-space: nowrap;
  }

  .text-1 {
    /* #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
    position: absolute;

    /* #endif */
    right: 39rpx;
    bottom: 31rpx;
    font-size: 30rpx;
    line-height: 23rpx;
    color: rgb(0 0 0 / 70%);
    letter-spacing: 2.5rpx;
    white-space: nowrap;
  }
}

.component {
  /* #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
  padding: 53rpx 39rpx 29rpx 40rpx;

  /* #endif */
}
</style>
