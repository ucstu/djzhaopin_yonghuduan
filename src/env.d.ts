/// <reference types="vite/client" />

import { Uni, Plus } from '@dcloudio/types'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare var uni: Uni
declare var plus: Plus
