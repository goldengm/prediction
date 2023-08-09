<template>
    <button :class="{
        'text-xs md:text-sm pb-0.5 border-b font-normal text-center hover:text-white px-1': true,
        'border-b-white text-white': isActive,
        'border-b-transparent text-dapp-gray-1': !isActive,
    }" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>