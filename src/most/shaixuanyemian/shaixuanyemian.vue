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

const expectedSalaries = ref<FilterInformation["expectedSalary"]>([]); // 期望薪资
const workExperiences = ref<FilterInformation["workExperience"]>([]); // 工作经验
const degreeRequires = ref<FilterInformation["education"]>([]); // 学历
const jobNatures = ref<FilterInformation["natureWork"]>([]); // 工作性质
const companySizes = ref<FilterInformation["companySize"]>([]); // 公司规模
const financeStages = ref<FilterInformation["financingStage"]>([]); // 融资阶段
const industrySectors = ref<FilterInformation["industryField"]>([]); // 行业领域

const filterValue = ref({
  salary: "", // 期望薪资
  experience: <number[]>[], // 工作经验
  degree: <number[]>[], // 学历
  nature: <number[]>[], // 工作性质
  size: <number[]>[], // 公司规模
  stage: <number[]>[], // 融资阶段
  sector: <string[]>[], // 行业领域
}); // 筛选值

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
    filterValue.value.salary = "";
  } else {
    activeSalary.value = index;
    filterValue.value.salary = expectedSalaries.value[index];
  }
};

const activeExpect = ref<number[]>([]); // 工作经验
const activeExpectOf = (index: number) => {
  if (activeExpect.value.includes(index)) {
    activeExpect.value.sort((a, b) => a - b);
    activeExpect.value.splice(activeExpect.value.indexOf(index), 1);
  } else {
    activeExpect.value.push(index);
  }
  filterValue.value.experience = activeExpect.value;
};

const activeRequire = ref<number[]>([]); // 学历要求
const activeRequireOf = (index: number) => {
  if (activeRequire.value.includes(index)) {
    activeRequire.value.sort((a, b) => a - b);
    activeRequire.value.splice(activeRequire.value.indexOf(index), 1);
  } else {
    activeRequire.value.push(index);
  }
  filterValue.value.degree = activeRequire.value;
};
const activeNature = ref<number[]>([]); // 工作性质
const activeNatureOf = (index: number) => {
  if (activeNature.value.includes(index)) {
    activeNature.value.sort((a, b) => a - b);
    activeNature.value.splice(activeNature.value.indexOf(index), 1);
  } else {
    activeNature.value.push(index);
  }
  filterValue.value.nature = activeNature.value;
};

const activeSize = ref<number[]>([]); // 公司规模
const activeSizeOf = (index: number) => {
  if (activeSize.value.includes(index)) {
    activeSize.value.sort((a, b) => a - b);
    activeSize.value.splice(activeSize.value.indexOf(index), 1);
  } else {
    activeSize.value.push(index);
  }
  filterValue.value.size = activeSize.value;
};

const activeStage = ref<number[]>([]); // 融资阶段
const activeStageOf = (index: number) => {
  if (activeStage.value.includes(index)) {
    activeStage.value.sort((a, b) => a - b);
    activeStage.value.splice(activeStage.value.indexOf(index), 1);
  } else {
    activeStage.value.push(index);
  }
  filterValue.value.stage = activeStage.value;
};

const activeSector = ref<number[]>([]); // 行业领域
const activeSectorOf = (index: number) => {
  if (activeSector.value.includes(index)) {
    activeSector.value.sort((a, b) => a - b);
    activeSector.value.splice(activeSector.value.indexOf(index), 1);
    filterValue.value.sector.splice(
      filterValue.value.sector.indexOf(industrySectors.value[index]),
      1
    );
  } else {
    activeSector.value.push(index);
    filterValue.value.sector.push(industrySectors.value[index]);
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
  filterValue.value.experience = filterValue.value.experience.map(
    (item) => item + 1
  );
  filterValue.value.degree = filterValue.value.degree.map((item) => item + 1);
  filterValue.value.nature = filterValue.value.nature.map((item) => item + 1);
  filterValue.value.size = filterValue.value.size.map((item) => item + 1);
  filterValue.value.stage = filterValue.value.stage.map((item) => item + 1);
  uni.$emit("filterValue", filterValue.value); //首页筛选值
  uni.$emit("filter", filterValue.value); //搜索页筛选值
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
