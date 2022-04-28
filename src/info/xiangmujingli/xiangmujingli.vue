<template>
  <NavigationBar
    class="header"
    title="编辑项目经历"
    :right="deleteProject"
    @right-click="deleteProjectExperience"
  />
  <view class="flex-row page">
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">项目名称</text>
        <input
          v-model="projectName"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">项目描述</text>
        <input
          v-model="projectDescribe"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">你的成就</text>
        <input
          v-model="achievement"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">项目时间</text>
        <view class="flex-row justify-between" @click="showTime">
          <view class="justify-center items-center" style="width: 50%">
            <text style="font-size: 28rpx">{{ startTime }}</text>
          </view>
          <view class="justify-center items-center" style="width: 50%">
            <text style="font-size: 28rpx">{{ overTime }}</text>
          </view>
        </view>
      </view>
      <view class="group-box">
        <text class="text-title">项目链接</text>
        <input
          v-model="projectUrl"
          class="text-input"
          type="text"
          placeholder="请填写(选填)"
        />
      </view>
    </view>
    <view class="justify-center group-button">
      <view>
        <button
          class="justify-center items-center button-box"
          @click="saveProjectExperience"
        >
          保存
        </button>
      </view>
    </view>
    <WybPopup
      ref="popup"
      type="bottom"
      height="300"
      radius="6"
      mode="size-auto"
      :show-close-icon="false"
    >
      <view class="flex-row">
        <view
          class="flex-col justify-center items-center"
          style="width: 50%"
          @click="
            start = true;
            end = false;
          "
        >
          <text>开始时间</text>
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
          <text>结束时间</text>
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
    </WybPopup>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import WybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  deleteUserinfosP0ProjectexperiencesP1,
  getUserinfosP0ProjectexperiencesP1,
  postUserinfosP0Projectexperiences,
  putUserinfosP0ProjectexperiencesP1,
} from "@/services/services";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const projectName = ref(); //项目名称
const projectDescribe = ref(""); //项目描述
const achievement = ref(""); //你的成就
let startTime = ref("开始时间"); //项目开始时间
let overTime = ref("结束时间"); //项目结束时间
const projectUrl = ref(""); //项目链接

const start = ref(true);
const end = ref(false);

const popup = ref();
const showTime = () => {
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
  } else {
    overTime.value = `${year}年${month}月`;
  }
};

const projectId = ref(); // 项目id
const deleteProject = ref(); // 删除项目
onLoad((e) => {
  projectId.value = e.projectId;
  deleteProject.value = e.deleteProject;
  /*查询项目经历*/
  if (projectId.value !== undefined) {
    getUserinfosP0ProjectexperiencesP1(
      store.state.accountInfo.userInformationId,
      projectId.value
    )
      .then((res) => {
        projectName.value = res.data.body!.projectName;
        projectDescribe.value = res.data.body!.projectDescription;
        achievement.value = res.data.body!.achievement;
        startTime.value = res.data.body!.startTime;
        overTime.value = res.data.body!.endTime;
        projectUrl.value = res.data.body!.projectLink;
      })
      .catch(failResponseHandler);
  }
});

// 添加、修改项目经历
const saveProjectExperience = () => {
  if (!projectName.value || !projectDescribe.value || !achievement.value) {
    uni.showToast({
      title: "请填写完整信息",
      icon: "none",
      duration: 500,
    });
  } else if (startTime.value === "开始时间" || overTime.value === "结束时间") {
    uni.showToast({
      title: "请选择项目时间",
      icon: "none",
      duration: 500,
    });
  } else {
    if (projectId.value !== undefined) {
      // 修改项目经历
      putUserinfosP0ProjectexperiencesP1(
        store.state.accountInfo.userInformationId,
        projectId.value,
        {
          projectExperienceId: projectId.value,
          projectName: projectName.value,
          projectDescription: projectDescribe.value,
          achievement: achievement.value,
          startTime: startTime.value,
          endTime: overTime.value,
          projectLink: projectUrl.value,
          workExperienceId: "",
        }
      )
        .then((res) => {
          uni.showToast({
            title: "修改成功",
            icon: "none",
            duration: 500,
          });
        })
        .catch(failResponseHandler);
    } else {
      // 添加项目经历
      postUserinfosP0Projectexperiences(
        store.state.accountInfo.accountInformationId,
        {
          projectName: projectName.value,
          projectDescription: projectDescribe.value,
          achievement: achievement.value,
          startTime: startTime.value,
          endTime: overTime.value,
          projectLink: projectUrl.value,
          workExperienceId: "",
        }
      )
        .then((res) => {
          uni.showToast({
            title: "添加成功",
            icon: "none",
            duration: 500,
          });
        })
        .catch(failResponseHandler);
    }
    uni.navigateBack({ delta: 1 });
  }
};
// 删除项目经历
const deleteProjectExperience = () => {
  uni.showModal({
    title: "提示",
    content: "确定删除该项目经历吗？",
    success: (res) => {
      if (res.confirm) {
        deleteUserinfosP0ProjectexperiencesP1(
          store.state.accountInfo.userInformationId,
          projectId.value
        )
          .then((res) => {
            uni.showToast({
              title: "删除成功",
              icon: "none",
              duration: 500,
            });
          })
          .catch(failResponseHandler);
        uni.navigateBack({ delta: 1 });
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
      border: solid 2rpx rgb(210 210 210);
      border-radius: 10rpx;

      .text-title {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .text-input {
        width: 670rpx;
        padding-left: 20rpx;
        overflow: hidden;
        font-size: 28rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .group-button {
    position: fixed;
    bottom: 40rpx;
    width: 100%;
    height: 80rpx;

    .button-box {
      width: 600rpx;
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
