<template>
  <view class="bar" :style="'margin-top: ' + navigationBarTop + 'px'">
    <view
      class="items-center group"
      :style="
        'width: ' +
        navigationBarWidth +
        'px; height: ' +
        navigationBarHeight +
        'px'
      "
    >
      <view class="flex-row" style="width: 100%">
        <text class="city" @click="textOnClick">{{ city }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
          class="image"
        />
        <view class="flex-row input">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
            class="search"
          />
          <text class="search-text">{{ searchContent }}</text>
        </view>
        <text class="cancel" @click="text_1OnClick">取消</text>
      </view>
    </view>
    <view class="justify-between about">
      <text @click="text_2OnClick">相关职位</text>
      <text @click="text_3OnClick">相关公司</text>1
    </view>
  </view>
</template>

<script lang="ts" setup>
import { key } from "@/stores";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarHeight = store.state.menuButtonInfo.height;

const navigationBarTop = store.state.menuButtonInfo.top - uni.upx2px(45);

const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(50);
/* #endif */

const city = ref("重庆");
const searchContent = ref("请输入关键字");
const textOnClick = () => {
  uni.navigateTo({ url: "/pages/chengshixuanze/chengshixuanze" });
};
const text_1OnClick = () => {
  uni.navigateBack({ delta: 100 });
};
const text_2OnClick = () => {
  uni.navigateTo({ url: "/pages/xiangguanzhiwei/xiangguanzhiwei" });
};
const text_3OnClick = () => {
  uni.navigateTo({ url: "/pages/xiangguangongsi/xiangguangongsi" });
};
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  width: 100%;
  height: 180rpx;
  background-color: rgb(255 255 255);

  .group {
    position: absolute;
    top: 46rpx;
    right: 18rpx;
    left: 18rpx;
    padding-right: 21rpx;

    .city {
      align-self: center;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .image {
      align-self: center;
      width: 15rpx;
      height: 8rpx;
    }

    .input {
      flex: 1 1 auto;
      height: 43rpx;
      padding: 11rpx 15rpx 12rpx;
      margin-left: 20rpx;
      line-height: 20rpx;
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 25rpx;
      box-shadow: 0rpx 4rpx 4rpx rgb(0 0 0 / 25%);

      .search {
        align-self: center;
        width: 20rpx;
        height: 20rpx;
      }

      .search-text {
        align-self: center;
        margin-left: 11rpx;
        font-size: 20rpx;
      }
    }

    .cancel {
      align-self: center;
      margin-left: 21rpx;
      font-size: 25rpx;
      line-height: 23rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }
  }

  .about {
    position: absolute;
    top: 128rpx;
    right: 18rpx;
    left: 18rpx;
    padding-right: 106rpx;
    padding-left: 111rpx;
    font-size: 30rpx;
    line-height: 28rpx;
    color: rgb(0 0 0);
    letter-spacing: 6rpx;
    white-space: nowrap;
  }
}
</style>
