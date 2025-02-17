<script setup lang="ts">
import MainNavbar from '@/components/layouts/navbar/MainNavbar.vue'
import MainMenu from '@/components/layouts/lateralMenu/MainMenu.vue'
</script>
<template>
  <section class="layout-container">
    <MainNavbar />
    <section class="layout-container__main-content">
      <MainMenu />
      <section class="layout-container__page-content">
        <slot />
      </section>
    </section>
  </section>
</template>
<style scoped lang="scss">
.layout-container {
  &__main-content {
    margin-top: var(--d-navbar-height);
  }
  &__page-content {
    padding: 0 0 0 var(--d-lateral-menu-width);
    @include responsive(48em) {
      padding-left: var(--d-lateral-menu-width-mobile);
    }
  }
}
</style>
