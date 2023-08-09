<template>
    <button class="group flex w-fit items-center gap-1 pb-1 border-b-2 2xl:border-b-[3px] hover:border-b-white duration-100"
        :class="{ 'border-b-white': active, 'border-b-transparent': !active }" v-bind="$attrs">
        <span :class="['h-2 w-2 rounded-full', bgColor]" />
        <span :class="[
            'text-sm font-normal group-hover:text-white',
            textColor
        ]">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'TimeButton',
    props: {
        indicator: {
            type: String,
            required: true,
            validator: value => ['green', 'red', 'none'].includes(value)
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        bgColor() {
            if (this.indicator === 'green') {
                return 'bg-dapp-green';
            } else if (this.indicator === 'red') {
                return 'bg-dapp-red';
            } else {
                return 'bg-dapp-white-10';
            }
        },
        textColor() {
            return this.active ? 'text-white' : 'text-dapp-gray-1';
        }
    }
};
</script>

<style scoped>
/* Your component's styles here */
</style>
