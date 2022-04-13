<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="收藏职位" />
    <view class="flex-col list">
      <JobPanel
        v-for="(collectionPosition, i) in collectionPositions"
        :key="i"
        class="list-item"
        :collection-position="collectionPosition"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive } from "vue";

const collectionPositions = reactive([
  {
    jobDetail: {
      name: "前端开发实习生1",
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
    left: "取消收藏",
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
    left: "取消收藏",
  },
]);
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 1226rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: relative;
  }

  .list {
    position: absolute;
    top: 130rpx;
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
