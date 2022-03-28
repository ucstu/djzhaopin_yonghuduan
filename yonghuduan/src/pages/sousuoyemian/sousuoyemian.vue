<template>
  <view class="flex-col page" :style="'padding-top: ' + navigationBarTop + 'px'">
    <view
      class="items-center"
      :style="'width: ' + navigationBarWidth + 'px; height: ' + navigationBarHeight + 'px'"
    >
      <view class="flex-row" style="width: 100%;">
        <text @click="textOnClick" class="text">{{ city }}</text>
        <view class="flex-row search">
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
            class="image"
          />
          <view class="flex-row section_1">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
              class="image_1"
            />
            <text class="text_1">{{ searchContent }}</text>
          </view>
        </view>
        <text @click="text_1OnClick" class="text_2">取消</text>
      </view>
    </view>
    <view class="justify-between group_1">
      <text class="text_3">按职位类型搜索</text>
      <view class="flex-row group_2">
        <text>技术</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254581114841.png"
          class="image_2"
        />
      </view>
    </view>
    <view class="flex-col group_3">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765056774629.png"
        class="image_3"
      />
      <view class="justify-between list">
        <view
          @click="view_9OnClick"
          class="list-item flex-col items-center"
          :key="i"
          v-for="(popularPosition, i) in popularPositions"
        >
          <text class="text_5 text_6">{{ popularPosition.name }}</text>
        </view>
      </view>
    </view>
    <view class="flex-col group_5">
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765055995713.png"
        class="image_3"
      />
      <view class="flex-row list_1">
        <view
          @click="view_18OnClick"
          class="list-item_1 flex-col items-center"
          :key="i"
          v-for="(popularCompany, i) in popularCompanys"
        >
          <text class="text_11 text_12">{{ popularCompany.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex';
import { key } from '../../stores';

const store = useStore(key)

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
// @ts-ignore
const navigationBarHeight = store.state.menuButtonInfo.height
// @ts-ignore
const navigationBarTop = store.state.menuButtonInfo.top
// @ts-ignore
const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(50)
/* #endif */

const popularPositions = reactive([
  { name: 'java' },
  { name: 'ios' },
  { name: '前端' },
  { name: null },
])
const popularCompanys = reactive([
  { name: '字节跳动' },
  { name: '美团' },
  { name: '腾讯' },
  { name: '网易' },
  { name: '百度' },
  { name: '贝壳' },
  { name: '北京京东世纪贸易有限公司' },
  { name: '快手' },
  { name: '安居客' },
  { name: '小米集团' },
])
const city = ref('重庆')
const searchContent = ref('请输入关键字')

const textOnClick = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
}
const text_1OnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const view_9OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const view_10OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const view_11OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const view_16OnClick = () => {
  uni.navigateTo({ url: '/pages/index/index' })
}
const view_17OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguanzhiwei/xiangguanzhiwei' })
}
const view_18OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_19OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_20OnClick = () => {
  uni.navigateTo({ url: '/pages/guanzhugongsi/guanzhugongsi' })
}
const view_21OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_22OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_23OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_24OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_25OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
const view_26OnClick = () => {
  uni.navigateTo({ url: '/pages/banbengengxin/banbengengxin' })
}
const image_4OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
}
</script>

<style lang="scss" scoped>
.page {
  padding: 46rpx 39rpx 500rpx 40rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .group_1 {
    margin-top: 31rpx;
    .text_3 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
    }
    .group_2 {
      margin-right: 11rpx;
      margin-top: 2rpx;
      color: rgb(163, 154, 154);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      .image_2 {
        margin-left: 28rpx;
        margin-top: 4rpx;
        width: 4rpx;
        height: 14rpx;
      }
    }
  }
  .group_3 {
    margin-top: 53rpx;
    .list {
      margin-top: 35rpx;
      width: 585rpx;
      .list-item {
        padding: 13rpx 0 5rpx;
        color: rgb(0, 0, 0);
        font-size: 20rpx;
        line-height: 19rpx;
        white-space: nowrap;
        background-color: rgb(249, 249, 251);
        border-radius: 10rpx;
        width: 75rpx;
        height: 40rpx;
        border: solid 2rpx rgb(163, 154, 154);
        .text_5 {
          padding: 13rpx 0 9rpx;
          color: rgb(0, 0, 0);
          font-size: 20rpx;
          line-height: 14rpx;
          white-space: nowrap;
          background-color: rgb(249, 249, 251);
          border-radius: 10rpx;
          width: 75rpx;
          height: 40rpx;
          border: solid 2rpx rgb(163, 154, 154);
        }
        .text_6 {
          padding: initial;
          color: initial;
          font-size: initial;
          line-height: initial;
          white-space: initial;
          background-color: initial;
          border-radius: initial;
          width: initial;
          height: initial;
          border: initial;
        }
      }
    }
  }
  .group_5 {
    margin-top: 339rpx;
    .list_1 {
      margin-top: 35rpx;
      height: 120rpx;
      position: relative;
      .list-item_1 {
        padding: 10rpx 0 7rpx;
        color: rgb(0, 0, 0);
        font-size: 20rpx;
        line-height: 18rpx;
        white-space: nowrap;
        background-color: rgb(249, 249, 251);
        border-radius: 10rpx;
        width: 110rpx;
        position: absolute;
        left: 0;
        top: 0;
        border: solid 2rpx rgb(163, 154, 154);
        .text_11 {
          margin-left: 31rpx;
          margin-right: 17rpx;
        }
        .text_12 {
          margin-left: initial;
          margin-right: initial;
        }
      }
    }
  }
  .text {
    align-self: center;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
  .search {
    margin-left: 3rpx;
    flex: 1 1 auto;
    color: rgb(163, 154, 154);
    font-size: 20rpx;
    line-height: 19rpx;
    white-space: nowrap;
    .image {
      align-self: center;
      width: 15rpx;
      height: 8rpx;
    }
    .section_1 {
      margin-left: 20rpx;
      padding: 11rpx 15rpx 12rpx;
      flex: 1 1 auto;
      border-radius: 25rpx;
      filter: drop-shadow(0px 4rpx 2rpx rgba(0, 0, 0, 0.25));
      background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481292187851976434.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      height: 43rpx;
      .image_1 {
        width: 20rpx;
        height: 20rpx;
      }
      .text_1 {
        margin-left: 11rpx;
      }
    }
  }
  .text_2 {
    margin-left: 21rpx;
    align-self: center;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
  .image_3 {
    width: 138rpx;
    height: 35rpx;
  }
}
</style>
