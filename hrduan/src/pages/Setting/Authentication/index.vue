<template>
    <div class="this">
        <div class="person">
            招聘者身份认定
            <div class="line"></div>
            <div class="information">
                <img :src=imageUrl alt="加载失败">
                <div class="comfirm" v-if="companyInfo.legalRepresentative">
                    <div class="comfirm-item">
                        <span>{{ companyInfo.fullName }}</span>
                        <div class="infos-bottom">
                            <span>{{ companyInfo.comprehension }}</span>
                            <i>/</i>
                            <span>{{ scaleMap[Number(companyInfo.scale)] }}</span>
                            <i>/</i>
                            <span>{{ financingStageMap[Number(companyInfo.financingStage)] }}</span>
                        </div>
                        <el-button type="primary" :icon="Check" circle />
                    </div>
                </div>
                <div class="comfirm" v-else>
                    <div class="comfirm-item">
                        <span>企业认证：完成实名认证，享受更多服务</span>
                        <el-button type="primary" round @click="toExecution" class="bottom-button">{{ "完成认证" }}
                        </el-button>
                    </div>
                </div>
            </div>
        </div>   </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '@/stores';
import router from '../../../router'
import { Check } from '@element-plus/icons-vue'
import { computed } from 'vue';
const store = useStore(key);
const imageUrl = store.state.hrInfo.avatar;
const companyInfo = computed(() => store.state.companyInfo)
const financingStageMap = ['', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资']
const scaleMap = ['', '少于15人', '15-50人', '50-150人', '150-500人', '500-2000人', '2000人以上']
console.log(store.state.hrInfo.hrId);

const toExecution = () => {
    router.push('/setting/Execution');
}
</script>

<style scoped lang="scss">.this {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.person {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #ccc;
    height: 200px;
    width: 60vw;
    margin-top: 100px;

    .line {
        height: 1px;
        width: 90%;
        background-color: rgb(0, 0, 0, 0.2);
    }

    .information {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        width: 100%;
        height: 100%;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .comfirm {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            width: 80%;

            span {
                font-size: 12px;
                color: rgb(0, 0, 0);
            }

            .comfirm-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 30px;
                margin-top: 10px;

                .bottom-button {
                    width: 80px;
                    height: 25px;
                    border-radius: 5px;
                    font-size: 10px;
                }
            }
        }
    }

}
</style >
