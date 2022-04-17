<template>
  <NavigationBar class="header" title="在线简历" />
  <view class="flex-col page">
    <view class="flex-col group-all">
      <view class="flex-col group-user">
        <view class="flex-row justify-between user-box">
          <view class="flex-col" @click="changeInfo">
            <view class="flex-row items-center user">
              <text
                class="text-top"
                style="font-size: 40rpx; font-weight: 600"
                >{{ userInfos.userName }}</text
              >
              <image class="image" src="@/static/icons/edit.png" />
            </view>
            <view>
              <text
                >{{ education.schoolName }}/{{}}/{{ education.education }}</text
              >
            </view>
          </view>
          <view class="image-box">
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/623287845a7e3f0310c3a3f7/623446dc62a7d90011023514/16481303732403472501.png"
              class="photo"
            />
            <image v-if="true" class="sex-image" src="@/static/icons/man.png" />
            <image
              v-if="false"
              class="sex-image"
              src="@/static/icons/woman.png"
            />
          </view>
        </view>
        <view class="flex-col except-work-box">
          <view class="flex-col except-work">
            <text class="text-top">求职期望</text>
          </view>
          <view
            v-for="(jobExcept, i) in jobExpectations"
            :key="i"
            class="flex-col"
          >
            <view style="font-size: 28rpx; font-weight: 600">
              <text>{{ jobExcept.name }}</text>
              <text style="padding-left: 20rpx">{{
                jobExcept.salary
              }}</text></view
            >
            <text style="font-size: 25rpx">{{ jobExcept.direction }}</text>
            <view style="font-size: 25rpx">
              <text>{{ jobExcept.city }}</text>
              <text style="padding-left: 20rpx">{{ jobExcept.entryTime }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="group-box">
        <view class="flex-row items-center justify-between group-info-box">
          <text class="text-top">个人优势</text>
          <image
            class="image"
            src="@/static/icons/edit.png"
            @click="addAdvantage"
          />
        </view>
        <view>
          <text style="font-size: 30rpx">{{ personalAdvantage }}</text>
        </view>
      </view>
      <view class="group-box">
        <view class="flex-row items-center justify-between group-info-box">
          <text class="text-top">工作经历</text>
          <image
            class="image"
            src="@/static/icons/add-circle.png"
            @click="addWork"
          />
        </view>
        <view
          v-for="(workExperience, i) in workExperiences"
          :key="i"
          class="flex-col experience-box"
        >
          <text class="experience-company">{{ workExperience.company }}</text>
          <text>{{ workExperience.direction }}</text>
          <text>{{ workExperience.date }}</text>
          <text class="experience-work">{{ workExperience.work }}</text>
        </view>
      </view>
      <view class="group-box">
        <view class="flex-row items-center justify-between group-info-box">
          <text class="text-top">教育经历</text>
          <image
            class="image"
            src="@/static/icons/add-circle.png"
            @click="addEducate"
          />
        </view>
        <view
          v-for="(educate, i) in educationExperiences"
          :key="i"
          class="flex-col educate-box"
        >
          <text class="educate-school">{{ educate.school }}</text>
          <text>{{ educate.levelAndProfession }}</text>
          <text>{{ educate.date }}</text>
        </view>
      </view>
      <view class="group-box">
        <view class="flex-row items-center justify-between group-info-box">
          <text class="text-top">项目经历</text>
          <image
            class="image"
            src="@/static/icons/add-circle.png"
            @click="addProject"
          />
        </view>
        <view
          v-for="(project, i) in projectExperiences"
          :key="i"
          class="flex-col project-box"
        >
          <text class="project-pro">{{ project.project }}</text>
          <text>{{ project.date }}</text>
          <text>{{ project.work }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { reactive, ref } from "vue";

const jobExpectations = reactive([
  {
    name: "前段工程师",
    salary: "8K-9K",
    direction: "React",
    city: "重庆",
    entryTime: "1个月内入职",
  },
  {
    name: "后段工程师",
    salary: "8K-9K",
    direction: "JAVA",
    city: "成都",
    entryTime: "3个月内入职",
  },
]);
const workExperiences = reactive([
  {
    company: "命通科技",
    direction: "后端工程师",
    work: "开发后台",
    date: "2020.03 - 2021.03",
  },
  {
    company: "小而美科技",
    direction: "前端工程师",
    work: "小程序开发拉萨解放克拉斯分厘卡时空裂缝经济拉萨解放了看爱上尽快立法就阿里山可见度克里夫尽快拉萨机的风口浪尖ask来得及发考了几分考虑",
    date: "2020.03 - 2021.03",
  },
]);
const educationExperiences = reactive([
  {
    school: "电子科技大学",
    levelAndProfession: "本科 | 计算机科学与技术",
    date: "2019.09 - 2022.06",
  },
  {
    school: "清华大学",
    levelAndProfession: "研究生 | 计算机科学与技术",
    date: "2022.09 - 2026.06",
  },
]);
const projectExperiences = reactive([
  { project: "LOL", date: "2020.02-2021.06", work: "完成召唤兽" },
  { project: "LOL", date: "2020.02-2021.06", work: "完成召唤兽" },
]);
const personalAdvantage = ref(
  "能吃苦，能加班，身体挺好！啊考了几分卢卡斯就看浪费时间分厘卡机"
);

const userInfos = uni.getStorageSync("userInfo");
const education = uni.getStorageSync("education");
console.log(userInfos);
const date = new Date();
const year = date.getFullYear();
console.log(year);

const changeInfo = () => {
  uni.navigateTo({ url: "/info/gerenxinxi/gerenxinxi" });
};
const addAdvantage = () => {
  uni.navigateTo({ url: "/info/gerenyoushi/gerenyoushi" });
};
const addWork = () => {
  uni.navigateTo({ url: "/info/gongzuojingli/gongzuojingli" });
};
const addEducate = () => {
  uni.navigateTo({ url: "/info/jiaoyujingli/jiaoyujingli" });
};
const addProject = () => {
  uni.navigateTo({ url: "/info/xiangmujingli/xiangmujingli" });
};
</script>

<style lang="scss" scoped>
.page {
  .image {
    width: 50rpx;
    height: 50rpx;
  }

  .group-all {
    width: 710rpx;
    height: auto;
    margin-left: 20rpx;

    .group-user {
      height: auto;
      line-height: 50rpx;
      border-bottom: 1px solid rgb(230 230 230);

      .user-box {
        height: 120rpx;
      }

      .image-box {
        .image {
          width: 50rpx;
          height: 50rpx;
        }

        .sex-image {
          position: absolute;
          top: 220rpx;
          right: 30rpx;
          width: 25rpx;
          height: 25rpx;
        }
      }

      .except-work-box {
        height: auto;

        .except-work {
          height: 80rpx;
        }
      }
    }

    .group-box {
      height: auto;
      border-bottom: 1px solid rgb(230 230 230);

      .group-info-box {
        height: 100rpx;
      }

      .experience-box {
        height: auto;
        margin-top: 20rpx;
        font-size: 25rpx;
        line-height: 40rpx;

        .experience-company {
          font-size: 30rpx;
          font-weight: bold;
        }

        .experience-work {
          max-height: 40rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .educate-box {
        height: auto;
        margin-top: 20rpx;
        font-size: 25rpx;
        line-height: 40rpx;

        .educate-school {
          font-size: 30rpx;
          font-weight: bold;
        }
      }

      .project-box {
        height: auto;
        margin-top: 20rpx;
        font-size: 25rpx;
        line-height: 40rpx;

        .project-pro {
          font-size: 30rpx;
          font-weight: bold;
        }
      }
    }
  }

  .text-top {
    font-size: 35rpx;
    font-weight: 600;
  }

  .photo {
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
  }
}
</style>
