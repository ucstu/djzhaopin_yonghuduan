<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="我的查看" />
    <view class="flex-col list">
      <JobDetail
        v-for="(myview, i) in myViews"
        :key="i"
        class="list-item"
        @click="view_2OnClick"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobDetail from "@/components/JobDetail/JobDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive } from "vue";
const myViews = reactive([
  {
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
  {
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
  {
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
  {
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
]);

const view_2OnClick = () => {
  uni.navigateTo({ url: "/detail/zhiweixiangqing/zhiweixiangqing" });
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 1209rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .header {
    position: relative;
  }

  .list {
    position: absolute;
    top: 125rpx;
    right: 40rpx;
    left: 40rpx;

    .list-item {
      margin-top: 20rpx;
    }
  }
}
</style>
