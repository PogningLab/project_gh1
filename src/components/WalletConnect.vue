<template>
  <button
    v-if="!network_ok"
    @click="switchNetwork()"
    class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-plain bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-main2 focus:ring-pink-700"
  >
    Wrong network. Switch to {{ targetNetwork }}
  </button>
  <button
    v-else
    type="button"
    :disabled="walletStore.address != ''"
    :class="walletStore.address == '' ? 'hover:bg-primary2' : ''"
    @click="connectWallet()"
    class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-plain bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-main2 focus:ring-primary"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
    <span class="">{{
      walletStore.address != ''
        ? `Connected ${walletStore.acc_short}`
        : `Connect Wallet`
    }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useWalletStore } from '../stores/wallet'

const walletStore = useWalletStore()
const targetNetwork = import.meta.env.VITE_BLOCKCHAIN_NETWORK_NAME
const targetNetworkId = import.meta.env.VITE_BLOCKCHAIN_NETWORK_ID
const network_ok = ref<boolean>(true)
// checks if current chain matches with the one provided in env variable
const checkNetwork = async () => {
	// @ts-expect-error Window.ethereum not typed
	if (window.ethereum) {
		// @ts-expect-error Window.ethereum not typed
		const currentChainId = await window.ethereum.request({
			method: 'eth_chainId',
		})

		if (currentChainId == targetNetworkId) network_ok.value = true
	}
}
// switches network to the one provided in env variable
const switchNetwork = async () => {
	// @ts-expect-error Window.ethereum not typed
	await window.ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId: targetNetworkId }],
	})
	// refresh
	window.location.reload();
}
// checks network and connects wallet
const connectWallet = async () => {
	console.log("test");
	if (!network_ok.value) await switchNetwork();
	try {
		// @ts-expect-error Window.ethereum not typed
		const data = await window.ethereum.request({
			method: 'eth_requestAccounts',
		})
		console.log('data :>> ', data);
		walletStore.saveWalletData({address: data[0], acc_short: data[0]});
		console.log(`test`);
		console.log(`test`,walletStore.address);
		console.log('DApp connected to your wallet 💰');

	} catch (error) {
		console.error('Error connecting DApp to your wallet');
		console.error(error);
	}
}

const handleAccountsChanged = (accounts: string[]) => {
  if (accounts.length === 0) {
    // 메타마스크에서 로그인을 끊은 경우
    walletStore.clearWalletData()
  }
}

// @ts-expect-error Window.ethereum not typed
if (window.ethereum) {
	// @ts-expect-error Window.ethereum not typed
  window.ethereum.on('accountsChanged', handleAccountsChanged)
}

</script>
