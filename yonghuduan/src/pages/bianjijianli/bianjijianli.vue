<template>
  <view class="flex-row page">
    <NavigationBar class="header" title="在线简历" />
    <view class="justify-between group_1">
      <view class="flex-col group_2">
        <view class="flex-row group_3">
          <text class="text_1">{{ userName }}</text>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724963039578.png"
            @click="image_8OnClick"
            class="image_1 image_2"
          />
        </view>
        <text class="text_2">{{ basicInformation }}</text>
      </view>
      <view class="flex-col items-end image-wrapper">
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303727608517085.png"
          class="image_3"
        />
      </view>
    </view>
    <view class="flex-col group_4">
      <text class="text_3">求职期望</text>
      <view class="flex-col list">
        <JobExpectation
          @click="view_23OnClick"
          class="list-item"
          :key="i"
          v-for="(jobExpectation, i) in jobExpectations"
        />
      </view>
    </view>
    <view class="flex-col group_9">
      <view class="justify-between group_10">
        <text class="text_18">个人优势</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303724963039578.png"
          @click="image_2OnClick"
          class="image_1"
        />
      </view>
      <text class="text_19">{{ personalAdvantage }}</text>
    </view>
    <view class="flex-col group_11">
      <view class="justify-between group_12">
        <text class="text_20">工作经历</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303722088435668.png"
          @click="image_3OnClick"
          class="image_8"
        />
      </view>
      <view class="flex-col list_1">
        <WorkExperience
          @click="view_25OnClick"
          class="list-item_1"
          :key="i"
          v-for="(workExperience, i) in workExperiences"
        />
      </view>
    </view>
    <view class="flex-col group_17">
      <view class="justify-between group_18">
        <text class="text_33">教育经历</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303722088435668.png"
          @click="image_4OnClick"
          class="image_8"
        />
      </view>
      <view class="flex-col list_2">
        <EducationalExperience
          @click="view_27OnClick"
          class="list-item_2"
          :key="i"
          v-for="(educationExperience, i) in educationExperiences"
        />
      </view>
    </view>
    <view class="flex-col group_21">
      <view class="justify-between group_22">
        <text class="text_43">项目经历</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303722088435668.png"
          @click="image_5OnClick"
          class="image_8"
        />
      </view>
      <view class="flex-col list_3">
        <ProjectExperience
          @click="view_29OnClick"
          class="list-item_3"
          :key="i"
          v-for="(projectExperience, i) in projectExperiences"
        />
      </view>
    </view>
    <view class="flex-col group_25">
      <view class="justify-between group_26">
        <text class="text_53">社交主页</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303722151381443.png"
          @click="image_6OnClick"
          class="image_1"
        />
      </view>
      <text class="text_54">{{ socialUrl }}</text>
    </view>
    <view class="justify-between group_27">
      <text class="text_55">图片作品</text>
      <view class="flex-row group_28">
        <text class="text_56">已添加 1 张</text>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303722088435668.png"
          @click="image_7OnClick"
          class="image_8 image_22"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'
import JobExpectation from '@/components/JobExpectation/JobExpectation.vue'
import WorkExperience from '@/components/WorkExperience/WorkExperience.vue'
import EducationalExperience from '@/components/EducationalExperience/EducationalExperience.vue'
import ProjectExperience from '@/components/ProjectExperience/ProjectExperience.vue'
import { reactive, ref } from 'vue'



