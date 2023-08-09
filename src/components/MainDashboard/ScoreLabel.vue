<template>
    <span :class="getClassNames">{{ children }}</span>
</template>

<script>
export default {
    name: "ScoreLabel",
    props: {
        children: [String, Number],
        isRise: Boolean
    },
    created() {
        console.log(this.children);
    },
    computed: {
        getClassNames() {
            return [
                'text-lg',
                'xl:text-xl',
                '2xl:text-2xl',
                this.isRise ? 'text-dapp-green' : 'text-dapp-red'
            ];
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
