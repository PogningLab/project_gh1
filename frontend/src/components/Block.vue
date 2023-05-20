<template>
<div class="animate-fade-up animate-delay-700 animate-duration-1000 p-4 w-1/4">
	<router-link :to="{ name: 'Detail', query: { imagePath: imagePath } }">
  <div class="bg-main1 h-full border border-gray-600 rounded-lg shadow-md overflow-hidden">
    <img class="lg:h-48 md:h-28 w-full object-cover object-center" :src="imagePath" alt="">
    <div class="p-4">
      <h1 class="text-lg text-plain mb-3">{{webtoonText}}</h1>
      <div class="flex items-center">
        <div class="w-full">
          <p class="text-xs font-medium text-plain">2/3 taken</p>
          <div class="mt-2 overflow-hidden rounded-full bg-gray-600">
            <div class="h-2 w-2/3 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</router-link>
</div>
</template>

<script setup lang="ts">
const props = defineProps({
  imagePath: String,
	webtoonText: String
})
</script>
