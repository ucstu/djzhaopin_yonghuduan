<template>
  <NavigationBar class="header" title="个人信息" />
  <view class="flex-col page">
    <view class="flex-col justify-center group-all">
      <view class="justify-between group-box">
        <text class="portrait">头像</text>
        <image
          :src="userInformation.avatar"
          class="photo"
          @click="chooseImage"
        />
      </view>
      <view class="flex-col group-box">
        <text class="caption">姓名 </text>
        <input v-model="fullName" class="user-value" />
      </view>
      <view class="flex-col group-box">
        <text class="caption">出生日期</text>
        <text class="user-value" @click="showDate">{{
          userInformation.dateOfBirth
        }}</text>
      </view>
      <view class="justify-between items-center group-box">
        <text class="caption">性别</text>
        <view class="flex-row sex-box">
          <view
            class="flex-col items-center sex-wrapper"
            :class="isActiveMan ? 'active' : ''"
            @click="
              isActiveMan = !isActiveMan;
              isActiveWo = !isActiveWo;
            "
          >
            <text>男</text>
          </view>
          <view
            class="flex-col items-center sex-wrapper"
            :class="isActiveWo ? 'active' : ''"
            @click="
              isActiveWo = !isActiveWo;
              isActiveMan = !isActiveMan;
            "
          >
            <text>女</text>
          </view>
        </view>
      </view>
      <view class="flex-col group-box">
        <text class="caption">所在城市</text>
        <view class="justify-between group_4" @click="changeCity">
          <text class="user-value">{{ userInformation.city }}</text>
          <image src="@/static/icons/arrow-right.png" class="image" />
        </view>
      </view>
      <view class="flex-col group-box">
        <text class="caption">手机号码</text>
        <input v-model="userInformation.phoneNumber" class="user-value" />
      </view>
      <view class="flex-col group-box">
        <text class="caption">邮箱</text>
        <input v-model="userInformation.email" class="user-value" />
      </view>
      <view class="justify-center button-box">
        <view
          class="flex-col justify-center items-center button"
          @click="saveInfos"
        >
          <text>保存</text>
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
        <picker-view :value="value" class="picker-view" @change="bindChange">
          <picker-view-column>
            <view v-for="(item, index) in years" :key="index" class="item"
              >{{ item }}年</view
            >
          </picker-view-column>
          <picker-view-column>
            <view v-for="(item, index) in months" :key="index" class="item"
              >{{ item }}月</view
            >
          </picker-view-column>
          <picker-view-column>
            <view v-for="(item, index) in days" :key="index" class="item"
              >{{ item }}日</view
            >
          </picker-view-column>
        </picker-view>
        <view class="flex-row confirm-box">
          <text class="justify-center items-center cancel" @click="isCancel"
            >取消</text
          >
          <text class="justify-center items-center confirm" @click="isConfirm"
            >确认</text
          >
        </view>
      </wybPopup>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import {
  getUserinfosUserinfoid,
  postAvatars,
  putUserinfosUserinfoid,
} from "@/services/services";
import { UserInformation } from "@/services/types";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);
console.log(store.state.accountInfo);

const userInformation = ref<UserInformation>({} as UserInformation);

const fullName = ref(""); // 姓名

const isActiveMan = ref(false);
const isActiveWo = ref(false);

const valueYear = ref();
const valueMonth = ref();
const valueDay = ref();

/* 上传头像 */
const chooseImage = () => {
  postAvatars({ avatar: "" })
    .then((res) => {
      console.log(res);
    })
    .catch(failResponseHandler);
};

// 选择出生日期
const date = new Date();
const years = ref<number[]>([]);
let year = date.getFullYear();
const months = ref<number[]>([]);
let month = date.getMonth() + 1;
const days = ref<number[]>([]);
let day = date.getDate();
const popup = ref();
const showDate = () => {
  popup.value.show();
};
for (let i = 1960; i <= date.getFullYear(); i++) {
  years.value.push(i);
}
for (let i = 1; i <= 12; i++) {
  months.value.push(i);
}
for (let i = 1; i <= 31; i++) {
  days.value.push(i);
}
const value = ref();
onMounted(() => {
  /* 获取用户信息 */
  getUserinfosUserinfoid(store.state.accountInfo.userInformationId)
    .then((res) => {
      console.log(res.data.body);
      userInformation.value = res.data.body;
      fullName.value =
        userInformation.value.firstName + userInformation.value.lastName;
      if (userInformation.value.sex === "男") {
        isActiveMan.value = true;
      } else {
        isActiveWo.value = true;
      }
      valueYear.value = parseInt(
        userInformation.value.dateOfBirth.slice(0, 4),
        10
      );
      valueMonth.value = parseInt(
        userInformation.value.dateOfBirth.slice(5, 7),
        10
      );
      valueDay.value = parseInt(
        userInformation.value.dateOfBirth.slice(8, 10),
        10
      );
      value.value = [
        year - valueYear.value - 2,
        valueMonth.value - 1,
        valueDay.value - 1,
      ];
    })
    .catch(failResponseHandler);
});
const birthday = ref();
const age = ref();
const bindChange = (e: { detail: { value: never } }) => {
  let val = e.detail.value;
  year = years.value[val[0]];
  console.log(typeof year);

  month = months.value[val[1]];
  day = days.value[val[2]];
  birthday.value = year + "-" + month + "-" + day;
  age.value = date.getFullYear() - year;
  if (month < date.getMonth() + 1) {
    age.value--;
  } else if (month === date.getMonth() + 1) {
    if (day < date.getDate()) {
      age.value--;
    }
  }
};
const isConfirm = () => {
  userInformation.value.dateOfBirth = birthday.value;
  userInformation.value.age = age.value;
  popup.value.hide();
};
const isCancel = () => {
  popup.value.hide();
};

