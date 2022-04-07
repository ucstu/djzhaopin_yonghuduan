<template>
    <div class="tag">
        <!-- <el-input
            v-if="inputVisible"
            ref="InputRef"
            v-model="inputValue"
            class="ml-1 w-20"
            size="small"
            @keyup.enter="handleInputConfirm"
            @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">+ New Tag</el-button>-->
        <div v-for="(item, index) in dynamicTags" :key="item.label">
            <el-check-tag :checked="item.checked" @click="onChange(index)" ref="checkTagRef">{{ item.label }}
            </el-check-tag>
        </div>
        <div v-for="item in dynamicTags">{{ item }}</div>
        <div v-for="tag, index in dynamicTags" :key="tag.id">
            <el-tag v-if="tag.checked" class="mx-1" closable :disable-transitions="false" effect="plain" type="info"
                @close="handleClose(index)">{{ tag.label }}</el-tag>
        </div>   </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import type { ElCheckTag } from 'element-plus'
const dynamicTags = ref([{ id: 1, label: 'Tag 1', checked: false }, { id: 2, label: 'Tag 2', checked: false }, { id: 3, label: 'Tag 3', checked: false }])
const buttomTags = ref([])
const checkTagRef = ref<InstanceType<typeof ElCheckTag>>()
const onChange = (index: number) => {
    let tag = false
    let idx
    console.log(dynamicTags.value);
    dynamicTags.value.every((item, key) => {

        if (item.checked) {
            tag = true
            idx = key
        }
        return true
    })
    console.log(tag);
    if (tag) {
        if (idx === index) {
            dynamicTags.value[index].checked = false
        } else {
            ElMessage.warning('对不起，不能选择多个标签')
        }
    } else {
        console.log(1111);

        dynamicTags.value[index].checked = true
    }
}
// const selectedList = ref(dynamicTags.value.filter((v) => v.checked));
// const onChange = (v: any) => {
//     v.checked = !v.checked;
//     console.log(v.checked);
//     const myset = new Set(selectedList.value.map((a) => a.id));
//     if (myset.has(v.id)) {
//         selectedList.value = selectedList.value.filter((_a) => _a.id != v.id);
//     } else {
//         selectedList.value = selectedList.value.concat([v]);
//     }
//     console.log(v);
// };
const handleClose = (index: number) => {
    dynamicTags.value[index].checked = !dynamicTags.value[index].checked
}
// const showTag = (item: any) => {
//     console.log(buttomTags.value.length);
//     if (buttomTags.value.length >= 1) {
//         buttomTags.value = [];
//     }
//     if (item.checked) {
//         buttomTags.value.push(item.label as never);
//     } else {
//         buttomTags.value.splice(buttomTags.value.indexOf(item.label as never), 1)
//     }
// }
// const showInput = () => {
//     inputVisible.value = true
//     nextTick(() => {
//         InputRef.value!.input!.focus()
//     })
// }

// const handleInputConfirm = () => {
//     if (inputValue.value) {
//         console.log(inputValue);

//         dynamicTags.value.push(inputValue.value)
//     }
//     inputVisible.value = false
//     inputValue.value = ''
// }
</script>
<style scoped lang="scss">.tag {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    position: relative;
    width: 80%;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
}
</style>
