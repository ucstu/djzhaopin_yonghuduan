<template>
  <view @click="rootViewOnClick" class="flex-row component">
    <image class="image" :src="companyDetail!.logo" />
    <view class="flex-col group_1">
      <text class="text">{{ companyDetail!.name }}</text>
      <view class="flex-row group_2">
        <text>在招职位</text>
        <text class="text_2">{{ companyDetail!.recruitmentPosition }}</text>
      </view>
      <text class="text_3">{{ companyDetail!.city }} | {{ companyDetail!.financingStage }} | {{ companyDetail!.scale }}
        |
        {{ companyDetail!.comprehension }}</text>
      <view class="flex-row group_3">
        <view class="left-text-wrapper flex-col items-center" v-for="(benefit, i) in companyDetail!.benefits" :key="i">
          <text>{{ benefit }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps({
  companyDetail: {
    type: Object
  }
})

const rootViewOnClick = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
</script>

<style lang="scss" scoped>
.component {
  padding: 0 21rpx;
  .image {
    margin: 7rpx 0 3rpx;
    border-radius: 5rpx;
    width: 151rpx;
    height: 101rpx;
  }
  .group_1 {
    margin-left: 30rpx;
    flex: 1 1 auto;
    .text {
      margin-left: 2rpx;
      color: rgb(0, 0, 0);
      font-size: 30rpx;
      line-height: 28rpx;
      letter-spacing: 6rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-top: 8rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 20rpx;
      line-height: 15rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
      .text_2 {
        margin-left: 19rpx;
        margin-top: 2rpx;
      }
    }
    .text_3 {
      margin-top: 6rpx;
      color: rgba(0, 0, 0, 0.6);
      font-size: 20rpx;
      line-height: 20rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 3rpx;
      align-self: flex-start;
      color: rgba(0, 0, 0, 0.3);
      font-size: 16rpx;
      line-height: 15rpx;
      letter-spacing: 3.2rpx;
      white-space: nowrap;
      .left-text-wrapper {
        flex: 1 1 120rpx;
        padding: 7rpx 0 9rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 120rpx;
        height: 30rpx;
        margin-right: 5rpx;
      }
      .view_1 {
        margin-left: 18rpx;
      }
      .text-wrapper {
        margin-left: 18rpx;
        padding: 7rpx 0 9rpx;
        flex: 1 1 120rpx;
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        width: 120rpx;
        height: 30rpx;
      }
    }
  }
}
</style>
