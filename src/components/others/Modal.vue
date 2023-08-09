<template>
    <transition name="modal-fade" appear>
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
            <transition name="modal-slide" appear>
                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <slot></slot>
                    </div>
                </div>
            </transition>
            <div class="fixed inset-0 bg-black bg-opacity-80" @click="onClose" />
        </div>
    </transition>
</template>

<script>
import { transition } from "vue-transition-component";
export default {
    components: {
        transition
    },
    props: {
        isOpen: Boolean,
        onClose: Function,
    },
    created() {
    }
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: transform 0.3s ease;
}

.modal-slide-enter,
.modal-slide-leave-to {
    transform: translateY(-20px);
}
</style>
