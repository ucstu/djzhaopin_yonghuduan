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
import { putUserinfosUserinfoid } from "@/services/services";
import { key } from "@/stores";
import { onShow } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const firstName = ref("");
const lastName = ref("");
const isActiveMan = ref(true);
const isActiveMo = ref(false);
const sexMan = ref("男");
const sexMo = ref("女");
let city = ref("请选择");
const emailValue = ref("");
// 获取时间
const date = new Date();
const years = ref<number[]>([]);
let year = date.getFullYear();
const months = ref<number[]>([]);
let month = date.getMonth() + 1;
const days = ref<number[]>([]);
let day = date.getDate();
let birthday = ref(year + "-" + month + "-" + day);
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
};
// 下一步
const sex = ref();
const nextClick = () => {
  if (isActiveMan.value === true) {
    sex.value = sexMan.value;
  } else if (isActiveMo.value === true) {
    sex.value = sexMo.value;
  }
  putUserinfosUserinfoid(
    { userinfoid: "" },
    {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthday,
      sex: sex,
      city: city,
      email: emailValue,
    }
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  uni.navigateTo({ url: "/init/wanshanjiaoyujingli/wanshanjiaoyujingli" });
};

onShow(() => {
  uni.$on("liveCity", (e) => {
    city.value = e;
  });
});
const choseCity = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
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
      height: 300rpx;
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
