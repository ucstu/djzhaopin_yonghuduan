<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view @click="view_4OnClick" class="justify-between section_1">
      <text class="text_1">我的账户</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
        class="image_1"
      />
    </view>
    <view @click="view_5OnClick" class="justify-between section_2">
      <text class="text_2">设置密码</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
        class="image_1"
      />
    </view>
    <view @click="view_6OnClick" class="justify-between section_3">
      <text class="text_3">通知设置</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
        class="image_1"
      />
    </view>
    <view @click="view_7OnClick" class="justify-between section_4">
      <text class="text_4">用户协议</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
        class="image_1"
      />
    </view>
    <view @click="view_8OnClick" class="justify-between section_5">
      <text class="text_5">隐私政策</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
        class="image_1"
      />
    </view>
    <view class="flex-col items-start text-wrapper">
      <text class="text_6">清除缓存</text>
    </view>
    <view @click="view_10OnClick" class="justify-between section_6">
      <text class="text_7">版本更新</text>
      <view class="flex-row group_1">
        <text class="text_8">{{ newVersion }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478529383973147024.png"
          class="image_1 image_7"
        />
      </view>
    </view>
    <view class="flex-col items-center button">
      <text>退出当前账号</text>
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
    return { newVersion: '1.0.0' }
  },
  methods: {
    imageOnClick() {
      uni.navigateBack()
    },
    view_4OnClick() {
      uni.navigateTo({ url: '/pages/wodezhanghu/wodezhanghu' })
    },
    view_5OnClick() {
      uni.navigateTo({ url: '/pages/shezhimima/shezhimima' })
    },
    view_6OnClick() {
      uni.navigateTo({ url: '/pages/tongzhishezhi/tongzhishezhi' })
    },
    view_7OnClick() {
      uni.navigateTo({ url: '/pages/yonghuxieyi/yonghuxieyi' })
    },
    view_8OnClick() {
      uni.navigateTo({ url: '/pages/yinsicelve/yinsicelve' })
    },
    view_10OnClick() {
      uni.navigateTo({ url: '/pages/banbengengxin/banbengengxin' })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50rpx;
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
  .section_1 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 130rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_1 {
      margin-bottom: 4rpx;
    }
  }
  .section_2 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 240rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_2 {
      margin-bottom: 4rpx;
    }
  }
  .section_3 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 350rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_3 {
      margin-bottom: 4rpx;
    }
  }
  .section_4 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 460rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_4 {
      margin-bottom: 4rpx;
    }
  }
  .section_5 {
    padding: 34rpx 16rpx 30rpx 22rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 570rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_5 {
      margin-bottom: 4rpx;
    }
  }
  .text-wrapper {
    padding: 36rpx 0 34rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    white-space: nowrap;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 554rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_6 {
      margin-left: 21rpx;
    }
  }
  .section_6 {
    padding: 34rpx 16rpx 30rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 100rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 444rpx;
    border: solid 2rpx rgb(210, 210, 210);
    .text_7 {
      margin-bottom: 4rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
    .group_1 {
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 22rpx;
      white-space: nowrap;
      .text_8 {
        margin: 5rpx 0 7rpx;
      }
      .image_7 {
        margin-left: 22rpx;
      }
    }
  }
  .button {
    padding: 25rpx 0 25rpx;
    color: rgb(255, 255, 255);
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    border-radius: 15rpx;
    overflow: hidden;
    width: 550rpx;
    height: 80rpx;
    position: absolute;
    bottom: 50rpx;
    left: 50%;
    transform: translateX(-50%);
    border: solid 2rpx rgba(0, 0, 0, 0.2);
  }
  .image_1 {
    width: 20rpx;
    height: 32rpx;
  }
}
</style>
