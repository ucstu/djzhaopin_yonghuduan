<template>
  <view class="flex-col page">
    <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view class="section_1" :style="'height: ' + navigationBarTop + 'px'"></view>
    <view class="flex-col section_2">
      <view class="justify-between items-center"
        :style="'height: ' + navigationBarHeight + 'px; width: ' + navigationBarWidth + 'px'">
        <scroll-view @click="scroll" :scroll-x="true" :style="'width: ' + expectationWidth + 'px'"
          class="flex-row list">
          <!--  #endif -->
          <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
          <view class="section_1"></view>
          <view class="flex-col section_2">
            <view class="justify-between items-center">
              <scroll-view @click="scroll" :scroll-x="true" class="flex-row list">
                <!--  #endif -->
                <text class="list-item" :class="activeIndex === i ? 'active' : ''" :key="i"
                  v-for="(name, i) in expects">
                  {{
                    name.name
                  }}
                </text>
              </scroll-view>
              <view class="flex-row">
                <image
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254586402738.png"
                  @click="image_5OnClick" class="image" />
                <image
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587111646.png"
                  @click="image_6OnClick" class="image image_2" />
              </view>
            </view>
            <view class="justify-between group_2">
              <view class="flex-row group_3">
                <text>热门</text>
                <text class="text_4">附近</text>
                <text class="text_5">最新</text>
              </view>
              <view class="flex-row group_4">
                <view class="flex-row">
                  <text @click="text_22OnClick">{{ city }}</text>
                  <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                    class="image_3 image_4" />
                </view>
                <view class="flex-row group_6">
                  <text @click="text_23OnClick">筛选</text>
                  <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                    class="image_3 image_5" />
                </view>
              </view>
            </view>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587777410.png"
              class="image_6" />
          </view>
          <view class="flex-col list_1">
            <JobDetail @click="view_4OnClick" class="list-item_1" :jobDetail="jobDetail" :key="i"
              v-for="(jobDetail, i) in jobDetails" />
          </view>
      </view>
</template>

<script lang="ts" setup>
import JobDetail from '../../components/JobDetail/JobDetail.vue'
import { key } from '../../stores';
import { reactive, ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
// @ts-ignore
const navigationBarHeight = store.state.menuButtonInfo.height
// @ts-ignore
const navigationBarTop = store.state.menuButtonInfo.top
// @ts-ignore
const navigationBarWidth = store.state.menuButtonInfo.left - uni.upx2px(30)
// @ts-ignore
const expectationWidth = store.state.menuButtonInfo.left - uni.upx2px(170)
/* #endif */

const jobDetails = reactive([
  {
    name: '前端开发实习生',
    areaAndRequirements: '江北区 | 在校/应届',
    educationalRequirements: '本科',
    directionOne: '后台开发',
    directionTwo: 'JAVA开发',
    companyLogoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
    companyName: '字节跳动',
    companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
    salary: '4K - 8K',
    releaseDate: '2月28日',
  },
  {
    name: '前端开发实习生1',
    areaAndRequirements: '江北区 |4545 在校/应届',
    educationalRequirements: '本科',
    directionOne: '后台开发',
    directionTwo: 'JAVA开发',
    companyLogoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
    companyName: '字节跳动',
    companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
    salary: '4K - 8K',
    releaseDate: '2月28日',
  },
  {
    name: '前端开发实习生',
    areaAndRequirements: '江北区 | 在校/应届',
    educationalRequirements: '本科',
    directionOne: '后台开发',
    directionTwo: 'JAVA开发',
    companyLogoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
    companyName: '字节跳动',
    companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
    salary: '4K - 8K',
    releaseDate: '2月28日',
  },
  {
    name: '前端开发实习生',
    areaAndRequirements: '江北区 | 在校/应届',
    educationalRequirements: '本科',
    directionOne: '后台开发',
    directionTwo: 'JAVA开发',
    companyLogoAddress:
      'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528765002666348.png',
    companyName: '字节跳动',
    companyInfo: 'D轮及以上 | 2000人以上 | 内容资讯',
    salary: '4K - 8K',
    releaseDate: '2月28日',
  },
])

const expects = reactive([
  { name: '前端工程师' },
  { name: '全栈工程师' },
  { name: 'JAVA工程师' },
])

const city = ref('重庆')
const activeIndex = ref(0)


const image_5OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const image_6OnClick = () => {
  uni.navigateTo({ url: '/pages/sousuoyemian/sousuoyemian' })
}
const text_22OnClick = () => {
  uni.navigateTo({ url: '/pages/weizhixuanze/weizhixuanze' })
}
const text_23OnClick = () => {
  uni.navigateTo({ url: '/pages/shaixuanyemian/shaixuanyemian' })
}
const view_4OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_5OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_6OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
const view_7OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
}
</script>

<style lang="scss" scoped>
.page {
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .section_1 {
    background-color: rgb(37, 85, 212);
    height: 45rpx;
  }
  .section_2 {
    padding: 28rpx 20rpx 15rpx;
    padding-top: 0rpx;
    background-color: rgb(37, 85, 212);
    .group_2 {
      margin-top: 15rpx;
      .group_3 {
        color: rgb(255, 255, 255);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
        .text_4 {
          margin-left: 32rpx;
        }
        .text_5 {
          margin-left: 29rpx;
        }
      }
      .group_4 {
        margin-top: 5rpx;
        color: rgb(255, 255, 255);
        font-size: 20rpx;
        line-height: 17rpx;
        white-space: nowrap;
        .group_6 {
          margin-left: 27rpx;
          .image_5 {
            margin: 6rpx 0 5rpx 3rpx;
          }
        }
        .image_4 {
          margin: 7rpx 0 4rpx 3rpx;
        }
        .image_3 {
          width: 10rpx;
          height: 7rpx;
        }
      }
    }
    .image_6 {
      margin-top: 26rpx;
      border-radius: 25rpx;
      width: 94.5vw;
      height: 25.5vw;
    }
    .list {
      margin: 3rpx 0 9rpx;
      overflow: hidden;
      white-space: nowrap;
      .active {
        font-size: 35rpx !important;
        color: rgb(255, 255, 255) !important;
      }
      .list-item {
        color: rgb(209, 205, 205);
        font-size: 28rpx;
        line-height: 32rpx;
        margin-right: 12rpx;
        white-space: nowrap;
      }
    }
    .image {
      width: 45rpx;
      height: 44rpx;
    }
    .image_2 {
      margin-left: 30rpx;
    }
  }
  .list_1 {
    padding: 15rpx 25rpx 0rpx;
    .list-item_1 {
      margin-top: 20rpx;
    }
  }
  .footer {
    margin-top: 61rpx;
    padding: 9rpx 49rpx 11rpx 56rpx;
    overflow: hidden;
    height: 101rpx;
    border: solid 2rpx rgb(0, 0, 0);
    .group_15 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 76rpx;
      .text_52 {
        margin-top: 3rpx;
      }
    }
    .group_16 {
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 18rpx;
      white-space: nowrap;
      height: 77rpx;
      .text_53 {
        margin-top: 4rpx;
      }
    }
    .group_17 {
      margin-top: 5rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 72rpx;
    }
    .group_18 {
      margin-top: 3rpx;
      color: rgb(0, 0, 0);
      font-size: 20rpx;
      line-height: 19rpx;
      white-space: nowrap;
      width: 79rpx;
      height: 74rpx;
    }
    .image_12 {
      width: 54rpx;
      height: 54rpx;
    }
  }
}
</style>
