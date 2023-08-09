<template>
    <button :class="buttonClass" v-bind="$attrs" @click="setType">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        isActive: Boolean,
        clickedBtn: String
    },
    computed: {
        buttonClass() {
            return [
                'w-full h-10 min-h-[2.5rem] xl:h-10 text-sm font-normal text-center rounded-lg hover:bg-dapp-white-20 hover:text-white',
                this.isActive
                    ? 'bg-dapp-white-10 text-white'
                    : 'bg-dapp-black-3 text-dapp-gray-1',
            ]
        },
    },
    methods: {
        setType() {
            this.$emit("setType", this.clickedBtn);
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>