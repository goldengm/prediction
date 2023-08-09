<template>
    <div>
        <Modal v-model="isOpen" @hide="onClose">
            <div>
                <button @click="onClose"
                    class="text-2xl font-normal bg-dapp-white-10 w-12 h-12 rounded-lg text-white hover:bg-dapp-red flex justify-center items-center absolute top-5 right-5 z-10">
                    <Icon icon="fluent-mdl2:cancel" />
                </button>
                <h3 class="text-xl lg:text-2xl 2xl:text-3xl font-medium leading-[1.2] text-white">Cards Marketplace</h3>
            </div>
            <div>
                <div class="relative mt-7 text-gray-600">
                    <button type="submit" class="absolute left-0 top-1/2 -translate-y-1/2 ml-4 text-white text-xl">
                        <Icon icon="fe:search" />
                    </button>
                    <input
                        class="border-none bg-[#ffffff10] h-12 lg:h-[50px] 2xl:h-16 px-4 pl-12 rounded-xl text-base focus:outline-none placeholder:text-[#999999] w-full text-white"
                        type="search" name="search" placeholder="Search" autocomplete="off" />
                </div>
                <div class="mt-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
                    <Card label="Ghost Patterns" active="true" description="By Wolf Trade" value="" />
                    <!-- Add more Card components here -->
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '../others/modal.vue';
import Card from './Card.vue';
import { Icon } from '@iconify/vue2';

export default {
    components: {
        Modal,
        Card,
        Icon
    },
    props: {
        isOpen: Boolean,
    },
    methods: {
        onClose() {
            console.log('close')
            this.$emit('close');
        },
    },
    created() {
        console.log(this.isOpen)
        console.log('success');
    }
};
</script>
