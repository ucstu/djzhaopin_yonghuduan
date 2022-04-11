<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div>
                    <system-headeer />
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px" style="background-color: rgb(240, 250, 250)">
                    <el-scrollbar>
                        <el-menu :default-openeds="['3']" active-text-color="#999" text-color="#000"
                            background-color="rgb(240, 250, 250)">
                            <el-menu-item index="1">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>消息</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>职位管理</span>
                            </el-menu-item>
                            <el-sub-menu index="3">
                                <template #title>
                                    <el-icon>
                                    </el-icon>简历管理
                                </template>
                                <el-menu-item-group class="item-text">
                                    <template #title></template>
                                    <el-menu-item index="3-1">收到的简历</el-menu-item>
                                    <el-menu-item index="3-2">下载的简历</el-menu-item>
                                </el-menu-item-group>
                            </el-sub-menu>
                            <el-menu-item index="4">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>面试管理</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>人才库</span>
                            </el-menu-item>
                            <el-menu-item index="6">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>数据中心</span>
                            </el-menu-item>
                            <el-menu-item>
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>个人中心</span>
                            </el-menu-item>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import SystemHeadeer from './SystemHeadeer.vue';

</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.el-header {

    height: 42.5px;
}

.common-layout {
    height: 100%;
}

.el-container {
    height: 100%;

    .el.aside {
        height: 100%;
    }
}

.el-menu {
    ::v-deep .item-text {
        padding: 0;
        font-size: 10px;
        color: greenyellow;
    }

}
</style >
