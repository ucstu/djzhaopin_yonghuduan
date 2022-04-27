<template>
  <view class="flex-col page">
    <!--  #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view class="section-1" :style="'height: ' + navigationBarTop + 'px'"></view>
      <view class="flex-col section-2">
        <view
          class="justify-between items-center"
          :style="'height: ' + navigationBarHeight + 'px; width: ' + navigationBarWidth + 'px'">
          <scroll-view
          :scroll-x="true" :style="'width: ' + expectationWidth + 'px'" class="flex-row list"
          >
          <!--  #endif -->
          <!--  #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
          <view class="section-1"></view>
          <view class="flex-col section-2">
            <view class="justify-between items-center">
              <scroll-view :scroll-x="true" class="flex-row list">
                <!--  #endif -->
                <text
                  v-for="(name, i) in expects" :key="i" class="list-item" :class="activeIndex === i ? 'active' : ''"
                  @click="changeJobType(i)">
                  {{
                    name
                  }}
                </text>
              </scroll-view>
              <view class="flex-row">
                <image
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254586402738.png"
                  class="image" @click="image_5OnClick" />
                <image
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587111646.png"
                  class="image image-2" @click="image_6OnClick" />
              </view>
            </view>
            <view class="justify-between group-2">
              <view class="flex-row group-3">
                <text
                v-for="(item,i) in recommend"
                :key="i"
                style="margin-right: 20rpx;"
                :class="showRecommend === i ? 'is-active' : ''"
                @click="recommended(i)">{{item}}</text>
                <!-- <text
                  :class="showFirst === 'true' ? 'is-active' : ''"
                  @click="showFirst = 'true'; showSecond = 'false'; showThird = 'false'">热门</text>
                <text
                  class="text-4" :class="showSecond === 'true' ? 'is-active' : ''"
                  @click="showFirst = 'false'; showSecond = 'true'; showThird = 'false'">附近</text>
                <text
                  class="text-5" :class="showThird === 'true' ? 'is-active' : ''"
                  @click="showFirst = 'false'; showSecond = 'false'; showThird = 'true'">最新</text> -->
              </view>
              <view class="flex-row group-4">
                <view class="flex-row">
                  <text @click="text_22OnClick">{{ city }}</text>
                  <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                    class="image-3 image-4" />
                </view>
                <view class="flex-row group-6">
                  <text @click="text_23OnClick">筛选</text>
                  <image
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475959311313713900.png"
                    class="image-3 image-5" />
                </view>
              </view>
            </view>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16475932254587777410.png"
              class="image-6" />
          </view>
          <view class="flex-col">
            <scroll-view
            :scroll-y="true"
            :refresher-enabled="true"
            :refresher-triggered="triggered"
            :refresher-threshold="100"
            class="job-detail"
            @refresherpulling="onPulling"
            @refresherrefresh="onRefresh"
            @refresherrestore="onRestore"
            @refresherabort="onAbort"
            >
              <JobDetail
              v-for="(jobDetail, i) in jobDetails"
              :key="i" :job-detail="jobDetail"
              @job-click="jobDescription(i)">
              </JobDetail>
            </scroll-view>
          </view>
</view>
</template>

<script lang="ts" setup>
import JobDetail from '@/components/JobDetail/JobDetail.vue';
import { getCompanyinfosPositioninfos } from "@/services/services";
import { PositionInformation } from '@/services/types';
import { key } from '@/stores';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore(key);

/* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */

const navigationBarHeight = store.state.menuButtonInfo!.height

const navigationBarTop = store.state.menuButtonInfo!.top

const navigationBarWidth = store.state.menuButtonInfo!.left - uni.upx2px(30)

const expectationWidth = store.state.menuButtonInfo!.left - uni.upx2px(170)
/* #endif */


const city = ref('重庆')
const activeIndex = ref(0)
const showRecommend = ref(0)
const triggered = ref(false)

const expects = ref([
   '综合',
  '全栈工程师',
  'JAVA工程师',
])
const recommend = ref([
  "热门",
  "附近",
  "最新"
])
const jobDetails = ref<PositionInformation[]>([
])
onMounted(()=> {
  getCompanyinfosPositioninfos(
  {}
).then((res) => {
  jobDetails.value = res.data.body
})
})
const changeJobType = (index: number) => {
  activeIndex.value = index

  getCompanyinfosPositioninfos(
  {name: expects.value[index]}
).then((res) => {
  jobDetails.value = res.data.body
})
}

