<template>
  <NavigationBar />
  <view class="flex-col page">
    <view class="flex-col group-all">
      <text class="self-info">请完善个人信息（1/3）</text>
      <view class="group-self">
        <text class="text">姓名</text>
        <view class="flex-row">
          <view class="flex-row items-center" style="margin-left: 20rpx">
            <text>姓</text>
            <input
              v-model="firstName"
              class="input"
              type="text"
              placeholder="请输入"
            />
          </view>
          <view class="flex-row items-center">
            <text>名</text>
            <input
              v-model="lastName"
              class="input"
              type="text"
              placeholder="请输入"
            />
          </view>
        </view>
      </view>
      <view class="group-self">
        <text class="text">出生日期</text>
        <view class="flex-row justify-between items-center" @click="showDate">
          <text class="input">{{ birthday }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self justify-center items-center justify-between">
        <text class="text">性别</text>
        <view class="flex-row items-center" style="height: auto">
          <text
            class="sex"
            :class="isActiveMan ? 'active' : ''"
            @click="
              isActiveMan = !isActiveMan;
              isActiveMo = !isActiveMo;
            "
            >{{ sexMan }}</text
          >
          <text
            class="sex"
            :class="isActiveMo ? 'active' : ''"
            @click="
              isActiveMo = !isActiveMo;
              isActiveMan = !isActiveMan;
            "
            >{{ sexMo }}</text
          >
        </view>
      </view>
      <view class="group-self">
        <text class="text">城市</text>
        <view class="flex-row justify-between items-center" @click="choseCity">
          <text class="input">{{ city }}</text>
          <image class="image" src="@/static/icons/arrow-right.png" />
        </view>
      </view>
      <view class="group-self">
        <text class="text">邮箱</text>
        <input
          v-model="emailValue"
          class="input"
          type="text"
          placeholder="请填写"
        />
      </view>
      <wybPopup
        ref="popup"
        :show-close-icon="true"
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
    <view class="justify-center next-click">
      <button class="justify-center items-center next-box" @click="nextClick">
        下一步
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import wybPopup from "@/components/wyb-popup/wyb-popup.vue";
import { putUserinfosP0 } from "@/services/services";
import { key } from "@/stores";
import { failResponseHandler } from "@/utils/handler";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const firstName = ref(""); // 姓
const lastName = ref(""); // 名
const isActiveMan = ref(true); // 判断性别
const isActiveMo = ref(false); // 判断性别
const sexMan = ref("男"); // 性别
const sexMo = ref("女"); // 性别
const city = ref<string>("请选择"); // 城市
const emailValue = ref(""); // 邮箱
const age = ref<number>(0); // 年龄
/* 获取时间 */
const date = new Date();
const years = ref<number[]>([]);
let year = date.getFullYear();
const months = ref<number[]>([]);
let month = date.getMonth() + 1;
const days = ref<number[]>([]);
let day = date.getDate();
let birthday = ref(year + "-" + month + "-" + day); /*出生日期*/
/*弹出层 */
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
  value.value = [val[0], val[1], val[2]];
};

const choseCity = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
};
onLoad(() => {
  uni.$on("liveCity", (e) => {
    city.value = e;
  });
});

/* 判断信息是否填写完整*/
const sex = ref();
const nextClick = () => {
  /* 判断性别 */
  if (isActiveMan.value === true) {
    sex.value = sexMan.value;
  } else if (isActiveMo.value === true) {
    sex.value = sexMo.value;
  }
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    city.value === "请选择"
  ) {
    uni.showToast({
      title: "请完善个人信息",
      icon: "none",
      duration: 500,
    });
  } else if (
    !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
      emailValue.value
    )
  ) {
    uni.showToast({
      title: "邮箱格式不正确",
      icon: "none",
      duration: 500,
    });
  } else {
    putUserinfosP0(store.state.accountInfo.userInformationId, {
      userInformationId: store.state.accountInfo.userInformationId,
      createdAt: store.state.accountInfo.createdAt,
      updatedAt: store.state.accountInfo.updatedAt,
      avatarUrl: "",
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: birthday.value,
      sex: sex.value,
      age: age.value,
      cityName: city.value,
      phoneNumber: store.state.accountInfo.userName,
      email: emailValue.value,
      workingYears: 1,
      education: 2,
      jobStatus: 1,
      personalAdvantage: "",
      socialHomepage: "",
      pictureWorks: [],
      privacySettings: 1,
    })
      .then((res) => {
        console.log(res.data.body);
        store.commit("setUserInfo", res.data.body);

        uni.navigateTo({
          url: "/init/wanshanjiaoyujingli/wanshanjiaoyujingli",
        });
      })
      .catch(failResponseHandler);
  }
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
