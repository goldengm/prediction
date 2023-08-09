<template>
  <!-- <DAppProvider :config="config"> -->
  <div class="h-screen overflow-y-hidden overflow-x-hidden bg-dapp-black-1">
    <Header @toggle="this.onToggle" />
    <div class="flex flex-row justify-between w-full">
      <LeftSidebar />
      <div class="flex">
        <main class="pr-2">
          <div class="flex items-start gap-2 w-90">
            <slot></slot>
            <MainDashboard />
            <RightSidebar v-if="toggle" />
          </div>
        </main>
      </div>
    </div>
  </div>
  <!-- </DAppProvider> -->
</template>
<script>
import Header from "../components/Header/index.vue";
import RightSidebar from "../components/RightSideBar/index.vue";
import LeftSidebar from "../components/LeftSideBar/index.vue";
// import { DAppProvider } from "@usedapp/core";
import { rpcUrl, supportedChainId } from "../config/contract-config";
import MainDashboard from '../components/MainDashboard/index.vue';

export default {
  components: { Header, RightSidebar, LeftSidebar, MainDashboard },
  name: "Home",
  data() {
    return {
      toggle: true
    }
  },
  computed: {
    config() {
      return {
        readOnlyChainId: supportedChainId,
        readOnlyUrls: {
          [supportedChainId]: rpcUrl,
        },
        pollingInterval: 50000,
        notifications: {
          expirationPeriod: 1000,
          checkInterval: 1000,
        },
        refresh: 3,
      };
    }
  },
  methods: {
    onToggle(value) {
      this.toggle = value
    }
  }
};
</script>
