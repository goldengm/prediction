<template>
    <img :src="src" :alt="'News Logo'" :height="70" :width="70" :style="{
        height: '70px',
        width: '70px',
        objectFit: 'contain',
        borderRadius: '6px',
        objectPosition: 'center',
        background: bgColor
    }" />
</template>

<script>
export default {
    name: "NewsLogo",
    props: {
        src: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: 'white'
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>