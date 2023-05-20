<template>
    <section class="text-plain">

        <div class="container px-6 py-16 mx-auto">
		<h2 class="animate-fade-down animate-delay-500 animate-duration-1000 text-plain text-2xl md:text-4xl font-bold mb-6">{{ category }}</h2>
            <div class="flex flex-wrap -m-4">
							<Block :imagePath="'../../webtoons/angel.jpeg'" :webtoonText="'angel'" />
                <Block :imagePath="'../../webtoons/baseball.jpeg'" :webtoonText="'baseball'" />
                <Block :imagePath="'../../webtoons/cute.jpeg'" :webtoonText="'baseball'"/>
                <Block :imagePath="'../../webtoons/face.jpeg'" :webtoonText="'baseball'"/>
                <Block :imagePath="'../../webtoons/hero.jpeg'" :webtoonText="'baseball'"/>
                <Block :imagePath="'../../webtoons/prince.jpeg'" :webtoonText="'baseball'"/>
                <Block :imagePath="'../../webtoons/purple.jpeg'" :webtoonText="'baseball'"/>
                <Block :imagePath="'../../webtoons/zibri.jpeg'" :webtoonText="'baseball'"/>
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
