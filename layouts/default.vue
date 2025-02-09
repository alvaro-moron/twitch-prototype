<script setup lang="ts">
import MainNavbar from '@/components/layouts/navbar/MainNavbar.vue'
import MainMenu from '@/components/layouts/lateralMenu/MainMenu.vue'
</script>
<template>
  <MainNavbar />
  <MainMenu />
  <slot />
</template>
