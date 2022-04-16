<template>
  <view class="flex-col page">
    <NavigationBar class="header" title="关注公司" />
    <view class="flex-col list">
      <CompanyPanel
        v-for="(attentionCompany, i) in attentionCompanies"
        :key="i"
        class="list-item"
        :attention-company="attentionCompany"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyPanel from "@/components/CompanyPanel/CompanyPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive } from "vue";

const attentionCompanies = reactive([
  {
    logo: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png",
    name: "字节跳动",
    recruitmentPosition: "200",
    cityAndInfo: "杭州 | 上市公司 | 2000人以上 | 软件服务",
    benefitOne: "技能培训",
    benefitTwo: "年薪双假",
    benefitThree: "带薪年假",
    unfollow: "取消关注",
  },
  {
    logo: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528776315613849.png",
    name: "字节跳动",
    recruitmentPosition: "200",
    cityAndInfo: "杭州 | 上市公司 | 2000人以上 | 软件服务",
    benefitOne: "技能培训",
    benefitTwo: "年薪双假",
    benefitThree: "带薪年假",
    unfollow: "取消关注",
  },
]);
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 1204rpx;
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
