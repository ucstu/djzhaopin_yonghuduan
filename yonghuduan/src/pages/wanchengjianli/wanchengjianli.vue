<template>
  <view class="flex-col page">
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716980208668.png"
      class="image"
    />
    <view @click="viewOnClick" class="flex-col items-center button">
      <text>完善简历信息</text>
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
export default {
  data() {
    return {}
  },
  methods: {
    viewOnClick() {
      uni.navigateTo({ url: '/pages/wanshangerenxinxi/wanshangerenxinxi' })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 236rpx 100rpx 381rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .image {
    margin: 0 50rpx;
    width: 450rpx;
    height: 571rpx;
  }
  .button {
    margin-top: 66rpx;
    padding: 25rpx 0 30rpx;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    height: 80rpx;
  }
}
</style>
