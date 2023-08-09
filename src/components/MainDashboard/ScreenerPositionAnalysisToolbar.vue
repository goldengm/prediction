<template>
    <div class="flex w-fit gap-1">
        <ScreenerButton @click="setActiveTool('positions')" @setActiveTool="setActiveTool" clickedBtn='positions'
            :isActive="clickedBtn === 'positions'">
            Positions
        </ScreenerButton>
        <ScreenerButton @click="setActiveTool('screeners')" @setActiveTool="setActiveTool" clickedBtn='screeners'
            :isActive="clickedBtn === 'screeners'">
            Screeners
        </ScreenerButton>
        <ScreenerButton @click="setActiveTool('analysis')" @setActiveTool="setActiveTool" clickedBtn='analysis'
            :isActive="clickedBtn === 'analysis'">
            Analysis
        </ScreenerButton>
    </div>
</template>

<script>
import ScreenerButton from './ScreenerButton.vue';
export default {
    data() {
        return {
            clickedBtn: String
        }
    },
    components: {
        ScreenerButton
    },
    created() {
        this.clickedBtn = 'analysis'
    },
    methods: {
        setActiveTool(value) {
            this.$emit("activeTool", value);
            this.clickedBtn = value;
        }
    }
};
</script>

<style>
/* Add your styles here */
</style>
