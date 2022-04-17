<template>
  <NavigationBar title="求职期望" />
  <view class="flex-row page">
    <view class="group-all">
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望职位</text>
        <text class="text-right" @click="expectJob">{{ job }}</text>
      </view>
      <!-- <view class="flex-row items-center justify-between group-box">
        <text class="text-title">细分标签</text>
        <text class="text-right" @click="directTag">{{ directionTag }}</text>
      </view> -->
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望月薪</text>
        <text class="text-right" @click="expectSalry">{{ salary }}</text>
      </view>
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望城市</text>
        <text class="text-right" @click="expectCity">{{ city }}</text>
      </view>
    </view>
    <wybPopup
      ref="popup"
      :show-close-icon="false"
      :height="400"
      :radius="10"
      mode="size-auto"
      type="bottom"
    >
      <view class="flex-row justify-between" style="height: 80rpx">
        <view
          class="justify-center items-center"
          style="width: 50%; font-size: 30rpx"
        >
          <text>起始薪资</text>
        </view>
        <view
          class="justify-center items-center"
          style="width: 50%; font-size: 30rpx"
        >
          <text>结束薪资</text>
        </view>
      </view>
      <picker-view class="picker-view" @change="salaryChange">
        <picker-view-column>
          <view v-for="(start, i) in startSalary" :key="i" class="item">{{
            start
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(end, i) in endSalary" :key="i" class="item">{{
            end
          }}</view>
        </picker-view-column>
      </picker-view>
    </wybPopup>
    <view class="justify-center button-box">
      <button class="button" @click="saveJobExcept">保存</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { postUserinfosUserinfoidJobexpectations } from "@/services/services";
import { onShow } from "@dcloudio/uni-app";
import { ref } from "vue";

const job = ref("请选择 >");
// const directionTag = ref("请选择 >");
const salary = ref("请选择 >");
const city = ref("请选择 >");

const popup = ref();
const expectSalry = () => {
  popup.value.show();
};

const startSalary = ref<number[]>([]);
const endSalary = ref<number[]>([]);
let startsa = ref("");
let endsa = ref("");
for (let i = 1; i <= 90; i++) {
  startSalary.value.push(i);
}
for (let i = 5; i <= 100; i++) {
  endSalary.value.push(i);
}
const salaryChange = (e: { detail: { value: never } }) => {
  let val = e.detail.value;
  startsa.value = String(startSalary.value[val[0]]);
  endsa.value = String(endSalary.value[val[1]]);
  salary.value = `${startsa.value}k-${endsa.value}k`;
};

onShow(() => {
  uni.$on("liveCity", (e) => {
    city.value = e;
  });
  uni.$on("positiontypes", (e) => {
    console.log(e);
    job.value = e;
  });
});

const saveJobExcept = () => {
  if (job.value !== "" || salary.value !== "" || city.value !== "") {
    postUserinfosUserinfoidJobexpectations(
      { userinfoid: "" },
      {
        positionType: "1",
        // directionTags: directionTag.value,
        startingSalary: startsa.value,
        ceilingSalary: endsa.value,
        city: city.value,
      }
    ).then((res) => {
      console.log(res);
    });
    uni.navigateBack({
      delta: 1,
    });
  }
};

const expectJob = () => {
  uni.navigateTo({ url: "/most/zhiweileixing/zhiweileixing" });
};
const directTag = () => {
  uni.navigateTo({ url: "/most/xifenshaixuan/xifenshaixuan" });
};
const expectCity = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
};
</script>

<style lang="scss" scoped>
.page {
  height: auto;

  .group-all {
    .group-box {
      width: 710rpx;
      height: 120rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      border: 1rpx solid rgb(210 210 210);
      border-radius: 10rpx;

      .text-title {
        padding-left: 20rpx;
      }

      .text-right {
        padding-right: 20rpx;
        color: rgb(153 153 153);
      }
    }
  }

  .picker-view {
    width: 750rpx;
    height: 400rpx;
    margin-top: 20rpx;

    .item {
      align-items: center;
      justify-content: center;
      height: 300rpx;
      font-size: 30rpx;
      color: black;
      text-align: center;
    }
  }

  .button-box {
    position: absolute;
    bottom: 30rpx;
    width: 100%;

    .button {
      width: 600rpx;
      height: 80rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
    }
  }
}
</style>
