<template>
    <div>
        <p class="text-sm text-[#999999] leading-[1.2] line-clamp-1">{{ heading }}</p>
        <div class="mt-1">
            <router-link :to="link" class="w-fit flex items-center gap-0.5">
                <span class="text-[10px] text-white font-thin">Read more</span>
                <Icon icon="mdi:chevron-right" :width="13" :height="13" :color="'white'" />
            </router-link>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    props: {
        heading: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    components: {
        Icon
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
