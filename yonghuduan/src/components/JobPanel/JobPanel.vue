<template>
  <view class="flex-col component">
    <JobDetail @click="view_4OnClick" :jobDetail="collectionPosition!.jobDetail" />
    <view class="flex-row group_8">
      <view class="flex-col items-center text-wrapper_2">
        <test>{{ collectionPosition!.left }}</test>
      </view>
      <view @click="view_11OnClick" class="flex-col items-center image-wrapper">
        <text>联系HR</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from '../../components/JobDetail/JobDetail.vue'

defineProps({
  collectionPosition: {
    type: Object
  }
})

const view_4OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_11OnClick = () => {
  uni.navigateTo({ url: '/pages/liaotianyemian/liaotianyemian' })
}
</script>

<style lang="scss" scoped>
.component {
  padding-top: 20rpx;
  border-radius: 5rpx;
  overflow: hidden;
  height: 270rpx;
  border: solid 2rpx rgb(229, 229, 229);
  .group_8 {
    margin-top: 20rpx;
    color: rgb(163, 154, 154);
    font-size: 25rpx;
    line-height: 23rpx;
    letter-spacing: 2.5rpx;
    white-space: nowrap;
    .text-wrapper_2 {
      padding: 25rpx 0 24rpx;
      flex: 1 1 335rpx;
      overflow: hidden;
      height: 75rpx;
      border: solid 2rpx rgb(229, 229, 229);
    }
    .image-wrapper {
      padding: 21rpx 0 17rpx;
      flex: 1 1 335rpx;
      overflow: hidden;
      height: 75rpx;
      border: solid 2rpx rgb(229, 229, 229);
      color: rgb(35, 193, 158);
      .image_1 {
        width: 91rpx;
        height: 33rpx;
      }
    }
  }
}
</style>
