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
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { useWalletStore } from './stores/wallet'

const walletStore = useWalletStore()

onMounted(() => {
  // 이전에 저장한 상태를 불러옵니다.
  walletStore.loadWalletData()
	console.log("itstest");
})
</script>
