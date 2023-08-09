<template>
    <table class="table-auto w-full">
        <thead class="sticky top-0 bg-dapp-black-2 justify-between">
            <tr class="text-dapp-gray-1">
                <th class="font-normal p-3 text-sm text-left" v-for="heading in headings">
                    {{ heading.label }}
                </th>
            </tr>
        </thead>
        <tbody v-for="item in data">
            <tr class="text-white">
                <td v-for="heading in headings"
                    class="py-3 px-3 bg-dapp-black-3 rounded-l-md rounded-r-md border-b-[10px] border-b-dapp-black-2 text-sm">
                    <CoinIconLabel v-if="heading.key === 'name'" :icon="item[heading.key].icon"
                        :label="item[heading.key].label" />
                    <ActionIndicator v-else-if="heading.key === 'action'" :isRise="item[heading.key].props.isRise"
                        :percent="item[heading.key].props.percent" :label="item[heading.key].props.label" />
                    <template v-else>{{ item[heading.key] }}</template>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { Icon } from '@iconify/vue2';
import CoinIconLabel from '../others/CoinIconLabel.vue';
import ActionIndicator from './ActionIndicator.vue';

export default {
    components: {
        CoinIconLabel,
        Icon,
        ActionIndicator
    },
    data() {
        return {
            headings: [
                { label: 'Name', key: 'name' },
                { label: 'Action', key: 'action' },
                { label: 'Score', key: 'score' },
            ],
            data: [
                {
                    name: {
                        icon: 'logos:bitcoin',
                        label: 'Bitcoin',
                    },
                    action: {
                        component: 'ActionIndicator',
                        props: {
                            isRise: true,
                            percent: 35,
                            label: 'Buy',
                        },
                    },
                    score: 74.63,
                },
                {
                    name: {
                        icon: 'simple-icons:binance',
                        iconColor: '#F6921A',
                        label: 'Binance',
                    },
                    action: {
                        component: 'ActionIndicator',
                        props: {
                            isRise: false,
                            percent: 35,
                            label: 'Sell',
                        },
                    },
                    score: 74.63,
                },
                {
                    name: {
                        icon: 'logos:ethereum',
                        label: 'Etherium',
                    },
                    action: {
                        component: 'ActionIndicator',
                        props: {
                            isRise: false,
                            percent: 35,
                            label: 'Sell',
                        },
                    },
                    score: 74.63,
                },
                {
                    name: {
                        icon: 'simple-icons:litecoin',
                        iconColor: '#345D9D',
                        label: 'Litecoin',
                    },
                    action: {
                        component: 'ActionIndicator',
                        props: {
                            isRise: true,
                            percent: 35,
                            label: 'Buy',
                        },
                    },
                    score: 74.63,
                },
                {
                    name: {
                        icon: 'simple-icons:ripple',
                        iconColor: '#00AAE4',
                        label: 'Ripple',
                    },
                    action: {
                        component: 'ActionIndicator',
                        props: {
                            isRise: false,
                            percent: 35,
                            label: 'Sell',
                        },
                    },
                    score: 74.63,
                },
            ],
        };
    },
};
</script>