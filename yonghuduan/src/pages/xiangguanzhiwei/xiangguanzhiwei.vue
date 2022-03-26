<template>
  <view class="flex-col page">
    <view class="flex-row">
      <text @click="textOnClick" class="text">{{ city }}</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528773197745663.png"
        class="image"
      />
      <view class="flex-row search">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528771387958614.png"
          class="image_1"
        />
        <text class="text_1">{{ searchContent }}</text>
      </view>
      <text @click="text_1OnClick" class="text_2">取消</text>
    </view>
    <view class="justify-between group_1">
      <text>相关职位</text>
      <text @click="text_3OnClick">相关公司</text>
    </view>
    <view class="justify-between equal-division">
      <view class="flex-row equal-division-item">
        <text>区域</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_3"
        />
      </view>
      <view class="flex-row equal-division-item_1">
        <text>要求</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_4"
        />
      </view>
      <view class="flex-row equal-division-item_2">
        <text>公司</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_5"
        />
      </view>
      <view class="flex-row equal-division-item_3">
        <text>福利</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_6"
        />
      </view>
      <view class="flex-row equal-division-item_4">
        <text>排序</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16478528775248822692.png"
          class="image_2 image_7"
        />
      </view>
    </view>
    <view class="flex-row list">
      <view class="list-item flex-col items-center" :key="i" v-for="(direction, i) in directions">
        <text class="text_10 text_11">{{ direction.name }}</text>
      </view>
    </view>
    <view class="flex-col list_1">
      <JobDetail @click="view_8OnClick" class="list-item_1" :key="i" v-for="(job, i) in jobs" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import JobDetail from '../../components/JobDetail/JobDetail.vue'
import { reactive } from 'vue'
const directions = reactive([
  { name: '不限' },
  { name: 'C++' },
  { name: 'JAVA' },
  { name: 'C#' },
  { name: 'PHP' },
  { name: 'Html5' },
])
const jobs = reactive([
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
const city = ref('重庆')
const searchContent = ref('请输入关键字')

const textOnClick = () => {
  uni.navigateTo({ url: '/pages/chengshixuanze/chengshixuanze' })
},
const text_1OnClick = () => {
  uni.navigateBack()
},
const text_3OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangguangongsi/xiangguangongsi' })
},
const view_8OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
},
const view_9OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
},
const view_10OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
},
const view_11OnClick = () => {
  uni.navigateTo({ url: '/pages/zhiweixiangqing/zhiweixiangqing' })
},
</script>

<style lang="scss" scoped>
.page {
  padding: 46rpx 39rpx 299rpx 40rpx;
  background-color: rgb(255, 255, 255);
  width: 100%;
  overflow-y: auto;
  height: 100%;
  .group_1 {
    margin-top: 39rpx;
    padding-left: 90rpx;
    padding-right: 85rpx;
    color: rgb(0, 0, 0);
    font-size: 30rpx;
    line-height: 28rpx;
    letter-spacing: 6rpx;
    white-space: nowrap;
  }
  .equal-division {
    margin: 44rpx 12rpx 0 29rpx;
    .equal-division-item {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .image_3 {
        margin: 10rpx 0 8rpx 7rpx;
      }
    }
    .equal-division-item_1 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .image_4 {
        margin: 10rpx 0 8rpx 6rpx;
      }
    }
    .equal-division-item_2 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 22rpx;
      white-space: nowrap;
      .image_5 {
        margin: 10rpx 0 8rpx 8rpx;
      }
    }
    .equal-division-item_3 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .image_6 {
        margin: 10rpx 0 8rpx 8rpx;
      }
    }
    .equal-division-item_4 {
      color: rgb(0, 0, 0);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .image_7 {
        margin: 10rpx 0 8rpx 6rpx;
      }
    }
    .image_2 {
      width: 7rpx;
      height: 5rpx;
    }
  }
  .list {
    margin-top: 24rpx;
    padding-left: 11rpx;
    .list-item {
      padding: 8rpx 0 8rpx;
      color: rgb(0, 0, 0);
      font-size: 16rpx;
      line-height: 14rpx;
      white-space: nowrap;
      background-color: rgb(229, 229, 229);
      border-radius: 5rpx;
      overflow: hidden;
      width: 50rpx;
      height: 30rpx;
      .text_10 {
        margin-left: 7rpx;
        margin-right: 3rpx;
      }
      .text_11 {
        margin-left: initial;
        margin-right: initial;
      }
    }
  }
  .list_1 {
    margin-top: 35rpx;
    .list-item_1 {
      margin-top: 20rpx;
    }
  }
  .text {
    align-self: center;
    color: rgb(0, 0, 0);
    font-size: 25rpx;
    line-height: 23rpx;
    white-space: nowrap;
  }
  .image {
    margin-left: 3rpx;
    align-self: center;
    width: 15rpx;
    height: 8rpx;
  }
  .search {
    margin-left: 20rpx;
    padding: 11rpx 15rpx 12rpx;
    flex: 1 1 auto;
    color: rgb(163, 154, 154);
    font-size: 20rpx;
    line-height: 19rpx;
    white-space: nowrap;
    background-color: rgb(229, 229, 229);
    border-radius: 25rpx;
    box-shadow: 0px 4rpx 4rpx rgba(0, 0, 0, 0.25);
    height: 43rpx;
    position: relative;
    .image_1 {
      width: 20rpx;
      height: 20rpx;
    }
    .text_1 {
      margin-left: 11rpx;
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
}
</style>
