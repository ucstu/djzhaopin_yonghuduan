import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import VuexPersister from 'vuex-persister'
import { HRInformation, AccountInformation, CompanyInformation } from '../services/types'

const vuexPersister = new VuexPersister<State>({
    // ...your options
})

export interface State {
    token: String,
    accountInfo: AccountInformation,
    hrInfo: HRInformation,
    companyInfo: CompanyInformation
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: () => ({
        token: '',
        accountInfo: {} as AccountInformation,
        hrInfo: {} as HRInformation,
        companyInfo: {} as CompanyInformation
    }),
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setAccountInfo(state, accountInfo) {
            state.accountInfo = accountInfo
        },
        setHrInfo(state, hrInfo) {
            state.hrInfo = hrInfo
        },
        setCompanyInfo(state, companyInfo) {
            state.companyInfo = companyInfo
        },
    },
    modules: {

    },
    plugins: [vuexPersister.persist] // integrate the plugin
})
