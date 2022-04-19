<template>
  <NavigationBar class="header" title="个人信息" />
  <view class="flex-col page">
    <view class="flex-col justify-center group-all">
      <view class="justify-between group-box">
        <text class="portrait">头像</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303732403472501.png"
          class="photo"
          @click="chooseImage"
        />
      </view>
      <view class="flex-col group-box">
        <text class="caption">姓名</text>
        <input v-model="userName" class="user-value" />
      </view>
      <view class="flex-col group-box">
        <text class="caption">出生日期</text>
        <input v-model="birthday" class="user-value" @click="showDate" />
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
        <view class="justify-between group_4">
          <text class="user-value">{{ city }}</text>
          <image src="@/static/icons/arrow-right.png" class="image" />
        </view>
      </view>
      <view class="flex-col group-box">
        <text class="caption">手机号码</text>
        <input v-model="phoneNumber" class="user-value" />
      </view>
      <view class="flex-col group-box">
        <text class="caption">邮箱</text>
        <input v-model="email" class="user-value" />
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
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);
console.log(store.state.accountInfo?.userInfoId);

const userName = ref(""); //userInfos.userName
const phoneNumber = ref(""); //userPhone
const email = ref(""); //userInfos.email
let birthday = ref("");
const city = ref("重庆");
const sexMan = ref("男");
const sexWo = ref("女");
const sex = ref("");
const age = ref();

const isActiveMan = ref(false);
const isActiveWo = ref(false);

getUserinfosUserinfoid({
  userinfoid: store.state.accountInfo?.userInfoId,
}).then((res) => {
  userName.value = res.data.body.firstName + res.data.body.lastName;
  phoneNumber.value = res.data.body.phoneNumber;
  email.value = res.data.body.email;
  birthday.value = res.data.body.dateOfBirth;
  sex.value = res.data.body.sex;
  city.value = res.data.body.city;
  if (sex.value === sexMan.value) {
    isActiveMan.value = true;
  } else if (sex.value === sexWo.value) {
    isActiveWo.value = true;
  }
});

const chooseImage = () => {
  postAvatars({ avatar: "" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.msg);
    });
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
for (let i = 1970; i <= date.getFullYear(); i++) {
  years.value.push(i);
}
for (let i = 1; i <= 12; i++) {
  months.value.push(i);
}
for (let i = 1; i <= 31; i++) {
  days.value.push(i);
}
const value = ref([9999, month - 1, day - 1]);
const bindChange = (e: { detail: { value: never } }) => {
  let val = e.detail.value;
  year = years.value[val[0]];
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

// 本地存储用户基本信息
const saveInfos = () => {
  if (!userName.value) {
    uni.showToast({
      title: "请输入姓名",
      icon: "none",
      duration: 500,
    });
  } else if (!phoneNumber.value) {
    uni.showToast({
      title: "手机不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (!email.value) {
    uni.showToast({
      title: "邮箱不能为空",
      icon: "none",
      duration: 500,
    });
  } else if (
    !/^([A-Za-z0-9_\-\.])+\@(163.com|qq.com|42du.cn)$/.test(email.value)
  ) {
    uni.showToast({
      title: "邮箱格式有误",
      icon: "none",
      duration: 500,
    });
  } else {
    putUserinfosUserinfoid(
      { userinfoid: "" },
      {
        firstName: userName.value.split(" ")[0],
        lastName: userName.value.split(" ")[1],
        phoneNumber: phoneNumber.value,
        email: email.value,
        city: city.value,
        dateOfBirth: birthday.value,
      }
    ).then((res) => {
      store.commit("setUserInfo", res.data.body);
      console.log(res);
    });
    uni.navigateBack({ delta: 1 });
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
      height: 300rpx;
      text-align: center;
    }
  }
}
</style>
