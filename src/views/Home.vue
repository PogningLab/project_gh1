<template>
  <div class="container max-w-8xl mx-auto mb-auto px-4">
    <BlockTitle />
    <BlockGroup :category="'Webtoons'" />
    <BlockGroup :category="'Web Novels'" />
  </div>
</template>

<script setup lang="ts">
import { useWalletStore } from '../stores/wallet'
import BlockGroup from '@/components/BlockGroup.vue'
import BlockTitle from '@/components/BlockTitle.vue'

const walletStore = useWalletStore()
</script>