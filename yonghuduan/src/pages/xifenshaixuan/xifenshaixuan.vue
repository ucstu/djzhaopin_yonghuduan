<template>
  <view class="flex-row page">
    <NavigationBar class="header" />
    <scroll-view class="group-view" :scroll-y="true">
      <view class="flex-col group-top">
        <text class="text-title">选择职位细分标签</text>
        <text class="tag">根据您选择的期望职位，选择一下职位细分标签</text>
      </view>
      <view v-for="(title, i) in segmentation" :key="i" class="group-tags">
        {{ title.classificationName }}
        <view class="flex-row group-box">
          <view
            v-for="(segmentInfo, i) in title.subdivisionLabels"
            :key="i"
            class="justify-center items-center segment-tag"
            :class="select === i ? 'active' : ''"
            @click="selectTag(i)"
          >
            {{ segmentInfo }}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="justify-center items-center btn-box">
      <button class="btn-submit" type="submit">确定</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getSubdivisionlabels } from "@/services/services";
import { DirectionTags } from "@/services/types";
import { ref } from "vue";

const select = ref<number[]>();
const segmentation = ref<DirectionTags>([]);
getSubdivisionlabels({ jobName: "撒辣椒粉" }).then((res) => {
  segmentation.value = res.data;
});

const selectTag = (index: number) => {
  select.value = index;
  console.log(select.value);
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: auto;

  .active {
    background-color: rgb(35 193 158) !important;
  }

  .group-view {
    width: 100%;
    height: 1240rpx;

    .group-top {
      margin-top: 120rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      font-weight: 600;

      .tag {
        font-size: 23rpx;
        font-weight: bold;
      }
    }

    .group-tags {
      width: 710rpx;
      height: auto;
      margin-top: 20rpx;
      margin-left: 20rpx;
      font-size: 30rpx;

      .group-box {
        flex-wrap: wrap;
        margin-top: 10rpx;
        font-size: 25rpx;

        .segment-tag {
          flex-wrap: wrap;
          width: 220rpx;
          height: 60rpx;
          margin: 10rpx;
          text-align: center;
          background-color: rgb(230 230 230);
          border-radius: 10rpx;
        }
      }
    }
  }

  .btn-box {
    position: fixed;
    bottom: 10rpx;
    width: 100%;
    height: 80rpx;

    .btn-submit {
      width: 600rpx;
      height: 80rpx;
      font-size: 30rpx;
      font-weight: bold;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }
}
</style>
