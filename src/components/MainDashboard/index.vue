<template>
    <div class="flex-1 flex flex-col w-100 w-[calc(100vw-27rem-60px)] h-[calc(100vh-80px)] no-selection main-dash">
        <!-- <ChartContainer ref="resizeContainerRef" :height="resizeContainerHeight" :isFullScreen="isFullScreen"
            :isResizing="isResizing" /> -->
        <TradingVue class="ml-3" :style="{ display: isDisplay }" style="height:45vh" />
        <div class="my-2 cursor-ns-resize border-2 border-[#aaaaaa80]" @mousedown="startResizing" />
        <div :class="[
            'flex flex-col',
            isMinimize ? 'h-fit' : 'min-h-[4rem] flex-1 overflow-y-auto no-scrollbar'
        ]">
            <div class="bg-dapp-black-2 py-1 px-2 flex items-center justify-between gap-10 rounded-lg">
                <div class="flex items-center gap-8 lg:gap-10 2xl:gap-16">
                    <ScreenerPositionAnalysisToolbar @activeTool="setActiveTool" />
                    <div class="flex gap-3 lg:gap-4 2xl:gap-5">
                        <TimeButton indicator="green" active>1m</TimeButton>
                        <TimeButton indicator="red">5m</TimeButton>
                        <TimeButton indicator="green">15m</TimeButton>
                        <TimeButton indicator="none">30m</TimeButton>
                        <TimeButton indicator="red">1h</TimeButton>
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <button @click="toggleMinimize"
                        class="relative text-base font-normal bg-dapp-white-10 w-9 h-9 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
                        <YPMaximize v-if="isMinimize" />
                        <YPMinus v-else />
                    </button>
                    <button @click="toggleFullScreen"
                        class="relative text-base font-normal bg-dapp-white-10 w-9 h-9 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
                        <YPExitFullScreen v-if="isFullScreen" class="h-6 w-6" />
                        <YPFullScreen v-else />
                    </button>
                </div>
            </div>
            <div v-if="!isMinimize" class="h-full">
                <Analysis v-if="activeTool === 'analysis'" class="h-full" />
                <ComingSoon v-else class="h-full" />
            </div>
        </div>
    </div>
</template>

<script>
// import ChartContainer from './ChartContainer.vue';
import TradingVue from '../TradingVue.vue';
import ScreenerPositionAnalysisToolbar from './ScreenerPositionAnalysisToolbar.vue';
import Analysis from './Analysis.vue';
import ComingSoon from './ComingSoon.vue';
import TimeButton from './TimeButton.vue';
import YPMaximize from '../Icon/YPMaximize.vue';
import YPMinus from '../Icon/YPMinus.vue';
import YPExitFullScreen from '../Icon/YPExitFullScreen.vue';
import YPFullScreen from '../Icon/YPFullScreen.vue';

export default {
    components: {
        TradingVue,
        ScreenerPositionAnalysisToolbar,
        Analysis,
        ComingSoon,
        TimeButton,
        YPMaximize,
        YPMinus,
        YPExitFullScreen,
        YPFullScreen
    },
    data() {
        return {
            activeTool: 'analysis',
            isMinimize: false,
            isFullScreen: false,
            isResizing: false,
            resizeContainerRef: null,
            resizeContainerHeight: 370,
            isDisplay: 'block'
        };
    },
    methods: {
        startResizing(mouseDownEvent) {
            this.isResizing = true;
        },
        stopResizing() {
            this.isResizing = false;
        },
        toggleMinimize() {
            this.isMinimize = !this.isMinimize;
            if (this.isMinimize) {
                this.resizeContainerHeight = 160;
            } else {
                this.resizeContainerHeight = window.innerHeight - 160;
            }
        },
        toggleFullScreen() {
            this.isFullScreen = !this.isFullScreen;
            if (this.isFullScreen) {
                this.resizeContainerHeight = 0;
                this.isDisplay = 'none';
            } else {
                this.resizeContainerHeight = 0;
                this.isDisplay = 'block';
            }
        },
        resize(mouseMoveEvent) {
            if (this.isResizing && this.resizeContainerRef) {
                const rect = this.resizeContainerRef.getBoundingClientRect();
                this.resizeContainerHeight = mouseMoveEvent.clientY - rect.top;
                this.isFullScreen = false;
            }
        },
        setActiveTool(tool) {
            this.activeTool = tool;
        }
    },
    mounted() {
        window.addEventListener('mousemove', this.resize);
        window.addEventListener('mouseup', this.stopResizing);
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.resize);
        window.removeEventListener('mouseup', this.stopResizing);
    },

};
</script>