import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
    systemInfo: Object,
    menuButtonInfo?: Object
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: () => ({
        systemInfo: uni.getSystemInfoSync(),
        /* #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ */
        menuButtonInfo: uni.getMenuButtonBoundingClientRect(),
        /* #endif */

    }),
    modules: {

    }
})
