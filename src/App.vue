<template>
  <div class="app">
    <icon-one />
    <icon-two />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconOne from 'virtual:vite-icons/ph/check-circle.vue';
import IconTwo from '/@vite-icons/ph/check-circle.vue';

export default defineComponent({
  name: 'App',

  components: { IconOne, IconTwo },
});
</script>
