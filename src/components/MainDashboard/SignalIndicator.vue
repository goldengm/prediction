<template>
    <div class="signal-indicator-container">
        <div class="signal-indicator">
            <div class="outer-ring"></div>
            <div class="inner-center"></div>
            <div class="indicator-label" :style="{ color: indicate.color }">
                {{ indicate.label }}
            </div>
            <div class="needle" :style="{ transform: needleTransform }"></div>
            <div class="inner-ring">
                <span v-for="(_, index) in 16" :key="index" :class="`tick tick-${index}`"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignalIndicator",
    data() {
        return {
            labels: [
                { values: [0, 1, 2], label: "Strong Sell", color: "#ed1c24" },
                { values: [3, 4, 5], label: "Sell", color: "#b10208" },
                { values: [6, 7, 8, 9], label: "Neutral", color: "#ffffff76" },
                { values: [10, 11, 12], label: "Buy", color: "#089316" },
                { values: [13, 14, 15], label: "Strong Buy", color: "#1cd12d" },
            ],
            indicatorValue: 15,
            indicate: {},
        };
    },
    computed: {
        needleTransform() {
            const angle = this.indicatorValue === 16 ? 90 : 100 - (16 - this.indicatorValue) * 12;
            return `rotate(${angle}deg)`;
        },
    },
    methods: {
        init() {
            const innerRingRadius = 130;
            Array(16).fill("a").forEach((_, i) => {
                const angle = 180 - i * 12;
                const theta = this.deg2rad(angle);
                const radius = innerRingRadius;
                const x = Math.cos(theta) * radius;
                const y = Math.sin(theta) * -radius;
                const transform = `translate(${x}px, ${y}px) rotate(${-angle}deg)`;
                const elem = document.querySelector(`.tick.tick-${i}`);
                if (elem) {
                    elem.style.transform = transform;
                    elem.style.webkitTransform = transform;
                    elem.style.MozTransform = transform;
                }
            });
        },
        deg2rad(degrees) {
            return (degrees * Math.PI) / 180;
        },
    },
    mounted() {
        this.init();
        setInterval(() => {
            if (this.indicatorValue >= 15) {
                this.indicatorValue = 0;
            } else {
                this.indicatorValue++;
            }
        }, 1000);
    },
    watch: {
        indicatorValue(newValue) {
            this.labels.forEach((item) => {
                if (item.values.includes(newValue)) {
                    this.indicate = item;
                }
            });
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
