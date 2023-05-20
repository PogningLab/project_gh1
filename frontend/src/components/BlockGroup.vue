<template>
    <section class="text-plain">
	
        <div class="container px-6 py-16 mx-auto">
		<h2 class="animate-fade-down animate-delay-500 animate-duration-1000 text-plain text-2xl md:text-4xl font-bold mb-6">{{ category }}</h2>
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

const props = defineProps({
  category: String
})
</script>
