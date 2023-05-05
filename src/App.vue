<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView :currentPath="$route.path" />
</template>
