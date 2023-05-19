<template>
	<section class="text-plain bg-main1 body-font">
		<div class="container px-6 py-24 mx-auto bg-main1">
			<div class="flex flex-wrap -m-4">
				<Block :imagePath="'../../webtoons/angel.jpeg'" />
				<Block :imagePath="'../../webtoons/baseball.jpeg'" />
				<Block :imagePath="'../../webtoons/cute.jpeg'" />
				<Block :imagePath="'../../webtoons/face.jpeg'" />
				<Block :imagePath="'../../webtoons/hero.jpeg'" />
				<Block :imagePath="'../../webtoons/prince.jpeg'" />
				<Block :imagePath="'../../webtoons/purple.jpeg'" />
				<Block :imagePath="'../../webtoons/zibri.jpeg'" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Block from '@/components/Block.vue'
</script>
