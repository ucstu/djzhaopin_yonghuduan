<template>
  <view @click="rootViewOnClick" class="flex-row items-center component">
    <image class="image" :src="companyDetail!.logo" />
    <view class="flex-col group_1">
      <text class="text">{{ companyDetail!.name }}</text>
      <view class="flex-row group_2">
        <text>在招职位</text>
        <text class="text_2">{{ companyDetail!.recruitmentPosition }}</text>
      </view>
      <text class="text_3">
        {{ companyDetail!.city }} | {{ companyDetail!.financingStage }} | {{ companyDetail!.scale }}
        |
        {{ companyDetail!.comprehension }}
      </text>
      <view class="flex-row group_3">
        <view
          class="left-text-wrapper flex-col items-center justify-center"
          v-for="(benefit, i) in companyDetail!.benefits"
          :key="i"
        >
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
  height: 150rpx;
  .image {
    border-radius: 5rpx;
    width: 151rpx;
    height: 101rpx;
  }
  .group_1 {
    margin-left: 30rpx;
    height: 150rpx;
    .text {
      font-size: 30rpx;
      white-space: nowrap;
    }
    .group_2 {
      font-size: 20rpx;
      white-space: nowrap;
      .text_2 {
        margin-left: 19rpx;
      }
    }
    .text_3 {
      font-size: 20rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 10rpx;
      font-size: 18rpx;
      letter-spacing: 3.2rpx;
      white-space: nowrap;
      .left-text-wrapper {
        background-color: rgb(229, 229, 229);
        border-radius: 5rpx;
        overflow: hidden;
        width: 120rpx;
        height: 35rpx;
        margin-right: 10rpx;
      }
    }
  }
}
</style>
