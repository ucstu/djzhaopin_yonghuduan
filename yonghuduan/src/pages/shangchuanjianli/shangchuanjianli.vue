<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="flex-row group_1">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529400675870778.png"
        class="image_1"
      />
      <text class="text_1">手机存储</text>
    </view>
    <text class="text_2">分类浏览</text>
    <view class="flex-row group_2">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529401392958834.png"
        class="image_2"
      />
      <text class="text_3">图片</text>
    </view>
    <view class="flex-row group_3">
      <image
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529581461092437.png"
        class="image_3"
      />
      <text class="text_4">音乐</text>
    </view>
    <view class="flex-row group_4">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529402558300988.png"
        class="image_4"
      />
      <text class="text_5">视频</text>
    </view>
    <view class="flex-row group_5">
      <image
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529581461465582.png"
        class="image_5"
      />
      <text class="text_6">文档</text>
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
    return {}
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
  padding-bottom: 634rpx;
  background-color: rgb(255, 255, 255);
  height: 1334rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .group_1 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 130rpx;
    .image_1 {
      border-radius: 10rpx;
      width: 60rpx;
      height: 60rpx;
    }
    .text_1 {
      margin-left: 51rpx;
      align-self: center;
    }
  }
  .text_2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    position: absolute;
    left: 41rpx;
    top: 233rpx;
  }
  .group_2 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 315rpx;
    .image_2 {
      width: 60rpx;
      height: 60rpx;
    }
    .text_3 {
      margin-left: 52rpx;
      align-self: center;
    }
  }
  .group_3 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 425rpx;
    .image_3 {
      border-radius: 50rpx;
      width: 60rpx;
      height: 60rpx;
    }
    .text_4 {
      margin-left: 51rpx;
      align-self: center;
    }
  }
  .group_4 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    top: 535rpx;
    .image_4 {
      border-radius: 100rpx;
      width: 60rpx;
      height: 60rpx;
    }
    .text_5 {
      margin-left: 51rpx;
      align-self: center;
    }
  }
  .group_5 {
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
    position: absolute;
    left: 40rpx;
    right: 40rpx;
    bottom: 634rpx;
    .image_5 {
      border-radius: 5rpx;
      width: 60rpx;
      height: 50rpx;
    }
    .text_6 {
      margin-left: 51rpx;
      align-self: center;
    }
  }
}
</style>
