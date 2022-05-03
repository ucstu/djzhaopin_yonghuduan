<template>
  <CompanyDetail
    v-for="(attentionCompany, i) in companyInfos"
    :key="i"
    class="list-item"
    :company-detail="attentionCompany"
    @com-click="toCompanyInfo(attentionCompany.companyInformationId)"
  />
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { ref } from "vue";

const companyInfos = ref<CompanyInformation[]>([]);

getCompanyInfos({}).then((res) => {
  companyInfos.value = res.data.body;
});

const toCompanyInfo = (c: string) => {
  uni.navigateTo({
    url: "/detail/gongsijieshao/gongsijieshao?companyId=" + c,
  });
};
</script>

<style lang="scss" scoped>
.about {
  padding-right: 106rpx;
  padding-left: 111rpx;
  margin-bottom: 5rpx;
  font-size: 30rpx;
  line-height: 28rpx;
  color: rgb(0 0 0);
  letter-spacing: 6rpx;
  white-space: nowrap;
}
</style>
