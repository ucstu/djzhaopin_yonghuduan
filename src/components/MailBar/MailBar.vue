<template>
  <view class="flex-row items-center info-box" @click="toChatPage">
    <image class="image-heard" src="@/static/icons/heard.png" />
    <view class="infos">
      <view class="flex-row justify-between name-time">
        <text>{{ name }}</text>
        <text style="font-size: 25rpx">{{ time }}</text>
      </view>
      <view class="message">
        <text>{{ message }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const time = ref('昨天')
const name = ref('张三')
const message = ref('方便投递吗卡夫卡吉林省地方卡机黑龙江撒旦立刻反击啊考了几分卡了？')

const toChatPage = () => {
  uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
}
</script>

<style lang="scss" scoped>
.info-box {
  width: 690rpx;
  height: 130rpx;
  margin-left: 30rpx;

  .image-heard {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100%;
  }

  .infos {
    width: 590rpx;
    height: auto;
    padding-left: 20rpx;
    line-height: 40rpx;

    .name-time {
      width: 100%;
      height: auto;
      font-size: 30rpx;
    }

    .message {
      width: 550rpx;
      font-size: 25rpx;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
