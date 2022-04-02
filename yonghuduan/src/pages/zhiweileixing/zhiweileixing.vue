<template>
  <view class="flex-col page">
    <NavigationBar />
    <view class="flex-col">
      <view class="group-1">
        <text class="chose">选择你的职位类型</text>
        <view class="flex-row items-center group-input" id="marTop">
          <image class="image" src="../../static/icons/search.png" />
          <input class="input" type="text" placeholder="请输入职位名" />
        </view>
      </view>
      <scroll-view class="group-2" :scroll-y="true">
        <view class="group-search">
          <view class=" group-type" v-for="(searchType, i) in searchTypes" :key="i" @click="groupShowSecond(i)">
            <view class="items-center justify-between">
              <text>{{ searchType.fieldName }}</text>
              <image class="image" src="../../static/icons/arrow-right.png" />
            </view>
          </view>
        </view>
      </scroll-view>
      <wybPopup ref="popup" type="right" :marginTop="marTop" :width="600" :radius="10" mode="size-fixed"
        :showCloseIcon="true">
        <view class="flex-row">
          <scroll-view class="group-3" :scroll-y="true" @scroll="scroll">
            <view class="flex-col directions">
              <view class="direction" v-for="(direction, i) in direcTions" :key="i" @click="groupShowThird(i)">
                {{ direction.directionName }}
              </view>
            </view>
          </scroll-view>
          <scroll-view class="group-4" :scroll-y="true" @scroll="scroll">
            <view class="flex-col positions">
              <view class="position" v-for="(position, i) in positions" :key="i">
                {{ position }}
              </view>
            </view>
          </scroll-view>
        </view>
      </wybPopup>
    </view>
  </view>
</template>


<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import NavigationBar from '../../components/NavigationBar/NavigationBar.vue';
import { getPositiontypes } from '../../services/services';
import wybPopup from '../../components/wyb-popup/wyb-popup.vue';

const popup = ref();

const searchTypes = reactive([])
const direcTions = reactive([])
const positions = reactive([])

const primaryClassificationIndex = ref(0)
const secondClassificationIndex = ref(0)

getPositiontypes().then(res => {
  // @ts-ignore
  searchTypes.push(...res.data)
  console.log(searchTypes);

});

const searchContent = ref('请输入职位名')

const imageOnClick = () => {
  // @ts-ignore
  uni.navigateBack()
}
const groupShowSecond = (index) => {
  primaryClassificationIndex.value = index
  direcTions.length = 0
  positions.length = 0
  direcTions.push(...searchTypes[index].directions)
  popup.value.show()
}
const groupShowThird = (index) => {
  secondClassificationIndex.value = index
  positions.length = 0
  positions.push(...direcTions[index].postitions)
  console.log(positions);

}

const marTop = ref(0)

onMounted(() => {
  const query = uni.createSelectorQuery();
  query.select('#marTop').boundingClientRect(data => {
    marTop.value = data.top + data.height
  }).exec();
})

</script>

<style lang="scss" scoped>
.page {
  width: 710rpx;
  height: 80%;
  margin-left: 20rpx;
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
  }
  .group-3 {
    width: 50%;
    height: 500px;
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
