<template>
  <div class="bg-dapp-black-1 w-full h-16 md:h-18 sticky top-0 pl-6 pr-2 z-20">
    <div class="flex justify-between items-center flex-row h-full gap-4 md:gap-6 xl:gap-8">
      <div class="flex items-center gap-6 md:gap-8 xl:gap-9 2xl:gap-11">
        <div class="w-[96px] 2xl:w-[112px]">
          <a href="/">
            <img height="33" src="/ypred-logo-light.png" width="112" />
          </a>
        </div>
        <div class="relative mx-auto text-gray-600">
          <button type="submit" class="absolute left-0 top-1/2 -translate-y-1/2 ml-4 text-white text-xl">
            <Icon icon="fe:search" />
          </button>
          <input
            class="border-none bg-[#ffffff10] h-10 px-4 pl-12 rounded-xl text-base focus:outline-none placeholder:text-[#999999] w-56 lg:w-64 xl:w-[20rem] text-white"
            type="search" name="search" placeholder="Search" />
        </div>
        <div class="hidden xl:flex items-center gap-4 xl:gap-6 2xl:gap-7">
          <ChartChip :percent="35" :isRise="true" timeFrame="This week" label="BNB 24,000"
            icon="mingcute:binance-coin-bnb-fill" />
          <ChartChip :percent="35" :isRise="false" timeFrame="This week" label="BNB 24,000"
            icon="mingcute:binance-coin-bnb-fill" variant="green" />
          <ChartChip :percent="35" :isRise="true" timeFrame="This week" label="BNB 24,000"
            icon="mingcute:binance-coin-bnb-fill" variant="blue" />
        </div>
      </div>
      <div class="flex gap-4 md:gap-6 xl:gap-7">
        <div class="flex items-center justify-between">
          <button
            class="hidden text-base font-normal bg-dapp-white-10 px-5 h-10 rounded-lg text-white hover:bg-dapp-blue items-center gap-2 2xl:flex">
            <Icon icon="mingcute:binance-coin-bnb-fill" fontSize="20" />
            <span>$150,000</span>
          </button>
          <button class="text-base font-normal px-5 h-9 rounded-lg text-white flex items-center gap-2">
            <YPFullScreen />
          </button>
          <button
            class="relative text-base font-normal bg-dapp-white-10 w-9 h-9 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
            <Icon icon="mdi:bell" fontSize="18" />
            <span
              class="h-2 w-2 bg-gradient-to-r from-[#4845FF] via-[#A63EBA] to-[#E6398C] rounded-full absolute top-1 right-1" />
          </button>
          <button
            class="ml-2 relative text-base font-normal bg-dapp-white-10 w-9 h-9 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center gap-2">
            <svg-icon fill="white" h="15" w="18" viewBox="0 0 23 18"
              path="M11.509 0.353002C14.584 0.353002 17.659 0.360002 20.733 0.348001C21.396 0.346002 22.0439 0.891001 22.043 1.663C22.041 5.045 22.043 8.427 22.042 11.809C22.042 12.502 21.5279 13.057 20.8349 13.119C20.743 13.127 20.651 13.13 20.558 13.13C18.8299 13.13 17.1009 13.131 15.373 13.128C15.275 13.128 15.215 13.16 15.161 13.239C14.43 14.302 13.696 15.362 12.963 16.423C12.821 16.629 12.677 16.835 12.535 17.041C12.282 17.409 11.9239 17.57 11.4859 17.564C11.0379 17.559 10.693 17.367 10.4389 16.996C9.57701 15.741 8.71104 14.49 7.84898 13.235C7.79601 13.158 7.73802 13.128 7.64293 13.128C5.87901 13.131 4.11498 13.132 2.35094 13.129C1.77794 13.128 1.34703 12.88 1.08897 12.359C1.00804 12.197 0.970932 12.02 0.970932 11.839C0.969956 8.436 0.968979 5.033 0.972031 1.63C0.973008 0.871 1.62694 0.348001 2.25902 0.35C5.34203 0.358003 8.42601 0.353002 11.509 0.353002ZM16.426 8.114C17.093 8.114 17.636 7.578 17.624 6.914C17.612 6.281 17.133 5.728 16.425 5.73C15.745 5.731 15.2419 6.254 15.2359 6.92C15.23 7.587 15.76 8.114 16.426 8.114ZM6.58299 8.114C7.24498 8.114 7.77904 7.587 7.77696 6.929C7.77501 6.252 7.25401 5.726 6.58397 5.73C5.83604 5.734 5.39098 6.33 5.38695 6.928C5.38402 7.583 5.92296 8.114 6.58299 8.114ZM11.5069 8.114C12.166 8.114 12.708 7.578 12.701 6.928C12.6949 6.249 12.167 5.728 11.506 5.729C10.844 5.73 10.318 6.246 10.313 6.92C10.3089 7.609 10.873 8.123 11.5069 8.114Z" />
            <span
              class="h-2 w-2 bg-gradient-to-r from-[#4845FF] via-[#A63EBA] to-[#E6398C] rounded-full absolute top-1 right-1" />
          </button>
        </div>
        <div class="flex items-center gap-3">
          <Tooltip label="Connect wallet">
            <ConnectWallet />
          </Tooltip>
          <button @click="onToggle"
            class="relative text-base font-normal bg-dapp-white-10 w-9 h-9 rounded-lg text-white hover:bg-dapp-blue flex justify-center items-center xl:hidden">
            <Icon icon="line-md:menu-fold-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from "../others/Tooltip.vue";
import { Icon } from "@iconify/vue2";
import SvgIcon from "../others/SvgIcon.vue";
import ChartChip from "../others/ChartChip.vue";
import YPFullScreen from "../others/YPFullScreen.vue";
import useDisclosure from "../../hooks/useDisclosure.vue";
import ConnectWallet from "./ConnectWallet.vue";

export default {
  components: { Tooltip, Icon, SvgIcon, ChartChip, YPFullScreen, useDisclosure, ConnectWallet },
  name: "Header",
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    onToggle() {
      this.toggle = !this.toggle
      this.$emit('toggle', this.toggle);
    },
  },
};
</script>
