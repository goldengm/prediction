<template>
    <div class="w-[27rem] lg:w-[25rem] 2xl:w-478.63 h-[calc(100vh-80px)] hidden flex-col gap-2 xl:flex right-side-bar">
        <div ref="resizeContainer"
            class="bg-dapp-black-2 px-3 xl:px-4 2xl:px-5 min-h-[4rem] xl:min-h-[7rem] py-4 lg:py-6 xl:py-8 2xl:py-10 rounded-lg no-selection"
            :style="{ height: resizeContainerHeight + 'px' }">
            <button
                class="w-full h-10 2xl:h-11 bg-dapp-blue flex items-center justify-center gap-3 text-white font-normal border-none text-sm lg:text-base 2xl:text-lg rounded-lg hover:bg-[#4845FFDD]">
                <SvgIcon path="M12.3055 12.538L0.272949 0.505432H24.3381L12.3055 12.538Z" h="10" w="16" fill="white"
                    viewBox="0 0 25 13" />
                <span>Trade</span>
            </button>
        </div>
        <div class="cursor-ns-resize border border-[#aaaaaa80]" @mousedown="startResizing" />
        <div class="bg-dapp-black-2 p-3 xl:p-4 rounded-lg no-selection">
            <div class="flex items-center w-full gap-4">
                <TabButton :isActive="activeTab === 'card'" @click="setActiveTab('card')">
                    Card
                </TabButton>
                <TabButton :isActive="activeTab === 'watchlist'" @click="setActiveTab('watchlist')">
                    Watchlist
                </TabButton>
            </div>
            <div v-if="activeTab === 'card'" class="flex mt-3 2xl:mt-4 justify-between gap-2 xl:gap-3">
                <button
                    class="bg-dapp-black-1 flex h-9 lg:h-10 pl-5 justify-between items-center py-1 pr-1 rounded-lg gap-1 w-80 text-left "
                    @click="toggleDropdown">
                    <h5 class="text-sm font-normal text-white line-clamp-1 flex-1">
                        Symbol
                    </h5>
                    <div class="flex items-center gap-4">
                        <span class="text-sm font-normal text-white">(All)</span>
                        <button
                            class="pt-3 pl-1 h-7 xl:h-8 bg-dapp-white-10 w-7 xl:w-8 text-white flex justify-center items-center rounded-lg hover:bg-dapp-blue">
                            <SvgIcon fill="white" h="16" w="16" viewBox="0 0 28 29" :path="arrowPath" />
                        </button>
                    </div>
                </button>
                <ul v-if="isDropdownOpen"
                    class="bg-dapp-black-1 right-bar-drop absolute mt-45 right-90 flex flex-col h-fit z-50 shadow-md min-h-[8rem] max-h-[15rem] rounded-md py-2 overflow-x-hidden overflow-y-auto no-scrollbar">
                    <li v-for="item in cardItems" :key="item"
                        class="py-2 hover:bg-dapp-blue text-white px-3 flex items-center gap-1.5 cursor-pointer"
                        @click="handleItemClick">
                        <Checkbox :label="item" checked @change="handleCheckboxChange" />
                        {{ item }}
                    </li>
                </ul>
                <button @click="handleCardModalOpen"
                    class="bg-dapp-white-10 h-8 w-8 lg:w-10 lg:h-10 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
                    <SvgIcon fill="white" h="16" w="16" viewBox="0 0 28 29" :path="modalIconPath" />
                </button>
            </div>
            <div v-else class="flex mt-3 2xl:mt-4 justify-between gap-2 xl:gap-3">
                <button
                    class="bg-dapp-black-1 flex h-9 lg:h-10 pl-5 justify-between items-center py-1 pr-1 rounded-lg gap-1 w-80 text-left "
                    @click="toggleDropdown">
                    <h5 class="text-sm font-normal text-white line-clamp-1 flex-1">
                        Watchlist
                    </h5>
                    <div class="flex items-center gap-4">
                        <button
                            class="pt-3 pl-1 h-7 xl:h-8 bg-dapp-white-10 w-7 xl:w-8 text-white flex justify-center items-center rounded-lg hover:bg-dapp-blue">
                            <SvgIcon fill="white" h="16" w="16" viewBox="0 0 28 29" :path="arrowPath" />
                        </button>
                    </div>
                </button>
                <ul v-if="isDropdownOpen"
                    class="bg-dapp-black-1 right-bar-drop absolute mt-45 right-90 flex flex-col h-fit z-50 shadow-md min-h-[8rem] max-h-[15rem] rounded-md py-2 overflow-x-hidden overflow-y-auto no-scrollbar">
                    <li v-for="item in watchListItems" :key="item"
                        class="py-2 hover:bg-dapp-blue text-white px-3 flex items-center gap-1.5 cursor-pointer"
                        @click="handleItemClick">
                        <Icon v-if="item === 'Create new watchlist'" icon="material-symbols:list-alt-add-outline-rounded"
                            fontSize={20} />
                        <Icon v-else-if="item === 'Red list'" icon="material-symbols:view-list-outline-sharp" color="red"
                            fontSize={20} />
                        <Icon v-else icon="material-symbols:list-alt-outline-sharp" fontSize={20} />
                        {{ item }}
                    </li>
                </ul>
                <button v-if="activeTab === 'Card'" @click="handleCardModalOpen"
                    class="bg-dapp-white-10 h-8 w-8 lg:w-10 lg:h-10 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
                    <SvgIcon fill="white" h="16" w="16" viewBox="0 0 28 29" :path="modalIconPath" />
                </button>
                <button v-else @click="handleCardModalOpen"
                    class="bg-dapp-white-10 h-8 w-8 lg:w-10 lg:h-10 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
                    <SvgIcon fill="white" h="20" w="20" viewBox="0 0 24 24" path="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </button>
            </div>
        </div>
        <div
            :class="['bg-dapp-black-2 py-3 px-3 lg:px-4 rounded-lg flex flex-col gap-4 overflow-y-auto flex-1', activeTab === 'watchlist' ? 'pt-0' : '']">
            <div v-if="activeTab === 'card'">
                <SignalCardList />
            </div>
            <div v-else-if="activeTab === 'watchlist'">
                <ActionTable />
            </div>
        </div>
        <!-- <CardMarketplaceModal :isOpen="true" /> -->
    </div>
