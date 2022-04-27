<template>
  <NavigationBar class="header" title="谁看过我" />
  <view class="flex-col page">
    <view class="flex-col list">
      <CompanyDetail
        v-for="(lookForMe, i) in lookForMes"
        :key="i"
        class="list-item"
        :company-detail="lookForMe"
        @click="view_2OnClick"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getUserinfosUserinfoidInspectionrecords } from "@/services/services";
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const lookForMes = ref({});
getUserinfosUserinfoidInspectionrecords(
  store.state.accountInfo.userInformationId,
  {
    page: "1",
    size: "10",
  }
).then((res) => {
  lookForMes.value = res.data.body;
});

const view_2OnClick = () => {
  uni.navigateTo({ url: "/detail/gongsijieshao/gongsijieshao" });
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: auto;

  .list {
    position: absolute;
    top: 128rpx;
    right: 40rpx;
    left: 40rpx;

    .list-item {
      &:not(:first-of-type) {
        margin-top: 24rpx;
      }
    }
  }
}
</style>
