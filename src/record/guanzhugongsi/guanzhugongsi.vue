<template>
  <NavigationBar title="关注公司" />
  <view class="flex-col page">
    <view class="flex-col list">
      <CompanyPanel
        v-for="(attentionCompany, i) in attentionCompanies"
        :key="i"
        class="list-item"
        :attention-company="attentionCompany"
        :send-type="unfocus"
        @unfocus="unsubscribe(attentionCompany.companyInformationId)"
      />
    </view>
  </view>
  <view v-if="emptyShow" class="justify-center image">
    <image src="@/static/icons/nodata.svg" />
  </view>
</template>

<script lang="ts" setup>
import CompanyPanel from "@/components/CompanyPanel/CompanyPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  deleteUserInfosP0AttentionRecordsP1,
  getCompanyInfosP0,
} from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { failResponseHandler } from "@/utils/handler";
import { onLoad, onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

const attentionCompanies = ref<CompanyInformation[]>([]);
const focusCompany = ref();
const unfocus = ref("取消关注");
const emptyShow = ref(true);

onLoad((e) => {
  if (e.focusCompany) {
    focusCompany.value = JSON.parse(e.focusCompany);
    for (const focus of focusCompany.value) {
      getCompanyInfosP0(focus.companyInformationId)
        .then((res) => {
          attentionCompanies.value.push(res.data.body);
          if (attentionCompanies.value.length) {
            emptyShow.value = false;
          }
        })
        .catch(failResponseHandler);
    }
  }
});

onShow(() => {
  if (!attentionCompanies.value.length) {
    attentionCompanies.value = [];
    emptyShow.value = true;
  }
});

const unsubscribe = (index: string) => {
  let attentionRecordId = focusCompany.value.find(
    (item: { companyInformationId: string }) => {
      return item.companyInformationId === index;
    }
  );
  deleteUserInfosP0AttentionRecordsP1(
    attentionRecordId.userInformationId,
    attentionRecordId.attentionRecordId
  )
    .then((res) => {
      attentionCompanies.value = attentionCompanies.value.filter(
        (item: CompanyInformation) => {
          return item.companyInformationId !== index;
        }
      );
    })
    .catch(failResponseHandler);
};
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

.image {
  width: 100%;
  height: auto;
  margin: 10rpx 0 7rpx 7rpx;
}
</style>
