<template>
    <div class="page">
        <div class="image-wrapper">
            <img src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/62345e1d5a7e3f0310ddcb3c/623446ec62a7d9001102351f/16484562558205956397.png"
                class="image" />
        </div>
        <div class="alin">
            <div class="center">
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
                    class="demo-ruleForm">
                    <el-form-item label="用户名" prop="user">
                        <el-input v-model="ruleForm.phoneNumber" type="text" autocomplete="off" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input v-model="ruleForm.verificationCode" type="password" autocomplete="off"
                            placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <router-link to="/enroll">还没有账号？点击注册</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="footer"></div>   </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus'
import { putAccounts } from '../../services/services';
import router from '../../router';
import { useStore } from 'vuex';
import { key } from '../../stores';
const ruleFormRef = ref<FormInstance>()
const store = useStore(key);
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
        console.log(1111111);
    } else {
        if (ruleForm.phoneNumber !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    phoneNumber: '',
    verificationCode: '',

})

const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    user: [{ validator: validatePass2, trigger: 'blur' }],
})
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            putAccounts(ruleForm).then(res => {
                store.commit('setToken', res.data.token)
                store.commit('setAccountInfo', res.data.accountInfo)
                router.replace('/home')
            })
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>
<style scoped lang="scss">a {
    text-decoration: none;
    color: rgb(0, 179, 139);
}

.page {
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .image-wrapper {
        padding: 60px 70px 61px;
        background-color: rgb(0, 179, 139);
        display: flex;
        height: 20%;

        .image {
            border-radius: 5px;
            width: 6vw;
            height: 80px;
            margin-left: 20vw;
        }
    }

    .alin {
        display: flex;
        // margin: auto;
        justify-content: center;
        // z-index: 1;
        margin-top: -10vh;

        .center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: rgb(255, 255, 255);
            border: solid 1px rgb(155, 160, 158, 0.5);
            border-radius: 5px;
            height: 240px;
            width: 30vw;

            .el-form {
                margin-right: 18%;
            }
        }
    }

    .footer {
        height: 500px;
    }
}
</style>
