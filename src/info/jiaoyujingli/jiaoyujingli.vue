<template>
  <NavigationBar
    class="header"
    title="编辑教育经历"
    :right="deleteEd"
    @right-click="deleteEducation"
  />
  <view class="flex-row page">
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">学校名称</text>
        <input
          v-model="schoolName"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="flex-col group-box">
        <text class="text-title">学历</text>
        <text class="text-input" @click="showEducate">{{ education }}</text>
      </view>
      <view class="group-box">
        <text class="text-title">专业名称</text>
        <input
          v-model="subject"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">在校时间</text>
        <view class="flex-row" @click="showSchool">
          <view class="justify-center items-center sch-time">{{
            startTime
          }}</view>
          <view class="justify-center items-center sch-time">{{
            overTime
          }}</view>
        </view>
      </view>
    </view>
    <view class="justify-center group-button">
      <button
        class="justify-center items-center button-box"
        @click="saveEducation"
      >
        保存
      </button>
    </view>
    <WybPopup
      ref="popup"
      type="bottom"
      height="300"
      radius="6"
      mode="size-auto"
      :show-close-icon="false"
    >
      <view v-if="educate === false" class="flex-row">
        <view
          class="flex-col justify-center items-center"
          style="width: 50%"
          @click="
            start = true;
            end = false;
          "
        >
          <text>入学时间</text>
          <text style="font-size: 25rpx" :class="start ? 'active' : ''">{{
            startTime
          }}</text>
        </view>
        <view
          class="flex-col justify-center items-center"
          style="width: 50%"
          @click="
            end = true;
            start = false;
          "
        >
          <text>毕业时间</text>
          <text style="font-size: 25rpx" :class="end ? 'active' : ''">{{
            overTime
          }}</text>
        </view>
      </view>
      <picker-view
        v-if="start"
        :value="value1"
        class="picker-view"
        @change="bindChange"
      >
        <picker-view-column>
          <view v-for="(item, i) in years" :key="i" class="item">{{
            item
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, i) in months" :key="i" class="item">{{
            item
          }}</view>
        </picker-view-column>
      </picker-view>
      <picker-view
        v-if="end"
        :value="value2"
        class="picker-view"
        @change="bindChange"
      >
        <picker-view-column>
          <view v-for="(item, i) in years" :key="i" class="item">{{
            item
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, i) in months" :key="i" class="item">{{
            item
          }}</view>
        </picker-view-column>
      </picker-view>
      <picker-view v-if="educate" class="picker-view" @change="bindChange">
        <picker-view-column>
          <view v-for="(item, i) in educations" :key="i" class="item">{{
            item
          }}</view>
        </picker-view-column>
      </picker-view>
    </WybPopup>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import WybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  deleteUserinfosUserinfoidEduexperiencesEduexperienceid,
  getUserinfosUserinfoidEduexperiencesEduexperienceid,
  postUserinfosUserinfoidEduexperiences,
  putUserinfosUserinfoidEduexperiencesEduexperienceid,
} from "@/services/services";
import { EducationExperience } from "@/services/types";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const schoolName = ref(""); // 学校名称
const education = ref<EducationExperience["education"]>(1); // 学历
const subject = ref(""); // 专业名称
const startTime = ref("入学时间"); // 入学时间
const overTime = ref("结束时间"); // 毕业时间
// 学历高度
const educations = ref(["大专", "本科", "硕士", "博士", "其他"]);

const start = ref(false);
const end = ref(false);
const educate = ref(false);
const popup = ref();
// 选择学历
const showEducate = () => {
  educate.value = true;
  start.value = false;
  end.value = false;
  popup.value.show();
};
// 选择在校时间
const showSchool = () => {
  educate.value = false;
  start.value = true;
  end.value = false;
  popup.value.show();
};
const date = new Date();
const years = ref<number[]>([]);
const months = ref<number[]>([]);
let year = date.getFullYear();
let month = date.getMonth() + 1;
for (let i = 1960; i <= year; i++) {
  years.value.push(i);
}
for (let i = 1; i <= 12; i++) {
  months.value.push(i);
}
const value1 = [years.value[0], months.value[0]];
const value2 = [year, month - 1];
const bindChange = (e: { detail: { value: never } }) => {
  let val = e.detail.value;
  year = years.value[val[0]];
  month = months.value[val[1]];
  if (start.value) {
    startTime.value = `${year}年${month}月`;
  } else if (end.value) {
    overTime.value = `${year}年${month}月`;
  } else {
    education.value = val[0];
  }
};

