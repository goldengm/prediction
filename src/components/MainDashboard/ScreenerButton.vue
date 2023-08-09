<template>
    <button :class="screenerButtonClass" @click="setActiveTool">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ScreenerButton",
    props: {
        isActive: Boolean,
        clickedBtn: String
    },
    computed: {
        screenerButtonClass() {
            const baseClasses = "w-fit xl:w-[6rem] px-3 text-sm font-normal text-center lg:h-9 rounded-md hover:bg-dapp-white-20 hover:text-white";
            const activeClasses = this.isActive ? "bg-dapp-white-10 text-white" : "text-dapp-gray-1";
            return `${baseClasses} ${activeClasses}`;
        },
    },
    methods: {
        setActiveTool() {
            this.$emit("setActiveTool", this.clickedBtn);
        }
    }
};
</script>

<style>
/* Add your styles here */
</style>
