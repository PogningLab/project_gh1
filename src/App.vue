<template>
  <div class="flex flex-col h-screen justify-between ">
    <NavBar />
    <router-view class="container max-w-8xl mx-auto mb-auto px-4" />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Chakra Petch, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1B1C20;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useNftStore } from './stores/nft'
import { useWalletStore } from './stores/wallet'

const nftStore = useNftStore()
const walletStore = useWalletStore()

onMounted(() => {
  // nftStore.loadNftData();
  walletStore.loadWalletData();
	console.log("itstest");
})
</script>
