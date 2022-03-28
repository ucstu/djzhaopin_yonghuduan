<template>
  <view class="flex-col page">
    <view class="section_1"></view>
    <view class="justify-between section_2">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635916856956.png"
        class="image"
      />
      <view class="flex-col items-center text-wrapper">
        <text>一键已读</text>
      </view>
    </view>
    <view class="flex-col section_3">
      <view class="flex-row">
        <view @click="view_18OnClick" class="equal-division-item flex-col items-center">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635914473539.png"
            class="image_1"
          />
          <text class="text_1">我的投递</text>
        </view>
        <view @click="view_19OnClick" class="flex-col items-center equal-division-item_1">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635917890448.png"
            class="image_3"
          />
          <text class="text_3">谁看过我</text>
        </view>
        <view @click="view_20OnClick" class="equal-division-item flex-col items-center group_1">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635916217973.png"
            class="image_1"
          />
          <text class="text_1">我的查看</text>
        </view>
      </view>
    </view>
    <view class="flex-row group_2">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635916846109.png"
        class="image_5"
      />
      <text class="text_5">▼</text>
    </view>
    <MailBar @click="view_3OnClick" class="group_3" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MailBar from '../../components/MailBar/MailBar.vue'
const time = ref('昨天')
const avatarAddress = ref(
  'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301635901980128.png')
const messageCount = ref(
  'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481301674203179834.png')
const name = ref('张三')
const message = ref('方便投递吗？')

const view_18OnClick = () => {
  uni.navigateTo({ url: '/pages/toudijilu/toudijilu' })
}
const view_19OnClick = () => {
  uni.navigateTo({ url: '/pages/shuikanguowo/shuikanguowo' })
}
const view_20OnClick = () => {
  uni.navigateTo({ url: '/pages/wodechakan/wodechakan' })
}
const view_3OnClick = () => {
  uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  overflow-y: auto;
  .section_1 {
    background-color: rgb(35, 193, 158);
    height: 45rpx;
  }
  .section_2 {
    padding: 86rpx 23rpx 115rpx 72rpx;
    color: rgb(255, 255, 255);
    font-size: 24rpx;
    line-height: 22rpx;
    letter-spacing: 2.4rpx;
    white-space: nowrap;
    background-color: rgb(35, 193, 158);
    overflow: hidden;
    height: 250rpx;
    .image {
      width: 89rpx;
      height: 49rpx;
    }
    .text-wrapper {
      margin: 4rpx 0 5rpx;
      padding: 8rpx 0 6rpx;
      border-radius: 50rpx;
      overflow: hidden;
      width: 140rpx;
      height: 40rpx;
      border: solid 2rpx rgb(255, 255, 255);
    }
  }
  .section_3 {
    margin-top: -75rpx;
    padding: 36rpx 0 10rpx;
    align-self: center;
    background-color: rgb(249, 249, 251);
    border-radius: 10rpx;
    overflow: hidden;
    width: 606rpx;
    height: 150rpx;
    position: relative;
    .equal-division-item {
      flex: 1 1 164rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      padding: 10rpx 0;
      width: 164rpx;
      .image_1 {
        width: 40rpx;
        height: 37rpx;
      }
      .text_1 {
        margin-top: 28rpx;
      }
    }
    .equal-division-item_1 {
      margin-left: 58rpx;
      padding: 10rpx 0 10rpx;
      flex: 1 1 164rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      width: 164rpx;
      .image_3 {
        width: 60rpx;
        height: 40rpx;
      }
      .text_3 {
        margin-top: 25rpx;
      }
    }
    .group_1 {
      margin-left: 58rpx;
    }
  }
  .group_2 {
    margin: 20rpx 20rpx 0;
    padding: 7rpx 30rpx 8rpx;
    color: rgb(0, 0, 0);
    font-size: 20rpx;
    line-height: 14rpx;
    white-space: nowrap;
    overflow: hidden;
    height: 50rpx;
    .image_5 {
      width: 120rpx;
      height: 35rpx;
    }
    .text_5 {
      margin-left: 16rpx;
      margin-top: 16rpx;
    }
  }
  .group_3 {
    margin-top: 32rpx;
  }
  .footer {
    margin-top: 683rpx;
    padding: 9rpx 49rpx 11rpx 56rpx;
    overflow: hidden;
    height: 101rpx;
    border: solid 2rpx rgb(0, 0, 0);
    .group_7 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 76rpx;
      .text_9 {
        margin-top: 3rpx;
      }
    }
    .group_8 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      height: 77rpx;
      .text_10 {
        margin-top: 4rpx;
      }
    }
    .group_9 {
      margin-top: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 72rpx;
    }
    .group_10 {
      margin-top: 3rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 74rpx;
    }
    .image_8 {
      width: 54rpx;
      height: 54rpx;
    }
  }
}
</style>
