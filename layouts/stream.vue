<script setup lang="ts">
import MainNavbar from '@/components/layouts/navbar/MainNavbar.vue'
import MainMenu from '@/components/layouts/lateralMenu/MainMenu.vue'
import MainChat from '@/components/layouts/chat/MainChat.vue'
// const route = useRoute()
// const name = route.params.name
// console.log(name)
// si puedo sacar el nombre del canal, puedo usarlo para sacar el chat en bebido
</script>
<template>
  <section class="layout-container">
    <MainNavbar />
    <section class="layout-container__main-content">
      <MainMenu />
      <MainChat />
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
    padding: 0 var(--d-lateral-chat-width) 0 var(--d-lateral-menu-width);
    @include responsive(48em) {
      padding-left: var(--d-lateral-menu-width-mobile);
    }
  }
}
</style>
