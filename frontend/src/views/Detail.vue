<template>
	<section class="text-gray-600 body-font overflow-visible">
		<div class="container px-5 py-24 mx-auto">
			<div class="lg:w-4/5 mx-auto flex flex-wrap">
				<img alt="ecommerce" class="lg:w-1/2 lg:h-auto h-64 object-cover object-center rounded" :src="imagePath">
				<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2 class="text-xl title-font text-white tracking-widest">Cartoon</h2>
					<h1 class="text-white text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
					<div class="flex mb-4">
					</div>
					<p class="leading-relaxed mb-4 text-white">Copyright for NFTs is limited to the distribution of revenue only.</p>
					<p class="leading-relaxed mb-4 text-white">The space for interacting with the artist regarding the artwork has been tokenized as an NFT.</p>
					<div class="flex border-t border-gray-200 py-2 ">
						<span class="text-white font-bold">Price</span>
						<span class="ml-auto text-white">$1,000</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white">Ownership percentage</span>
						<span class="ml-auto text-white">20%</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white font-bold">Total Quantity</span>
						<span class="ml-auto text-white">100</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white">Remaining quantity</span>
						<span class="ml-auto text-white">72</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white font-bold">Per-unit ownership percentage</span>
						<span class="ml-auto text-white">0.2%</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white">Level of participation</span>
						<span class="ml-auto text-white">8</span>
					</div>
					<div class="flex border-t border-gray-500 py-4">
						<span class="text-white font-bold">Deadline</span>
						<span class="ml-auto text-white">2025-5-23</span>
					</div>
					<div class="flex  items-center border-b-2 border-gray-00 mb-5">
					</div>
					<div class="flex">
						<span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
						<button class="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary2 rounded">Buy</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	</template>

	<script setup lang="ts">
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import { useWalletStore } from '../stores/wallet'

	const imagePath = ref('')
	const route = useRoute()
	const walletStore = useWalletStore();

	onMounted(async () => {
		if (route.query.imagePath) {
			imagePath.value = route.query.imagePath as string
		}
	})
	</script>