const jobExpectations = reactive([
  {
    name: '前段工程师',
    salary: '8K-9K',
    direction: 'React',
    city: '重庆',
    entryTime: '1个月内入职',
  },
  {
    name: '后段工程师',
    salary: '8K-9K',
    direction: 'JAVA',
    city: '成都',
    entryTime: '3个月内入职',
  },
])
const workExperiences = reactive([
  {
    company: '命通科技',
    direction: '后端工程师',
    work: '开发后台',
    date: '2020.03 - 2021.03',
  },
  {
    company: '小而美科技',
    direction: '前端工程师',
    work: '小程序开发',
    date: '2020.03 - 2021.03',
  },
])
const educationExperiences = reactive([
  {
    school: '电子科技大学',
    levelAndProfession: '本科 | 计算机科学与技术',
    date: '2019.09 - 2022.06',
  },
  {
    school: '清华大学',
    levelAndProfession: '研究生 | 计算机科学与技术',
    date: '2022.09 - 2026.06',
  },
])
const projectExperiences = reactive([
  { project: 'LOL', date: '2020.02-2021.06', work: '完成召唤兽' },
  { project: 'LOL', date: '2020.02-2021.06', work: '完成召唤兽' },
])
const personalAdvantage = ref('能吃苦，能加班，身体挺好！')
const socialUrl = ref('https://blog.ucstu.com')
const basicInformation = ref('应届毕业生/18岁/本科')
const userName = ref('张三')
const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const image_8OnClick = () => {
  uni.navigateTo({ url: '/pages/gerenxinxi/gerenxinxi' })
}
const view_23OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const view_24OnClick = () => {
  uni.navigateTo({ url: '/pages/qiuzhiqiwang/qiuzhiqiwang' })
}
const image_2OnClick = () => {
  uni.navigateTo({ url: '/pages/gerenyoushi/gerenyoushi' })
}
const image_3OnClick = () => {
  uni.navigateTo({ url: '/pages/gongzuojingli/gongzuojingli' })
}
const view_25OnClick = () => {
  uni.navigateTo({ url: '/pages/gongzuojingli/gongzuojingli' })
}
const view_26OnClick = () => {
  uni.navigateTo({ url: '/pages/gongzuojingli/gongzuojingli' })
}
const image_4OnClick = () => {
  uni.navigateTo({ url: '/pages/jiaoyujingli/jiaoyujingli' })
}
const view_27OnClick = () => {
  uni.navigateTo({ url: '/pages/jiaoyujingli/jiaoyujingli' })
}
const view_28OnClick = () => {
  uni.navigateTo({ url: '/pages/jiaoyujingli/jiaoyujingli' })
}
const image_5OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangmujingli/xiangmujingli' })
}
const view_29OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangmujingli/xiangmujingli' })
}
const view_30OnClick = () => {
  uni.navigateTo({ url: '/pages/xiangmujingli/xiangmujingli' })
}
const image_6OnClick = () => {
  uni.navigateTo({ url: '/pages/shejiaozhuye/shejiaozhuye' })
}
const image_7OnClick = () => {
  uni.navigateTo({ url: '/pages/tupianzuopin/tupianzuopin' })
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 34rpx;
  background-color: rgb(255, 255, 255);
  height: 2064rpx;
  width: 100%;
  overflow-y: auto;
  position: relative;
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .group_1 {
    padding: 0 6rpx;
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    top: 145rpx;
    .group_2 {
      align-self: center;
      .group_3 {
        padding: 0 2rpx;
        color: rgb(0, 0, 0);
        font-size: 40rpx;
        line-height: 36rpx;
        white-space: nowrap;
        .text_1 {
          margin: 6rpx 0 8rpx;
        }
        .image_2 {
          margin-right: 0;
        }
      }
      .text_2 {
        margin-top: 14rpx;
        color: rgb(0, 0, 0);
        font-size: 25rpx;
        line-height: 23rpx;
        white-space: nowrap;
      }
    }
    .image-wrapper {
      padding: 90rpx 0 5rpx;
      border-radius: 60rpx;
      background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303726169734760.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 120rpx;
      height: 120rpx;
      .image_3 {
        margin-right: 5rpx;
        border-radius: 13rpx;
        width: 25rpx;
        height: 25rpx;
      }
    }
  }
  .group_4 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    top: 318rpx;
    .text_3 {
      margin-left: 2rpx;
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
    }
    .list {
      margin-top: 21rpx;
      .list-item {
        &:last-of-type {
          margin-top: 15rpx;
        }
      }
    }
  }
  .group_9 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    top: 656rpx;
    .group_10 {
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
      .text_18 {
        align-self: center;
      }
    }
    .text_19 {
      margin-top: 17rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 28rpx;
      white-space: nowrap;
    }
  }
  .group_11 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    top: 798rpx;
    .group_12 {
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
      .text_20 {
        margin: 5rpx 0 7rpx;
      }
    }
    .list_1 {
      margin-top: 14rpx;
      .list-item_1 {
        &:last-of-type {
          margin-top: 15rpx;
        }
      }
    }
  }
  .group_17 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    bottom: 616rpx;
    .group_18 {
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
      .text_33 {
        margin: 5rpx 0 7rpx;
      }
    }
    .list_2 {
      margin-top: 14rpx;
      .list-item_2 {
        &:last-of-type {
          margin-top: 15rpx;
        }
      }
    }
  }
  .group_21 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    bottom: 267rpx;
    .group_22 {
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
      .text_43 {
        margin: 5rpx 0 7rpx;
      }
    }
    .list_3 {
      margin-top: 14rpx;
      .list-item_3 {
        &:last-of-type {
          margin-top: 15rpx;
        }
      }
    }
  }
  .group_25 {
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    bottom: 128rpx;
    .group_26 {
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
      .text_53 {
        align-self: center;
      }
    }
    .text_54 {
      margin-left: 7rpx;
      margin-top: 20rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 30rpx;
      line-height: 29rpx;
      white-space: nowrap;
    }
  }
  .group_27 {
    padding: 0 3rpx;
    position: absolute;
    left: 35rpx;
    right: 34rpx;
    bottom: 34rpx;
    .text_55 {
      margin: 5rpx 0 7rpx;
      color: rgb(0, 0, 0);
      font-size: 35rpx;
      line-height: 32rpx;
      white-space: nowrap;
    }
    .group_28 {
      margin-right: 13rpx;
      color: rgba(0, 0, 0, 0.5);
      font-size: 25rpx;
      line-height: 23rpx;
      white-space: nowrap;
      .text_56 {
        align-self: center;
      }
      .image_22 {
        margin-right: 0;
      }
    }
  }
  .image_8 {
    margin-right: 16rpx;
    width: 45rpx;
    height: 44rpx;
  }
  .image_1 {
    margin-right: 16rpx;
    width: 50rpx;
    height: 50rpx;
  }
}
</style>
