<template>
    <div>
        <trading-vue :data="this.$data"></trading-vue>
        sdf
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import TradingVue from 'trading-vue-js';

export default {
    name: "ChartContainer",
    props: {},
    components: {
        TradingVue
    },
    data() {
        return {
            ohlcv: [
                [1551128400000, 33, 37.1, 14, 14, 196],
                [1551132000000, 13.7, 30, 6.6, 30, 206],
                [1551135600000, 29.9, 33, 21.3, 21.8, 74],
                [1551139200000, 21.7, 25.9, 18, 24, 140],
                [1551142800000, 24.1, 24.1, 24, 24.1, 29],
            ]
        }
    },
    setup(props, { emit }) {
        const chartContainer = ref(null);
        const chart = ref(null);

        const pauseEvent = (e) => {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        };
    }
};
</script>

<style>
/* Add your custom styles here */
</style>