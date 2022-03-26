<template>
  <view class="flex-col page">
    <NavigationBar />
    <text class="text">选择你的职位类型</text>
    <view class="flex-row group">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303748214595964.png"
        class="image_1"
      />
      <text class="text_1">{{ searchContent }}</text>
    </view>
    <view class="section_1 justify-between view">
      <text>技术 | 测试 | 运维</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
        class="image_2"
      />
    </view>
    <view class="section_1 justify-between">
      <text>智能硬件 | 电子 | 通信</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
        class="image_2"
      />
    </view>
    <view class="section_1 justify-between">
      <text>技术 | 测试 | 运维</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
        class="image_2"
      />
    </view>
    <view class="justify-between section_2">
      <text>技术 | 测试 | 运维</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
        class="image_2"
      />
    </view>
    <view class="section_1 justify-between">
      <text>技术 | 测试 | 运维</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303716985504722.png"
        class="image_2"
      />
    </view>
  </view>
</template>

<script>
import * as Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
  data() {
    return { searchContent: '请输入职位名' }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 624rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .text {
    margin-left: 32rpx;
    margin-top: 25rpx;
    color: rgb(0, 0, 0);
    font-size: 35rpx;
    line-height: 32rpx;
    white-space: nowrap;
  }
  .group {
    margin-top: 35rpx;
    padding: 0 38rpx;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    .image_1 {
      width: 35rpx;
      height: 35rpx;
    }
    .text_1 {
      margin: 5rpx 0 8rpx 35rpx;
    }
  }
  .section_1 {
    margin: 8rpx 20rpx 0;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 24rpx;
    letter-spacing: 5rpx;
    white-space: nowrap;
    padding: 27rpx 12rpx 24rpx 31rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 80rpx;
    border: solid 2rpx rgb(196, 196, 196);
  }
  .view {
    margin: 34rpx 20rpx 0;
  }
  .section_2 {
    margin: 8rpx 20rpx 0;
    padding: 28rpx 12rpx 24rpx 31rpx;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 24rpx;
    letter-spacing: 5rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 80rpx;
    border: solid 2rpx rgb(196, 196, 196);
  }
  .image_2 {
    width: 15rpx;
    height: 24rpx;
  }
}
</style>
