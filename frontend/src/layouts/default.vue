<template>
  <main
    class="p-0 text-center text-gray-700 dark:text-gray-200 overflow-hidden"
  >
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>
