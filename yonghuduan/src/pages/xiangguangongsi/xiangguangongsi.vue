<template>
  <view class="page">
    <SearchBar></SearchBar>
    <view id="marTop" class="flex-row justify-between search-sort">
      <view class="items-center justify-center search" @click="showDirections">
        <text>筛选</text>
        <image src="@/static/icons/arrow-down-filling.png" class="image" />
      </view>
      <view class="items-center justify-center sort">
        <text>排序</text>
        <image src="@/static/icons/arrow-down-filling.png" class="image" />
      </view>
    </view>
    <view class="flex-col list">
      <CompanyDetail
        v-for="(attentionCompany, i) in attentionCompanies"
        :key="i"
        class="list-item"
        :company-detail="attentionCompany"
        @click="toCompanyInfo"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import SearchBar from "@/components/SearchAndFilter/SearchBar.vue";
import { getCompanyinfos, getFilterinfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { key } from "@/stores";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);
const popup = ref();

let attentionCompanies = reactive<CompanyInformation[]>([]);
getCompanyinfos().then((res) => {
  attentionCompanies.push(...res.data);
});
const companySizes = reactive([]); //公司规模
const financeStages = reactive([]); //融资阶段
const industrySectors = reactive([]); //行业领域
getFilterinfos().then((res) => {
  companySizes.push(...res.data.companySize);
  financeStages.push(...res.data.financingStage);
  industrySectors.push(...res.data.IndustryField);
  console.log(companySizes);
  console.log(financeStages);
  console.log(industrySectors);
});

const toCompanyInfo = () => {
  uni.navigateTo({ url: "/pages/gongsijieshao/gongsijieshao" });
};
const showDirections = () => {
  popup.value.show();
};
const marTop = ref(0);
onMounted(() => {
  const query = uni.createSelectorQuery();
  query
    .select("#marTop")
    .boundingClientRect((data) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      marTop.value = data.top! + data.height!;
    })
    .exec();
});
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 710rpx;
  height: 1330rpx;
  margin-left: 20rpx;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .search-sort {
    width: 710rpx;
    height: 80rpx;
    font-size: 28rpx;

    .search {
      width: 355rpx;
    }

    .sort {
      width: 355rpx;
    }
  }

  .list {
    margin-top: 30rpx;

    .list-item {
      &:not(:first-of-type) {
        margin-top: 24rpx;
      }
    }
  }

  .image {
    width: 15rpx;
    height: 15rpx;
    margin-left: 20rpx;
    color: rgb(230 230 230);
  }
}
</style>
