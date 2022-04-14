<template>
    <wybPopup ref="popup" type="left" height="400" width="500" radius="6" :showCloseIcon="true">
        <view class="popup-content">我是里面的内容</view>
    </wybPopup>
</template>

<script>
import wybPopup from '@/components/wyb-popup/wyb-popup.vue';
export default {
    components: {
        wybPopup
    }
}
</script>
