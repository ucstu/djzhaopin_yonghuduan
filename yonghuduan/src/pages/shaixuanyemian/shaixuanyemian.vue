<template>
  <view class="flex-col page">
    <NavigationBar class="group" title="筛选" />
    <scroll-view class="flex-col search" :scroll-y="true">
      <view class="flex-col expected_salary">
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
      <view class="flex-col work_experience">
        <text class="experience">工作经验</text>
        <view class="flex-row works">
          <view
            v-for="(workExperience, i) in workExperiences"
            :key="i"
            class="justify-center items-center work"
            :class="activeExpect.includes(i) ? 'active' : ''"
            @click="activeExpectOf(i)"
            >{{ workExperience }}</view
          >
        </view>
      </view>
      <view class="flex-col degree_require">
        <text class="degree">学历</text>
        <view class="flex-row requires">
          <view
            v-for="(education, i) in degreeRequires"
            :key="i"
            class="justify-center items-center require"
            :class="activeRequire.includes(i) ? 'active' : ''"
            @click="activeRequireOf(i)"
            >{{ education }}</view
          >
        </view>
      </view>
      <view class="flex-col job_nature">
        <text class="job">工作性质</text>
        <view class="flex-row natures">
          <view
            v-for="(jobNature, i) in jobNatures"
            :key="i"
            class="justify-center items-center nature"
            :class="activeNature.includes(i) ? 'active' : ''"
            @click="activeNatureOf(i)"
            >{{ jobNature }}</view
          >
        </view>
      </view>
      <view class="flex-col company_size">
        <text class="company">公司规模</text>
        <view class="flex-row sizes">
          <view
            v-for="(companySize, i) in companySizes"
            :key="i"
            class="justify-center items-center size"
            :class="activeSize.includes(i) ? 'active' : ''"
            @click="activeSizeOf(i)"
            >{{ companySize }}</view
          >
        </view>
      </view>
      <view class="flex-col finance_stage">
        <text class="finance">融资阶段</text>
        <view class="flex-row stages">
          <view
            v-for="(financeStage, i) in financeStages"
            :key="i"
            class="justify-center items-center stage"
            :class="activeStage.includes(i) ? 'active' : ''"
            @click="activeStageOf(i)"
            >{{ financeStage }}</view
          >
        </view>
      </view>
      <view class="flex-col industry_sector">
        <text class="industry">行业领域</text>
        <view class="flex-row sectors">
          <view
            v-for="(industrySector, i) in industrySectors"
            :key="i"
            class="justify-center items-center sector"
            :class="activeSector.includes(i) ? 'active' : ''"
            @click="activeSectorOf(i)"
          >
            <text>{{ industrySector }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="flex-row button">
      <view
        class="flex-col items-center justify-center reset"
        @click="replacement()"
      >
        <text>重置</text>
      </view>
      <view class="flex-col items-center justify-center identify">
        <text>确定</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import NavigationBar from "@/components/NavigationBar/NavigationBar.vue";
import { getFilterinfos } from "@/services/services";
import { ref } from "vue";

const expectedSalaries = ref([]);
const workExperiences = ref([]);
const degreeRequires = ref([]);
const jobNatures = ref([]);
const companySizes = ref([]);
const financeStages = ref([]);
const industrySectors = ref([]);

getFilterinfos().then((res) => {
  expectedSalaries.value.splice(
    0,
    expectedSalaries.value.length,
    ...res.data.expectedSalary
  );
  workExperiences.value.splice(
    0,
    workExperiences.value.length,
    ...res.data.workExperience
  );
  degreeRequires.value.splice(
    0,
    degreeRequires.value.length,
    ...res.data.education
  );
  jobNatures.value.splice(0, jobNatures.value.length, ...res.data.NatureWork);
  companySizes.value.splice(
    0,
    companySizes.value.length,
    ...res.data.companySize
  );
  financeStages.value.splice(
    0,
    financeStages.value.length,
    ...res.data.financingStage
  );
  industrySectors.value.splice(
    0,
    industrySectors.value.length,
    ...res.data.IndustryField
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

const replacement = () => {
  activeSalary.value = "";
  activeExpect.value.length = 0;
  activeRequire.value.length = 0;
  activeNature.value.length = 0;
  activeSize.value.length = 0;
  activeStage.value.length = 0;
  activeSector.value.length = 0;
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  background-color: rgb(255 255 255);

  .group {
    position: relative;
  }

  .active {
    color: $app-color;
    background-color: rgb(216 245 231) !important;
    border: solid 0.5rpx rgb(84 188 163);
  }

  .search {
    width: 720rpx;
    height: 1120rpx;
    margin-top: 20rpx;
    margin-left: 15rpx;
    overflow: hidden;

    .expected_salary {
      margin-top: 20rpx;

      .salary {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .expects {
        flex-wrap: wrap;

        .expect {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .work_experience {
      margin-top: 20rpx;

      .experience {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .works {
        flex-wrap: wrap;

        .work {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .degree_require {
      margin-top: 20rpx;

      .degree {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .requires {
        flex-wrap: wrap;

        .require {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .job_nature {
      margin-top: 20rpx;

      .job {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .natures {
        flex-wrap: wrap;

        .nature {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .company_size {
      margin-top: 20rpx;

      .company {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .sizes {
        flex-wrap: wrap;

        .size {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .finance_stage {
      margin-top: 20rpx;

      .finance {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .stages {
        flex-wrap: wrap;

        .stage {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          background-color: rgb(229 229 229);
          border-radius: 5rpx;
        }
      }
    }

    .industry_sector {
      margin-top: 20rpx;

      .industry {
        margin-left: 25rpx;
        font-size: 35rpx;
      }

      .sectors {
        flex-wrap: wrap;

        .sector {
          width: 220rpx;
          height: 70rpx;
          margin: 10rpx;
          font-size: 30rpx;
          white-space: nowrap;
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
      width: 230rpx;
      height: 60rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      background-color: rgb(229 229 229);
      border-radius: 5rpx;
    }

    .identify {
      width: 460rpx;
      margin-right: 20rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
      background-color: rgb(84 188 163);
      border-radius: 5rpx;
    }
  }
}
</style>
