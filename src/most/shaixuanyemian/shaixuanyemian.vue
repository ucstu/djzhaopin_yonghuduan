<template>
  <NavigationBar title="筛选" />
  <view class="flex-col page">
    <scroll-view class="flex-col search" :scroll-y="true">
      <view class="flex-col expected-salary">
        <text class="salary">期望薪资</text>
        <view class="flex-row expects">
          <view
            v-for="(expectedSalary, i) in expectedSalaries"
            :key="i"
            class="justify-center items-center expect"
            :class="activeSalary === i ? 'active' : ''"
            @click="activeSalaryOf(i)"
            >{{ expectedSalary }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">工作经验</text>
        <view class="flex-row expects">
          <view
            v-for="(workExperience, i) in workExperiences"
            :key="i"
            class="justify-center items-center expect"
            :class="activeExpect.includes(i) ? 'active' : ''"
            @click="activeExpectOf(i)"
            >{{ workExperience }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">学历</text>
        <view class="flex-row expects">
          <view
            v-for="(education, i) in degreeRequires"
            :key="i"
            class="justify-center items-center expect"
            :class="activeRequire.includes(i) ? 'active' : ''"
            @click="activeRequireOf(i)"
            >{{ education }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">工作性质</text>
        <view class="flex-row expects">
          <view
            v-for="(jobNature, i) in jobNatures"
            :key="i"
            class="justify-center items-center expect"
            :class="activeNature.includes(i) ? 'active' : ''"
            @click="activeNatureOf(i)"
            >{{ jobNature }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">公司规模</text>
        <view class="flex-row expects">
          <view
            v-for="(companySize, i) in companySizes"
            :key="i"
            class="justify-center items-center expect"
            :class="activeSize.includes(i) ? 'active' : ''"
            @click="activeSizeOf(i)"
            >{{ companySize }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">融资阶段</text>
        <view class="flex-row expects">
          <view
            v-for="(financeStage, i) in financeStages"
            :key="i"
            class="justify-center items-center expect"
            :class="activeStage.includes(i) ? 'active' : ''"
            @click="activeStageOf(i)"
            >{{ financeStage }}</view
          >
        </view>
      </view>
      <view class="flex-col expected-salary">
        <text class="salary">行业领域</text>
        <view class="flex-row expects">
          <view
            v-for="(industrySector, i) in industrySectors"
            :key="i"
            class="justify-center items-center expect"
            :class="activeSector.includes(i) ? 'active' : ''"
            @click="activeSectorOf(i)"
          >
            <text>{{ industrySector }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="flex-row button">
      <button class="justify-center items-center reset" @click="replacement()">
        重置
      </button>
      <button class="justify-center items-center identify" @click="saveScreen">
        确认
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getFilterInformation } from "@/services/services";
import { FilterInformation } from "@/services/types";
import { ref } from "vue";

const expectedSalaries = ref<FilterInformation["expectedSalary"]>([]);
const workExperiences = ref<FilterInformation["workExperience"]>([]);
const degreeRequires = ref<FilterInformation["education"]>([]);
const jobNatures = ref<FilterInformation["natureWork"]>([]);
const companySizes = ref<FilterInformation["companySize"]>([]);
const financeStages = ref<FilterInformation["financingStage"]>([]);
const industrySectors = ref<FilterInformation["industryField"]>([]);

getFilterInformation().then((res) => {
  expectedSalaries.value.splice(
    0,
    expectedSalaries.value.length,
    ...res.data.body.expectedSalary
  );
  workExperiences.value.splice(
    0,
    workExperiences.value.length,
    ...res.data.body.workExperience
  );
  degreeRequires.value.splice(
    0,
    degreeRequires.value.length,
    ...res.data.body.education
  );
  jobNatures.value.splice(
    0,
    jobNatures.value.length,
    ...res.data.body.natureWork
  );
  companySizes.value.splice(
    0,
    companySizes.value.length,
    ...res.data.body.companySize
  );
  financeStages.value.splice(
    0,
    financeStages.value.length,
    ...res.data.body.financingStage
  );
  industrySectors.value.splice(
    0,
    industrySectors.value.length,
    ...res.data.body.industryField
  );
});

const activeSalary = ref(); // 期望薪资
const activeSalaryOf = (index: number) => {
  if (activeSalary.value === index) {
    activeSalary.value = 0;
  } else {
    activeSalary.value = index;
  }
};

const activeExpect = ref<number[]>([]); // 工作经验
const activeExpectOf = (index: number) => {
  let num = 0;
  if (activeExpect.value.includes(index)) {
    activeExpect.value.sort((a, b) => a - b);
    num = activeExpect.value.indexOf(index);
    activeExpect.value.splice(num, 1);
  } else {
    activeExpect.value.push(index);
  }
};

const activeRequire = ref<number[]>([]); // 学历要求
const activeRequireOf = (index: number) => {
  let num = 0;
  if (activeRequire.value.includes(index)) {
    activeRequire.value.sort((a, b) => a - b);
    num = activeRequire.value.indexOf(index);
    activeRequire.value.splice(num, 1);
  } else {
    activeRequire.value.push(index);
  }
};
const activeNature = ref<number[]>([]); // 工作性质
const activeNatureOf = (index: number) => {
  let num = 0;
  if (activeNature.value.includes(index)) {
    activeNature.value.sort((a, b) => a - b);
    num = activeNature.value.indexOf(index);
    activeNature.value.splice(num, 1);
  } else {
    activeNature.value.push(index);
  }
};

const activeSize = ref<number[]>([]); // 公司规模
const activeSizeOf = (index: number) => {
  let num = 0;
  if (activeSize.value.includes(index)) {
    activeSize.value.sort((a, b) => a - b);
    num = activeSize.value.indexOf(index);
    activeSize.value.splice(num, 1);
  } else {
    activeSize.value.push(index);
  }
};

const activeStage = ref<number[]>([]); // 融资阶段
const activeStageOf = (index: number) => {
  let num = 0;
  if (activeStage.value.includes(index)) {
    activeStage.value.sort((a, b) => a - b);
    num = activeStage.value.indexOf(index);
    activeStage.value.splice(num, 1);
  } else {
    activeStage.value.push(index);
  }
};

const activeSector = ref<number[]>([]); // 行业领域
const activeSectorOf = (index: number) => {
  let num = 0;
  if (activeSector.value.includes(index)) {
    activeSector.value.sort((a, b) => a - b);
    num = activeSector.value.indexOf(index);
    activeSector.value.splice(num, 1);
  } else {
    activeSector.value.push(index);
  }
};

// 重置
const replacement = () => {
  activeSalary.value = "";
  activeExpect.value.length = 0;
  activeRequire.value.length = 0;
  activeNature.value.length = 0;
  activeSize.value.length = 0;
  activeStage.value.length = 0;
  activeSector.value.length = 0;
};

const saveScreen = () => {
  uni.navigateBack({ delta: 1 });
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;

  .active {
    color: $app-color;
    background-color: rgb(216 245 231) !important;
    border: solid 0.5rpx rgb(84 188 163);
  }

  .search {
    width: 94%;

    // #ifndef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ
    height: 830rpx;

    // #endif
    height: 1400rpx;
    margin-left: 3%;
    overflow: hidden;

    .expected-salary {
      margin-top: 20rpx;

      .salary {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .expects {
        flex-wrap: wrap;

        .expect {
          width: 210rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }
  }

  .button {
    position: fixed;
    bottom: 20rpx;
    width: 100%;
    background-color: rgb(255 255 255);

    .reset {
      width: 30%;
      margin-left: 20rpx;
      font-size: 30rpx;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .identify {
      width: 60%;
      margin-right: 20rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      background-color: rgb(84 188 163);
      border-radius: 5rpx;
    }
  }
}
</style>
