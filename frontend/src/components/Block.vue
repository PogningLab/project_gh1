<template>
<div class="p-4 w-1/4">
	<router-link :to="{ name: 'Detail', query: { imagePath: imagePath } }">
  <div class="h-full border border-gray-600 rounded-lg shadow-md overflow-hidden">
    <img class="lg:h-48 md:h-28 w-full object-cover object-center" :src="imagePath" alt="">
    <div class="p-4">
      <h1 class="text-lg text-plain mb-3">웹툰 제목을 입력해주세요</h1>
      <div class="flex items-center">
        <span class="text-plain inline-flex items-center leading-none text-sm">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>1.2K
        </span>
      </div>
    </div>
  </div>
</router-link>
</div>
</template>


<script setup lang="ts">
const props = defineProps({
  imagePath: String
})
</script>
