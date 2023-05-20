<template>
  <div class="pt-12 text-center">
    <h1 class="text-2xl mb-8 text-plain">This is the About page</h1>
    <Table />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import Table from '@/components/Table.vue'
import { useWalletStore } from '../stores/wallet'

const walletStore = useWalletStore();
</script>
