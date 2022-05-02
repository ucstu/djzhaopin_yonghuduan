<template>
  <view class="flex-row items-center component" @click="rootViewOnClick">
    <image class="image" :src="companyDetail!.logo" />
    <view class="flex-col group-1">
      <text class="text">{{ companyDetail!.name }}</text>
      <view class="flex-row group-2">
        <text>在招职位</text>
        <text class="text-2">{{ companyDetail!.recruitmentPosition }}</text>
      </view>
      <text class="text-3">
        {{ companyDetail!.cityName }} |
        {{ financingStages[companyDetail!.financingStage] }} |
        {{ scales[companyDetail!.scale] }}
        |
        {{ companyDetail!.comprehension }}
      </text>
      <view class="flex-row group-3">
        <view
          v-for="(benefit, i) in companyDetail!.benefits"
          :key="i"
          class="left-text-wrapper flex-col items-center justify-center"
        >
          <text>{{ benefit }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  companyDetail: {
    type: Object,
  },
});

const financingStages = [
  "未融资",
  "天使轮",
  "A轮",
  "B轮",
  "C轮",
  "D轮及以上",
  "上市公司",
  "不需要融资",
];
const scales = [
  "少于15人",
  "15-50人",
  "50-150人",
  "150-500人",
  "500-2000人",
  "2000人以上",
];

const rootViewOnClick = () => {
  let companyId = props.companyDetail?.companyInformationId;
  uni.navigateTo({
    url: "/detail/gongsijieshao/gongsijieshao?companyId=" + companyId,
  });
};
</script>

<style lang="scss" scoped>
.component {
  height: 150rpx;
  padding: 0 21rpx;

  .image {
    width: 151rpx;
    height: 101rpx;
    border-radius: 5rpx;
  }

  .group-1 {
    height: 150rpx;
    margin-left: 30rpx;

    .text {
      font-size: 30rpx;
      white-space: nowrap;
    }

    .group-2 {
      font-size: 20rpx;
      white-space: nowrap;

      .text-2 {
        margin-left: 19rpx;
      }
    }

    .text-3 {
      font-size: 20rpx;
      letter-spacing: 4rpx;
      white-space: nowrap;
    }

    .group-3 {
      margin-top: 10rpx;
      font-size: 18rpx;
      letter-spacing: 3.2rpx;
      white-space: nowrap;

      .left-text-wrapper {
        width: 120rpx;
        height: 35rpx;
        margin-right: 10rpx;
        overflow: hidden;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }
    }
  }
}
</style>
