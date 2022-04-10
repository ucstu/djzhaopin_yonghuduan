<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="隐私设置" />
    <view class="group-1">匿名展示</view>
    <view class="justify-between items-center group-2">
      <view class="flex-row justify-center items-center group-box">
        <image src="@/static/icons/heard.png" class="image" />
        <text style="font-size: 30rpx; padding-left: 15rpx;">{{ userName }}</text>
        <text style="font-size: 28rpx; padding-left: 15rpx; color: rgba(0, 0, 0, 0.6);">(实名展示)</text>
      </view>
      <radio
        style="transform:scale(0.5)"
        value="1"
        :checked="realName"
        @click="anonymous = false; realName = true"
      />
    </view>
    <view class="justify-between items-center group-2">
      <view class="flex-row justify-center items-center group-box">
        <image src="@/static/icons/heard.png" class="image" />
        <text style="font-size: 30rpx; padding-left: 15rpx;">{{ userName[0] }}先生</text>
        <text style="font-size: 28rpx; padding-left: 15rpx; color: rgba(0, 0, 0, 0.6);">(匿名展示)</text>
      </view>
      <radio
        style="transform:scale(0.5)"
        value="2"
        :checked="anonymous"
        @click="realName = false ; anonymous = true"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
const userName = ref('张三')
const realName = ref(true)
const anonymous = ref(false)

</script>

<style lang="scss" scoped>
.page {
  .group-1 {
    font-size: 35rpx;
    margin-left: 30rpx;
  }
  .group-2 {
    width: 710rpx;
    height: 100rpx;
    margin-left: 20rpx;
    margin-top: 20rpx;
    .group-box {
      padding-left: 10rpx;
    }
  }
  .image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 100%;
  }
}
</style>
