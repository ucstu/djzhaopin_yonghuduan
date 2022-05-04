<template>
  <view class="flex-row equal">
    <view class="items-center justify-center equal-div" @click="filterCompany">
      <text>筛选</text>
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
      />
    </view>
    <view class="items-center justify-center equal-div" @click="sort">
      <text>{{ sortval }}</text>
      <image
        class="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
      />
    </view>
  </view>
  <view class="company-detail">
    <CompanyDetail
      v-for="(attentionCompany, i) in companyInfos"
      :key="i"
      class="list-item"
      :company-detail="attentionCompany"
      @com-click="toCompanyInfo(attentionCompany.companyInformationId)"
    />
  </view>

  <wybPopup
    ref="popup"
    :show-close-icon="false"
    :height="300"
    :radius="10"
    mode="size-auto"
    type="bottom"
  >
    <view class="sort-box">
      <view
        v-for="(item, i) in sortValue"
        :key="i"
        class="sort-value"
        :class="sortNum === i ? 'active' : ''"
        @click="sortChoose(i)"
      >
        {{ item }}
      </view>
    </view>
  </wybPopup>
</template>

<script lang="ts" setup>
import CompanyDetail from "@/components/CompanyDetail/CompanyDetail.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { getCompanyInfos } from "@/services/services";
import { CompanyInformation } from "@/services/types";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const companyInfos = ref<CompanyInformation[]>([]);
const sortValue = ["综合排序", "距离优先", "公司规模", "融资阶段"];
const sortval = ref(sortValue[0]);

onLoad((e) => {
  if (e.value !== undefined) {
    getCompanyInfos({
      companyName: e.value,
    }).then((res) => {
      companyInfos.value = res.data.body;
    });
  }
});

const filterCompany = () => {
  return;
};
const popup = ref();
const sort = () => {
  popup.value.show();
};
const sortNum = ref(0);
const sortChoose = (index: number) => {
  sortNum.value = index;
  sortval.value = sortValue[index];
  if (index === 1) {
    getCompanyInfos({
      sort: ["cityName,asc"],
    }).then((res) => {
      companyInfos.value = res.data.body;
    });
  } else if (index === 2) {
    getCompanyInfos({
      sort: ["scale,desc"],
    }).then((res) => {
      companyInfos.value = res.data.body;
    });
  } else if (index === 3) {
    getCompanyInfos({
      sort: ["financingStage,desc"],
    }).then((res) => {
      companyInfos.value = res.data.body;
    });
  } else {
    getCompanyInfos({
      sort: ["companyInformationId,asc"],
    }).then((res) => {
      companyInfos.value = res.data.body;
    });
  }
  popup.value.hide();
};

const toCompanyInfo = (c: string) => {
  uni.navigateTo({
    url: "/detail/gongsijieshao/gongsijieshao?companyId=" + c,
  });
};
</script>

<style lang="scss" scoped>
.active {
  color: rgb(35 193 158);
}

.equal {
  width: 94%;
  height: 60rpx;
  margin-left: 3%;

  .equal-div {
    width: 130rpx;
    height: 60rpx;
    font-size: 28rpx;
    white-space: nowrap;
    cursor: pointer;

    .image {
      width: 10rpx;
      height: 7rpx;
      margin: 10rpx 0 7rpx 7rpx;
    }
  }
}

.company-detail {
  width: 100%;
  height: auto;
  margin-top: 20rpx;
  background-color: rgb(240 240 240);
}

.sort-box {
  width: 90%;
  height: auto;
  margin-top: 20rpx;
  margin-left: 5%;
  font-size: 35rpx;

  .sort-value {
    width: 100%;
    height: 60rpx;
    border-bottom: 3rpx solid rgb(240 240 240);
  }
}
</style>
