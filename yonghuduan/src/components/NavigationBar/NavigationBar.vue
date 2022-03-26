<template>
  <view class="header justify-center component">
    <image @click="imageOnClick" class="image" :src="leftUrl" />
    <text class="text">{{ title }}</text>
    <text class="text_1">{{ right }}</text>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineProps, toRef, computed } from 'vue';

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

const left = toRef(props, "left");
const title = toRef(props, "title");
const right = toRef(props, "right");

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  width: 750rpx;
  top: 0rpx;
  .image {
    position: absolute;
    left: 40rpx;
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
    font-size: 25rpx;
    line-height: 23rpx;
    letter-spacing: 2.5rpx;
    white-space: nowrap;
    position: absolute;
    right: 39rpx;
    bottom: 31rpx;
  }
}
.component {
  padding: 53rpx 39rpx 29rpx 40rpx;
}
</style>
