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
                >{{ userName }}</text
              >
              <image class="image" src="@/static/icons/edit.png" />
            </view>
            <view>
              <text style="font-size: 30rpx">{{ age }}岁/{{ education }}</text>
            </view>
          </view>
          <view class="image-box">
            <image :src="avatar" class="photo" />
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
        <view class="advantage-box">
          <text>{{ personalAdvantage }}</text>
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
          @click="alterWork(i)"
        >
          <text class="experience-company">{{
            workExperience.corporateName
          }}</text>
          <text>{{ workExperience.positionName }}</text>
          <text
            >{{ workExperience.startTime }}~{{ workExperience.endTime }}</text
          >
          <text class="experience-work">{{ workExperience.jobContent }}</text>
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
import { getUserinfosUserinfoidWorkexperiences } from "@/services/services";
import { key } from "@/stores";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore(key);

const avatar = store.state.userInfo?.avatar; // 头像
const userName =
  store.state.userInfo!.firstName + store.state.userInfo!.lastName; // 姓名
const age = store.state.userInfo?.age; // 年龄
const education = store.state.userInfo?.education; // 学历

// 求职期望
const jobExpectations = ref([
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
// 工作经历
const workExperiences = ref<any>([]);
// 教育经历
const educationExperiences = ref([
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
// 项目经历
const projectExperiences = ref([
  { project: "LOL", date: "2020.02-2021.06", work: "完成召唤兽" },
  { project: "LOL", date: "2020.02-2021.06", work: "完成召唤兽" },
]);
// 个人优势
const personalAdvantage = ref("");

onLoad(() => {
  // 获取个人优势
  uni.$on("advantage", (e) => {
    personalAdvantage.value = e;
  });
});

// 查询所有工作经历
getUserinfosUserinfoidWorkexperiences({
  userinfoid: store.state.accountInfo.userInfoId,
}).then((res) => {
  workExperiences.value = res.data.body;
});
// 查看、修改、删除工作经历
const alterWork = (index: number) => {
  let workId = workExperiences.value[index].workExperienceId;
  let deleteWork = ref("删除");
  uni.navigateTo({
    url:
      "/info/gongzuojingli/gongzuojingli?workId=" +
      workId +
      "&deleteWork=" +
      deleteWork.value,
  });
};

// 修改个人信息
const changeInfo = () => {
  uni.navigateTo({ url: "/info/gerenxinxi/gerenxinxi" });
};
// 添加个人优势
const addAdvantage = () => {
  uni.navigateTo({ url: "/info/gerenyoushi/gerenyoushi" });
};
// 添加工作经历
const addWork = () => {
  uni.navigateTo({ url: "/info/gongzuojingli/gongzuojingli" });
};
// 添加教育经历
const addEducate = () => {
  uni.navigateTo({ url: "/info/jiaoyujingli/jiaoyujingli" });
};
// 添加项目经历
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

      .advantage-box {
        width: 100%;
        max-height: 80rpx;
        overflow: hidden;
        font-size: 30rpx;
        line-height: 40rpx;
        text-overflow: ellipsis;
        white-space: nowrap;
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
