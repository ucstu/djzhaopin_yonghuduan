<template>
  <NavigationBar class="header" title="收藏职位" />
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
import { getCompanyinfosCompanyinfoidPositioninfos } from "@/services/services";
import { ref } from "vue";

const collectionPositions = ref([]);
getCompanyinfosCompanyinfoidPositioninfos().then((res) => {
  collectionPositions.value = res.data.body;
});
const cancelCollection = ref("取消收藏");
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
