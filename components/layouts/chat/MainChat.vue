<script setup lang="ts">
const route = useRoute()
const name = route.params.name
</script>
<template>
  <section class="chat-container">
    <iframe
      :src="`https://www.twitch.tv/embed/?channel=${name}&parent=moron-twitch.vercel.app`"
      height="100%"
      width="100%"
    >
    </iframe>
  </section>
</template>
<style scoped lang="scss">
.chat-container {
  width: var(--d-lateral-chat-width);
  height: 100%;
  background-color: var(--c-background-navbar);
  position: fixed;
  right: 0;
}
</style>
