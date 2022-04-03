<template>
  <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
  <view :style="'height: ' + (navigationBarHeight + navigationBarTop) + 'px'"></view>
  <view
    class="header items-center component"
    :style="'padding-top: ' + navigationBarTop + 'px; height: ' + (navigationBarHeight + navigationBarTop) + 'px'"
  >
    <view class="justify-between items-center" :style="'width: ' + navigationBarWidth + 'px'">
      <image @click="imageOnClick" class="image" :src="leftUrl" />
      <text class="text">{{ title }}</text>
      <text class="text_1">{{ right }}</text>
    </view>
  </view>
  <!-- #endif -->
  <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
  <view style="height: 136rpx"></view>
  <view class="header justify-center component">
    <image @click="imageOnClick" class="image" :src="leftUrl" />
    <text class="text">{{ title }}</text>
    <text class="text_1">{{ right }}</text>
  </view>
  <!-- #endif -->
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/stores';
const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
// @ts-ignore
const navigationBarHeight = store.state.menuButtonInfo.height
// @ts-ignore
const navigationBarTop = store.state.menuButtonInfo.top
// @ts-ignore
const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(30)
// @ts-ignore
const expectationWidth = store.state.menuButtonInfo.left - uni.upx2px(170)
/* #endif */

const props = defineProps({
  left: {
    type: String,
    default: 'return',
  },
  title: {
    type: String,
    default: '',
  },
  right: {
    type: String,
    default: '',
  },
});

const leftUrl = computed(() => {
  return props.left === "return" ? 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716988161723.png' : '';
});

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed !important;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  width: 750rpx;
  top: 0rpx;
  .image {
    /* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
    margin-left: 30rpx;
    /* #endif */
    /* #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
    position: absolute;
    left: 40rpx;
    /* #endif */
    bottom: 23rpx;
    width: 25rpx;
    height: 35rpx;
  }
  .text {
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
  }
  .text_1 {
    color: rgba(0, 0, 0, 0.7);
    font-size: 30rpx;
    line-height: 23rpx;
    letter-spacing: 2.5rpx;
    white-space: nowrap;
    /* #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
    position: absolute;
    /* #endif */
    right: 39rpx;
    bottom: 31rpx;
  }
}
.component {
  /* #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
  padding: 53rpx 39rpx 29rpx 40rpx;
  /* #endif */
}
</style>
