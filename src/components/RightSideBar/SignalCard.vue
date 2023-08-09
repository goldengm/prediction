<template>
    <div :class="[
        'pt-2 lg:py-3 px-2 md:px-3 2xl:px-4 rounded-lg flex items-center gap-4 justify-between relative',
        mapper[variant].gradient
    ]">
        <span class="h-16 w-16 rounded-bl-full absolute right-0 top-0 z-10 bg-dapp-white-10"></span>
        <span class="text-xl absolute -right-1 -top-1 -translate-1/2">😥</span>
        <div class="flex items-center gap-4">
            <div class="flex justify-center w-16">
                <slot></slot>
            </div>
            <div>
                <span :class="['text-[8px] px-2 py-0.5 rounded-full text-white', mapper[variant].bg]">
                    {{ tag }}
                </span>
                <h4 class="text-[10px] 2xl:text-xs text-white font-normal leading-[1.2] mt-0.5 whitespace-nowrap">
                    {{ title }}
                </h4>
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-0.5 mt-0.5 whitespace-nowrap">
                        <Icon :icon="chainLabel === 'Binance Coin' ? 'mingcute:binance-coin-bnb-fill' : ''"
                            :color="chainLabel === 'Binance Coin' ? '#FBB03B' : ''" :fontSize="14" />
                        <span class="text-[#b3b3b3] text-[9px] xl:text-[10px]">{{ chainLabel }}</span>
                    </div>
                    <div class="flex items-center gap-0.5 mt-0.5 whitespace-nowrap">
                        <SvgIcon h="7" w="12" :fill="isRise ? '#009245' : '#FF0000'" viewBox="0 0 12 7" :path="isRise
                            ? 'M10.96 0.470002C11.425 0.431001 11.464 0.474 11.405 0.946C11.347 1.411 11.295 1.876 11.236 2.341C11.224 2.434 11.247 2.558 11.13 2.592C11.036 2.619 10.979 2.523 10.916 2.465C10.551 2.132 10.549 2.13 10.237 2.503C9.52597 3.356 8.81595 4.212 8.10697 5.067C7.67997 5.583 7.47299 5.596 6.98697 5.151C6.30399 4.526 5.60794 3.914 4.93595 3.278C4.728 3.082 4.59 3.09 4.38895 3.272C3.51596 4.061 2.63394 4.839 1.75498 5.621C1.60794 5.751 1.46396 5.885 1.30899 6.004C1.06497 6.191 0.777987 6.173 0.604953 5.971C0.433993 5.772 0.44498 5.518 0.675998 5.301C1.13596 4.869 1.611 4.451 2.08298 4.032C2.78299 3.409 3.48496 2.79 4.18796 2.169C4.56894 1.832 4.78 1.833 5.14896 2.168C5.84195 2.799 6.543 3.421 7.22495 4.063C7.43198 4.259 7.54898 4.23 7.71598 4.025C8.35495 3.239 9.00296 2.46 9.65799 1.687C9.81998 1.496 9.81198 1.362 9.63596 1.188C9.49497 1.047 9.19498 0.931001 9.26297 0.742002C9.33799 0.53 9.65 0.630002 9.85697 0.597001C10.223 0.540002 10.592 0.511003 10.96 0.470002Z'
                            : ''" />
                        <span :class="[isRise ? 'text-[#009245]' : 'text-[#FF0000]', 'text-xs']">
                            {{ percent }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div :class="[
            'h-10 w-10 min-w-[40px] border-2 rounded-full flex items-center justify-center font-normal text-white text-base',
            mapper[variant].bgScore,
            mapper[variant].border
        ]">
            {{ score }}
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import SvgIcon from "../others/SvgIcon.vue";

export default {
    name: 'SingleCard',
    components: {
        Icon,
        SvgIcon,
    },
    props: {
        chainLabel: String,
        tag: String,
        title: String,
        isRise: Boolean,
        percent: Number,
        score: Number,
        variant: {
            type: String,
            validator: (value) => ["green", "red", "white"].includes(value),
        },
    },
    created: function () {
    },
    computed: {
        mapper() {

            return {
                green: {
                    bg: "bg-dapp-green",
                    border: "border-dapp-green",
                    gradient: "dapp-bg-gradient-green",
                    bgScore: "bg-[#006837]",
                },
                red: {
                    bg: "bg-dapp-red",
                    border: "border-dapp-red",
                    gradient: "dapp-bg-gradient-red",
                    bgScore: "bg-[#C10000]",
                },
                white: {
                    bg: "bg-[#CCCCCC]",
                    border: "border-[#CCCCCC]",
                    gradient: "dapp-bg-gradient-white",
                    bgScore: "bg-[#808080]",
                },
            };
        },
    },
};

</script>

<style>
/* Add your custom styles here if needed */
</style>