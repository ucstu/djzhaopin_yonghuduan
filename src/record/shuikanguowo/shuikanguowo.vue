<template>
  <NavigationBar title="谁看过我" />
  <view class="flex-col page">
    <view class="flex-col list">
      <CompanyDetail
        v-for="(lookForMe, i) in lookForMes"
        :key="i"
        class="list-item"
        :company-detail="lookForMe"
        @com-click="view_2OnClick(lookForMe.companyInformationId)"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  getCompanyInfosP0,
  getUserInfosP0InspectionRecords,
} from "@/services/services";
import { CompanyInformation, UserInspectionRecord } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const store = useMainStore();

const lookForMes = ref<UserInspectionRecord[]>([]);
const companyInfo = ref<CompanyInformation[]>([]);
getUserInfosP0InspectionRecords(
  store.accountInformation.fullInformationId,
  {}
).then((res) => {
  console.log(res.data.body);
  lookForMes.value = res.data.body;
  companyInfo.value.length = 0;
  for (const item of lookForMes.value) {
    getCompanyInfosP0(item.companyInformationId)
      .then((res) => {
        companyInfo.value.push(res.data.body);
      })
      .catch(failResponseHandler);
  }
});

const view_2OnClick = (index: string) => {
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
