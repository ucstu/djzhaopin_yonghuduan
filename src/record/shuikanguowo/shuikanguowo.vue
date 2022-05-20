<template>
  <NavigationBar title="谁看过我" />
  <view class="flex-col page">
    <view class="flex-col list">
      <CompanyDetail
        v-for="(lookForMe, i) in companyInfo"
        :key="i"
        class="list-item"
        :company-detail="lookForMe"
        @com-click="view_2OnClick(lookForMe.companyInformationId)"
      />
    </view>
  </view>
  <view v-if="emptyShow" class="justify-center image">
    <image src="@/static/icons/nodata.svg" />
  </view>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  getCompanyInfosP0,
  getUserInfosP0InspectionRecords,
} from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";

const store = useMainStore();

const companyInfo = ref<CompanyInformation[]>([]);
const emptyShow = ref(false);

getUserInfosP0InspectionRecords(
  store.accountInformation.fullInformationId,
  {}
).then((res) => {
  if (!res.data.body.userInspectionRecords.length) {
    emptyShow.value = true;
  } else {
    for (const item of res.data.body.userInspectionRecords) {
      getCompanyInfosP0(item.companyInformationId)
        .then((res) => {
          let p = companyInfo.value.map((item) => item.companyInformationId);
          if (!p.includes(res.data.body.companyInformationId)) {
            companyInfo.value.push(res.data.body);
          }
        })
        .catch(failResponseHandler);
    }
    emptyShow.value = false;
  }
});

const view_2OnClick = (c: string) => {
  uni.navigateTo({ url: "/detail/gongsijieshao/gongsijieshao?companyId=" + c });
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
