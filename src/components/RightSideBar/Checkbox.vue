<template>
    <label for="checkbox" class="flex items-center cursor-pointer">
        <input type="checkbox" :checked="checked" id="checkbox" v-bind="$attrs" v-on="$listeners" hidden />
        <div class="border border-gray-300 rounded-sm mr-2 w-4 h-4 text-white flex items-center justify-center p-0">
            <Icon v-if="checked" icon="carbon:checkbox-checked-filled" :fontSize="fontSize" />
        </div>
        <span class="block w-full text-sm">{{ label }}</span>
    </label>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    components: {
        Icon
    },
    props: {
        label: String,
        checked: Boolean,
        fontSize: {
            type: String,
            default: "1rem"
        }
    },
    inheritAttrs: false // Ensure that attributes are not passed to the root element
};
</script>