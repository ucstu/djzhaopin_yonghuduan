import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import VuexPersister from 'vuex-persister'

export interface State {
    systemInfo: Object,
    menuButtonInfo?: Object
}

export const key: InjectionKey<Store<State>> = Symbol()

const vuexPersister = new VuexPersister<State>({
    storage: {
        getItem: (key) => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: (key) => uni.removeStorageSync(key),
        length: uni.getStorageInfoSync().keys.length,
        clear: () => uni.clearStorageSync(),
        key: (key: number) => {
            const keys = uni.getStorageInfoSync().keys
            return key <= keys.length ? keys[key - 1] : null
        }
    }
})

export const store = createStore<State>({
    state: () => ({
        systemInfo: {},
        menuButtonInfo: {},
    }),
    mutations: {
        setSystemInfo(state, systemInfo) {
            state.systemInfo = systemInfo
        },
        setMenuButtonInfo(state, menuButtonInfo) {
            state.menuButtonInfo = menuButtonInfo
        }
    },
    modules: {

    },
    plugins: [vuexPersister.persist]
})
