<template>
  <view class="flex-row justify-end user-bubble-box">
    <view class="flex-row">
      <view class="items-center bubble-box">{{ mes }}</view>
      <view class="user-box"></view>
    </view>
    <image src="@/static/icons/heard.png" class="img" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  mes: {
    type: String,
    default: "",
  },
});

const u = ref("没有，爬开");
</script>

<style lang="scss" scoped>
.user-bubble-box {
  width: auto;
  height: auto;
  margin-top: 30rpx;

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
    border-color: transparent transparent transparent rgb(39 156 234);
  }
}
</style>
