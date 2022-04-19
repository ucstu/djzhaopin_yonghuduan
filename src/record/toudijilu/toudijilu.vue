<template>
  <NavigationBar class="header" title="投递记录" />
  <view class="flex-col page">
    <view class="justify-between items-center group-1">
      <view
        v-for="(send, i) in sendType"
        :key="i"
        :class="sendTypeId === i ? 'active' : ''"
        @click="sendTypeId = i"
        >{{ send }}</view
      >
    </view>
    <view class="flex-col list">
      <JobPanel
        v-for="(deliveryRecord, i) in deliveryRecords"
        :key="i"
        class="list-item"
        :collection-position="deliveryRecord"
        :send-type="sendType[sendTypeId]"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import JobPanel from "@/components/JobPanel/JobPanel.vue";
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getCompanyinfosCompanyinfoidPositioninfos } from "@/services/services";
import { ref } from "vue";

const deliveryRecords = ref([]);
const sendType = ref(["待查看", "已查看", "通过初筛", "约面试", "不合格"]);

getCompanyinfosCompanyinfoidPositioninfos().then((res) => {
  deliveryRecords.value = res.data.body;
});

const sendTypeId = ref(0);
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: auto;

  .active {
    color: rgb(35 193 158);
  }

  .group-1 {
    width: 710rpx;
    height: 50rpx;
    margin-top: 30rpx;
    margin-left: 20rpx;
    font-size: 25rpx;
    color: rgb(0 0 0 / 50%);
  }

  .list {
    width: 690rpx;
    height: auto;
    margin-left: 30rpx;

    .list-item {
      &:last-of-type {
        margin-top: 18rpx;
      }
    }
  }
}
</style>
