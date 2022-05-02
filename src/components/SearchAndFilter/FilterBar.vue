<template>
  <view class="flex-col bar">
    <view class="flex-row equal">
      <view class="items-center justify-center equal-div">
        <text class="text">排序</text>
        <image
          class="image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
        />
      </view>
      <view class="items-center justify-center equal-div">
        <text class="text">城市</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image"
        />
      </view>
      <view class="items-center justify-center equal-div">
        <text class="text">公司</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image"
        />
      </view>
    </view>
  </view>
  <JobDetail
    v-for="(JobDetail, i) in jobDetails"
    :key="i"
    class="list-item"
    :job-detail="JobDetail"
    @job-click="toPositions"
  />
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import { getCompanyInfosPositionInfos } from "@/services/services";
import { PositionInformation } from "@/services/types";
import { ref } from "vue";

const jobDetails = ref<PositionInformation[]>([]);

getCompanyInfosPositionInfos({}).then((res) => {
  jobDetails.value = res.data.body;
});

const toPositions = () => {
  return 0;
};
</script>

<style lang="scss" scoped>
.bar {
  .equal {
    width: 94%;
    height: 60rpx;
    margin-left: 3%;

    .equal-div {
      width: 110rpx;
      height: 60rpx;
      font-size: 28rpx;
      white-space: nowrap;

      .image {
        width: 10rpx;
        height: 7rpx;
        margin: 10rpx 0 7rpx 7rpx;
      }
    }
  }

  .filter {
    height: 50rpx;
    margin-top: 15rpx;

    .sift-group {
      width: 640rpx;
      overflow-x: hidden;

      .sift {
        width: 80rpx;
        margin-left: 15rpx;
        font-size: 25rpx;
        background-color: rgb(229 229 229);
        border-radius: 5rpx;
      }
    }

    .image-sifts {
      width: 70rpx;

      .sifts {
        width: 42rpx;
        height: 40rpx;
      }
    }
  }
}
</style>
