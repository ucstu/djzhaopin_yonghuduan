<template>
  <NavigationBar class="header" title="我的账户" />
  <view class="flex-col page">
    <view class="justify-between items-center section">
      <text class="phone">手机号</text>
      <text class="phone-num">{{ phoneNumber }}</text>
    </view>
    <view class="flex-col items-center button-box">
      <button class="button" @click="deleteAccount">注销账号</button>
    </view>
  </view>
</template>
<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { deleteAccountsAccountid } from "@/services/services";
import { ref } from "vue";

const phoneNumber = ref("173****6235");

const deleteAccount = () => {
  deleteAccountsAccountid()
    .then((res) => {
      console.log(res.data.body);

      uni.navigateTo({
        url: "/account/denglu_zhuce/denglu",
      });
    })
    .catch((err) => {
      console.log(err.msg);
    });
};
</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  margin-left: 20rpx;

  .section {
    width: 100%;
    height: 100rpx;
    border: 1rpx solid rgb(230 230 230);
    border-radius: 10rpx;

    .phone {
      padding-left: 20rpx;
      font-size: 30rpx;
    }

    .phone-num {
      padding-right: 20rpx;
      font-size: 28rpx;
      color: gray;
    }
  }

  .button-box {
    position: absolute;
    bottom: 40rpx;
    width: 710rpx;
    height: 80rpx;

    .button {
      width: 600rpx;
      font-size: 30rpx;
      color: #fff;
      background-color: rgb(35 193 158);
      border-radius: 10rpx;
    }
  }
}
</style>
