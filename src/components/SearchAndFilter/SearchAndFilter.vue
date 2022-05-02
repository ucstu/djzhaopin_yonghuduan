<template>
  <CompanyDetail
    v-for="(attentionCompany, i) in cpmpanyInfos"
    :key="i"
    class="list-item"
    :company-detail="attentionCompany"
  />
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { ref } from "vue";

const cpmpanyInfos = ref<CompanyInformation[]>([]);

getCompanyInfos({}).then((res) => {
  cpmpanyInfos.value = res.data.body;
});
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
