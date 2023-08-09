<template>
    <div class="flex pt-40 flex-col items-start justify-center min-h-[10rem]">
        <span class="text-[5.8rem] text-white mix-blend-overlay">44%</span>
        <div class="flex items-center gap-6 mt-[3rem]">
            <p class="text-dapp-gray-1 text-2xl line-8 font-normal">
                Confidence Score
            </p>
            <span class="text-white">
                <Tooltip label="Confidence Score">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="10.726" cy="10.9869" r="10.541" fill="white" />
                        <path
                            d="M10.644 5.94499C11.673 5.9351 12.548 6.16301 13.316 6.7371C14.793 7.84099 14.945 9.78202 13.648 11.094C13.278 11.4671 12.888 11.8221 12.485 12.1591C11.905 12.6451 11.481 13.1961 11.348 13.9781C11.214 14.761 10.354 15.054 9.75798 14.558C9.40996 14.268 9.38396 13.8571 9.41399 13.4421C9.48296 12.479 10.002 11.773 10.7 11.158C11.15 10.7601 11.642 10.402 12.006 9.91398C12.601 9.11808 12.26 8.02104 11.301 7.74809C10.302 7.46306 9.44799 7.69804 8.989 8.74003C8.87902 8.99101 8.79302 9.252 8.69298 9.507C8.463 10.0931 7.96898 10.3621 7.41899 10.203C6.88597 10.0501 6.57201 9.528 6.66301 8.94804C6.89202 7.49504 8.15001 6.28898 9.71099 6.02104C10.047 5.96403 10.384 5.93608 10.644 5.94499Z"
                            fill="#B3B3B3" />
                        <path
                            d="M10.472 17.823C9.78005 17.818 9.27004 17.3239 9.26601 16.656C9.26205 15.9699 9.81301 15.426 10.503 15.4339C11.173 15.441 11.708 15.9969 11.692 16.6689C11.675 17.3409 11.161 17.828 10.472 17.823Z"
                            fill="#B3B3B3" />
                    </svg>
                </Tooltip>
            </span>
        </div>
    </div>
</template>

<script>
import Tooltip from '../others/Tooltip.vue';

export default {
    name: "Overview",
    components: {
        Tooltip,
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
