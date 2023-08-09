<template>
    <div class="flex flex-1 my-2 gap-2 min-h-[18rem] h-full items-stretch">
        <div
            class="w-[10rem] xl:w-[12rem] 2xl:w-[14rem] h-[inherit] bg-dapp-black-2 flex flex-col gap-[0.625rem] rounded-lg p-2 overflow-y-auto">
            <ActionButton :isActive="type === 'overview'" clickedBtn="overview" @setType="setType('overview')">
                Overview
            </ActionButton>
            <ActionButton :isActive="type === 'pattern'" clickedBtn="pattern" @setType="setType('pattern')">
                Pattern
            </ActionButton>
            <ActionButton :isActive="type === 'transaction'" clickedBtn="transaction" @setType="setType('transaction')">
                Transaction
            </ActionButton>
            <ActionButton :isActive="type === 'sentiment'" clickedBtn="overvisentimentew" @setType="setType('sentiment')">
                Sentiment
            </ActionButton>
            <ActionButton :isActive="type === 'ta'" clickedBtn="ta" @setType="setType('ta')">
                T.A
            </ActionButton>
        </div>
        <div
            class="flex-1 bg-dapp-black-2 p-2 pt-0 rounded-lg flex justify-between h-[inherit] overflow-y-auto gap-3 md:gap-4 xl:gap-6">
            <div class="flex-1 flex justify-center items-start">
                <Overview v-if="type === 'overview'" />
                <ActionTable v-else-if="['pattern', 'transaction', 'ta'].includes(type)" />
                <NewsTable v-else-if="type === 'sentiment'" />
            </div>
            <div class="w-fit sticky top-0 flex justify-center items-start">
                <SignalIndicator />
            </div>
        </div>
    </div>
</template>
  
<script>
import Overview from './Overview.vue';
import ActionTable from '../RightSideBar/ActionTable.vue';
import NewsTable from './NewsTable.vue';
import SignalIndicator from './SignalIndicator.vue';
import ActionButton from './ActionButton.vue';
export default {
    name: "Analysis",
    components: {
        ActionButton, Overview, ActionTable, NewsTable, SignalIndicator
    },
    data() {
        return {
            type: 'overview',
        };
    },
    methods: {
        setType(newType) {
            this.type = newType;
        },
    },
};
</script>
  
<style scoped>
/* Add your styles here */
</style>
  