const recommended = (index: number) => {
  showRecommend.value = index
  getCompanyinfosPositioninfos(
  {name: expects.value[index]}
).then((res) => {
  jobDetails.value = res.data.body
})
}

const onPulling = () => {
  triggered.value = true
}
const onRefresh = () => {
  setTimeout(() => {
  triggered.value = false;
  },1000)
}
const onRestore = () => {
   getCompanyinfosPositioninfos(
  {name: expects.value[activeIndex.value]}
).then((res) => {
  jobDetails.value = res.data.body
})
}
const onAbort = () => {
  // triggered.value = false
  console.log(4444);
}

const image_5OnClick = () => {
  uni.navigateTo({ url: '/info/qiuzhiqiwang/qiuzhiqiwang' })
}
const image_6OnClick = () => {
  uni.navigateTo({ url: '/most/sousuoyemian/sousuoyemian' })
}
const text_22OnClick = () => {
  uni.navigateTo({ url: '/most/weizhixuanze/weizhixuanze' })
}
const text_23OnClick = () => {
  uni.navigateTo({ url: '/most/shaixuanyemian/shaixuanyemian' })
}
const jobDescription = (index: number) => {
  let companyId = jobDetails.value[index].companyInformationId;
  let positionId = jobDetails.value[index].positionInformationId;
  uni.navigateTo({ url: '/detail/zhiweixiangqing/zhiweixiangqing?companyId=' + companyId +"&positionId="+positionId });
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgb(255 255 255);

  .section-1 {
    height: 45rpx;
    background-color: rgb(37 85 212);
  }

  .section-2 {
    padding: 28rpx 20rpx 15rpx;
    padding-top: 0rpx;
    background-color: rgb(37 85 212);

    .group-2 {
      margin-top: 15rpx;

      .group-3 {
        font-size: 25rpx;
        line-height: 23rpx;
        color: rgb(209 205 205);
        white-space: nowrap;

        .is-active {
          color: rgb(255 255 255);
        }

        .text-4 {
          margin-left: 32rpx;
        }

        .text-5 {
          margin-left: 29rpx;
        }
      }

      .group-4 {
        margin-top: 5rpx;
        font-size: 20rpx;
        line-height: 17rpx;
        color: rgb(255 255 255);
        white-space: nowrap;

        .group-6 {
          margin-left: 27rpx;

          .image-5 {
            margin: 6rpx 0 5rpx 3rpx;
          }
        }

        .image-4 {
          margin: 7rpx 0 4rpx 3rpx;
        }

        .image-3 {
          width: 10rpx;
          height: 7rpx;
        }
      }
    }

    .image-6 {
      width: 94.5vw;
      height: 25.5vw;
      margin-top: 26rpx;
      border-radius: 25rpx;
    }

    .list {
      margin: 3rpx 0 9rpx;
      overflow: hidden;
      white-space: nowrap;

      .active {
        font-size: 35rpx !important;
        color: rgb(255 255 255) !important;
      }

      .list-item {
        margin-right: 12rpx;
        font-size: 28rpx;
        line-height: 32rpx;
        color: rgb(209 205 205);
        white-space: nowrap;
      }
    }

    .image {
      width: 45rpx;
      height: 44rpx;
    }

    .image-2 {
      margin-left: 30rpx;
    }
  }

  .footer {
    height: 101rpx;
    padding: 9rpx 49rpx 11rpx 56rpx;
    margin-top: 61rpx;
    overflow: hidden;
    border: solid 2rpx rgb(0 0 0);

    .group-15 {
      width: 79rpx;
      height: 76rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;

      .text-52 {
        margin-top: 3rpx;
      }
    }

    .group-16 {
      height: 77rpx;
      font-size: 20rpx;
      line-height: 18rpx;
      color: rgb(0 0 0);
      white-space: nowrap;

      .text-53 {
        margin-top: 4rpx;
      }
    }

    .group-17 {
      width: 79rpx;
      height: 72rpx;
      margin-top: 5rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .group-18 {
      width: 79rpx;
      height: 74rpx;
      margin-top: 3rpx;
      font-size: 20rpx;
      line-height: 19rpx;
      color: rgb(0 0 0);
      white-space: nowrap;
    }

    .image-12 {
      width: 54rpx;
      height: 54rpx;
    }
  }

  .job-detail {
    height: 830rpx;
    overflow: hidden;
  }
}
</style>
