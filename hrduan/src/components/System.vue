<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div>
                    <setting-header />
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px" style="background-color: rgb(63, 70, 78)">
                    <el-scrollbar>
                        <el-menu :default-openeds="['1', '3']">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                    </el-icon>消息
                                </template>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon>
                                        <icon-menu />
                                    </el-icon>Navigator Two
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="2-1">Option 1</el-menu-item>
                                    <el-menu-item index="2-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="2-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="2-4">
                                    <template #title>Option 4</template>
                                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-sub-menu index="3">
                                <template #title>
                                    <el-icon>

                                    </el-icon>Navigator Three
                                </template>
                                <el-menu-item-group>
                                    <template #title>Group 1</template>
                                    <el-menu-item index="3-1">Option 1</el-menu-item>
                                    <el-menu-item index="3-2">Option 2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group 2">
                                    <el-menu-item index="3-3">Option 3</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="3-4">
                                    <template #title>Option 4</template>
                                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
  </div>
</template>

<script setup lang="ts">
import SettingHeader from './SettingHeader.vue'

</script>

<style scoped lang="scss">* {
    margin: 0;
    padding: 0;
}
</style >
