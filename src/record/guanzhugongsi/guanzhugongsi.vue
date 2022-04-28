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
import { getUserinfosP0Attentionrecords } from "@/services/services";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const attentionCompanies = ref({});
getUserinfosP0Attentionrecords(
  store.state.accountInfo.userInformationId,
  {}
).then((res) => {
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
