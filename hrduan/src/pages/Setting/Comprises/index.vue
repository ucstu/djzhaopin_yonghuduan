<template>
    <div class="put-prise">
        <div class="prise">
            <div class="add">
                <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="ml-1 w-20" size="small"
                    @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
                <el-button type="primary" :icon="Plus" circle @click="addPrise" />
            </div>
            <div class="line"></div>
            <div class="prise-content">
                <el-scrollbar height="559px">
                    <div class="prise-item" v-for="(item, index) in prise">
                        <div class="prise-info">
                            <span>{{ item }}</span>
                            <el-divider border-style="dashed" />
                        </div>
                        <el-button type="danger" @click="deletePrise(index)">删除</el-button>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { ref, reactive, nextTick } from 'vue';
import { ElInput, ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { key } from '@/stores'
const store = useStore(key);
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()
const inputValue = ref('')
const prise = reactive(['在职位open中，请投简历', '感兴趣请随时投递', '我在急招，请随时投递', '现在投递，我们还在求人'])
const addPrise = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value!.input!.focus()
    })
}
const handleInputConfirm = () => {
    if (inputValue.value && prise.length < 16) {
        prise.unshift(inputValue.value)
        store.commit('setPrise', prise)
    } else if (prise.length >= 16) {
        ElMessage.error('超出可设置常用语的最大值')
    }
    inputVisible.value = false
    inputValue.value = ''
}
const deletePrise = (index: number) => {
    prise.splice(index, 1)
}

</script>

<style lang="scss" scoped>
.put-prise {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .prise {
        border: solid 1px #ccc;
        width: 80%;
        height: 600px;


        .add {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: rgb(252, 252, 252);

            .el-button {
                margin-right: 20px;
            }

            // transform: rotate(9deg);
            // -webkit-transform: rotate(180deg);
        }

        .line {
            width: 100%;
            height: 1px;
            background-color: #ccc;
        }

        .prise-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            height: 559px;
            overflow-y: scroll;
            overflow: hidden;

            .el-scrollbar {
                width: 100%;

                .prise-item {
                    width: 95%;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;

                    .prise-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
