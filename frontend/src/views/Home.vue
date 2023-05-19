<template>
    <BlockTitle />
    <BlockGroup />
</template>

<script setup lang="ts">
import { useWalletStore } from '../stores/wallet'
import BlockGroup from '@/components/BlockGroup.vue'
import BlockTitle from '@/components/BlockTitle.vue'

const walletStore = useWalletStore()
</script>