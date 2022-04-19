<template>
  <NavigationBar class="header" title="关注公司" />
  <view class="flex-col page">
    <view class="flex-col list">
      <CompanyPanel
        v-for="(attentionCompany, i) in attentionCompanies"
        :key="i"
        class="list-item"
        :attention-company="attentionCompany"
        :send-type="unfollow"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyPanel from "@/components/CompanyPanel/CompanyPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCompanyinfos } from "@/services/services";
import { ref } from "vue";

const attentionCompanies = ref([]);
getCompanyinfos().then((res) => {
  attentionCompanies.value = res.data.body;
});
const unfollow = ref("取消关注");
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: auto;

  .list {
    width: 690rpx;
    margin-left: 30rpx;

    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