const educateId = ref(); // 教育经历id
const deleteEd = ref(); // 删除
onLoad((e) => {
  educateId.value = e.educateId;
  deleteEd.value = e.deleteEducate;
  // 查询教育经历
  if (educateId.value !== undefined) {
    getUserinfosUserinfoidEduexperiencesEduexperienceid(
      store.state.accountInfo.userInformationId,
      educateId.value
    ).then((res) => {
      schoolName.value = res.data.body.schoolName;
      education.value = res.data.body.education;
      subject.value = res.data.body.major;
      startTime.value = res.data.body.admissionTime;
      overTime.value = res.data.body.graduationTime;
    });
  }
});
// 增加、修改教育经历
const saveEducation = () => {
  if (!schoolName.value || !subject.value) {
    uni.showToast({
      title: "请填写完整信息",
      icon: "none",
      duration: 500,
    });
  } else if (startTime.value === "入学时间" || overTime.value === "结束时间") {
    uni.showToast({
      title: "请选择在校时间",
      icon: "none",
      duration: 500,
    });
  } else if (education.value === 1) {
    uni.showToast({
      title: "请选择学历",
      icon: "none",
      duration: 500,
    });
  } else {
    if (educateId.value !== undefined) {
      putUserinfosUserinfoidEduexperiencesEduexperienceid(
        store.state.accountInfo.userInformationId,
        educateId.value,
        {
          educationExperienceId: educateId.value,
          schoolName: schoolName.value,
          education: education.value,
          major: subject.value,
          admissionTime: startTime.value,
          graduationTime: overTime.value,
          createdAt: "",
          updatedAt: "",
        }
      )
        .then((res) => {
          uni.navigateBack({ delta: 1 });
        })
        .catch(failResponseHandler);
    } else {
      postUserinfosUserinfoidEduexperiences(
        store.state.accountInfo.userInformationId,
        {
          schoolName: schoolName.value,
          education: education.value,
          major: subject.value,
          admissionTime: startTime.value,
          graduationTime: overTime.value,
        }
      )
        .then((res) => {
          uni.navigateBack({ delta: 1 });
        })
        .catch(failResponseHandler);
    }
    uni.navigateBack({ delta: 1 });
  }
};
// 删除教育经历
const deleteEducation = () => {
  uni.showModal({
    title: "提示",
    content: "确定删除该教育经历吗？",
    showCancel: true,
    success: (res) => {
      if (res.confirm) {
        deleteUserinfosUserinfoidEduexperiencesEduexperienceid(
          store.state.accountInfo.userInformationId,
          educateId.value
        )
          .then((res) => {
            uni.navigateBack({ delta: 1 });
          })
          .catch(failResponseHandler);
      } else if (res.cancel) {
      }
    },
  });
};
</script>

<style lang="scss" scoped>
.page {
  .active {
    color: rgb(35 193 158);
  }

  .group-all {
    width: 710rpx;
    height: auto;
    margin-left: 20rpx;

    .group-box {
      width: 100%;
      height: 130rpx;
      margin-top: 20rpx;
      line-height: 60rpx;
      border: 2rpx solid rgb(210 210 210 / 50%);
      border-radius: 5rpx;

      .text-title {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .text-input {
        padding-left: 20rpx;
        font-size: 28rpx;
      }

      .sch-time {
        width: 50%;
        font-size: 28rpx;
      }
    }
  }

  .group-button {
    position: fixed;
    bottom: 40rpx;
    width: 100%;
    height: 80rpx;

    .button-box {
      width: 500rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }

  .picker-view {
    width: 750rpx;
    height: 600rpx;
    margin-top: 20rpx;
  }

  .item {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>
