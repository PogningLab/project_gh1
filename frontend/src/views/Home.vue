<template>
    <BlockGroup />
</template>

<script setup lang="ts">
import { useWalletStore } from '../stores/wallet'
import BlockGroup from '@/components/BlockGroup.vue'

const walletStore = useWalletStore()
</script>