<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col">
      <view class="group-1">
        <text class="chose">选择你的职位类型</text>
        <view class="flex-row items-center group-input" id="marTop">
          <image class="image" src="@/static/icons/search.png" />
          <input class="input" type="text" v-model="inputValue" placeholder="请输入职位名" />
        </view>
      </view>
      <scroll-view class="group-2" :scroll-y="true">
        <view v-if="inputValue != ''">
          <view v-for="(position, i) in filteredPositionNames" :key="i">{{ position }}</view>
        </view>
        <view v-else class="group-search">
          <view
            v-for="(field, i) in fields"
            @click="showDirections(i)"
            :key="i"
            class="items-center justify-between group-type"
          >
            <text>{{ field.fieldName }}</text>
            <image class="image" src="@/static/icons/arrow-right.png" />
          </view>
        </view>
      </scroll-view>
      <wybPopup
        v-if="inputValue === ''"
        :showCloseIcon="false"
        :marginTop="marTop"
        :width="600"
        :radius="10"
        mode="size-fixed"
        type="right"
        ref="popup"
      >
        <view class="flex-row">
          <scroll-view class="group-3" :scroll-y="true" @scroll="scroll">
            <view class="flex-col directions">
              <view
                v-for="(direction, i) in directions"
                @click="activeDirectionIndex = i"
                :class="activeDirectionIndex === i ? 'active' : ''"
                :key="i"
                class="direction"
              >{{ direction.directionName }}</view>
            </view>
          </scroll-view>
          <scroll-view class="group-4" :scroll-y="true" @scroll="scroll">
            <view class="flex-col positions">
              <view
                v-for="(position, i) in positions"
                @click="activePositionIndex = i"
                :class="activePositionIndex === i ? 'active' : ''"
                :key="i"
                class="position"
              >{{ position }}</view>
            </view>
          </scroll-view>
        </view>
      </wybPopup>
    </view>
  </view>
</template>


<script lang="ts" setup>
import { reactive, ref, computed, onMounted, nextTick } from 'vue';
import { getPositiontypes } from '@/services/services';
import { 职位类型 } from '@/services/types';
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue';
import wybPopup from '@/components/wyb-popup/wyb-popup.vue';

const popup = ref();

const activeFieldIndex = ref(0)
const activeDirectionIndex = ref(0)
const activePositionIndex = ref(0)

const fields = reactive<职位类型>([])
const directions = computed(() => fields[activeFieldIndex.value].directions)
const positions = computed(() => directions.value[activeDirectionIndex.value].positions)

getPositiontypes().then(res => {
  fields.push(...res.data)
})

const showDirections = (index: number) => {
  activeFieldIndex.value = index
  nextTick(() => {
    popup.value.show()
  })
}

const inputValue = ref('')

const positionNames = computed(() => {
  let result = []
  for (const searchType of fields) {
    for (const direction of searchType.directions) {
      for (const position of direction.positions) {
        result.push(position)
      }
    }
  }
  return result
})

const filteredPositionNames = computed(() => {
  let result = []
  for (const positionName of positionNames.value) {
    if (positionName.includes(inputValue.value)) {
      result.push(positionName)
    }
  }
  return result
})

const marTop = ref(0)

onMounted(() => {
  const query = uni.createSelectorQuery();
  query.select('#marTop').boundingClientRect(data => {
    marTop.value = data.top! + data.height!
  }).exec();
})

</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 80%;
  margin-left: 20rpx;
  .active {
    color: $app-color;
  }
  .group-1 {
    margin-left: 20rpx;
    .chose {
      font-weight: bold;
      font-size: 38rpx;
    }
    .group-input {
      margin-top: 20rpx;
      height: 80rpx;
      width: 670rpx;
      border-bottom: solid 2rpx rgb(230, 230, 230);
      .input {
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      .input::placeholder {
        color: rgb(153, 153, 153);
      }
    }
  }
  .group-2 {
    width: 670rpx;
    height: 1000rpx;
    margin-top: 20rpx;
    margin-left: 20rpx;
    overflow-y: hidden;
    .group-search {
      .group-type {
        height: 80rpx;
        border-bottom: solid 2rpx rgb(230, 230, 230);
      }
    }
    .group-positions {
      height: 80rpx;
      border-bottom: solid 2rpx rgb(230, 230, 230);
    }
  }
  .group-3 {
    width: 50%;
    height: 500px;
    background-color: rgb(234, 246, 246);
    overflow-y: hidden;
    .directions {
      margin-left: 20rpx;
      .direction {
        flex-wrap: wrap;
        margin-top: 20rpx;
      }
    }
  }
  .group-4 {
    width: 50%;
    height: 500px;
    overflow-y: hidden;
    .positions {
      margin-left: 20rpx;
      .position {
        flex-wrap: wrap;
        margin-top: 20rpx;
      }
    }
  }
  .image {
    width: 32rpx;
    height: 32rpx;
  }
}
</style>
