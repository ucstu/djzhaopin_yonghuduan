<template>
  <NavigationBar
    class="header"
    title="工作经历"
    :right="deleteWork"
    @right-click="deleteWorkExperience"
  />
  <view class="flex-row page">
    <view class="group-all">
      <view class="group-box">
        <text class="text-title">公司名称</text>
        <input
          v-model="companyName"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">公司行业</text>
        <input
          v-model="companyIndustry"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">在职时间</text>
        <view class="flex-row justify-between items-center">
          <input
            v-model="companyStartTime"
            class="text-input"
            type="text"
            placeholder="入职时间"
          />
          <input
            v-model="companyEndTime"
            class="text-input"
            type="text"
            placeholder="至今"
          />
        </view>
      </view>
      <view class="group-box">
        <text class="text-title">职位名称</text>
        <view
          class="flex-row justify-between items-center"
          @click="getPosition"
        >
          <input
            v-model="positionName"
            class="text-input"
            type="text"
            placeholder="请选择"
          />
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-box">
        <view>
          <text class="text-title">职位类型</text>
          <text style="font-size: 28rpx; color: gray"
            >(全职、兼职、实习、其他)</text
          >
        </view>
        <input
          v-model="companyPosition"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">所属部门</text>
        <input
          v-model="companyDepartment"
          class="text-input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <view class="group-box">
        <text class="text-title">工作内容</text>
        <input
          v-model="companyContent"
          class="text-input"
          type="text"
          placeholder="请填写"
          @click="showTextarea"
        />
      </view>
    </view>
    <view class="justify-center group-button">
      <button
        class="justify-center items-center button-box"
        @click="saveWorkExperience"
      >
        保存
      </button>
    </view>
    <wybPopup
      ref="popup"
      :show-close-icon="false"
      :height="800"
      :radius="10"
      mode="size-auto"
      type="bottom"
    >
      <view class="flex-row justify-between items-center btn-box">
        <text class="title">工作内容</text>
        <view>
          <text class="clear" @click="clearLength">清空</text>
          <text class="save" @click="saveTextarea">确认</text>
        </view>
      </view>
      <view class="job-content-box">
        <textarea
          v-model="companyContent"
          :maxlength="-1"
          class="textarea"
          placeholder="请填写相关的工作内容"
        />
      </view>
    </wybPopup>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid,
  getUserinfosUserinfoidWorkexperiencesWorkexperienceid,
  postUserinfosUserinfoidWorkexperiences,
} from "@/services/services";
import { key } from "@/stores";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const companyName = ref(""); // 公司名称
const companyIndustry = ref(""); // 公司行业
const companyStartTime = ref(""); // 入职时间
const companyEndTime = ref(""); // 离职时间
const companyPosition = ref(""); // 职位类型
const positionName = ref(""); // 职位名称
const companyDepartment = ref(""); // 所属部门
const companyContent = ref(""); // 工作内容
let deleteWork = ref(); // 删除工作经历
const workId = ref(); // 工作经历id

// 获取职位名
const getPosition = () => {
  uni.navigateTo({ url: "/most/zhiweileixing/zhiweileixing" });
};
onLoad((e) => {
  workId.value = e.workId; // 工作经历id
  deleteWork.value = e.deleteWork; // 删除工作经历
  /* 查询工作经历 */
  if (workId.value !== undefined) {
    getUserinfosUserinfoidWorkexperiencesWorkexperienceid(
      { userinfoid: store.state.accountInfo.userInfoId },
      { workexperienceid: workId.value }
    ).then((res) => {
      companyName.value = res.data.body.corporateName;
      companyIndustry.value = res.data.body.companyIndustry;
      companyStartTime.value = res.data.body.startTime;
      companyEndTime.value = res.data.body.endTime;
      companyPosition.value = res.data.body.positionType;
      positionName.value = res.data.body.positionName;
      companyDepartment.value = res.data.body.department;
      companyContent.value = res.data.body.jobContent;
      console.log(res.data.body);
    });
  }
  /* 接收职位名*/
  uni.$on("positiontypes", (data) => {
    positionName.value = data;
  });
});

// 保存工作经历
const saveWorkExperience = () => {
  if (
    !companyName.value ||
    !companyIndustry.value ||
    !companyStartTime.value ||
    !companyEndTime.value ||
    !companyPosition.value ||
    !companyDepartment.value ||
    !companyContent.value
  ) {
    uni.showToast({
      title: "请填写完整信息",
      icon: "none",
      duration: 500,
    });
  } else {
    postUserinfosUserinfoidWorkexperiences(
      { userinfoid: store.state.accountInfo.userInfoId },
      {
        corporateName: companyName.value,
        companyIndustry: companyIndustry.value,
        startTime: companyStartTime.value,
        endTime: companyEndTime.value,
        positionName: positionName.value,
        positionType: companyPosition.value,
        department: companyDepartment.value,
        jobContent: companyContent.value,
      }
    )
      .then((res) => {
        store.commit("setWorkExperience", res.data.body);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.msg);
      });
    uni.showToast({
      title: "保存成功",
      icon: "success",
      duration: 500,
    });
  }
};

// 删除工作经历
const deleteWorkExperience = () => {
  uni.showModal({
    title: "提示",
    content: "确定删除该工作经历吗？",
    success: (res) => {
      if (res.confirm) {
        console.log("用户点击确定");
        deleteUserinfosUserinfoidWorkexperiencesWorkexperienceid(
          { userinfoid: store.state.accountInfo.userInfoId },
          { workexperienceid: workId.value }
        )
          .then((res) => {
            console.log(res.data.body);
          })
          .catch((err) => {
            console.log(err.msg);
          });
        uni.navigateBack({
          delta: 1,
        });
      } else if (res.cancel) {
        console.log("用户点击取消");
      }
    },
  });
};

// 弹出层
const popup = ref();
const showTextarea = () => {
  popup.value.show();
};
const clearLength = () => {
  companyContent.value = "";
};
const saveTextarea = () => {
  popup.value.hide();
};
</script>

<style lang="scss" scoped>
.page {
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
      border-radius: 5rpx;

      .text-title {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .text-input {
        width: 690rpx;
        padding-left: 20rpx;
        overflow: hidden;
        font-size: 28rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .group-button {
    position: absolute;
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

  .btn-box {
    width: 690rpx;
    margin-top: 10rpx;
    margin-left: 30rpx;

    .title {
      font-size: 30rpx;
      font-weight: bold;
    }

    .clear {
      padding-right: 10rpx;
      font-size: 28rpx;
      color: gray;
    }

    .save {
      padding-right: 10rpx;
      font-size: 28rpx;
      color: rgb(35 193 158);
    }
  }

  .image {
    width: 35rpx;
    height: 35rpx;
  }

  .job-content-box {
    width: 690rpx;
    height: 550rpx;
    margin-top: 20rpx;
    margin-left: 30rpx;
    line-height: 50rpx;
    background-color: rgb(240 240 240);
    border-radius: 10rpx;

    .textarea {
      width: 650rpx;
      height: 500rpx;
      padding-left: 20rpx;
      overflow: hidden;
      font-size: 28rpx;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