</template>

<script>
import { Icon } from "@iconify/vue2"
// import useDisclosure from "../../hooks/useDisclosure.vue";
import SvgIcon from '../others/SvgIcon.vue';
import TabButton from '../others/TabButton.vue';
import SignalCardList from './SignalCardList.vue';
import ActionTable from './ActionTable.vue';
import Checkbox from "./Checkbox.vue";
// import CardMarketplaceModal from './CardMarketplaceModal.vue';

export default {
    name: "RightSidebar",
    components: {
        SvgIcon, TabButton, SignalCardList, ActionTable, Icon, Checkbox
    },
    data() {
        return {
            activeTab: 'card',
            isResizing: false,
            resizeContainerHeight: 90,
            isDropdownOpen: false,
            isDropdownOpenState: false,
            cardItems: ["VIX", "SPX", "NDQ", "DXY", "DJI", "TSLA", "NFLX", "AAPL"],
            watchListItems: ["Create new watchlist", "Red list", "Watchlist"],
            arrowPath: "M12.3055 12.538L0.272949 0.505432H24.3381L12.3055 12.538Z",
            modalIconPath: "M14.4239 0.976003C18.457 0.976003 22.49 0.974996 26.5229 0.976003C27.262 0.97698 27.753 1.368 27.91 2.083C28.01 2.54198 27.876 2.92699 27.542 3.25899C26.355 4.43798 25.1739 5.62298 23.9919 6.80599C22.1169 8.67998 20.245 10.555 18.366 12.425C18.23 12.561 18.178 12.697 18.178 12.886C18.182 17.486 18.1739 22.086 18.187 26.685C18.1899 27.735 17.063 28.275 16.303 27.911C16.1429 27.834 16.0019 27.733 15.8769 27.607C14.279 26.01 12.682 24.412 11.083 22.815C10.777 22.51 10.625 22.155 10.626 21.712C10.635 18.772 10.629 15.831 10.635 12.891C10.635 12.692 10.574 12.553 10.435 12.414C7.38903 9.37499 4.34704 6.33098 1.30394 3.28899C0.85204 2.837 0.750966 2.38198 0.980946 1.816C1.20202 1.27099 1.64599 0.97698 2.26403 0.97698C6.31701 0.974996 10.37 0.976003 14.4239 0.976003Z"
        };
    },
    methods: {
        startResizing(event) {
            this.isResizing = true;
        },
        stopResizing() {
            this.isResizing = false;
        },
        // resize(event) {
        //     if (this.isResizing && this.$refs.resizeContainer) {
        //         this.resizeContainerHeight =
        //             event.clientY - this.$refs.resizeContainer.getBoundingClientRect().top;
        //     }
        // },
        setActiveTab(tab) {
            this.activeTab = tab;
        },

    },
    mounted() {
        window.addEventListener("mousemove", this.resize);
        window.addEventListener("mouseup", this.stopResizing);
        window.addEventListener('click', this.handleWindowClick);
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.resize);
        window.removeEventListener("mouseup", this.stopResizing);
        window.removeEventListener('click', this.handleWindowClick);
    },
    methods: {
        handleWindowClick() {
            if (this.isDropdownOpen) {
                if (this.isDropdownOpenState) {
                    this.isDropdownOpen = false;
                    this.isDropdownOpenState = false;
                } else {
                    this.isDropdownOpenState = true;
                }
            }
        },
        startResizing() {
            this.isResizing = true;
        },
        stopResizing() {
            this.isResizing = false;
        },
        resize(mouseMoveEvent) {
            if (this.isResizing && this.$refs.resizeContainer) {
                this.resizeContainerHeight =
                    mouseMoveEvent.clientY -
                    this.$refs.resizeContainer.getBoundingClientRect().top;
            }
        },
        setActiveTab(tab) {
            this.activeTab = tab;
            this.isDropdownOpen = false;
            this.isDropdownOpenState = false;
        },
        handleTradeButtonClick() {
        },
        toggleDropdown() {
            console.log(this.isDropdownOpen)
            this.isDropdownOpen = !this.isDropdownOpen;

        },
        handleCardModalOpen() {
        },
        handleItemClick() {
        },
        handleCheckboxChange() {
        }
    }
};
</script>