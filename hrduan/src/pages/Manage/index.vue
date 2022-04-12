<template>
    <div>
        <SystemHeader />
    </div>
    <div class="beneath">
        <div class="main">
            <div class="content">
                <div class="solution">
                    <span v-if="greet = (ho < 9 ? '早上好' :
                        ho < 12 ? '上午好' :
                            ho < 15 ? '中午好' :
                                ho < 19 ? '下午好' :
                                    '晚上好'
                    )">{{ greet }}，{{ store.state.hrInfo.name }}</span>
                    <span>时间和注意力是你最宝贵的财富！~</span>
                </div>
                <div class="label">
                    <div>
                        <span>1</span>
                        <span>新简历</span>
                    </div>
                    <div>
                        <span>2</span>
                        <span>待沟通</span>
                    </div>
                    <div>
                        <span>3</span>
                        <span> 今日已面试</span>
                    </div>
                    <div>
                        <span>4</span>
                        <span>在招职位试</span>
                    </div>
                </div>
                <div class="bottom">
                    <div class="notice">
                        <div class="whole">
                            <span>全部({{ }})</span>
                            <el-divider direction="vertical" />
                            <span>面试({{ }})</span>
                        </div>
                        <div class="add">
                            <el-icon>
                                <Plus />
                            </el-icon>
                            <span>添加备注</span>
                        </div>
                    </div>
                    <div class="time-line">
                        <el-timeline>
                            <el-timeline-item timestamp="2018/4/12" placement="top">
                                <el-card class="el-card-define">
                                    <div class="card">
                                        <div class="left">
                                            <img src="../../assets/message.png">
                                            <div>
                                                <h4>面试提醒</h4>
                                                <div class="hint">
                                                    <p>候选人:{{ }}</p>
                                                    <el-divider direction="vertical" />
                                                    <p>应聘职位：{{ }}</p>
                                                </div>
                                                <p>面试时间：{{ }}</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <el-button type="primary">查看简历</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/3" placement="top">
                                <el-card>
                                    <div class="card">
                                        <div class="left">
                                            <img src="../../assets/message.png">
                                            <div>
                                                <h4>面试提醒</h4>
                                                <div class="hint">
                                                    <p>候选人:{{ }}</p>
                                                    <el-divider direction="vertical" />
                                                    <p>应聘职位：{{ }}</p>
                                                </div>
                                                <p>面试时间：{{ }}</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <el-button type="primary">查看简历</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top">
                                <el-card>
                                    <div class="card">
                                        <div class="left">
                                            <img src="../../assets/message.png">
                                            <div>
                                                <h4>面试提醒</h4>
                                                <div class="hint">
                                                    <p>候选人:{{ }}</p>
                                                    <el-divider direction="vertical" />
                                                    <p>应聘职位：{{ }}</p>
                                                </div>
                                                <p>面试时间：{{ }}</p>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <el-button type="primary">查看简历</el-button>
                                        </div>
                                    </div>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SystemHeader from '@/components/SystemHeadeer.vue';
import { key } from '@/stores';
import { useStore } from 'vuex';
import { Plus } from '@element-plus/icons-vue';
import { MoreFilled } from '@element-plus/icons-vue'
const store = useStore(key);
const ho = new Date().getHours()
const greet = ""
</script>

<style scoped lang="scss">
.beneath {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    .main {
        margin-top: 25px;
        border: solid 1px #ccc;
        border-radius: 10px;
        height: 1100px;
        width: 95%;
        display: flex;
        justify-content: center;

        .content {
            width: 90%;
            margin-top: 45px;

            .solution {
                display: flex;
                flex-direction: column;
                height: 45px;
                width: 100%;
                justify-content: space-between;

                :nth-child(2) {
                    font-size: 16px;
                    color: #ccc;
                    letter-spacing: 2px;
                }
            }

            .label {
                display: flex;
                justify-content: space-around;
                border: solid 2px #F5F6F7;
                background-color: rgb(250, 250, 250);
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100px;
                margin-top: 30px;

                div {
                    width: 100%;
                    height: 100%;
                    font-size: 18px;
                    font-weight: 400;
                    letter-spacing: 2px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    span {
                        text-align: center;
                    }
                }
            }

            .bottom {
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: auto;

                .notice {
                    height: 50px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: solid 1px #F3F4F5;
                    background-color: rgb(250, 250, 250);

                    .whole {
                        height: 21px;
                        margin-left: 30px;

                        :first-child {
                            color: rgb(0, 179, 139);
                        }
                    }

                    .add {

                        display: flex;
                        height: 21px;
                        align-items: center;
                        margin-right: 30px;
                    }
                }

                .time-line {
                    margin-top: 40px;
                    height: auto;

                    .card {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .left {
                            display: flex;
                            align-items: center;

                            img {
                                width: 40px;
                                height: 40px;
                            }

                            .hint {
                                display: flex;
                                align-items: center;
                            }
                        }


                    }
                }
            }
        }
    }
}
</style >
