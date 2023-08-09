<template>
    <div class="group bg-dapp-black-2 py-5 px-6 rounded-xl flex items-start hover:bg-black justify-between cursor-pointer"
        @click="onSelect(value)">
        <div>
            <h5 class="font-normal text-white text-lg md:text-xl 2xl:text-3xl leading-[120%]">
                {{ label }}
            </h5>
            <p class="text-[#999999] mt-2">{{ description }}</p>
        </div>
        <div
            class="h-11 w-11 rounded-full bg-dapp-white-10 flex items-center justify-center text-3xl text-white group-hover:bg-dapp-black-1">
            <Icon v-if="active" icon="material-symbols:check" />
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2'; // Install and import the @iconify/vue library

export default {
    props: {
        label: String,
        description: String,
        active: Boolean,
        value: String,
    },
    components: {
        Icon,
    },
    methods: {
        onSelect(value) {
            this.$emit('select', value);
        },
    },
};
</script>
