<template>
    <div class="top">
        <div class="left">
            <span>We</span>
            <span class="red">❤</span>
            <span>You</span>
        </div>
        <div class="right">
            <img src="../assets/pub.png" alt="">
            <img :src="avatar" alt="网络异常">
            <span>{{ name }}</span>
        </div>   </div>
</template>

<script setup lang="ts">
import { key } from '../stores'
import { useStore } from 'vuex'
import { onMounted } from 'vue';
const store = useStore(key)
const { name, avatar } = store.state.hrInfo
onMounted(() => {
    console.log(store.state);

})
</script>

<style scoped lang="scss">.top {
    display: flex;
    justify-content: space-around;
    background-color: rgb(50, 55, 62);
    height: 42.5px;
    align-items: center;
    color: rgb(255, 255, 255);

    .left {

        .red {
            color: red;
            margin: 0px 10px;
        }
    }

    .right {
        display: flex;
        align-items: center;

        :first-child {
            width: 20px;
            height: 20px;

        }

        :nth-child(2) {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: auto 10px auto 20px;
        }

        span {
            margin-left: 10px;
        }
    }
}
</style >
