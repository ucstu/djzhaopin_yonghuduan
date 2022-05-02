<template>
  <NavigationBar title="收藏职位" right="清空" @right-click="emptyFavorites" />
  <view class="flex-col page">
    <view class="flex-col list">
      <JobPanel
        v-for="(collectionPosition, i) in collectionPositions"
        :key="i"
        class="list-item"
        :collection-position="collectionPosition"
        :send-type="cancelCollection"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import {
  deleteUserInfosP0GarnerRecordsP1,
  getUserInfosP0GarnerRecords,
} from "@/services/services";
import { PositionInformation } from "@/services/types";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);
const favorites = ref();
const favoritesPosition = ref<PositionInformation[]>([]);
const cancelCollection = ref("取消收藏");

const collectionPositions = ref({});
getUserInfosP0GarnerRecords(store.state.accountInfo.fullInformationId, {})
  .then((res) => {
    console.log(res.data.body);
    favorites.value = res.data.body;
    for (const favorite of res.data.body) {
      console.log(favorite);
      // getCompanyInfosP0PositionInfosP1(
      //   favorite.companyInformationId,
      //   favorite.positionInformationId
      // )
      //   .then((res) => {
      //     favoritesPosition.value.push(res.data.body);
      //   })
      //   .catch(failResponseHandler);
    }
  })
  .catch(failResponseHandler);

/* 清空收藏记录 */
const emptyFavorites = () => {
  for (const favorite of favorites.value) {
    deleteUserInfosP0GarnerRecordsP1(
      store.state.accountInfo.fullInformationId,
      favorite.deliveryRecordId
    )
      .then(() => {
        favorites.value.length = 0;
      })
      .catch(failResponseHandler);
  }
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
</style>
