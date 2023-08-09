<template>
    <div class="flex items-center gap-1.5">
        <span class="text-base">
            <icon :icon="icon" :color="iconColor" />
        </span>
        <span>{{ label }}</span>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    name: "CoinIconLabel",
    props: {
        icon: String,
        label: String,
        iconColor: String,
    },
    components: {
        Icon,
    },
};
</script>