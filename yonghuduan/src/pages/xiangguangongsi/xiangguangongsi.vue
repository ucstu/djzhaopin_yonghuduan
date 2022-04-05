<template>
  <view class="page">
    <SearchBar></SearchBar>
    <view class="flex-row justify-between search-sort" id="marTop">
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
        @click="toCompanyInfo"
        class="list-item"
        :companyDetail="attentionCompany"
        :key="i"
        v-for="(attentionCompany, i) in attentionCompanies"
      />
    </view>
    <!-- <wybPopup
      ref="popup"
      type="left"
      :marginTop="marTop"
      height="200"
      :width="500"
      :radius="6"
      :showCloseIcon="true"
      mode="size-fixed"
    >
      <view>ajkshdf</view>
    </wybPopup>-->
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { key } from '@/stores';
import { useStore } from 'vuex';
import { getCompanyinfos, getFilterinfos } from '@/services/services';
import CompanyDetail from '@/components/CompanyDetail/CompanyDetail.vue'
import SearchBar from '@/components/SearchAndFilter/SearchBar.vue';
import { CompanyInformation } from '@/services/types';
import wybPopup from '@/components/wyb-popup/wyb-popup.vue';

const store = useStore(key)
const popup = ref();

let attentionCompanies = reactive<CompanyInformation[]>([])
getCompanyinfos().then(res => {
  attentionCompanies.push(...res.data)

})
const companySizes = reactive([])    //公司规模
const financeStages = reactive([])   //融资阶段
const industrySectors = reactive([]) //行业领域
getFilterinfos().then(res => {
  companySizes.push(...res.data.companySize)
  financeStages.push(...res.data.financingStage)
  industrySectors.push(...res.data.IndustryField)
  console.log(companySizes);
  console.log(financeStages);
  console.log(industrySectors);
})

const toCompanyInfo = () => {
  uni.navigateTo({ url: '/pages/gongsijieshao/gongsijieshao' })
}
const showDirections = () => {

  popup.value.show()

}
const marTop = ref(0)
onMounted(() => {
  const query = uni.createSelectorQuery();
  query.select('#marTop').boundingClientRect(data => {
    marTop.value = data.top! + data.height!
  }).exec();
})
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 1330rpx;
  margin-left: 20rpx;
  background-color: rgb(255, 255, 255);
  overflow-y: auto;
  position: relative;
  .search-sort {
    font-size: 28rpx;
    width: 710rpx;
    height: 80rpx;
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
    margin-left: 20rpx;
    color: rgb(230, 230, 230);
    width: 15rpx;
    height: 15rpx;
  }
}
</style>
