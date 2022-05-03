<template>
  <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
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
  <!-- #endif -->
  <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
  <view class="bar">
    <view
      class="items-center group"
    >
  <!-- #endif -->
      <view class="flex-row" style="width: 100%">
        <text class="city" @click="textOnClick">{{ cityName }}</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
          class="image"
        />
        <view class="flex-row  input">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
            class="search"
            @click="searchOnClick"
          />
          <input v-model="searchContent" type="text" class="search-text" placeholder="请输入关键字">
        </view>
        <text class="cancel" @click="text_1OnClick">取消</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getCompanyInfos, getCompanyInfosPositionInfos } from "@/services/services";
import { useMainStore } from "@/stores/main";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const store = useMainStore();

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarHeight = store.menuButtonInformation.height;

const navigationBarTop = store.menuButtonInformation.top - uni.upx2px(45);

const navigationBarWidth = store.menuButtonInformation.left - uni.upx2px(50);
/* #endif */

const cityName = ref("");
const searchContent = ref("");

onLoad((e) => {
  if(e.city){
  cityName.value = e.city;
  }
  uni.$on("liveCity", (city: string) => {
    cityName.value = city;
  });
});

const textOnClick = () => {
  uni.navigateTo({ url: "/most/chengshixuanze/chengshixuanze" });
};
const searchOnClick = () => {
  if(searchContent.value !== ""){
    getCompanyInfos({}).then((res) => {
      let companyInfos = res.data.body.map((item: any) =>
        item.companyName
      )
      if(companyInfos.includes(searchContent.value)){
        uni.navigateTo({ url: "/most/xiangguanzhiwei/xiangguanzhiwei?companyName=" + searchContent.value + "&data=" + 0 });
      }else{
        getCompanyInfosPositionInfos({}).then((res) => {
          let positionInfos = res.data.body.map((item: any) =>
            item.positionName
          )
          if(positionInfos.includes(searchContent.value)){
            uni.navigateTo({ url: "/most/xiangguanzhiwei/xiangguanzhiwei?companyName=" + searchContent.value + "&data=" + 1 });
          }else{
            uni.showToast({
              title: "没有搜索到相关信息",
              icon: "none"
            });
          }
        })
      }
    })
    ;
  }else{
    uni.showToast({
      title: "搜索内容不能为空",
      icon: "none",
      duration: 500
    });
  }
}
const text_1OnClick = () => {
  uni.navigateBack({ delta: 100 });
};
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  width: 100%;
  height: 120rpx;
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
      height: 50rpx;
      padding: 11rpx 15rpx 12rpx;
      margin-left: 20rpx;
      line-height: 20rpx;
      white-space: nowrap;
      background-color: rgb(229 229 229);
      border-radius: 25rpx;
      box-shadow: 0rpx 4rpx 4rpx rgb(0 0 0 / 25%);

      .search {
        align-self: center;
        width: 25rpx;
        height: 25rpx;
      }

      .search-text {
        align-self: center;
        margin-left: 11rpx;
        font-size: 25rpx;
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
}
</style>
