<template>
  <view class="flex-col component">
    <CompanyDetail :company-detail="attentionCompany" @click="view_4OnClick" />
    <view class="flex-row group-4">
      <view class="flex-col items-center text-wrapper-1">
        <text>{{ sendType }}</text>
      </view>
      <view class="flex-col items-center image-wrapper" @click="view_10OnClick">
        <text style="color: rgb(35 193 158)">联系HR</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import { ref } from "vue";
defineProps({
  attentionCompany: {
    type: Object,
  },
  sendType: {
    type: String,
  },
});
const func = ref("取消关注");
const view_4OnClick = () => {
  uni.navigateTo({ url: "/detail/gongsijieshao/gongsijieshao" });
};
const view_10OnClick = () => {
  uni.navigateTo({ url: "/mine/liaotianyemian/liaotianyemian" });
};
</script>

<style lang="scss" scoped>
.component {
  height: 235rpx;
  padding-top: 23rpx;
  overflow: hidden;
  border: solid 2rpx rgb(229 229 229);
  border-radius: 5rpx;

  .group-4 {
    font-size: 25rpx;
    line-height: 23rpx;
    color: rgb(163 154 154);
    letter-spacing: 2.5rpx;
    white-space: nowrap;

    .text-wrapper-1 {
      flex: 1 1 335rpx;
      height: 75rpx;
      padding: 25rpx 0 24rpx;
      overflow: hidden;
      border: solid 2rpx rgb(229 229 229);
    }

    .image-wrapper {
      flex: 1 1 335rpx;
      height: 75rpx;
      padding: 21rpx 0 17rpx;
      overflow: hidden;
      border: solid 2rpx rgb(229 229 229);
    }
  }
}
</style>
