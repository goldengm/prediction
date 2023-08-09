<template>
    <button
        class="h-10 w-10 rounded-lg flex justify-center items-center text-20 hover:bg-gradient-to-r from-[#4845FF] via-[#A63EBA] to-[#E6398C]"
        style="font-size: 18px;" :class="{
            'bg-gradient-to-r from-[#4845FF] via-[#A63EBA] to-[#E6398C]': active,
            'bg-[#ffffff10]': !active
        }" @click="$emit('click')">
        <Icon :icon="icon" color="white" />
        <slot></slot>
    </button>
</template>

<script>
import { Icon } from "@iconify/vue2";
import SvgIcon from "../others/SvgIcon.vue"
export default {
    name: 'RoundedButton',
    props: {
        icon: String,
        active: {
            type: Boolean,
            default: false
        },
        path: String
    },
    components: {
        Icon, SvgIcon
    }
};
</script>

<style scoped>
/* Add your styling here */
</style>
