<template>
    <table class="table-auto w-full">
        <thead class="sticky top-0 bg-dapp-black-2">
            <tr class="text-dapp-gray-1">
                <th v-for="(heading, index) in headings" :key="heading.key" :class="getHeadingClass(index)">
                    {{ heading.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index" :class="getRowClass(item.isRise)">
                <td v-for="(h, i) in headings" :key="h.key" :class="getCellClass(i)">
                    <template v-if="h.key === 'source'">
                        <NewsLogo :src="item[h.key]" :bgColor="item.bgColor" />
                    </template>
                    <template v-else-if="h.key === 'news'">
                        <NewsLabel :heading="item[h.key].heading" :link="item[h.key].link" />
                    </template>
                    <template v-else>
                        <ScoreLabel :isRise="item.isRise" :children="item[h.key]" />
                    </template>

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import NewsLogo from './NewsLogo.vue';
import NewsLabel from './NewsLabel.vue';
import ScoreLabel from './ScoreLabel.vue';

export default {
    components: {
        NewsLogo, NewsLabel, ScoreLabel
    },
    data() {
        return {
            headings: [
                { label: "Source", key: "source" },
                { label: "News", key: "news" },
                { label: "Score", key: "score" },
            ],
            data: [
                {
                    source: "/cnn.png",
                    bgColor: "red",
                    news: {
                        heading: " Honkong to start testing digital currency.",
                        link: "#",
                    },
                    score: 8,
                    isRise: false,
                },
                {
                    source: "/abc-news.png",
                    news: {
                        heading: "Russia start developing machanism for int",
                        link: "#"

                    },
                    score: 78,
                    isRise: true,
                },
                {
                    source: "/bbc-news.png",
                    news: {
                        heading: "California Governer Newsom Vetoes bill to...",
                        link: "#"

                    },
                    score: 7,
                    isRise: false,
                },
            ],
        };
    },
    methods: {
        getHeadingClass(index) {
            return [
                "font-normal",
                "text-left",
                "text-sm",
                "w-fit",
                index === 0 ? "rounded-l-md w-[85px] py-4 pl-4" : index === this.headings.length - 1 ? "rounded-r-md w-20 py-4 text-center" : "p-4",
            ];
        },
        getRowClass(isRise) {
            return [
                "text-white",
                isRise ? "dapp-bg-gradient-green" : "dapp-bg-gradient-red",
            ];
        },
        getCellClass(i) {
            return [
                "border-b-[10px] border-b-dapp-black-2",
                i === 0 ? "rounded-l-md w-[85px]" : i === this.headings.length - 1 ? "rounded-r-md w-16 border-l border-l-[#666666] text-center" : "px-4",
            ];
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
