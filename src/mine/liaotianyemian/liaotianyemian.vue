<template>
  <view class="page">
    <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view
      class="flex-row items-center group-top"
      :style="
        'width: ' +
        navigationBarWidth +
        'px; margin-top: ' +
        navigationBarTop +
        'px'
      "
    >
      <image
        class="image-left"
        src="@/static/icons/arrow-left-blob.png"
        @click="goBack"
      />
      <view class="flex-col top-title">
        <text class="justify-center text-top">{{ hrInfo.hrName }}</text>
        <text class="text-bottom">{{ hrInfo.postName }}</text>
      </view>
    </view>
    <!-- #endif -->
    <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view style="height: 20rpx"></view>
    <view class="flex-row items-center group-top">
      <image
        class="image-left"
        src="@/static/icons/arrow-left-blob.png"
        @click="goBack"
      />
      <view class="flex-col top-title">
        <text class="justify-center text-top">{{ hrInfo.hrName }}</text>
        <text class="justify-center text-bottom">{{ hrInfo.postName }}</text>
      </view>
    </view>
    <!-- #endif -->
    <scroll-view class="group-info" :scroll-y="true">
      <BubbleBoxHr></BubbleBoxHr>
      <BubbleBox></BubbleBox>
    </scroll-view>
    <view class="flex-col group-end justify-center">
      <view class="flex-row justify-between items-end input-box">
        <view class="items-center text-input">
          <textarea
            v-model="inputValue"
            class="items-center input"
            :maxlength="250"
            :auto-height="true"
          />
        </view>
        <text class="items-center text-send" @click="sendMessage">发送</text>
      </view>
      <view class="justify-between function-box">
        <image class="image" src="@/static/icons/audio-fill.svg" />
        <image class="image" src="@/static/icons/picture-fill.svg" />
        <image class="image" src="@/static/icons/camera.svg" />
        <image class="image" src="@/static/icons/emoji.svg" />
        <image class="image" src="@/static/icons/plus-circle.svg" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import BubbleBoxHr from "@/components/BubbleBox/BubbleBoxHr.vue";
import BubbleBox from "@/components/BubbleBox/BubbleBoxUser.vue";
import { getHrInfosP0 } from "@/services/services";
import { HrInformation } from "@/services/types";
import { useMainStore } from "@/stores/main";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const store = useMainStore();

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarTop = store.menuButtonInformation.top;

const navigationBarWidth = store.menuButtonInformation.left - uni.upx2px(30);

/* #endif */

const hrInfo = ref<HrInformation>({} as HrInformation);
const inputValue = ref("");
const message = ref("");

onLoad((e) => {
  if (e.Id) {
    getHrInfosP0(e.Id).then((res) => {
      hrInfo.value = res.data.body;
    });
  }
});

const sendMessage = () => {
  inputValue.value = message.value;
  inputValue.value = "";
};

const goBack = () => {
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style lang="scss" scoped>
.page {
  // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
  height: 1334rpx;

  // #endif
  // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
  height: 1620rpx;

  // #endif
  overflow: hidden;
  background-color: rgb(235 235 235);

  .group-top {
    height: var(--tab-bar-height);

    .image-left {
      width: 25rpx;
      height: 35rpx;
      margin-left: 20rpx;
    }

    .top-title {
      width: 100%;
      height: var(--tab-bar-height);

      .text-top {
        height: 50%;
        font-size: 30rpx;
      }

      .text-bottom {
        height: 50%;
        font-size: 25rpx;
      }
    }
  }

  .group-info {
    width: 100%;

    // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    height: 1040rpx;

    // #endif
    // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    height: auto;

    // #endif
  }

  .group-end {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;

    .input-box {
      width: 94%;
      min-height: 70rpx;
      max-height: 350rpx;
      margin-left: 3%;

      .text-input {
        width: 600rpx;
        min-height: 70rpx;
        max-height: 350rpx;
        padding-left: 10rpx;
        background-color: #fff;
        border-radius: 30rpx;
      }

      .text-send {
        height: 60rpx;
        padding: 3rpx 25rpx;
        font-size: 30rpx;
        color: #fff;
        background-color: rgb(9 164 225);
        border-radius: 30rpx;
      }
    }

    .function-box {
      width: 94%;
      height: 60rpx;
      margin-top: 10rpx;
      margin-left: 3%;

      .image {
        width: 60rpx;
        height: 60rpx;
      }
    }
  }
}
</style>
