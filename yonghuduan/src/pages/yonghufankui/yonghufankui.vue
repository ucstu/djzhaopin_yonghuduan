<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <view class="flex-col group_1">
      <text class="text_1">请选择反馈类型</text>
      <view class="flex-row group_2">
        <view class="flex-col items-center text-wrapper">
          <text>账号相关</text>
        </view>
        <view class="text-wrapper_1 flex-col items-center">
          <text>推荐相关</text>
        </view>
        <view class="text-wrapper_1 flex-col items-center">
          <text>邀约相关</text>
        </view>
        <view class="flex-col items-center text-wrapper_2">
          <text>简历相关</text>
        </view>
      </view>
      <view class="flex-row group_3">
        <view class="left-text-wrapper flex-col items-center view_2">
          <text>VIP相关</text>
        </view>
        <view class="left-text-wrapper flex-col items-center">
          <text>教育相关</text>
        </view>
        <view class="left-text-wrapper flex-col items-center">
          <text>其他</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_4">
      <view class="flex-col">
        <text class="text_9">详细描述</text>
        <view class="flex-col section_1">
          <view class="flex-col group_6">
            <text>{{ opinion }}</text>
            <text>求职者。（不得少于5个字符）</text>
          </view>
          <view class="flex-col items-center section_2">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303750608882885.png"
              class="image_1"
            />
            <text class="text_12">上传图片</text>
          </view>
        </view>
        <text class="text_13">最多3张支持JPG、JPEG、PNG格式（选填）</text>
      </view>
      <view class="flex-col items-center button">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303750154860581.png"
          class="image_2"
        />
      </view>
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
    return { opinion: '请写下您的宝贵意见，东江招聘致力于服务好每一位' }
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
    padding: 22rpx 20rpx 21rpx;
    border-radius: 5rpx;
    overflow: hidden;
    height: 200rpx;
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    top: 110rpx;
    .text_1 {
      margin-left: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-top: 35rpx;
      color: rgb(0, 0, 0);
      font-size: 22rpx;
      line-height: 20rpx;
      white-space: nowrap;
      .text-wrapper {
        padding: 7rpx 0 4rpx;
        flex: 1 1 135rpx;
        border-radius: 5rpx;
        overflow: hidden;
        height: 35rpx;
        border: solid 2rpx rgb(210, 210, 210);
      }
      .text-wrapper_1 {
        margin-left: 28rpx;
        flex: 1 1 135rpx;
        padding: 8rpx 0 3rpx;
        border-radius: 5rpx;
        overflow: hidden;
        height: 35rpx;
        border: solid 2rpx rgb(210, 210, 210);
      }
      .text-wrapper_2 {
        margin-left: 28rpx;
        margin-right: 40rpx;
        padding: 7rpx 0 3rpx;
        flex: 1 1 135rpx;
        border-radius: 5rpx;
        overflow: hidden;
        height: 35rpx;
        border: solid 2rpx rgb(210, 210, 210);
      }
    }
    .group_3 {
      margin-top: 30rpx;
      color: rgb(0, 0, 0);
      font-size: 22rpx;
      line-height: 20rpx;
      white-space: nowrap;
      .left-text-wrapper {
        margin-left: 28rpx;
        padding: 8rpx 0 3rpx;
        border-radius: 5rpx;
        overflow: hidden;
        width: 135rpx;
        height: 35rpx;
        border: solid 2rpx rgb(210, 210, 210);
      }
      .view_2 {
        margin-left: 0;
      }
    }
  }
  .group_4 {
    padding: 42rpx 40rpx 50rpx;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .button {
      margin-top: 316rpx;
      padding: 22rpx 0 23rpx;
      align-self: center;
      background-color: rgb(35, 193, 158);
      border-radius: 15rpx;
      overflow: hidden;
      width: 550rpx;
      height: 80rpx;
      .image_2 {
        width: 66rpx;
        height: 35rpx;
      }
    }
    .text_9 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .section_1 {
      margin-top: 25rpx;
      padding: 19rpx 21rpx 24rpx 21rpx;
      background-color: rgba(229, 229, 229, 0.5);
      border-radius: 5rpx;
      overflow: hidden;
      height: 450rpx;
      .group_6 {
        color: rgba(0, 0, 0, 0.5);
        font-size: 25rpx;
        line-height: 30rpx;
        white-space: nowrap;
      }
      .section_2 {
        margin-left: 3rpx;
        margin-top: 221rpx;
        padding: 24rpx 0 23rpx;
        color: rgba(0, 0, 0, 0.5);
        font-size: 18rpx;
        line-height: 17rpx;
        white-space: nowrap;
        border-radius: 5rpx;
        overflow: hidden;
        width: 125rpx;
        height: 125rpx;
        border: solid 2rpx rgb(245, 124, 0);
        .image_1 {
          width: 42rpx;
          height: 38rpx;
        }
        .text_12 {
          margin-top: 20rpx;
        }
      }
    }
    .text_13 {
      margin-top: 22rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 18rpx;
      line-height: 17rpx;
      white-space: nowrap;
      opacity: 0.39;
    }
  }
}
</style>
