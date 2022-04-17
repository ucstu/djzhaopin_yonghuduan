<template>
  <NavigationBar right="跳过" @right-click="skip" />
  <view class="flex-col page">
    <view class="flex-col group-all">
      <text class="self-info">请完善工作经历（3/3）</text>
      <view class="group-self">
        <text class="text">公司名称</text>
        <input
          v-model="companyName"
          class="input"
          type="text"
          placeholder="请输入"
        />
      </view>
      <view class="group-self">
        <text class="text">公司行业</text>
        <input
          v-model="companyType"
          class="input"
          type="text"
          placeholder="请输入"
        />
      </view>
      <view class="group-self">
        <text class="text">职位类型</text>
        <view class="flex-row justify-between" @click="subType">
          <text class="input">{{ subject }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self">
        <text class="text">在职时间</text>
        <view class="flex-row" @click="showWorkTime">
          <view class="justify-center items-center school-time">
            <text>{{ startTime }}</text>
          </view>
          <view class="justify-center items-center school-time">
            <text>{{ endTime }}</text>
          </view>
        </view>
      </view>
      <wybPopup
        ref="popup"
        :show-close-icon="true"
        :height="400"
        :radius="10"
        mode="size-auto"
        type="bottom"
      >
        <view
          v-if="!sub"
          class="flex-row justify-between"
          style="margin-top: 20rpx"
        >
          <view
            class="justify-center items-center"
            style="width: 50%; height: 60rpx"
            ><text>入职时间</text></view
          >
          <view
            class="justify-center items-center"
            style="width: 50%; height: 60rpx"
            ><text>离职时间</text></view
          >
        </view>
        <picker-view v-if="!sub" class="picker-view" @change="workChange">
          <picker-view-column>
            <view v-for="(start, i) in startYears" :key="i" class="item">{{
              start
            }}</view>
          </picker-view-column>
          <picker-view-column>
            <view v-for="(end, i) in endYears" :key="i" class="item">{{
              end
            }}</view>
          </picker-view-column>
        </picker-view>
        <picker-view v-if="sub" class="picker-view" @change="workChange">
          <picker-view-column>
            <view v-for="(item, i) in subjectType" :key="i" class="item">{{
              item
            }}</view>
          </picker-view-column>
        </picker-view>
      </wybPopup>
    </view>
    <view class="justify-center next-click">
      <view class="justify-center items-center next-box" @click="nextClick">
        <text>下一步</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { postUserinfosUserinfoidWorkexperiences } from "@/services/services";
import { ref } from "vue";

const companyName = ref("");
const companyType = ref("");
const subject = ref("请选择");
const subjectType = ref(["全职", "兼职", "实习", "其他"]);
const startTime = ref("入职时间");
const endTime = ref("离职时间");
const sub = ref(false);

const date = new Date();
const startYears = ref<number[]>([]);
const endYears = ref<number[]>([]);
let year = date.getFullYear();

for (let i = 1970; i <= year; i++) {
  startYears.value.push(i);
  endYears.value.push(i);
}

const popup = ref();

const subType = () => {
  sub.value = true;
  popup.value.show();
};

const showWorkTime = () => {
  sub.value = false;
  popup.value.show();
};

const workChange = (e: { detail: { value: never } }) => {
  let val = e.detail.value;
  if (sub.value) {
    subject.value = subjectType.value[val[0]];
  } else {
    startTime.value = String(startYears.value[val[0]]);
    endTime.value = String(endYears.value[val[1]]);
  }
};
// 下一步
const nextClick = () => {
  postUserinfosUserinfoidWorkexperiences(
    { userinfoid: "" },
    {
      corporateName: companyName.value,
      companyIndustry: companyType.value,
      positionType: subject.value,
      startTime: startTime.value,
      endTime: endTime.value,
    }
  ).then((res) => {
    console.log(res);
  });
  uni.navigateTo({ url: "/info/qiuzhiqiwang/qiuzhiqiwang" });
};

const skip = () => {
  uni.navigateTo({ url: "/info/qiuzhiqiwang/qiuzhiqiwang" });
};
</script>

<style lang="scss" scoped>
.page {
  .active {
    background-color: rgb(35 193 158);
  }

  .group-all {
    width: 710rpx;
    margin-left: 20rpx;

    .self-info {
      font-size: 30rpx;
      font-weight: 600;
    }

    .group-self {
      height: 120rpx;
      margin-top: 20rpx;
      line-height: 60rpx;
      border: 2rpx solid rgb(230 230 230);

      .text {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .sex {
        padding: 3rpx 40rpx;
        margin-right: 15rpx;
        font-size: 25rpx;
        border: 2rpx solid rgb(230 230 230);
      }

      .school-time {
        width: 50%;
        font-size: 25rpx;
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

  .next-click {
    position: fixed;
    bottom: 40rpx;
    width: 100%;
    height: 80rpx;

    .next-box {
      width: 70%;
      font-size: 30rpx;
      background-color: rgb(35 193 158);
    }
  }

  .image {
    width: 35rpx;
    height: 35rpx;
  }

  .input {
    margin-left: 20rpx;
    font-size: 27rpx;
  }
}
</style>
