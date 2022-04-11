<template>
    <div class="full">
        <div class="top">
            <el-tabs :tab-position="tabPosition" class="demo-tabs" v-model="state.currentView">
                <el-tab-pane label="设置密码" name="Password" :key="Password">
                    <Password />
                </el-tab-pane>
                <el-tab-pane label="隐私设置" name="Privary" :key="Privary">
                    <Privary />
                </el-tab-pane>
                <!-- <div :is="state.currentView" keep-alive></div> -->
            </el-tabs>

        </div>   </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Privary from './Privary.vue'
import Password from './Password.vue'
const currentView = ref('Other')
const tabPosition = ref('top')
// const handleClick = () => {
//     currentView.value = 'Password'
// }
const state = reactive({
    userID: '',
    // 默认组件，显示第一个组件
    currentView: 'Password',
})
</script>

<style scoped lang="scss">.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;

}

.full {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 50px 0;

    .el-tabs {
        width: 80%;
    }
}
</style >
