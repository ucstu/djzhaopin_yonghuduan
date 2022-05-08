<template>
  <view class="flex-row user-bubble-box">
    <image src="@/static/icons/heard.png" class="img" />
    <view class="flex-row">
      <view class="user-box"></view>
      <view class="items-center bubble-box">{{ h }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const h = ref("你好，有兴趣投递一份你的简历吗？");
</script>

<style lang="scss" scoped>
.user-bubble-box {
  width: auto;
  height: auto;
  margin-top: 20rpx;

  .img {
    width: 95rpx;
    height: 95rpx;
    border-radius: 50%;
  }

  .bubble-box {
    flex-wrap: nowrap;
    max-width: 450rpx;
    height: auto;
    min-height: 80rpx;
    padding: 0 20rpx;
    letter-spacing: normal;
    background-color: rgb(39 156 234);
    border-radius: 15rpx;
  }

  .user-box {
    width: 0;
    height: 0;
    margin-top: 10rpx;
    border: 15rpx solid;
    border-color: transparent rgb(39 156 234) transparent transparent;
  }
}
</style>
