<template>
  <NavigationBar title="求职期望" />
  <view class="flex-row page">
    <view class="group-all">
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望职位</text>
        <view class="items-center text-right" @click="expectJob">
          <text>{{ job }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view
        v-if="directionShow"
        class="flex-row items-center justify-between group-box"
      >
        <text class="text-title">细分标签</text>
        <view class="items-center text-right" @click="directTag">
          <text class="direction">{{ directionTag }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望月薪</text>
        <view class="items-center text-right" @click="expectSalary">
          <text>{{ salary }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="flex-row items-center justify-between group-box">
        <text class="text-title">期望城市</text>
        <view class="items-center text-right" @click="expectCity">
          <text>{{ city }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
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
          style="width: 25%; font-size: 30rpx"
        >
          <text style="color: gray" @click="popup.hide()">取消</text>
        </view>
        <view
          class="justify-center items-center"
          style="width: 25%; font-size: 30rpx"
        >
          <text>期望薪资</text>
        </view>
        <view
          class="justify-center items-center"
          style="width: 25%; font-size: 30rpx"
        >
          <text style="color: rgb(35 193 158)" @click="salaryExpectation"
            >确认</text
          >
        </view>
      </view>
      <picker-view :value="value" class="picker-view" @change="salaryChange">
        <picker-view-column>
          <view v-for="(item, i) in startSalary" :key="i" class="item"
            >{{ item }}k</view
          >
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, i) in endSalary" :key="i" class="item"
            >{{ item }}k</view
          >
        </picker-view-column>
      </picker-view>
    </wybPopup>
    <view class="justify-center button-box">
      <button class="button" @click="saveJobExcept">{{ saveBtn }}</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  getUserinfosP0JobexpectationsP1,
  postUserinfosP0Jobexpectations,
} from "@/services/services";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const job = ref("");
const directionTags = ref<string[]>([]);
const directionTag = ref("");
const directionShow = ref(false);
const salary = ref("");
const city = ref("");
const saveBtn = ref("保存");
const saveOver = ref("完成");
const jobId = ref("");

const popup = ref();
const expectSalary = () => {
  popup.value.show();
};

const startSalary = ref<number[]>([]);
const endSalary = ref<number[]>([]);
let start = ref(0);
let end = ref(0);
for (let i = 1; i <= 90; i++) {
  startSalary.value.push(i);
}
for (let i = 5; i <= 100; i++) {
  endSalary.value.push(i);
}
const value = ref([5, 8]);
const salaryChange = (e: { detail: { value: number[] } }) => {
  let val = e.detail.value;
  start.value = startSalary.value[val[0]];
  end.value = endSalary.value[val[1]];
  value.value = [val[0], val[1]];
};
const salaryExpectation = () => {
  if (start.value === 0 || end.value === 0) {
    salary.value = `${6}k-${13}k`;
  } else {
    salary.value = `${start.value}k-${end.value}k`;
  }
  popup.value.hide();
};

onLoad((e) => {
  if (e.id !== undefined) {
    jobId.value = e.id;
  }
  if (e.data === "true") {
    saveBtn.value = "保存";
  } else {
    saveBtn.value = "完成";
  }
  if (jobId.value) {
    getUserinfosP0JobexpectationsP1(
      store.state.accountInfo.userInformationId,
      jobId.value
    )
      .then((res) => {
        salary.value =
          res.data.body.startingSalary +
          "k-" +
          res.data.body.ceilingSalary +
          "k";
        city.value = res.data.body.cityName;
      })
      .catch(failResponseHandler);
  }
  uni.$on("liveCity", (date) => {
    city.value = date;
  });
  uni.$on("positiontypes", (t) => {
    job.value = t;
    if (job.value !== "") {
      directionShow.value = true;
    } else {
      directionShow.value = false;
    }
  });
  uni.$on("saveTags", (tag) => {
    if (tag.length !== 0) {
      directionTag.value = "";
      directionTags.value.length = 0;
      for (const element of tag) {
        directionTags.value.push(element);
        directionTag.value += element + "、";
      }
      if (directionTag.value.length > 0) {
        directionTag.value = directionTag.value.substring(
          0,
          directionTag.value.length - 1
        );
      }
    } else {
      for (const element of tag) {
        directionTag.value += element + "、";
      }
      if (directionTag.value.length > 0) {
        directionTag.value = directionTag.value.substring(
          0,
          directionTag.value.length - 1
        );
      }
    }
  });
});

// 保存求职期望
const saveJobExcept = () => {
  if (job.value === "" || salary.value === "" || city.value === "") {
    uni.showToast({
      title: "请填写完整信息",
      icon: "none",
      duration: 500,
    });
  } else if (directionShow.value) {
    if (directionTag.value === "") {
      uni.showToast({
        title: "请填写完整信息",
        icon: "none",
        duration: 500,
      });
    } else {
      postUserinfosP0Jobexpectations(
        store.state.accountInfo.userInformationId,
        {
          positionName: job.value,
          positionType: 1,
          directionTags: directionTags.value,
          startingSalary: start.value,
          ceilingSalary: end.value,
          cityName: city.value,
        }
      )
        .then((res) => {
          console.log(res.data.body);
        })
        .catch(failResponseHandler);
      if (saveBtn.value === saveOver.value) {
        uni.switchTab({ url: "/pages/shouyeyemian/shouyeyemian" });
      } else {
        uni.navigateBack({
          delta: 1,
        });
      }
    }
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

        .direction {
          max-width: 300rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
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

  .image {
    width: 30rpx;
    height: 30rpx;
  }
}
</style>
