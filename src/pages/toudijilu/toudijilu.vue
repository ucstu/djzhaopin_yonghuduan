<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="投递记录" />
    <view class="justify-between group-1">
      <text class="text-1">待查看</text>
      <text class="text-2">已查看</text>
      <text class="text-3">通过初筛</text>
      <text class="text-4">约面试</text>
      <text class="text-5">不合格</text>
    </view>
    <view class="flex-col list">
      <JobPanel
        v-for="(deliveryRecord, i) in deliveryRecords"
        :key="i"
        class="list-item"
        :collection-position="deliveryRecord"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive } from "vue";

const deliveryRecords = reactive([
  {
    jobDetail: {
      name: "前端开发实习生",
      areaAndRequirements: "江北区 | 在校/应届",
      educationalRequirements: "本科",
      directionOne: "后台开发",
      directionTwo: "JAVA开发",
      companyLogoAddress:
        "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png",
      companyName: "字节跳动",
      companyInfo: "D轮及以上 | 2000人以上 | 内容资讯",
      salary: "4K - 8K",
      releaseDate: "2月28日",
    },
    left: "待查看",
  },
  {
    jobDetail: {
      name: "前端开发实习生",
      areaAndRequirements: "江北区 | 在校/应届",
      educationalRequirements: "本科",
      directionOne: "后台开发",
      directionTwo: "JAVA开发",
      companyLogoAddress:
        "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png",
      companyName: "字节跳动",
      companyInfo: "D轮及以上 | 2000人以上 | 内容资讯",
      salary: "4K - 8K",
      releaseDate: "2月28日",
    },
    left: "待查看",
  },
]);
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 1334rpx;
  padding-bottom: 544rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .group-1 {
    position: absolute;
    top: 137rpx;
    right: 40rpx;
    left: 40rpx;
    padding-right: 11rpx;
    padding-left: 14rpx;

    .text-1 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(35 193 158);
      white-space: nowrap;
    }

    .text-2 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0 / 50%);
      white-space: nowrap;
    }

    .text-3 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0 / 50%);
      white-space: nowrap;
    }

    .text-4 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0 / 50%);
      white-space: nowrap;
    }

    .text-5 {
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0 / 50%);
      white-space: nowrap;
    }
  }

  .list {
    position: absolute;
    top: 210rpx;
    right: 40rpx;
    left: 40rpx;

    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
