<script setup lang="ts">
import tableView from './tableView.vue';
</script>

<template>
  <div class="w-full px-20 main h-screen">
    <div class="h-[700px] pb-5 overflow-auto">
      <tableView class="w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #F2F0F9;
}
</style>
