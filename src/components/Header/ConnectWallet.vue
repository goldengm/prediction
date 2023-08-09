<template>
    <!-- <button @click="account ? deactivate() : activateProvider()" :class="[
        'h-9 px-3 xl:px-4 text-white flex items-center gap-2 rounded-md text-xl hover:bg-dapp-blue',
        bg ? bg : 'bg-dapp-white-10'
    ]">
        <Icon icon="ph:wallet-fill" />
        <span class="text-sm whitespace-nowrap">
            {{ account ? '[' + shortenAddress(account) + ']' : 'Connect' }}
        </span>
    </button> -->
    <button :class="[
        'h-9 px-3 xl:px-4 text-white flex items-center gap-2 rounded-md text-xl hover:bg-dapp-blue',
        bg ? bg : 'bg-dapp-white-10'
    ]">
        <Icon icon="ph:wallet-fill" />
        <span class="text-sm whitespace-nowrap">
            {{ account ? '[' + shortenAddress(account) + ']' : 'Connect' }}
        </span>
    </button>
</template>

<script type="text/javascript">
import Vue from "vue"
import { infuraId, rpcUrl, supportedChainId } from "../../config/contract-config.ts";
import { Web3Modal } from "web3modal";
import { shortenAddress, useEthers } from "@usedapp/core";
import { useAppStore } from "../../store";
import { Icon } from "@iconify/vue2";
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// import { WalletConnectProvider } from "@walletconnect/web3-provider";


export default {
    props: {
        bg: String
    },
    components: {
        Icon
    },
    // methods: {
    //     async activateProvider() {
    //         const providerOptions = {
    //             injected: {
    //                 display: {
    //                     name: "Metamask",
    //                     description: "Connect with the provider in your Browser"
    //                 },
    //                 package: null
    //             },
    //             walletconnect: {
    //                 package: { WalletConnectProvider },
    //                 options: {
    //                     bridge: "https://bridge.walletconnect.org",
    //                     infuraId: infuraId
    //                 }
    //             },
    //             coinbasewallet: {
    //                 package: CoinbaseWalletSDK,
    //                 options: {
    //                     appName: "Y Predict",
    //                     infuraId: infuraId,
    //                     rpc: rpcUrl,
    //                     chainId: supportedChainId,
    //                     darkMode: false
    //                 }
    //             }
    //         };

    //         const web3Modal = new Web3Modal({
    //             providerOptions
    //         });

    //         try {
    //             const provider = await web3Modal.connect();
    //             const response = await this.activate(provider);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // },
    // setup() {
    //     const { account, activate, deactivate } = useEthers();
    //     const { setAccount } = useAppStore();

    //     // Call setAccount when account changes
    //     watch(() => account.value, (newAccount) => {
    //         setAccount(newAccount);
    //     });

    //     return {
    //         account,
    //         activateProvider,
    //         deactivate
    //     };
    // }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