const changeCity = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
};

onLoad(() => {
  uni.$on("liveCity", (data) => {
    userInformation.value.city = data;
  });
});

// 保存修改用户基本信息
const saveInfos = () => {
  if (!fullName.value) {
    uni.showToast({
      title: "请输入姓名",
      icon: "none",
      duration: 500,
    });
  } else if (!userInformation.value.phoneNumber) {
    uni.showToast({
      title: "手机不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (!userInformation.value.email) {
    uni.showToast({
      title: "邮箱不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (
    !/^([A-Za-z0-9_\-\.])+\@(163.com|qq.com|42du.cn)$/.test(
      userInformation.value.email
    )
  ) {
    uni.showToast({
      title: "邮箱格式有误",
      icon: "none",
      duration: 500,
    });
  } else {
    if (isActiveMan.value) {
      userInformation.value.sex = "男";
    } else {
      userInformation.value.sex = "女";
    }
    let updateAt = year + "-" + month + "-" + day;

    putUserinfosUserinfoid(store.state.accountInfo.userInformationId, {
      userInformationId: store.state.accountInfo.userInformationId,
      createdAt: userInformation.value.createdAt,
      updatedAt: updateAt,
      avatar: userInformation.value.avatar,
      firstName: fullName.value.slice(0, 1),
      lastName: fullName.value.slice(1, fullName.value.length),
      dateOfBirth: userInformation.value.dateOfBirth,
      sex: userInformation.value.sex,
      age: userInformation.value.age,
      city: userInformation.value.city,
      phoneNumber: userInformation.value.phoneNumber,
      email: userInformation.value.email,
      workingYears: userInformation.value.workingYears,
      education: userInformation.value.education,
      jobStatus: userInformation.value.jobStatus,
      personalAdvantage: userInformation.value.personalAdvantage,
      socialHomepage: userInformation.value.socialHomepage,
      pictureWorks: userInformation.value.pictureWorks,
      privacySettings: userInformation.value.privacySettings,
    })
      .then((res) => {
        store.commit("setUserInfo", res.data.body);
        uni.navigateBack({ delta: 1 });
        console.log(res);
      })
      .catch(failResponseHandler);
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: auto;
  overflow-y: auto;

  .active {
    background-color: rgb(35 193 158);
  }

  .group-all {
    .group-box {
      width: 710rpx;
      height: 120rpx;
      margin-top: 20rpx;
      margin-left: 20rpx;
      line-height: 60rpx;
      border: 2rpx solid rgb(210 210 210 / 50%);

      .portrait {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .caption {
        padding-left: 20rpx;
        font-size: 25rpx;
      }

      .user-value {
        padding-left: 20rpx;
        font-size: 30rpx;
      }

      .sex-box {
        width: auto;
        height: auto;

        .sex-wrapper {
          padding: 3rpx 35rpx;
          margin-right: 25rpx;
          font-size: 30rpx;
          border: 2rpx solid rgb(210 210 210 / 50%);
        }
      }
    }

    .button-box {
      width: 100%;

      .button {
        position: fixed;
        bottom: 50rpx;
        width: 500rpx;
        height: 80rpx;
        background-color: rgb(35 193 158);
      }
    }
  }

  .image {
    width: 35rpx;
    height: 35rpx;
  }

  .photo {
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
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

  .confirm-box {
    width: 100%;
    height: 100rpx;
    margin-top: 10rpx;
    font-size: 30rpx;

    .cancel {
      width: 45%;
      height: 80rpx;
      margin-left: 20rpx;
      color: #000;
      background-color: rgb(230 230 230);
      border-radius: 10rpx;
    }

    .confirm {
      width: 45%;
      height: 80rpx;
      margin-left: 20rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }
}
</style>
